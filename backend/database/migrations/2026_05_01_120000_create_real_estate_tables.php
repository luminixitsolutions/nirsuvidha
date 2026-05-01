<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('re_countries', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug', 160)->nullable()->unique();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('re_states', function (Blueprint $table) {
            $table->id();
            $table->foreignId('country_id')->constrained('re_countries')->cascadeOnDelete();
            $table->string('name');
            $table->string('slug', 160)->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->unique(['country_id', 'slug']);
        });

        Schema::create('re_cities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('state_id')->constrained('re_states')->cascadeOnDelete();
            $table->string('name');
            $table->string('slug', 160)->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->unique(['state_id', 'slug']);
        });

        Schema::create('re_property_types', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug', 160)->nullable()->unique();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('re_budget_ranges', function (Blueprint $table) {
            $table->id();
            $table->string('label');
            $table->string('slug', 160)->nullable()->unique();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('re_bhk_types', function (Blueprint $table) {
            $table->id();
            $table->string('label');
            $table->string('slug', 160)->nullable()->unique();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('re_property_listings', function (Blueprint $table) {
            $table->id();
            $table->string('listing_type', 24);
            $table->string('title');
            $table->string('price_display');
            $table->string('gradient_css')->nullable();
            $table->string('seller_variant', 24)->nullable();
            $table->string('seller_label')->nullable();
            $table->string('location_label')->nullable();
            $table->string('status_label')->nullable();
            $table->string('bhk_label')->nullable();
            $table->string('sqft_label')->nullable();
            $table->string('rera_number')->nullable();
            $table->json('amenities')->nullable();
            $table->string('builder_label')->nullable();
            $table->foreignId('country_id')->nullable()->constrained('re_countries')->nullOnDelete();
            $table->foreignId('state_id')->nullable()->constrained('re_states')->nullOnDelete();
            $table->foreignId('city_id')->nullable()->constrained('re_cities')->nullOnDelete();
            $table->foreignId('property_type_id')->nullable()->constrained('re_property_types')->nullOnDelete();
            $table->foreignId('budget_range_id')->nullable()->constrained('re_budget_ranges')->nullOnDelete();
            $table->foreignId('bhk_type_id')->nullable()->constrained('re_bhk_types')->nullOnDelete();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_published')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('re_property_listings');
        Schema::dropIfExists('re_bhk_types');
        Schema::dropIfExists('re_budget_ranges');
        Schema::dropIfExists('re_property_types');
        Schema::dropIfExists('re_cities');
        Schema::dropIfExists('re_states');
        Schema::dropIfExists('re_countries');
    }
};
