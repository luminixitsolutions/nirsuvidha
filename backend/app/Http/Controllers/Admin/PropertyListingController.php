<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Amenity;
use App\Models\BhkType;
use App\Models\BudgetRange;
use App\Models\City;
use App\Models\Country;
use App\Models\PropertyListing;
use App\Models\PropertyType;
use App\Models\State;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;

class PropertyListingController extends Controller
{
    public function index(): View
    {
        $listings = PropertyListing::query()
            ->with(['country', 'state', 'city'])
            ->orderBy('listing_type')
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        return view('admin.real_estate.property_listings.index', compact('listings'));
    }

    public function create(): View
    {
        return view('admin.real_estate.property_listings.form', [
            'listing' => new PropertyListing([
                'listing_type' => PropertyListing::TYPE_CURATED,
                'transaction_type' => PropertyListing::TX_BUY,
                'is_published' => true,
                'is_featured' => false,
            ]),
            'countries' => Country::query()->orderBy('sort_order')->orderBy('name')->get(),
            'states' => State::query()->orderBy('country_id')->orderBy('sort_order')->orderBy('name')->get(),
            'cities' => City::query()->orderBy('state_id')->orderBy('sort_order')->orderBy('name')->get(),
            'propertyTypes' => PropertyType::query()->orderBy('sort_order')->orderBy('name')->get(),
            'budgetRanges' => BudgetRange::query()->orderBy('sort_order')->orderBy('label')->get(),
            'bhkTypes' => BhkType::query()->orderBy('sort_order')->orderBy('label')->get(),
            'amenitiesMaster' => $this->amenitiesForForm(),
            'selectedAmenityIds' => [],
            'amenitiesExtraText' => '',
            'mode' => 'create',
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $this->validateUploads($request);
        $this->validateAmenityInput($request);

        $data = $this->validated($request);
        $data['is_published'] = $request->boolean('is_published', true);
        $data['amenities'] = $this->composeAmenities($request);

        $listing = PropertyListing::query()->create($data);

        $this->syncMedia($request, $listing);

        return redirect()
            ->route('admin.properties.edit', $listing)
            ->with('status', 'Property created.');
    }

    public function edit(PropertyListing $property_listing): View
    {
        [$selectedAmenityIds, $amenitiesExtraText] = $this->amenitySelectionState($property_listing);

        return view('admin.real_estate.property_listings.form', [
            'listing' => $property_listing,
            'amenitiesMaster' => $this->amenitiesForForm(),
            'selectedAmenityIds' => $selectedAmenityIds,
            'amenitiesExtraText' => $amenitiesExtraText,
            'countries' => Country::query()->orderBy('sort_order')->orderBy('name')->get(),
            'states' => State::query()->orderBy('country_id')->orderBy('sort_order')->orderBy('name')->get(),
            'cities' => City::query()->orderBy('state_id')->orderBy('sort_order')->orderBy('name')->get(),
            'propertyTypes' => PropertyType::query()->orderBy('sort_order')->orderBy('name')->get(),
            'budgetRanges' => BudgetRange::query()->orderBy('sort_order')->orderBy('label')->get(),
            'bhkTypes' => BhkType::query()->orderBy('sort_order')->orderBy('label')->get(),
            'mode' => 'edit',
        ]);
    }

    public function update(Request $request, PropertyListing $property_listing): RedirectResponse
    {
        $this->validateUploads($request);
        $this->validateAmenityInput($request);

        $data = $this->validated($request);
        $data['is_published'] = $request->boolean('is_published', $property_listing->is_published);
        $data['amenities'] = $this->composeAmenities($request);

        $property_listing->update($data);

        $this->syncMedia($request, $property_listing->fresh());

        return redirect()
            ->route('admin.properties.edit', $property_listing)
            ->with('status', 'Property updated.');
    }

    public function destroy(PropertyListing $property_listing): RedirectResponse
    {
        $property_listing->delete();

        return redirect()
            ->route('admin.properties.index')
            ->with('status', 'Property deleted.');
    }

    private function validateUploads(Request $request): void
    {
        $request->validate([
            'hero_image' => ['nullable', 'image', 'max:5120'],
            'gallery_uploads' => ['nullable', 'array'],
            'gallery_uploads.*' => ['image', 'max:5120'],
            'documents_upload' => ['nullable', 'array'],
            'documents_upload.*' => ['file', 'max:15360', 'mimes:pdf,doc,docx,xls,xlsx,csv,txt,jpg,jpeg,png,webp'],
        ]);
    }

    private function syncMedia(Request $request, PropertyListing $listing): void
    {
        $disk = Storage::disk('public');
        $base = 're-properties/'.$listing->id;

        foreach ([$base.'/gallery', $base.'/documents'] as $dir) {
            if (! $disk->exists($dir)) {
                $disk->makeDirectory($dir, true);
            }
        }

        // Hero (single photo): clear first so “remove + upload” in one save works
        if ($request->boolean('clear_hero_image')) {
            foreach (['jpg', 'jpeg', 'png', 'webp', 'gif'] as $e) {
                $disk->delete($base.'/hero.'.$e);
            }
            $hero = $listing->image_url;
            if (is_string($hero) && str_starts_with($hero, $base.'/hero.')) {
                $listing->image_url = null;
            }
        }

        if ($request->hasFile('hero_image')) {
            foreach (['jpg', 'jpeg', 'png', 'webp', 'gif'] as $e) {
                $disk->delete($base.'/hero.'.$e);
            }
            $file = $request->file('hero_image');
            $ext = strtolower($file->getClientOriginalExtension() ?: 'jpg');
            if (! in_array($ext, ['jpg', 'jpeg', 'png', 'webp', 'gif'], true)) {
                $ext = 'jpg';
            }
            $disk->putFileAs($base, $file, 'hero.'.$ext);
            $listing->image_url = $base.'/hero.'.$ext;
        }

        // Gallery (multiple photos)
        $gallery = [];
        foreach ($listing->gallery_images ?? [] as $p) {
            if (is_string($p) && $p !== '') {
                $gallery[] = $p;
            }
        }
        $gallery = array_values(array_unique($gallery));

        foreach ($request->input('remove_gallery_paths', []) as $rm) {
            $rm = is_string($rm) ? trim($rm) : '';
            if ($rm === '') {
                continue;
            }
            $gallery = array_values(array_filter($gallery, fn ($p) => $p !== $rm));
            if ($disk->exists($rm)) {
                $disk->delete($rm);
            }
        }

        foreach ($request->file('gallery_uploads', []) ?? [] as $file) {
            if (! $file || ! $file->isValid()) {
                continue;
            }
            $ext = strtolower($file->getClientOriginalExtension() ?: 'jpg');
            $fname = Str::uuid()->toString().'.'.$ext;
            $disk->putFileAs($base.'/gallery', $file, $fname);
            $gallery[] = $base.'/gallery/'.$fname;
        }

        $listing->gallery_images = $gallery === [] ? null : $gallery;

        // Documents (multiple attachments)
        $docs = [];
        foreach ($listing->documents ?? [] as $d) {
            if (is_array($d) && ! empty($d['path'])) {
                $docs[] = ['path' => $d['path'], 'name' => $d['name'] ?? basename($d['path'])];
            }
        }

        foreach ($request->input('remove_document_paths', []) as $rm) {
            $rm = is_string($rm) ? trim($rm) : '';
            if ($rm === '') {
                continue;
            }
            $docs = array_values(array_filter($docs, function ($d) use ($rm, $disk) {
                if (($d['path'] ?? '') === $rm) {
                    if ($disk->exists($rm)) {
                        $disk->delete($rm);
                    }

                    return false;
                }

                return true;
            }));
        }

        foreach ($request->file('documents_upload', []) ?? [] as $file) {
            if (! $file || ! $file->isValid()) {
                continue;
            }
            $orig = $file->getClientOriginalName();
            $ext = strtolower($file->getClientOriginalExtension() ?: 'bin');
            $fname = Str::uuid()->toString().'.'.$ext;
            $disk->putFileAs($base.'/documents', $file, $fname);
            $rel = $base.'/documents/'.$fname;
            $docs[] = ['path' => $rel, 'name' => $orig];
        }

        $listing->documents = $docs === [] ? null : $docs;

        $listing->save();
    }

    /**
     * @return array<string, mixed>
     */
    private function validated(Request $request): array
    {
        $txIn = implode(',', PropertyListing::transactionTypes());
        $rules = [
            'listing_type' => ['required', 'in:'.PropertyListing::TYPE_CURATED.','.PropertyListing::TYPE_FEATURED],
            'transaction_type' => ['required', 'in:'.$txIn],
            'seller_variant' => ['nullable', 'in:nri,builder,private'],
            'title' => ['required', 'string', 'max:255'],
            'price_display' => ['required', 'string', 'max:255'],
            'gradient_css' => ['nullable', 'string', 'max:2000'],
            'image_url' => ['nullable', 'string', 'max:2048'],
            'seller_label' => ['nullable', 'string', 'max:255'],
            'location_label' => ['nullable', 'string', 'max:255'],
            'status_label' => ['nullable', 'string', 'max:255'],
            'bhk_label' => ['nullable', 'string', 'max:255'],
            'sqft_label' => ['nullable', 'string', 'max:255'],
            'rera_number' => ['nullable', 'string', 'max:255'],
            'builder_label' => ['nullable', 'string', 'max:255'],
            'property_details' => ['nullable', 'string', 'max:60000'],
            'country_id' => ['nullable', 'exists:re_countries,id'],
            'state_id' => ['nullable', 'exists:re_states,id'],
            'city_id' => ['nullable', 'exists:re_cities,id'],
            'property_type_id' => ['nullable', 'exists:re_property_types,id'],
            'budget_range_id' => ['nullable', 'exists:re_budget_ranges,id'],
            'bhk_type_id' => ['nullable', 'exists:re_bhk_types,id'],
            'sort_order' => ['nullable', 'integer', 'min:0', 'max:999999'],
        ];

        $base = $request->validate($rules) + ['sort_order' => (int) $request->input('sort_order', 0)];

        foreach (['image_url', 'gradient_css', 'seller_label', 'location_label', 'status_label', 'bhk_label', 'sqft_label', 'rera_number', 'builder_label', 'property_details'] as $nullableStr) {
            if (isset($base[$nullableStr]) && $base[$nullableStr] !== null && trim((string) $base[$nullableStr]) === '') {
                $base[$nullableStr] = null;
            }
        }

        if ($base['listing_type'] === PropertyListing::TYPE_CURATED) {
            $base = array_merge($base, $request->validate([
                'seller_variant' => ['required', 'in:nri,builder,private'],
            ]));
        }

        $base['is_featured'] = $request->boolean('is_featured');
        if ($base['listing_type'] === PropertyListing::TYPE_FEATURED) {
            $base['is_featured'] = true;
        }

        foreach (['country_id', 'state_id', 'city_id', 'property_type_id', 'budget_range_id', 'bhk_type_id'] as $nullableFk) {
            if (empty($base[$nullableFk])) {
                $base[$nullableFk] = null;
            }
        }

        if (array_key_exists('property_details', $base) && $base['property_details'] !== null) {
            $base['property_details'] = $this->sanitizePropertyDetailsHtml((string) $base['property_details']);
        }

        return $base;
    }

    /**
     * @return Collection<int, Amenity>
     */
    private function amenitiesForForm(): Collection
    {
        return Amenity::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('label')
            ->get();
    }

    /**
     * @return array{0: list<int>, 1: string}
     */
    private function amenitySelectionState(PropertyListing $listing): array
    {
        $lines = is_array($listing->amenities) ? $listing->amenities : [];
        $masters = Amenity::query()->orderBy('sort_order')->orderBy('label')->get();
        $byNorm = [];
        foreach ($masters as $a) {
            $byNorm[mb_strtolower(trim($a->label))] = (int) $a->id;
        }
        $selected = [];
        $extra = [];
        foreach ($lines as $line) {
            if (! is_string($line)) {
                continue;
            }
            $t = trim($line);
            if ($t === '') {
                continue;
            }
            $k = mb_strtolower($t);
            if (isset($byNorm[$k])) {
                $selected[] = $byNorm[$k];
            } else {
                $extra[] = $t;
            }
        }

        return [array_values(array_unique($selected)), implode("\n", $extra)];
    }

    private function validateAmenityInput(Request $request): void
    {
        $request->validate([
            'amenity_ids' => ['nullable', 'array'],
            'amenity_ids.*' => ['integer', 'exists:re_amenities,id'],
            'amenities_extra_text' => ['nullable', 'string', 'max:10000'],
        ]);
    }

    /**
     * @return list<string>|null
     */
    private function composeAmenities(Request $request): ?array
    {
        $ids = array_values(array_unique(array_map('intval', $request->input('amenity_ids', []))));
        $rows = Amenity::query()
            ->whereIn('id', $ids)
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('label')
            ->get();
        $labels = [];
        foreach ($rows as $row) {
            $t = trim((string) $row->label);
            if ($t !== '') {
                $labels[] = $t;
            }
        }
        $extra = $this->parseAmenities($request->input('amenities_extra_text'));
        $merged = array_values(array_unique(array_merge($labels, $extra ?? [])));

        return $merged === [] ? null : $merged;
    }

    /**
     * Strip unsafe tags/attributes from CKEditor HTML (admin-entered).
     */
    private function sanitizePropertyDetailsHtml(string $html): ?string
    {
        $t = trim($html);
        if ($t === '') {
            return null;
        }
        $t = preg_replace('/<\s*(script|style|iframe|object|embed|form|input|button)[^>]*>.*?<\s*\/\s*\\1\s*>/is', '', $t) ?? $t;
        $t = preg_replace('/<\s*(script|style|iframe|object|embed)[^>]*\/?\s*>/i', '', $t) ?? $t;
        $allowed = '<p><div><br><span><strong><b><em><i><u><h2><h3><h4><ul><ol><li><a><blockquote>';
        $t = strip_tags($t, $allowed);
        $t = trim($t);

        return $t === '' ? null : $t;
    }

    /**
     * @return list<string>|null
     */
    private function parseAmenities(?string $text): ?array
    {
        if ($text === null || trim($text) === '') {
            return null;
        }
        $lines = preg_split('/\r\n|\r|\n/', $text) ?: [];
        $out = [];
        foreach ($lines as $line) {
            $t = trim($line);
            if ($t !== '') {
                $out[] = $t;
            }
        }

        return $out === [] ? null : $out;
    }
}
