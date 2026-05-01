<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\StoreServiceCaseRequest;
use App\Models\Service;
use App\Models\ServiceCaseSubmission;
use Illuminate\Http\JsonResponse;

class PublicServiceCaseController extends Controller
{
    private const DOC_DIR = 'service-case-submissions/docs';

    public function store(StoreServiceCaseRequest $request): JsonResponse
    {
        $service = Service::query()
            ->where('is_published', true)
            ->whereKey($request->integer('service_id'))
            ->first();

        if (! $service) {
            return response()->json(['message' => 'Service not found.'], 404);
        }

        $data = $request->validated();
        unset($data['document']);

        if ($request->hasFile('document')) {
            $data['document_path'] = $request->file('document')->store(self::DOC_DIR, 'public');
        }

        $submission = ServiceCaseSubmission::query()->create($data);

        return response()->json([
            'message' => 'Case submitted.',
            'id' => $submission->id,
        ], 201);
    }
}
