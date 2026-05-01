<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('partner_onboardings', function (Blueprint $table) {
            $table->id();
            $table->string('partner_type', 32);

            $table->string('full_name');
            $table->string('email');
            $table->string('phone_number', 16);
            $table->string('business_name');
            $table->string('years_experience');
            $table->string('primary_city');
            $table->string('service_radius', 32);

            $table->json('operating_states');
            $table->json('languages_spoken');

            $table->string('consultation_fee');
            $table->string('availability_type', 32);
            $table->string('response_time', 32);

            $table->string('profile_photo_path')->nullable();
            $table->string('license_path')->nullable();
            $table->string('partner_agreement_path')->nullable();

            $table->text('unique_selling_point');
            $table->text('success_stories')->nullable();
            $table->boolean('agree_terms');

            $table->string('bar_council_state')->nullable();
            $table->string('bar_registration_number')->nullable();
            $table->string('law_school')->nullable();
            $table->json('practice_areas')->nullable();
            $table->json('court_levels')->nullable();
            $table->json('client_categories')->nullable();
            $table->text('notable_case_types')->nullable();

            $table->string('icai_membership_number')->nullable();
            $table->string('ca_final_year')->nullable();
            $table->json('specializations')->nullable();
            $table->json('industry_expertise')->nullable();
            $table->json('client_size_preference')->nullable();
            $table->json('software_expertise')->nullable();
            $table->json('additional_certifications')->nullable();

            $table->string('rera_registration_number')->nullable();
            $table->string('rera_state')->nullable();
            $table->string('team_size', 16)->nullable();
            $table->json('property_types')->nullable();
            $table->json('transaction_types')->nullable();
            $table->json('price_range_expertise')->nullable();
            $table->text('locality_expertise')->nullable();
            $table->text('notable_projects')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('partner_onboardings');
    }
};
