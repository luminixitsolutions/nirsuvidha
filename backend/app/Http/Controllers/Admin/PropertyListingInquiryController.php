<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PropertyListingInquiry;
use Illuminate\View\View;

class PropertyListingInquiryController extends Controller
{
    public function index(): View
    {
        $inquiries = PropertyListingInquiry::query()
            ->with('propertyListing:id,title')
            ->orderByDesc('created_at')
            ->orderByDesc('id')
            ->get();

        return view('admin.real_estate.property_inquiries.index', [
            'inquiries' => $inquiries,
        ]);
    }
}
