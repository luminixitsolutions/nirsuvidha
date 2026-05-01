<?php

namespace App\Services;

use App\Models\BhkType;
use App\Models\City;
use App\Models\PropertyListing;
use App\Models\PropertyType;
use App\Models\SellPropertySubmission;
use App\Models\State;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

final class ApproveSellPropertySubmission
{
    private const DEFAULT_GRADIENT = 'linear-gradient(145deg, #1e3a5f 0%, #3d6a99 45%, #93c5fd 100%)';

    public function handle(SellPropertySubmission $submission): PropertyListing
    {
        if ($submission->status !== SellPropertySubmission::STATUS_PENDING) {
            throw new \InvalidArgumentException('Only pending submissions can be approved.');
        }

        return DB::transaction(function () use ($submission): PropertyListing {
            $stateId = $submission->state_id;
            $cityId = $submission->city_id;

            if ($stateId === null && $submission->state_slug) {
                $stateId = State::query()->where('slug', $submission->state_slug)->value('id');
            }
            if ($cityId === null && $submission->city_slug) {
                $cityId = City::query()->where('slug', $submission->city_slug)->value('id');
            }

            $cityName = $cityId ? (City::query()->find($cityId)?->name ?? '') : '';
            $locationLabel = trim($submission->locality.($cityName !== '' ? ', '.$cityName : ''));

            $propertyTypeId = PropertyType::query()
                ->where('slug', $submission->property_type_slug)
                ->value('id');

            $bhkTypeId = $submission->bhk_slug
                ? BhkType::query()->where('slug', $submission->bhk_slug)->value('id')
                : null;

            $bhkLabel = $bhkTypeId
                ? (BhkType::query()->find($bhkTypeId)?->label ?? $submission->bhk_slug)
                : null;

            $sqftParts = [];
            if ($submission->built_up_sqft) {
                $sqftParts[] = $submission->built_up_sqft.' sq ft (built-up)';
            }
            if ($submission->carpet_sqft) {
                $sqftParts[] = $submission->carpet_sqft.' sq ft (carpet)';
            }
            $sqftLabel = $sqftParts === [] ? null : implode(' · ', $sqftParts);

            $title = 'Seller listing · '.$submission->locality.($cityName !== '' ? ' · '.$cityName : '');

            $negotiableNote = $submission->price_negotiable === 'fixed' ? ' · Fixed price' : '';

            $listing = PropertyListing::query()->create([
                'listing_type' => PropertyListing::TYPE_CURATED,
                'transaction_type' => PropertyListing::TX_SELL,
                'title' => Str::limit($title, 250, ''),
                'price_display' => $submission->expected_price.$negotiableNote,
                'gradient_css' => self::DEFAULT_GRADIENT,
                'image_url' => null,
                'seller_variant' => 'private',
                'seller_label' => 'Private Seller',
                'location_label' => Str::limit($locationLabel, 250, ''),
                'status_label' => 'Seller submitted',
                'bhk_label' => $bhkLabel,
                'sqft_label' => $sqftLabel,
                'rera_number' => null,
                'amenities' => null,
                'builder_label' => 'Submitted via website',
                'country_id' => $stateId ? State::query()->find($stateId)?->country_id : null,
                'state_id' => $stateId,
                'city_id' => $cityId,
                'property_type_id' => $propertyTypeId,
                'budget_range_id' => null,
                'bhk_type_id' => $bhkTypeId,
                'sort_order' => 9000 + (int) $submission->id,
                'is_published' => true,
                'is_featured' => false,
            ]);

            $paths = is_array($submission->photo_paths) ? $submission->photo_paths : [];
            $first = $paths[0] ?? null;
            if (is_string($first) && $first !== '') {
                $disk = Storage::disk('public');
                if ($disk->exists($first)) {
                    $base = 're-properties/'.$listing->id;
                    $disk->makeDirectory($base, true);
                    $ext = pathinfo($first, PATHINFO_EXTENSION) ?: 'jpg';
                    $ext = strtolower($ext);
                    if (! in_array($ext, ['jpg', 'jpeg', 'png', 'webp', 'gif'], true)) {
                        $ext = 'jpg';
                    }
                    $dest = $base.'/hero.'.$ext;
                    $disk->copy($first, $dest);
                    $listing->image_url = $dest;
                    $listing->save();
                }
            }

            $submission->status = SellPropertySubmission::STATUS_APPROVED;
            $submission->property_listing_id = $listing->id;
            $submission->rejected_reason = null;
            $submission->save();

            return $listing->fresh();
        });
    }
}
