<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TrustedPartner;
use Illuminate\Http\JsonResponse;

class PublicTrustedPartnerController extends Controller
{
    public function index(): JsonResponse
    {
        $rows = TrustedPartner::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        $data = $rows->map(function (TrustedPartner $p) {
            return [
                'id' => $p->id,
                'name' => $p->name,
                'logo' => $p->logo ? asset('storage/'.ltrim($p->logo, '/')) : null,
                'sort_order' => $p->sort_order,
            ];
        })->values();

        return response()->json(['data' => $data]);
    }
}
