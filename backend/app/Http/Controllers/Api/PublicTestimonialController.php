<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\JsonResponse;

class PublicTestimonialController extends Controller
{
    public function index(): JsonResponse
    {
        $rows = Testimonial::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        $data = $rows->map(function (Testimonial $t) {
            return [
                'id' => $t->id,
                'name' => $t->name,
                'designation' => $t->designation,
                'rating' => $t->rating,
                'feedback' => $t->feedback,
                'photo' => $t->photo ? asset('storage/'.ltrim($t->photo, '/')) : null,
                'sort_order' => $t->sort_order,
            ];
        })->values();

        return response()->json(['data' => $data]);
    }
}
