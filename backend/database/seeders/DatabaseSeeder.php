<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::query()->updateOrCreate(
            ['email' => 'admin@nrisuvidha.local'],
            [
                'name' => 'NRI Suvidha Admin',
                'password' => Hash::make('password'),
            ],
        );

        $this->call(HomeCmsSeeder::class);
        $this->call(ServicesSeeder::class);
        $this->call(TestimonialsSeeder::class);
        $this->call(TrustedPartnersSeeder::class);
        $this->call(RealEstateMasterSeeder::class);
        $this->call(RealEstatePropertiesSeeder::class);
        $this->call(PreConstructionProjectsSeeder::class);
        $this->call(HomeLoanPartnersSeeder::class);
        $this->call(RealEstateCareServicesSeeder::class);
    }
}
