<?php

namespace Database\Seeders;

use App\Models\BhkType;
use App\Models\BudgetRange;
use App\Models\City;
use App\Models\Country;
use App\Models\PropertyListing;
use App\Models\PropertyType;
use App\Models\State;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

/**
 * Demo masters + sample listings for `/api/public/real-estate` and admin CRUD smoke tests.
 * Safe to run multiple times (uses updateOrCreate).
 */
class RealEstateMasterSeeder extends Seeder
{
    public function run(): void
    {
        $india = Country::query()->updateOrCreate(
            ['slug' => 'india'],
            [
                'name' => 'India',
                'sort_order' => 0,
                'is_active' => true,
            ]
        );

        $regions = [
            ['name' => 'Maharashtra', 'slug' => 'maharashtra', 'sort' => 1, 'cities' => ['Mumbai', 'Pune', 'Nagpur', 'Thane']],
            ['name' => 'Karnataka', 'slug' => 'karnataka', 'sort' => 2, 'cities' => ['Bengaluru', 'Mysuru', 'Mangaluru']],
            ['name' => 'Delhi', 'slug' => 'delhi', 'sort' => 3, 'cities' => ['New Delhi', 'Dwarka', 'Rohini']],
            ['name' => 'Telangana', 'slug' => 'telangana', 'sort' => 4, 'cities' => ['Hyderabad', 'Secunderabad']],
            ['name' => 'Tamil Nadu', 'slug' => 'tamil-nadu', 'sort' => 5, 'cities' => ['Chennai', 'Coimbatore']],
            ['name' => 'Gujarat', 'slug' => 'gujarat', 'sort' => 6, 'cities' => ['Ahmedabad', 'Surat', 'Vadodara']],
            ['name' => 'West Bengal', 'slug' => 'west-bengal', 'sort' => 7, 'cities' => ['Kolkata', 'Howrah']],
            ['name' => 'Kerala', 'slug' => 'kerala', 'sort' => 8, 'cities' => ['Kochi', 'Thiruvananthapuram']],
            ['name' => 'Haryana', 'slug' => 'haryana', 'sort' => 9, 'cities' => ['Gurugram', 'Faridabad']],
        ];

        foreach ($regions as $region) {
            $state = State::query()->updateOrCreate(
                ['country_id' => $india->id, 'slug' => $region['slug']],
                [
                    'name' => $region['name'],
                    'sort_order' => $region['sort'],
                    'is_active' => true,
                ]
            );
            foreach ($region['cities'] as $ci => $cityName) {
                $citySlug = Str::slug($cityName).'-'.$state->id;
                City::query()->updateOrCreate(
                    ['state_id' => $state->id, 'slug' => $citySlug],
                    [
                        'name' => $cityName,
                        'sort_order' => $ci,
                        'is_active' => true,
                    ]
                );
            }
        }

        $propertyTypes = [
            ['name' => 'Apartment', 'slug' => 'apartment'],
            ['name' => 'Villa/House', 'slug' => 'villa-house'],
            ['name' => 'Plot/Land', 'slug' => 'plot-land'],
            ['name' => 'Commercial', 'slug' => 'commercial'],
            ['name' => 'Office Space', 'slug' => 'office-space'],
        ];
        foreach ($propertyTypes as $i => $row) {
            PropertyType::query()->updateOrCreate(
                ['slug' => $row['slug']],
                [
                    'name' => $row['name'],
                    'sort_order' => $i,
                    'is_active' => true,
                ]
            );
        }

        $budgets = [
            ['label' => 'Under ₹50 Lakhs', 'slug' => 'under-50l'],
            ['label' => '₹50L - ₹1 Cr', 'slug' => '50l-1cr'],
            ['label' => '₹1 - ₹2 Crores', 'slug' => '1-2cr'],
            ['label' => '₹2 - ₹5 Crores', 'slug' => '2-5cr'],
            ['label' => 'Above ₹5 Crores', 'slug' => 'above-5cr'],
        ];
        foreach ($budgets as $i => $row) {
            BudgetRange::query()->updateOrCreate(
                ['slug' => $row['slug']],
                [
                    'label' => $row['label'],
                    'sort_order' => $i,
                    'is_active' => true,
                ]
            );
        }

        $bhks = [
            ['label' => '1 BHK', 'slug' => '1-bhk'],
            ['label' => '2 BHK', 'slug' => '2-bhk'],
            ['label' => '3 BHK', 'slug' => '3-bhk'],
            ['label' => '4+ BHK', 'slug' => '4-plus-bhk'],
        ];
        foreach ($bhks as $i => $row) {
            BhkType::query()->updateOrCreate(
                ['slug' => $row['slug']],
                [
                    'label' => $row['label'],
                    'sort_order' => $i,
                    'is_active' => true,
                ]
            );
        }

        $this->call(AmenitiesSeeder::class);

        $this->seedSampleListings($india);
    }

