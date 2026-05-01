<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreServiceRequest;
use App\Http\Requests\Admin\UpdateServiceRequest;
use App\Models\Service;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class ServiceController extends Controller
{
    public function index(): View
    {
        $services = Service::query()
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        return view('admin.services.index', compact('services'));
    }

    public function create(): View
    {
        return view('admin.services.form', [
            'service' => new Service,
            'mode' => 'create',
        ]);
    }

    public function store(StoreServiceRequest $request): RedirectResponse
    {
        $data = $this->dataFromRequest($request);
        $data['sort_order'] = $data['sort_order'] ?? 0;
        $data['is_published'] = $request->boolean('is_published', true);
        $data['photo'] = $this->storeOptionalFile($request, 'photo', 'services/photos');
        $data['multiple_photos'] = $this->storeGalleryFiles($request, 'gallery_files', 'services/gallery');

        $service = Service::query()->create($data);

        return redirect()
            ->route('admin.services.edit', $service)
            ->with('status', 'Service created.');
    }

    public function edit(Service $service): View
    {
        return view('admin.services.form', [
            'service' => $service,
            'mode' => 'edit',
        ]);
    }

    public function update(UpdateServiceRequest $request, Service $service): RedirectResponse
    {
        $data = $this->dataFromRequest($request);
        $data['is_published'] = $request->boolean('is_published', $service->is_published);

        if ($request->boolean('remove_photo') && $service->photo) {
            Storage::disk('public')->delete($service->photo);
            $data['photo'] = null;
        } elseif ($request->hasFile('photo')) {
            if ($service->photo) {
                Storage::disk('public')->delete($service->photo);
            }
            $data['photo'] = $this->storeOptionalFile($request, 'photo', 'services/photos');
        } else {
            unset($data['photo']);
        }

        $gallery = is_array($service->multiple_photos) ? $service->multiple_photos : [];
        $remove = $request->input('remove_gallery', []);
        $remove = is_array($remove) ? $remove : [];
        foreach ($remove as $p) {
            if (in_array($p, $gallery, true)) {
                Storage::disk('public')->delete($p);
            }
        }
        if ($remove !== []) {
            $gallery = array_values(array_diff($gallery, $remove));
        }

        $newPaths = $this->storeGalleryFiles($request, 'gallery_files', 'services/gallery');
        if ($newPaths !== []) {
            $gallery = array_values(array_unique(array_merge($gallery, $newPaths)));
        }
        $data['multiple_photos'] = $gallery;

        $service->update($data);

        return redirect()
            ->route('admin.services.edit', $service)
            ->with('status', 'Service updated.');
    }

    public function destroy(Service $service): RedirectResponse
    {
        if ($service->photo) {
            Storage::disk('public')->delete($service->photo);
        }
        if (is_array($service->multiple_photos)) {
            foreach ($service->multiple_photos as $p) {
                Storage::disk('public')->delete($p);
            }
        }
        $service->delete();

        return redirect()
            ->route('admin.services.index')
            ->with('status', 'Service deleted.');
    }

    /**
     * @return array{title: string, icon: string, short_details: string, full_details: string|null, below_short_title: string|null, link_href: string|null, sort_order: int, is_published: bool, photo: string|null, multiple_photos: array<int, string>}
     */
    private function dataFromRequest(Request $request): array
    {
        return [
            'title' => (string) $request->input('title'),
            'icon' => (string) $request->input('icon'),
            'short_details' => (string) $request->input('short_details'),
            'full_details' => $request->input('full_details') !== null && $request->input('full_details') !== ''
                ? (string) $request->input('full_details') : null,
            'below_short_title' => $request->input('below_short_title') !== null && $request->input('below_short_title') !== ''
                ? (string) $request->input('below_short_title') : null,
            'link_href' => $request->input('link_href') !== null && $request->input('link_href') !== ''
                ? (string) $request->input('link_href') : null,
            'sort_order' => (int) $request->input('sort_order', 0),
        ];
    }

    private function storeOptionalFile(Request $request, string $key, string $dir): ?string
    {
        if (! $request->hasFile($key)) {
            return null;
        }

        return $request->file($key)->store($dir, 'public');
    }

    /**
     * @return list<string>
     */
    private function storeGalleryFiles(Request $request, string $key, string $dir): array
    {
        if (! $request->hasFile($key)) {
            return [];
        }
        $out = [];
        foreach ((array) $request->file($key) as $file) {
            if ($file === null) {
                continue;
            }
            $out[] = $file->store($dir, 'public');
        }

        return $out;
    }
}
