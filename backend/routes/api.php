<?php

use App\Http\Controllers\Api\PublicCmsController;
use App\Http\Controllers\Api\PublicPartnerOnboardingController;
use App\Http\Controllers\Api\PublicPropertyListingInquiryController;
use App\Http\Controllers\Api\PublicRealEstateController;
use App\Http\Controllers\Api\PublicSellPropertySubmissionController;
use App\Http\Controllers\Api\PublicServiceCaseController;
use App\Http\Controllers\Api\PublicServiceController;
use App\Http\Controllers\Api\PublicTestimonialController;
use App\Http\Controllers\Api\PublicTrustedPartnerController;
use Illuminate\Support\Facades\Route;

Route::prefix('public')->group(function () {
    Route::get('/cms', [PublicCmsController::class, 'index']);
    Route::get('/services', [PublicServiceController::class, 'index']);
    Route::get('/services/{slug}', [PublicServiceController::class, 'show']);
    Route::post('/service-case-submissions', [PublicServiceCaseController::class, 'store']);
    Route::get('/testimonials', [PublicTestimonialController::class, 'index']);
    Route::get('/trusted-partners', [PublicTrustedPartnerController::class, 'index']);
    Route::post('/partner-onboarding', [PublicPartnerOnboardingController::class, 'store']);
    Route::get('/real-estate', [PublicRealEstateController::class, 'index']);
    Route::get('/real-estate/listings/{listing}', [PublicRealEstateController::class, 'show']);
    Route::post('/property-listing-inquiries', [PublicPropertyListingInquiryController::class, 'store']);
    Route::post('/sell-property-submissions', [PublicSellPropertySubmissionController::class, 'store']);
});
