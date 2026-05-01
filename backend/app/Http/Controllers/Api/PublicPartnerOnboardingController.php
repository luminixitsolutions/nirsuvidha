<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\StorePartnerOnboardingRequest;
use App\Models\PartnerOnboarding;
use Illuminate\Http\JsonResponse;

class PublicPartnerOnboardingController extends Controller
{
    public function store(StorePartnerOnboardingRequest $request): JsonResponse
    {
        $record = PartnerOnboarding::createFromStoreRequest($request);

        return response()->json([
            'message' => 'Application Submitted Successfully!',
            'description' => 'Thank you for joining our partner network. Our team will review your application and get back to you within 2-3 business days.',
            'id' => $record->id,
        ], 201);
    }
}
