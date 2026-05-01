<?php

namespace Database\Seeders;

use App\Models\HomeLoanPartner;
use Illuminate\Database\Seeder;

class HomeLoanPartnersSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
            [
                'bank_name' => 'HDFC Ltd',
                'icon_class' => 'fa-solid fa-house-chimney',
                'interest_rate_display' => '8.5%',
                'processing_fee_display' => '0.5%',
                'max_tenure_display' => '30 years',
                'sort_order' => 0,
                'is_published' => true,
            ],
            [
                'bank_name' => 'SBI Home Loans',
                'icon_class' => 'fa-solid fa-landmark',
                'interest_rate_display' => '8.65%',
                'processing_fee_display' => '0.35%',
                'max_tenure_display' => '30 years',
                'sort_order' => 1,
                'is_published' => true,
            ],
            [
                'bank_name' => 'ICICI Bank',
                'icon_class' => 'fa-solid fa-building-columns',
                'interest_rate_display' => '8.75%',
                'processing_fee_display' => '0.5%',
                'max_tenure_display' => '30 years',
                'sort_order' => 2,
                'is_published' => true,
            ],
            [
                'bank_name' => 'LIC Housing Finance',
                'icon_class' => 'fa-solid fa-building',
                'interest_rate_display' => '8.5%',
                'processing_fee_display' => '0.5%',
                'max_tenure_display' => '30 years',
                'sort_order' => 3,
                'is_published' => true,
            ],
        ];

        foreach ($rows as $data) {
            HomeLoanPartner::query()->updateOrCreate(
                ['bank_name' => $data['bank_name']],
                $data,
            );
        }
    }
}
