<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('property_listing_inquiries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('property_listing_id')
                ->constrained('re_property_listings')
                ->cascadeOnDelete();
            $table->string('full_name');
            $table->string('email');
            $table->string('phone', 64);
            $table->text('message')->nullable();
            $table->timestamps();

            $table->index('created_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('property_listing_inquiries');
    }
};
