<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\StoreSellPropertySubmissionRequest;
use App\Models\SellPropertySubmission;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PublicSellPropertySubmissionController extends Controller
{
    private const BASE_DIR = 're-sell-submissions';

    public function store(StoreSellPropertySubmissionRequest $request): JsonResponse
    {
        $data = $request->validated();
        unset($data['photos'], $data['documents'], $data['has_api_geo']);

        if (! $request->boolean('has_api_geo')) {
            $data['state_id'] = null;
            $data['city_id'] = null;
        } else {
            $data['state_slug'] = null;
            $data['city_slug'] = null;
        }

        $data['status'] = SellPropertySubmission::STATUS_PENDING;
        unset($data['photo_paths'], $data['document_paths']);

        $submission = null;

        DB::transaction(function () use ($request, &$submission, $data): void {
            $submission = SellPropertySubmission::query()->create($data);

            $disk = Storage::disk('public');
            $base = self::BASE_DIR.'/'.$submission->id;
            $disk->makeDirectory($base.'/photos', true);
            $disk->makeDirectory($base.'/documents', true);

            $photoPaths = [];
            foreach ($request->file('photos', []) ?? [] as $file) {
                if (! $file || ! $file->isValid()) {
                    continue;
                }
                $ext = strtolower($file->getClientOriginalExtension() ?: 'jpg');
                if (! in_array($ext, ['jpg', 'jpeg', 'png', 'webp', 'gif'], true)) {
                    $ext = 'jpg';
                }
                $name = Str::uuid()->toString().'.'.$ext;
                $disk->putFileAs($base.'/photos', $file, $name);
                $photoPaths[] = $base.'/photos/'.$name;
            }

            $docPaths = [];
            foreach ($request->file('documents', []) ?? [] as $file) {
                if (! $file || ! $file->isValid()) {
                    continue;
                }
                $ext = strtolower($file->getClientOriginalExtension() ?: 'bin');
                $name = Str::uuid()->toString().'.'.$ext;
                $disk->putFileAs($base.'/documents', $file, $name);
                $rel = $base.'/documents/'.$name;
                $orig = $file->getClientOriginalName();
                $docPaths[] = ['path' => $rel, 'name' => $orig];
            }

            $submission->photo_paths = $photoPaths === [] ? null : $photoPaths;
            $submission->document_paths = $docPaths === [] ? null : $docPaths;
            $submission->save();
        });

        if (! $submission) {
            return response()->json(['message' => 'Could not save submission.'], 500);
        }

        return response()->json([
            'message' => 'Submitted. Our team will review your listing shortly.',
            'id' => $submission->id,
        ], 201);
    }
}
