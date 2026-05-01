<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('customers', function (Blueprint $table) {
            $table->string('aadhar_number', 20)->nullable()->after('company');
            $table->string('pan_number', 12)->nullable()->after('aadhar_number');
            $table->string('gst_number', 20)->nullable()->after('pan_number');
            $table->string('aadhar_document', 512)->nullable()->after('gst_number');
            $table->string('pan_document', 512)->nullable()->after('aadhar_document');
            $table->string('supporting_document', 512)->nullable()->after('pan_document');
            $table->string('photo', 512)->nullable()->after('supporting_document');
        });
    }

    public function down(): void
    {
        Schema::table('customers', function (Blueprint $table) {
            $table->dropColumn([
                'aadhar_number',
                'pan_number',
                'gst_number',
                'aadhar_document',
                'pan_document',
                'supporting_document',
                'photo',
            ]);
        });
    }
};
