<?php

namespace Database\Seeders;

use App\Models\Amenity;
use Illuminate\Database\Seeder;

/**
 * Default property amenities for admin Masters → Amenities.
 * Safe to run multiple times (updateOrCreate by slug).
 */
class AmenitiesSeeder extends Seeder
{
    public function run(): void
    {
        $amenities = [
            ['label' => 'Parking', 'slug' => 'parking', 'icon_class' => 'fa-solid fa-car'],
            ['label' => 'Covered parking', 'slug' => 'covered-parking', 'icon_class' => 'fa-solid fa-warehouse'],
            ['label' => 'Gym / Fitness centre', 'slug' => 'gym', 'icon_class' => 'fa-solid fa-dumbbell'],
            ['label' => 'Swimming pool', 'slug' => 'swimming-pool', 'icon_class' => 'fa-solid fa-person-swimming'],
            ['label' => '24×7 Security', 'slug' => 'security-24x7', 'icon_class' => 'fa-solid fa-shield-halved'],
            ['label' => 'Power backup', 'slug' => 'power-backup', 'icon_class' => 'fa-solid fa-bolt'],
            ['label' => 'Lift / Elevator', 'slug' => 'lift', 'icon_class' => 'fa-solid fa-building'],
            ['label' => 'Club house', 'slug' => 'club-house', 'icon_class' => 'fa-solid fa-champagne-glasses'],
            ['label' => 'Children’s play area', 'slug' => 'play-area', 'icon_class' => 'fa-solid fa-child-reaching'],
            ['label' => 'Garden / Green area', 'slug' => 'garden', 'icon_class' => 'fa-solid fa-seedling'],
            ['label' => 'Intercom', 'slug' => 'intercom', 'icon_class' => 'fa-solid fa-phone'],
            ['label' => 'CCTV surveillance', 'slug' => 'cctv', 'icon_class' => 'fa-solid fa-video'],
            ['label' => 'Jogging track', 'slug' => 'jogging-track', 'icon_class' => 'fa-solid fa-person-running'],
            ['label' => 'Rainwater harvesting', 'slug' => 'rainwater-harvesting', 'icon_class' => 'fa-solid fa-cloud-rain'],
            ['label' => 'Senior citizen friendly', 'slug' => 'senior-friendly', 'icon_class' => 'fa-solid fa-hand-holding-heart'],
            ['label' => 'Visitor parking', 'slug' => 'visitor-parking', 'icon_class' => 'fa-solid fa-road'],
            ['label' => 'Indoor games room', 'slug' => 'indoor-games', 'icon_class' => 'fa-solid fa-chess'],
            ['label' => 'Co-working space', 'slug' => 'co-working', 'icon_class' => 'fa-solid fa-laptop-house'],
        ];

        foreach ($amenities as $i => $row) {
            Amenity::query()->updateOrCreate(
                ['slug' => $row['slug']],
                [
                    'label' => $row['label'],
                    'icon_class' => $row['icon_class'],
                    'sort_order' => $i,
                    'is_active' => true,
                ]
            );
        }
    }
}
