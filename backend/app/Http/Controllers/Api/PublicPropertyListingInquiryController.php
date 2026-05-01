<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\StorePropertyListingInquiryRequest;
use App\Models\PropertyListing;
use App\Models\PropertyListingInquiry;
use Illuminate\Http\JsonResponse;

class PublicPropertyListingInquiryController extends Controller
{
    public function store(StorePropertyListingInquiryRequest $request): JsonResponse
    {
        $listing = PropertyListing::query()
            ->where('is_published', true)
            ->whereKey($request->integer('property_listing_id'))
            ->first();

        if (! $listing) {
            return response()->json(['message' => 'Property listing not found.'], 404);
        }

        $inquiry = PropertyListingInquiry::query()->create($request->validated());

        return response()->json([
            'message' => 'Thank you — we will contact you shortly.',
            'id' => $inquiry->id,
        ], 201);
    }
}
