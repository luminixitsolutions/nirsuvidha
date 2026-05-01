<?php

namespace Database\Seeders;

use App\Models\PreConstructionProject;
use Illuminate\Database\Seeder;

class PreConstructionProjectsSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
            [
                'title' => 'DLF Privana Gurgaon',
                'status_badge' => 'Launching Soon',
                'badge_variant' => PreConstructionProject::BADGE_MUTED,
                'description' => 'Premium 3-4 BHK apartments in Sector 76, Gurgaon',
                'starting_price_display' => '₹2.5 Crores',
                'possession_display' => 'Dec 2027',
                'payment_plan' => '20:80',
                'benefits_heading' => 'Pre-launch Benefits',
                'benefits' => [
                    'Early bird discount up to ₹5 Lakhs',
                    'Flexible payment schedule',
                    'Free car parking',
                    '2 years maintenance free',
                ],
                'cta_button_text' => 'Register Interest',
                'sort_order' => 0,
                'is_published' => true,
            ],
            [
                'title' => 'Godrej Woods Noida',
                'status_badge' => 'Pre-Launch',
                'badge_variant' => PreConstructionProject::BADGE_ACCENT,
                'description' => 'Luxury 2-3 BHK apartments in Sector 43, Noida',
                'starting_price_display' => '₹1.8 Crores',
                'possession_display' => 'Jun 2028',
                'payment_plan' => '10:90',
                'benefits_heading' => 'Launch Offers',
                'benefits' => [
                    'No registration charges',
                    'Zero EMI till possession',
                    'Assured rental guarantee',
                    'Furniture package included',
                ],
                'cta_button_text' => 'Book Now',
                'sort_order' => 1,
                'is_published' => true,
            ],
        ];

        foreach ($rows as $data) {
            PreConstructionProject::query()->updateOrCreate(
                ['title' => $data['title']],
                $data,
            );
        }
    }
}
