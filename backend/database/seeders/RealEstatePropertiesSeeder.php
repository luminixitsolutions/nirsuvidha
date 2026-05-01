<?php

namespace Database\Seeders;

use App\Models\BudgetRange;
use App\Models\City;
use App\Models\Country;
use App\Models\PropertyListing;
use App\Models\PropertyType;
use App\Models\State;
use Illuminate\Database\Seeder;

/**
 * Extra demo properties for the real-estate hub grid (`GET /api/public/real-estate`).
 * Requires {@see RealEstateMasterSeeder} (countries, states, cities, masters).
 */
class RealEstatePropertiesSeeder extends Seeder
{
    public function run(): void
    {
        $india = Country::query()->where('slug', 'india')->first();
        if ($india === null) {
            $this->command?->warn('RealEstatePropertiesSeeder skipped: run RealEstateMasterSeeder first.');

            return;
        }

        $tel = State::query()->where('slug', 'telangana')->where('country_id', $india->id)->first();
        $tn = State::query()->where('slug', 'tamil-nadu')->where('country_id', $india->id)->first();
        $guj = State::query()->where('slug', 'gujarat')->where('country_id', $india->id)->first();
        $wb = State::query()->where('slug', 'west-bengal')->where('country_id', $india->id)->first();

        $hyderabad = $tel ? City::query()->where('state_id', $tel->id)->where('name', 'Hyderabad')->first() : null;
        $chennai = $tn ? City::query()->where('state_id', $tn->id)->where('name', 'Chennai')->first() : null;
        $ahmedabad = $guj ? City::query()->where('state_id', $guj->id)->where('name', 'Ahmedabad')->first() : null;
        $kolkata = $wb ? City::query()->where('state_id', $wb->id)->where('name', 'Kolkata')->first() : null;

        $apt = PropertyType::query()->where('slug', 'apartment')->first();
        $commercial = PropertyType::query()->where('slug', 'commercial')->first();

        $b15 = BudgetRange::query()->where('slug', '1-2cr')->first();
        $b25 = BudgetRange::query()->where('slug', '2-5cr')->first();
        $b50 = BudgetRange::query()->where('slug', 'above-5cr')->first();

        $extras = [
            [
                'title' => 'Skyline Residency — Gachibowli',
                'price_display' => '₹3.15 Cr',
                'seller_variant' => 'builder',
                'gradient_css' => 'linear-gradient(145deg, #0f766e 0%, #14b8a6 45%, #99f6e4 100%)',
                'location_label' => 'Gachibowli, Hyderabad',
                'status_label' => 'Ready',
                'bhk_label' => '3 BHK',
                'sqft_label' => '1720 sq ft',
                'builder_label' => 'Phoenix Builders',
                'state_id' => $tel?->id,
                'city_id' => $hyderabad?->id,
                'property_type_id' => $apt?->id,
                'budget_range_id' => $b25?->id,
                'sort_order' => 10,
            ],
            [
                'title' => 'Marina View Towers',
                'price_display' => '₹4.6 Cr',
                'seller_variant' => 'nri',
                'gradient_css' => 'linear-gradient(145deg, #831843 0%, #db2777 45%, #fbcfe8 100%)',
                'location_label' => 'OMR, Chennai',
                'status_label' => 'Dec 2027',
                'bhk_label' => '3 BHK',
                'sqft_label' => '1890 sq ft',
                'builder_label' => 'NRI Owner (UK)',
                'state_id' => $tn?->id,
                'city_id' => $chennai?->id,
                'property_type_id' => $apt?->id,
                'budget_range_id' => $b50?->id,
                'sort_order' => 11,
            ],
            [
                'title' => 'Retail Plaza — SG Highway',
                'price_display' => '₹2.1 Cr',
                'seller_variant' => 'private',
                'gradient_css' => 'linear-gradient(145deg, #713f12 0%, #ca8a04 50%, #fde047 100%)',
                'location_label' => 'SG Highway, Ahmedabad',
                'status_label' => 'Ready',
                'bhk_label' => '—',
                'sqft_label' => '2100 sq ft',
                'builder_label' => 'Private Seller',
                'state_id' => $guj?->id,
                'city_id' => $ahmedabad?->id,
                'property_type_id' => $commercial?->id,
                'budget_range_id' => $b15?->id,
                'sort_order' => 12,
            ],
            [
                'title' => 'Heritage Lane Apartments',
                'price_display' => '₹1.95 Cr',
                'seller_variant' => 'builder',
                'gradient_css' => 'linear-gradient(145deg, #164e63 0%, #0891b2 50%, #a5f3fc 100%)',
                'location_label' => 'Salt Lake, Kolkata',
                'status_label' => 'Under construction',
                'bhk_label' => '2 BHK',
                'sqft_label' => '1120 sq ft',
                'builder_label' => 'PS Group',
                'state_id' => $wb?->id,
                'city_id' => $kolkata?->id,
                'property_type_id' => $apt?->id,
                'budget_range_id' => $b15?->id,
                'sort_order' => 13,
            ],
        ];

        foreach ($extras as $row) {
            PropertyListing::query()->updateOrCreate(
                [
                    'listing_type' => PropertyListing::TYPE_CURATED,
                    'title' => $row['title'],
                ],
                array_merge($row, [
                    'listing_type' => PropertyListing::TYPE_CURATED,
                    'transaction_type' => PropertyListing::TX_BUY,
                    'is_featured' => false,
                    'is_published' => true,
                    'country_id' => $india->id,
                ])
            );
        }
    }
}
