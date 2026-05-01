<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('re_sell_property_submissions', function (Blueprint $table) {
            $table->id();
            $table->string('status', 24)->default('pending');
            $table->foreignId('state_id')->nullable()->constrained('re_states')->nullOnDelete();
            $table->foreignId('city_id')->nullable()->constrained('re_cities')->nullOnDelete();
            $table->string('state_slug', 120)->nullable();
            $table->string('city_slug', 120)->nullable();
            $table->string('locality');
            $table->string('property_type_slug', 120);
            $table->string('bhk_slug', 120)->nullable();
            $table->string('built_up_sqft')->nullable();
            $table->string('carpet_sqft')->nullable();
            $table->string('expected_price');
            $table->string('price_negotiable', 16);
            $table->string('contact_mode', 24);
            $table->string('whatsapp_number')->nullable();
            $table->string('best_time_ist');
            $table->json('photo_paths')->nullable();
            $table->json('document_paths')->nullable();
            $table->foreignId('property_listing_id')->nullable()->constrained('re_property_listings')->nullOnDelete();
            $table->text('rejected_reason')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('re_sell_property_submissions');
    }
};