    private function seedSampleListings(Country $india): void
    {
        $mah = State::query()->where('slug', 'maharashtra')->where('country_id', $india->id)->first();
        $kar = State::query()->where('slug', 'karnataka')->where('country_id', $india->id)->first();
        $har = State::query()->where('slug', 'haryana')->where('country_id', $india->id)->first();

        $mumbai = $mah ? City::query()->where('state_id', $mah->id)->where('name', 'Mumbai')->first() : null;
        $pune = $mah ? City::query()->where('state_id', $mah->id)->where('name', 'Pune')->first() : null;
        $blore = $kar ? City::query()->where('state_id', $kar->id)->where('name', 'Bengaluru')->first() : null;
        $gurugram = $har ? City::query()->where('state_id', $har->id)->where('name', 'Gurugram')->first() : null;

        $apt = PropertyType::query()->where('slug', 'apartment')->first();
        $villa = PropertyType::query()->where('slug', 'villa-house')->first();

        $b25 = BudgetRange::query()->where('slug', '2-5cr')->first();
        $b15 = BudgetRange::query()->where('slug', '1-2cr')->first();
        $b50 = BudgetRange::query()->where('slug', 'above-5cr')->first();

        $bhk3 = BhkType::query()->where('slug', '3-bhk')->first();
        $bhk2 = BhkType::query()->where('slug', '2-bhk')->first();
        $bhk4 = BhkType::query()->where('slug', '4-plus-bhk')->first();

        $gradientBlue = 'linear-gradient(145deg, #1e3a5f 0%, #3d6a99 45%, #93c5fd 100%)';
        $gradientAmber = 'linear-gradient(145deg, #422006 0%, #b45309 50%, #fcd34d 100%)';
        $gradientGreen = 'linear-gradient(145deg, #14532d 0%, #15803d 45%, #86efac 100%)';
        $gradientIndigo = 'linear-gradient(145deg, #312e81 0%, #6366f1 50%, #c7d2fe 100%)';
        $gradientCyan = 'linear-gradient(145deg, #0c4a6e 0%, #0284c7 50%, #bae6fd 100%)';
        $gradientViolet = 'linear-gradient(145deg, #4c1d95 0%, #7c3aed 50%, #ddd6fe 100%)';

        $curated = [
            [
                'title' => '3 BHK Sea-View Apartment',
                'price_display' => '₹4.2 Cr',
                'seller_variant' => 'nri',
                'gradient_css' => $gradientBlue,
                'location_label' => 'Bandra West, Mumbai',
                'status_label' => 'Ready',
                'bhk_label' => '3 BHK',
                'sqft_label' => '1650 sq ft',
                'rera_number' => 'P51900022961/001234',
                'amenities' => [
                    'Parking', 'Covered parking', 'Gym / Fitness centre', 'Swimming pool',
                    '24×7 Security', 'Power backup', 'Lift / Elevator', 'Club house',
                    'Garden / Green area', 'Intercom', 'CCTV surveillance',
                ],
                'builder_label' => 'NRI Owner (UAE)',
                'property_details' => "Premium 3 BHK with sea-facing living and master bedroom windows. Corner unit with abundant natural light, imported marble in living/dining, and modular kitchen with utility.\n\nTower amenities include concierge desk, landscaped podium, and dedicated EV charging bays in the parking podium. Maintenance includes 24×7 water and common-area upkeep.\n\nIdeal for NRI families seeking a turnkey home near Bandstand with strong rental and capital appreciation profile.",
                'state_id' => $mah?->id,
                'city_id' => $mumbai?->id,
                'property_type_id' => $apt?->id,
                'budget_range_id' => $b25?->id,
                'bhk_type_id' => $bhk3?->id,
                'sort_order' => 1,
            ],
            [
                'title' => 'Lodha Park – 2 & 3 BHK',
                'price_display' => '₹2.8 Cr onwards',
                'seller_variant' => 'builder',
                'gradient_css' => $gradientAmber,
                'location_label' => 'Worli, Mumbai',
                'status_label' => 'Dec 2026',
                'bhk_label' => '2/3 BHK',
                'sqft_label' => '980 sq ft',
                'rera_number' => 'P51900008472/220056',
                'amenities' => [
                    'Lift / Elevator', 'Club house', 'Swimming pool', 'Gym / Fitness centre',
                    '24×7 Security', 'Children’s play area', 'Garden / Green area',
                ],
                'builder_label' => 'Lodha Group',
                'state_id' => $mah?->id,
                'city_id' => $mumbai?->id,
                'property_type_id' => $apt?->id,
                'budget_range_id' => $b15?->id,
                'bhk_type_id' => $bhk2?->id,
                'sort_order' => 2,
            ],
            [
                'title' => '2 BHK Ready Possession',
                'price_display' => '₹1.85 Cr',
                'seller_variant' => 'private',
                'gradient_css' => $gradientGreen,
                'location_label' => 'Whitefield, Bengaluru',
                'status_label' => 'Ready',
                'bhk_label' => '2 BHK',
                'sqft_label' => '1180 sq ft',
                'rera_number' => 'PRM/KA/RERA/1251/446/PR/171014/000123',
                'amenities' => ['Parking', 'Power backup', '24×7 Security', 'Garden / Green area'],
                'builder_label' => 'Private Seller',
                'state_id' => $kar?->id,
                'city_id' => $blore?->id,
                'property_type_id' => $apt?->id,
                'budget_range_id' => $b15?->id,
                'bhk_type_id' => $bhk2?->id,
                'sort_order' => 3,
            ],
            [
                'title' => '4 BHK Duplex — Gurugram',
                'price_display' => '₹5.5 Cr',
                'seller_variant' => 'nri',
                'gradient_css' => $gradientIndigo,
                'location_label' => 'Sector 57, Gurugram',
                'status_label' => 'Ready',
                'bhk_label' => '4 BHK',
                'sqft_label' => '2400 sq ft',
                'rera_number' => 'HRERA/GGM/589/204/2023/47',
                'amenities' => [
                    'Parking', 'Gym / Fitness centre', 'Club house', 'CCTV surveillance', 'Power backup',
                ],
                'builder_label' => 'NRI Owner (Singapore)',
                'state_id' => $har?->id,
                'city_id' => $gurugram?->id,
                'property_type_id' => $villa?->id,
                'budget_range_id' => $b50?->id,
                'bhk_type_id' => $bhk4?->id,
                'sort_order' => 4,
            ],
            [
                'title' => 'Lakefront Row Villa',
                'price_display' => '₹6.2 Cr',
                'seller_variant' => 'builder',
                'gradient_css' => $gradientCyan,
                'location_label' => 'Sarjapur, Bengaluru',
                'status_label' => 'Under construction',
                'bhk_label' => '4 BHK',
                'sqft_label' => '3200 sq ft',
                'rera_number' => 'PRM/KA/RERA/1251/446/PR/210801/000899',
                'amenities' => [
                    'Swimming pool', 'Club house', 'Garden / Green area', '24×7 Security', 'Jogging track',
                ],
                'builder_label' => 'Prestige Group',
                'state_id' => $kar?->id,
                'city_id' => $blore?->id,
                'property_type_id' => $villa?->id,
                'budget_range_id' => $b50?->id,
                'bhk_type_id' => $bhk4?->id,
                'sort_order' => 5,
            ],
            [
                'title' => 'Garden Penthouse — Pune',
                'price_display' => '₹4.95 Cr',
                'seller_variant' => 'private',
                'gradient_css' => $gradientViolet,
                'location_label' => 'Baner, Pune',
                'status_label' => 'Ready',
                'bhk_label' => '3 BHK',
                'sqft_label' => '1950 sq ft',
                'rera_number' => 'P52100024680/112233',
                'amenities' => [
                    'Parking', 'Lift / Elevator', 'Gym / Fitness centre', 'Intercom', 'CCTV surveillance',
                ],
                'builder_label' => 'Private Seller',
                'state_id' => $mah?->id,
                'city_id' => $pune?->id,
                'property_type_id' => $apt?->id,
                'budget_range_id' => $b25?->id,
                'bhk_type_id' => $bhk3?->id,
                'sort_order' => 6,
            ],
        ];

        foreach ($curated as $row) {
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

        PropertyListing::query()->updateOrCreate(
            [
                'listing_type' => PropertyListing::TYPE_FEATURED,
                'title' => '3 BHK Apartment in Gurgaon',
            ],
            [
                'listing_type' => PropertyListing::TYPE_FEATURED,
                'transaction_type' => PropertyListing::TX_BUY,
                'price_display' => '₹1.2 Crores',
                'location_label' => 'Sector 70, Gurgaon',
                'status_label' => 'Ready to Move',
                'bhk_label' => '3 BHK',
                'sqft_label' => '1450 sq ft',
                'rera_number' => 'GGM/298/2019/30',
                'amenities' => [
                    'Parking', 'Gym / Fitness centre', 'Swimming pool', '24×7 Security', 'Club house',
                ],
                'builder_label' => 'DLF Limited',
                'country_id' => $india->id,
                'state_id' => $har?->id,
                'city_id' => $gurugram?->id,
                'property_type_id' => $apt?->id,
                'budget_range_id' => $b15?->id,
                'bhk_type_id' => $bhk3?->id,
                'sort_order' => 1,
                'is_published' => true,
                'is_featured' => true,
            ]
        );

        PropertyListing::query()->updateOrCreate(
            [
                'listing_type' => PropertyListing::TYPE_FEATURED,
                'title' => '2 BHK Villa in Pune',
            ],
            [
                'listing_type' => PropertyListing::TYPE_FEATURED,
                'transaction_type' => PropertyListing::TX_BUY,
                'price_display' => '₹85 Lakhs',
                'location_label' => 'Hinjewadi, Pune',
                'status_label' => 'Under Construction',
                'bhk_label' => '2 BHK',
                'sqft_label' => '1200 sq ft',
                'rera_number' => 'P52100017352',
                'amenities' => [
                    'Garden / Green area', 'Parking', '24×7 Security', 'Club house', 'Children’s play area',
                ],
                'builder_label' => 'Godrej Properties',
                'country_id' => $india->id,
                'state_id' => $mah?->id,
                'city_id' => $pune?->id,
                'property_type_id' => $villa?->id,
                'budget_range_id' => BudgetRange::query()->where('slug', 'under-50l')->value('id'),
                'bhk_type_id' => $bhk2?->id,
                'sort_order' => 2,
                'is_published' => true,
                'is_featured' => true,
            ]
        );
    }
}
