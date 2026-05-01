<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('re_property_listings', function (Blueprint $table) {
            $table->longText('property_details')->nullable()->after('builder_label');
        });
    }

    public function down(): void
    {
        Schema::table('re_property_listings', function (Blueprint $table) {
            $table->dropColumn('property_details');
        });
    }
};
