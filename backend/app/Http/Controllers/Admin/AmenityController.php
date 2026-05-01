<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Amenity;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;

class AmenityController extends Controller
{
    public function index(): View
    {
        $amenities = Amenity::query()
            ->orderBy('sort_order')
            ->orderBy('label')
            ->get();

        return view('admin.real_estate.amenities.index', compact('amenities'));
    }

    public function create(): View
    {
        return view('admin.real_estate.amenities.form', [
            'amenity' => new Amenity,
            'mode' => 'create',
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_active'] = $request->boolean('is_active', true);
        $data['slug'] = $this->uniqueSlug(Amenity::class, $data['slug'], $data['label']);

        $amenity = Amenity::query()->create($data);

        return redirect()
            ->route('admin.amenities.edit', $amenity)
            ->with('status', 'Amenity created.');
    }

    public function edit(Amenity $amenity): View
    {
        return view('admin.real_estate.amenities.form', [
            'amenity' => $amenity,
            'mode' => 'edit',
        ]);
    }

    public function update(Request $request, Amenity $amenity): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_active'] = $request->boolean('is_active', $amenity->is_active);
        $data['slug'] = $this->uniqueSlug(Amenity::class, $data['slug'], $data['label'], $amenity->id);

        $amenity->update($data);

        return redirect()
            ->route('admin.amenities.edit', $amenity)
            ->with('status', 'Amenity updated.');
    }

    public function destroy(Amenity $amenity): RedirectResponse
    {
        $amenity->delete();

        return redirect()
            ->route('admin.amenities.index')
            ->with('status', 'Amenity deleted.');
    }

    /**
     * @return array{label: string, slug: string|null, icon_class: string|null, sort_order: int}
     */
    private function validated(Request $request): array
    {
        $data = $request->validate([
            'label' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:160'],
            'icon_class' => ['nullable', 'string', 'max:255', 'regex:/^[\s\-_a-zA-Z0-9\.]+$/'],
            'sort_order' => ['nullable', 'integer', 'min:0', 'max:999999'],
        ]) + ['sort_order' => (int) $request->input('sort_order', 0)];

        $icon = $data['icon_class'] ?? null;
        $data['icon_class'] = (is_string($icon) && trim($icon) !== '') ? trim($icon) : null;

        return $data;
    }

    private function uniqueSlug(string $modelClass, ?string $slug, string $label, ?int $ignoreId = null): string
    {
        $base = Str::slug($slug ?: $label);
        if ($base === '') {
            $base = 'item';
        }
        $candidate = $base;
        $n = 2;
        while ($modelClass::query()
            ->where('slug', $candidate)
            ->when($ignoreId !== null, fn ($q) => $q->where('id', '!=', $ignoreId))
            ->exists()) {
            $candidate = $base.'-'.$n;
            $n++;
        }

        return $candidate;
    }
}
