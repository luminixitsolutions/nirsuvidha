<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('re_property_listings', function (Blueprint $table) {
            $table->string('transaction_type', 16)->default('buy');
            $table->boolean('is_featured')->default(false);
        });

        DB::table('re_property_listings')
            ->where('listing_type', 'featured')
            ->update(['is_featured' => true]);
    }

    public function down(): void
    {
        Schema::table('re_property_listings', function (Blueprint $table) {
            $table->dropColumn(['transaction_type', 'is_featured']);
        });
    }
};
