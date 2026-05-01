<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->dropColumn('role');
        });

        Schema::table('employees', function (Blueprint $table) {
            $table->foreignId('designation_id')->nullable()->after('phone')->constrained()->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->dropForeign(['designation_id']);
        });

        Schema::table('employees', function (Blueprint $table) {
            $table->string('role', 255)->nullable()->after('phone');
            $table->dropColumn('designation_id');
        });
    }
};
