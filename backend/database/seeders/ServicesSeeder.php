<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServicesSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
            [
                'icon' => 'fa-solid fa-scale-balanced',
                'title' => 'Legal Services',
                'short_details' => 'Wills, POA, probate, and inheritance workflows built for NRIs and OCIs.',
                'below_short_title' => 'Power of Attorney, wills & inheritance support',
            ],
            [
                'icon' => 'fa-solid fa-building-columns',
                'title' => 'Banking',
                'short_details' => 'Open NRE/NRO accounts, fixed deposits, and streamline cross-border transfers.',
                'below_short_title' => 'NRE/NRO accounts & remittances',
            ],
            [
                'icon' => 'fa-solid fa-chart-line',
                'title' => 'Investment Services',
                'short_details' => 'Mutual funds, equities, and portfolio reviews aligned with your India goals.',
                'below_short_title' => 'Mutual funds, stocks & portfolio guidance',
            ],
            [
                'icon' => 'fa-solid fa-file-invoice-dollar',
                'title' => 'Tax Compliance',
                'short_details' => 'ITR, DTAA, and reporting support so global income stays compliant.',
                'below_short_title' => 'ITR, DTAA & global income compliance',
            ],
            [
                'icon' => 'fa-solid fa-briefcase',
                'title' => 'Business Setup & Advisory',
                'short_details' => 'Incorporation, GST, and ongoing compliance for your India presence.',
                'below_short_title' => 'Company registration & compliance',
            ],
            [
                'icon' => 'fa-solid fa-house-chimney',
                'title' => 'Real Estate Services',
                'short_details' => 'Due diligence, documentation, and closure support for property in India.',
                'below_short_title' => 'Buy, sell & legal verification',
            ],
            [
                'icon' => 'fa-solid fa-shield-halved',
                'title' => 'Secure Onboarding',
                'short_details' => 'Verified KYC, encrypted uploads, and a single vault for sensitive files.',
                'below_short_title' => 'KYC & document vault',
            ],
            [
                'icon' => 'fa-solid fa-headset',
                'title' => 'Expert Assistance',
                'short_details' => 'Specialists and relationship managers who coordinate your end-to-end request.',
                'below_short_title' => 'Dedicated relationship managers',
            ],
        ];
        $n = 0;
        foreach ($rows as $r) {
            Service::query()->updateOrCreate(
                ['title' => $r['title']],
                [
                    'icon' => $r['icon'],
                    'short_details' => $r['short_details'],
                    'full_details' => null,
                    'below_short_title' => $r['below_short_title'],
                    'photo' => null,
                    'multiple_photos' => null,
                    'sort_order' => $n,
                    'is_published' => true,
                    'link_href' => $r['title'] === 'Expert Assistance' ? '/#contact' : '/#services',
                ],
            );
            $n += 10;
        }
    }
}
