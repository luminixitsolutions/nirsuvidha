<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('re_amenities', function (Blueprint $table) {
            $table->string('icon_class', 255)->nullable()->after('slug');
        });
    }

    public function down(): void
    {
        Schema::table('re_amenities', function (Blueprint $table) {
            $table->dropColumn('icon_class');
        });
    }
};
