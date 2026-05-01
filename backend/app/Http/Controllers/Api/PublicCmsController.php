<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CmsItem;
use App\Services\CmsValuePresenter;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PublicCmsController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $section = $request->query('section', 'home');
        if (! is_string($section) || $section === '' || strlen($section) > 64) {
            return response()->json(['message' => 'Invalid section.'], 422);
        }

        $rows = CmsItem::query()
            ->where('section', $section)
            ->orderBy('cms_key')
            ->get();

        $data = $rows->map(function (CmsItem $row) {
            return [
                'id' => $row->id,
                'section' => $row->section,
                'key' => $row->cms_key,
                'value' => CmsValuePresenter::toPublicValue($row->cms_key, $row->value),
            ];
        })->values();

        return response()->json(['data' => $data]);
    }
}
