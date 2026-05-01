<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Amenity;
use App\Models\BhkType;
use App\Models\BudgetRange;
use App\Models\City;
use App\Models\Country;
use App\Models\HomeLoanPartner;
use App\Models\PreConstructionProject;
use App\Models\PropertyListing;
use App\Models\PropertyType;
use App\Models\RealEstateCareService;
use App\Models\State;
use Illuminate\Http\JsonResponse;

class PublicRealEstateController extends Controller
{
    public function index(): JsonResponse
    {
        $countries = Country::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get()
            ->map(fn (Country $c) => [
                'id' => $c->id,
                'name' => $c->name,
                'slug' => $c->slug ?: 'country-'.$c->id,
            ])
            ->values();

        $states = State::query()
            ->where('is_active', true)
            ->orderBy('country_id')
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get()
            ->map(fn (State $s) => [
                'id' => $s->id,
                'country_id' => $s->country_id,
                'name' => $s->name,
                'slug' => $s->slug ?: 'state-'.$s->id,
            ])
            ->values();

        $cities = City::query()
            ->where('is_active', true)
            ->orderBy('state_id')
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get()
            ->map(fn (City $ci) => [
                'id' => $ci->id,
                'state_id' => $ci->state_id,
                'name' => $ci->name,
                'slug' => $ci->slug ?: 'city-'.$ci->id,
            ])
            ->values();

        $propertyTypes = PropertyType::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get()
            ->map(fn (PropertyType $p) => [
                'id' => $p->id,
                'name' => $p->name,
                'slug' => $p->slug ?: 'property-type-'.$p->id,
            ])
            ->values();

        $budgetRanges = BudgetRange::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('label')
            ->get()
            ->map(fn (BudgetRange $b) => [
                'id' => $b->id,
                'label' => $b->label,
                'slug' => $b->slug ?: 'budget-'.$b->id,
            ])
            ->values();

        $bhkTypes = BhkType::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('label')
            ->get()
            ->map(fn (BhkType $b) => [
                'id' => $b->id,
                'label' => $b->label,
                'slug' => $b->slug ?: 'bhk-'.$b->id,
            ])
            ->values();

        $defaultGradient = 'linear-gradient(145deg, #1e3a5f 0%, #3d6a99 45%, #93c5fd 100%)';

        $curatedRows = PropertyListing::query()
            ->where('is_published', true)
            ->where('listing_type', PropertyListing::TYPE_CURATED)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        $curatedListings = $curatedRows->map(function (PropertyListing $row) use ($defaultGradient) {
            $variant = $row->seller_variant ?? 'private';
            $tx = $row->transaction_type ?? PropertyListing::TX_BUY;
            if (! in_array($tx, PropertyListing::transactionTypes(), true)) {
                $tx = PropertyListing::TX_BUY;
            }

            return [
                'id' => (string) $row->id,
                'title' => $row->title,
                'price' => $row->price_display,
                'seller_label' => $this->sellerLabel($variant, $row->seller_label),
                'seller_variant' => $variant,
                'gradient' => $row->gradient_css ?: $defaultGradient,
                'image_url' => $this->resolvePublicUrl($row->image_url),
                'gallery_urls' => $this->mapGalleryUrls(is_array($row->gallery_images) ? $row->gallery_images : null),
                'documents' => $this->mapDocuments(is_array($row->documents) ? $row->documents : null),
                'location' => $row->location_label,
                'bhk' => $row->bhk_label,
                'sqft' => $row->sqft_label,
                'status' => $row->status_label,
                'listed_by' => $row->builder_label,
                'is_verified' => true,
                'state_id' => $row->state_id,
                'city_id' => $row->city_id,
                'property_type_id' => $row->property_type_id,
                'budget_range_id' => $row->budget_range_id,
                'transaction_type' => $tx,
            ];
        })->values();

        $featuredRows = PropertyListing::query()
            ->where('is_published', true)
            ->where(function ($q): void {
                $q->where('is_featured', true)
                    ->orWhere('listing_type', PropertyListing::TYPE_FEATURED);
            })
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        $featuredListings = $featuredRows->map(function (PropertyListing $row) {
            $tx = $row->transaction_type ?? PropertyListing::TX_BUY;
            if (! in_array($tx, PropertyListing::transactionTypes(), true)) {
                $tx = PropertyListing::TX_BUY;
            }

            return [
                'id' => (string) $row->id,
                'title' => $row->title,
                'location' => $row->location_label ?? '',
                'status' => $row->status_label ?? '',
                'bhk' => $row->bhk_label ?? '',
                'sqft' => $row->sqft_label ?? '',
                'rera' => $row->rera_number ?? '',
                'amenities' => is_array($row->amenities) ? $row->amenities : [],
                'price' => $row->price_display,
                'builder' => $row->builder_label ?? '',
                'image_url' => $this->resolvePublicUrl($row->image_url),
                'gallery_urls' => $this->mapGalleryUrls(is_array($row->gallery_images) ? $row->gallery_images : null),
                'documents' => $this->mapDocuments(is_array($row->documents) ? $row->documents : null),
                'transaction_type' => $tx,
            ];
        })->values();

        $preConRows = PreConstructionProject::query()
            ->where('is_published', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        $preConstructionProjects = $preConRows->map(function (PreConstructionProject $row) {
            $variant = $row->badge_variant;
            if (! in_array($variant, PreConstructionProject::BADGE_VARIANTS, true)) {
                $variant = PreConstructionProject::BADGE_MUTED;
            }

            return [
                'id' => (string) $row->id,
                'title' => $row->title,
                'status_badge' => $row->status_badge,
                'badge_variant' => $variant,
                'description' => $row->description,
                'starting_price' => $row->starting_price_display,
                'possession' => $row->possession_display,
                'payment_plan' => $row->payment_plan,
                'benefits_heading' => $row->benefits_heading,
                'benefits' => is_array($row->benefits) ? array_values($row->benefits) : [],
                'cta_button_text' => $row->cta_button_text,
            ];
        })->values();

        $homeLoanRows = HomeLoanPartner::query()
            ->where('is_published', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        $homeLoanPartners = $homeLoanRows->map(function (HomeLoanPartner $row) {
            return [
                'id' => (string) $row->id,
                'bank' => $row->bank_name,
                'icon' => $row->icon_class,
                'interest_rate' => $row->interest_rate_display,
                'processing_fee' => $row->processing_fee_display,
                'max_tenure' => $row->max_tenure_display,
            ];
        })->values();

        $careRows = RealEstateCareService::query()
            ->where('is_published', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        $realEstateCareServices = $careRows->map(function (RealEstateCareService $row) {
            return [
                'id' => (string) $row->id,
                'title' => $row->title,
                'description' => $row->description,
                'bullets' => is_array($row->bullets) ? array_values($row->bullets) : [],
                'show_bullets' => (bool) $row->show_bullets,
            ];
        })->values();

        return response()->json([
            'data' => [
                'countries' => $countries,
                'states' => $states,
                'cities' => $cities,
                'property_types' => $propertyTypes,
                'budget_ranges' => $budgetRanges,
                'bhk_types' => $bhkTypes,
                'curated_listings' => $curatedListings,
                'featured_listings' => $featuredListings,
                'pre_construction_projects' => $preConstructionProjects,
                'home_loan_partners' => $homeLoanPartners,
                'real_estate_care_services' => $realEstateCareServices,
            ],
        ]);
    }

    public function show(PropertyListing $listing): JsonResponse
    {
        if (! $listing->is_published) {
            return response()->json(['message' => 'Not found.'], 404);
        }

        $listing->loadMissing(['country', 'state', 'city', 'propertyType', 'budgetRange', 'bhkType']);

        $defaultGradient = 'linear-gradient(145deg, #1e3a5f 0%, #3d6a99 45%, #93c5fd 100%)';
        $variant = $listing->seller_variant ?? 'private';
        $tx = $listing->transaction_type ?? PropertyListing::TX_BUY;
        if (! in_array($tx, PropertyListing::transactionTypes(), true)) {
            $tx = PropertyListing::TX_BUY;
        }

        return response()->json([
            'data' => [
                'id' => (string) $listing->id,
                'listing_type' => $listing->listing_type,
                'is_featured' => (bool) $listing->is_featured,
                'transaction_type' => $tx,
                'title' => $listing->title,
                'price' => $listing->price_display,
                'seller_label' => $this->sellerLabel($variant, $listing->seller_label),
                'seller_variant' => $variant,
                'gradient' => $listing->gradient_css ?: $defaultGradient,
                'image_url' => $this->resolvePublicUrl($listing->image_url),
                'gallery_urls' => $this->mapGalleryUrls(is_array($listing->gallery_images) ? $listing->gallery_images : null),
                'documents' => $this->mapDocuments(is_array($listing->documents) ? $listing->documents : null),
                'location' => $listing->location_label,
                'bhk' => $listing->bhk_label,
                'sqft' => $listing->sqft_label,
                'status' => $listing->status_label,
                'listed_by' => $listing->builder_label,
                'rera' => $listing->rera_number,
                'property_details' => $listing->property_details !== null && trim($listing->property_details) !== ''
                    ? $listing->property_details
                    : null,
                'amenities' => $this->mapAmenitiesWithIcons(is_array($listing->amenities) ? $listing->amenities : null),
                'is_verified' => true,
                'state_id' => $listing->state_id,
                'city_id' => $listing->city_id,
                'property_type_id' => $listing->property_type_id,
                'budget_range_id' => $listing->budget_range_id,
                'bhk_type_id' => $listing->bhk_type_id,
                'country' => $listing->country
                    ? ['id' => $listing->country->id, 'name' => $listing->country->name, 'slug' => $listing->country->slug]
                    : null,
                'state' => $listing->state
                    ? ['id' => $listing->state->id, 'name' => $listing->state->name, 'slug' => $listing->state->slug]
                    : null,
                'city' => $listing->city
                    ? ['id' => $listing->city->id, 'name' => $listing->city->name, 'slug' => $listing->city->slug]
                    : null,
                'property_type' => $listing->propertyType
                    ? ['id' => $listing->propertyType->id, 'name' => $listing->propertyType->name, 'slug' => $listing->propertyType->slug]
                    : null,
                'budget_range' => $listing->budgetRange
                    ? ['id' => $listing->budgetRange->id, 'label' => $listing->budgetRange->label, 'slug' => $listing->budgetRange->slug]
                    : null,
                'bhk_type' => $listing->bhkType
                    ? ['id' => $listing->bhkType->id, 'label' => $listing->bhkType->label, 'slug' => $listing->bhkType->slug]
                    : null,
            ],
        ]);
    }

    /**
     * @param  list<string|mixed>|null  $labels
     * @return list<array{label: string, icon_class: string|null}>
     */
    private function mapAmenitiesWithIcons(?array $labels): array
    {
        if ($labels === null || $labels === []) {
            return [];
        }

        $masters = Amenity::query()->where('is_active', true)->get();
        $byNorm = [];
        foreach ($masters as $a) {
            $byNorm[mb_strtolower(trim($a->label))] = $a;
        }

        $out = [];
        foreach ($labels as $raw) {
            if (! is_string($raw)) {
                continue;
            }
            $t = trim($raw);
            if ($t === '') {
                continue;
            }
            $row = $byNorm[mb_strtolower($t)] ?? null;
            $icon = null;
            if ($row !== null && is_string($row->icon_class) && trim($row->icon_class) !== '') {
                $icon = trim($row->icon_class);
            }
            $out[] = ['label' => $t, 'icon_class' => $icon];
        }

        return $out;
    }

    private function sellerLabel(string $variant, ?string $override): string
    {
        if ($override !== null && trim($override) !== '') {
            return $override;
        }

        return match ($variant) {
            'nri' => 'NRI Seller',
            'builder' => 'Builder',
            'private' => 'Private Seller',
            default => 'Seller',
        };
    }

    private function resolvePublicUrl(?string $raw): ?string
    {
        if ($raw === null || trim($raw) === '') {
            return null;
        }
        $s = trim($raw);
        if (str_starts_with($s, 'http://') || str_starts_with($s, 'https://')) {
            return $s;
        }

        return asset('storage/'.ltrim($s, '/'));
    }

    /**
     * @param  list<string>|null  $paths
     * @return list<string>
     */
    private function mapGalleryUrls(?array $paths): array
    {
        if ($paths === null || $paths === []) {
            return [];
        }

        return collect($paths)
            ->filter(fn ($p) => is_string($p) && trim($p) !== '')
            ->map(fn (string $p) => $this->resolvePublicUrl($p))
            ->filter()
            ->values()
            ->all();
    }

    /**
     * @param  list<array<string, mixed>>|null  $documents
     * @return list<array{url: string, name: string}>
     */
    private function mapDocuments(?array $documents): array
    {
        if ($documents === null || $documents === []) {
            return [];
        }

        $out = [];
        foreach ($documents as $d) {
            if (! is_array($d)) {
                continue;
            }
            $path = $d['path'] ?? null;
            if (! is_string($path) || trim($path) === '') {
                continue;
            }
            $url = $this->resolvePublicUrl($path);
            if ($url === null) {
                continue;
            }
            $name = $d['name'] ?? basename($path);
            $out[] = ['url' => $url, 'name' => is_string($name) ? $name : basename($path)];
        }

        return $out;
    }
}
