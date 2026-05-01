<?php

namespace Database\Seeders;

use App\Models\TrustedPartner;
use Illuminate\Database\Seeder;

class TrustedPartnersSeeder extends Seeder
{
    /**
     * Placeholder companies for the “Trusted by” strip (logos: upload in admin; until then, Next can fall back to static /img/c*.png).
     */
    public function run(): void
    {
        $names = [
            'Channel partner 1',
            'Channel partner 2',
            'Channel partner 3',
            'Channel partner 4',
            'Channel partner 5',
            'Channel partner 6',
        ];

        foreach ($names as $i => $name) {
            TrustedPartner::query()->updateOrCreate(
                ['name' => $name],
                [
                    'logo' => null,
                    'is_active' => true,
                    'sort_order' => $i,
                ],
            );
        }
    }
}
