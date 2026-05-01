<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class TestimonialsSeeder extends Seeder
{
    /**
     * Seed testimonials to match the legacy `clientData` in the Next.js app (no photos in storage).
     */
    public function run(): void
    {
        $rows = [
            [
                'name' => 'Lucia E. Nugent',
                'designation' => 'NRI · Singapore',
                'rating' => 5,
                'feedback' => "\"Finally, one place for India compliance\"\n\nTax filing and DTAA guidance without chasing multiple vendors — clear timelines and responsive advisors.",
            ],
            [
                'name' => 'Brenda R. Smith',
                'designation' => 'OCI · United States',
                'rating' => 5,
                'feedback' => "\"Property transfer felt manageable\"\n\nLegal verification and documentation support from abroad made a complex Mumbai sale straightforward.",
            ],
            [
                'name' => 'Brian B. Wilkerson',
                'designation' => 'NRI · UAE',
                'rating' => 5,
                'feedback' => "\"Banking and remittance in one flow\"\n\nNRE account questions and repatriation steps were explained end-to-end with no guesswork.",
            ],
            [
                'name' => 'Miguel L. Benbow',
                'designation' => 'NRI · UK',
                'rating' => 5,
                'feedback' => "\"Transparent from quote to completion\"\n\nEvery milestone was documented — I always knew what was happening with my India filings.",
            ],
            [
                'name' => 'Hilda A. Sheppard',
                'designation' => 'NRI · Canada',
                'rating' => 5,
                'feedback' => "\"Experts who understand NRIs\"\n\nThe team speaks both Indian regulations and overseas realities — huge relief for our family.",
            ],
        ];

        foreach ($rows as $i => $row) {
            Testimonial::query()->updateOrCreate(
                ['name' => $row['name']],
                [
                    'designation' => $row['designation'],
                    'rating' => $row['rating'],
                    'feedback' => $row['feedback'],
                    'photo' => null,
                    'is_active' => true,
                    'sort_order' => $i,
                ],
            );
        }
    }
}
