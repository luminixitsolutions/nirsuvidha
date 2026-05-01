<?php

use App\Http\Controllers\Admin\AmenityController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\BhkTypeController;
use App\Http\Controllers\Admin\BudgetRangeController;
use App\Http\Controllers\Admin\CityController;
use App\Http\Controllers\Admin\CountryController;
use App\Http\Controllers\Admin\CustomerController;
use App\Http\Controllers\Admin\DesignationController;
use App\Http\Controllers\Admin\EmployeeController;
use App\Http\Controllers\Admin\HomeLoanPartnerController;
use App\Http\Controllers\Admin\HomePageController;
use App\Http\Controllers\Admin\PartnerOnboardingController;
use App\Http\Controllers\Admin\PreConstructionProjectController;
use App\Http\Controllers\Admin\PropertyListingInquiryController;
use App\Http\Controllers\Admin\PropertyListingController;
use App\Http\Controllers\Admin\RePropertyTypeController;
use App\Http\Controllers\Admin\RealEstateCareServiceController;
use App\Http\Controllers\Admin\SellPropertySubmissionController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\StateController;
use App\Http\Controllers\Admin\SubServiceController;
use App\Http\Controllers\Admin\TestimonialController;
use App\Http\Controllers\Admin\TrustedPartnerController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('admin.login');
});

Route::middleware('guest')->group(function () {
    Route::get('admin/login', [AuthController::class, 'showLoginForm'])->name('admin.login');
    Route::post('admin/login', [AuthController::class, 'login'])->name('admin.login.post');
});

Route::middleware(['auth', 'employee.permissions'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [HomePageController::class, 'dashboard'])->name('dashboard');
    Route::get('homepage/{section}', [HomePageController::class, 'show'])->name('homepage.show');
    Route::post('homepage/{section}', [HomePageController::class, 'update'])->name('homepage.update');
    Route::post('logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('settings/account', [SettingsController::class, 'editAccount'])->name('settings.account.edit');
    Route::put('settings/account', [SettingsController::class, 'updateAccount'])->name('settings.account.update');
    Route::get('settings/password', [SettingsController::class, 'editPassword'])->name('settings.password.edit');
    Route::put('settings/password', [SettingsController::class, 'updatePassword'])->name('settings.password.update');
    Route::resource('services', ServiceController::class)
        ->parameters(['services' => 'service'])
        ->except(['show']);
    Route::resource('sub_services', SubServiceController::class)
        ->parameters(['sub_services' => 'sub_service'])
        ->except(['show']);
    Route::resource('testimonials', TestimonialController::class)
        ->parameters(['testimonials' => 'testimonial'])
        ->except(['show']);
    Route::resource('trusted_partners', TrustedPartnerController::class)
        ->parameters(['trusted_partners' => 'trustedPartner'])
        ->except(['show']);
    Route::resource('partner_onboardings', PartnerOnboardingController::class)
        ->only(['index', 'create', 'store', 'show', 'edit', 'update', 'destroy']);
    Route::resource('designations', DesignationController::class)
        ->parameters(['designations' => 'designation'])
        ->except(['show']);
    Route::resource('employees', EmployeeController::class)
        ->parameters(['employees' => 'employee'])
        ->except(['show']);
    Route::resource('customers', CustomerController::class)
        ->parameters(['customers' => 'customer'])
        ->except(['show']);

    Route::resource('countries', CountryController::class)
        ->parameters(['countries' => 'country'])
        ->except(['show']);
    Route::resource('states', StateController::class)
        ->parameters(['states' => 'state'])
        ->except(['show']);
    Route::resource('cities', CityController::class)
        ->parameters(['cities' => 'city'])
        ->except(['show']);
    Route::resource('property_types', RePropertyTypeController::class)
        ->parameters(['property_types' => 'property_type'])
        ->except(['show']);
    Route::resource('budget_ranges', BudgetRangeController::class)
        ->parameters(['budget_ranges' => 'budget_range'])
        ->except(['show']);
    Route::resource('bhk_types', BhkTypeController::class)
        ->parameters(['bhk_types' => 'bhk_type'])
        ->except(['show']);
    Route::resource('amenities', AmenityController::class)
        ->parameters(['amenities' => 'amenity'])
        ->except(['show']);
    Route::resource('properties', PropertyListingController::class)
        ->parameters(['properties' => 'property_listing'])
        ->except(['show']);
    Route::get('property_inquiries', [PropertyListingInquiryController::class, 'index'])->name('property_inquiries.index');
    Route::get('sell_property_submissions', [SellPropertySubmissionController::class, 'index'])->name('sell_property_submissions.index');
    Route::get('sell_property_submissions/{sell_property_submission}', [SellPropertySubmissionController::class, 'show'])->name('sell_property_submissions.show');
    Route::post('sell_property_submissions/{sell_property_submission}/approve', [SellPropertySubmissionController::class, 'approve'])->name('sell_property_submissions.approve');
    Route::post('sell_property_submissions/{sell_property_submission}/reject', [SellPropertySubmissionController::class, 'reject'])->name('sell_property_submissions.reject');
    Route::resource('pre_construction_projects', PreConstructionProjectController::class)
        ->parameters(['pre_construction_projects' => 'pre_construction_project'])
        ->except(['show']);
    Route::resource('home_loan_partners', HomeLoanPartnerController::class)
        ->parameters(['home_loan_partners' => 'home_loan_partner'])
        ->except(['show']);
    Route::resource('real_estate_care_services', RealEstateCareServiceController::class)
        ->parameters(['real_estate_care_services' => 'real_estate_care_service'])
        ->except(['show']);
});
