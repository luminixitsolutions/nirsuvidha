<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('sub_services', function (Blueprint $table) {
            $table->unsignedInteger('cases_handled')->nullable()->after('details');
        });
    }

    public function down(): void
    {
        Schema::table('sub_services', function (Blueprint $table) {
            $table->dropColumn('cases_handled');
        });
    }
};
