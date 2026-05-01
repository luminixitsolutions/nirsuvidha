<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('icon', 255)->comment('e.g. fa-solid fa-scale-balanced');
            $table->text('short_details');
            $table->longText('full_details')->nullable();
            $table->string('below_short_title', 500)->nullable();
            $table->string('photo')->nullable()->comment('Path under storage/app/public');
            $table->json('multiple_photos')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_published')->default(true);
            $table->string('link_href', 500)->nullable()->comment('e.g. /#services or /contact');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
