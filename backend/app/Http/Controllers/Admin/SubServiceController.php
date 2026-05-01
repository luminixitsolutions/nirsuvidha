<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreSubServiceRequest;
use App\Http\Requests\Admin\UpdateSubServiceRequest;
use App\Models\Service;
use App\Models\SubService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class SubServiceController extends Controller
{
    private const PHOTO_DIR = 'services/sub_services';

    public function index(): View
    {
        $subServices = SubService::query()
            ->with('service')
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        return view('admin.sub_services.index', compact('subServices'));
    }

    public function create(): View
    {
        $services = Service::query()
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        return view('admin.sub_services.form', [
            'subService' => new SubService,
            'services' => $services,
            'mode' => 'create',
        ]);
    }

    public function store(StoreSubServiceRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $data['sort_order'] = (int) ($data['sort_order'] ?? 0);
        $data['is_published'] = $request->boolean('is_published');
        unset($data['photo']);

        if ($request->hasFile('photo')) {
            $data['photo'] = $request->file('photo')->store(self::PHOTO_DIR, 'public');
        }

        $subService = SubService::query()->create($data);

        return redirect()
            ->route('admin.sub_services.edit', $subService)
            ->with('status', 'Sub service created.');
    }

    public function edit(SubService $subService): View
    {
        $services = Service::query()
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        return view('admin.sub_services.form', [
            'subService' => $subService->load('service'),
            'services' => $services,
            'mode' => 'edit',
        ]);
    }

    public function update(UpdateSubServiceRequest $request, SubService $subService): RedirectResponse
    {
        $data = $request->validated();
        $data['sort_order'] = (int) ($data['sort_order'] ?? $subService->sort_order);
        $data['is_published'] = $request->boolean('is_published', $subService->is_published);
        unset($data['photo'], $data['remove_photo']);

        if ($request->boolean('remove_photo') && $subService->photo) {
            Storage::disk('public')->delete($subService->photo);
            $data['photo'] = null;
        } elseif ($request->hasFile('photo')) {
            if ($subService->photo) {
                Storage::disk('public')->delete($subService->photo);
            }
            $data['photo'] = $request->file('photo')->store(self::PHOTO_DIR, 'public');
        } else {
            unset($data['photo']);
        }

        $subService->update($data);

        return redirect()
            ->route('admin.sub_services.edit', $subService)
            ->with('status', 'Sub service updated.');
    }

    public function destroy(SubService $subService): RedirectResponse
    {
        if ($subService->photo) {
            Storage::disk('public')->delete($subService->photo);
        }

        $subService->delete();

        return redirect()
            ->route('admin.sub_services.index')
            ->with('status', 'Sub service deleted.');
    }
}
