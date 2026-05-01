<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pre_construction_projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('status_badge', 120);
            $table->string('badge_variant', 16)->default('muted');
            $table->text('description');
            $table->string('starting_price_display', 120);
            $table->string('possession_display', 120);
            $table->string('payment_plan', 64);
            $table->string('benefits_heading', 255);
            $table->json('benefits')->nullable();
            $table->string('cta_button_text', 120);
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_published')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pre_construction_projects');
    }
};
