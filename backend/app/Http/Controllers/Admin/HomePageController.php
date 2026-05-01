<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\HomepageSectionUpdateRequest;
use App\Models\CmsItem;
use App\Models\Service;
use App\Support\HomeCmsKeys;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class HomePageController extends Controller
{
    public function dashboard(): View
    {
        $servicesCount = Service::query()->count();

        return view('admin.dashboard', [
            'stats' => [
                'customers' => 128,
                'employees' => 24,
                'partners' => 42,
                'services' => $servicesCount,
            ],
            'chart' => [
                'labels' => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                'values' => [18, 22, 19, 28, 32, 29, 35],
            ],
        ]);
    }

    public function show(string $section): View
    {
        if (! isset(HomeCmsKeys::MENU[$section])) {
            abort(404);
        }

        return view('admin.homepage.show', [
            'section' => $section,
            'meta' => HomeCmsKeys::MENU[$section],
            'map' => $this->cmsMap(),
            'partial' => $this->partialName($section),
        ]);
    }

    public function update(HomepageSectionUpdateRequest $request, string $section): RedirectResponse
    {
        if (! isset(HomeCmsKeys::MENU[$section])) {
            abort(404);
        }

        $menu = HomeCmsKeys::MENU[$section];
        $cmsSection = HomeCmsKeys::SECTION;

        foreach ($menu['text'] as $key) {
            if (! $request->has($key)) {
                continue;
            }
            CmsItem::upsertValue($cmsSection, $key, (string) $request->input($key));
        }
        foreach ($menu['json'] as $key) {
            if (! $request->has($key)) {
                continue;
            }
            $v = $request->input($key);
            CmsItem::upsertValue($cmsSection, $key, $v === null || $v === '' ? null : (string) $v);
        }
        foreach ($menu['image'] as $key) {
            if (! $request->hasFile($key)) {
                continue;
            }
            $file = $request->file($key);
            $old = CmsItem::query()
                ->where('section', $cmsSection)
                ->where('cms_key', $key)
                ->value('value');
            if (is_string($old) && $old !== '' && str_contains($old, 'homepage/')) {
                Storage::disk('public')->delete($old);
            }
            $path = $file->store('homepage', 'public');
            CmsItem::upsertValue($cmsSection, $key, $path);
        }

        return redirect()
            ->route('admin.homepage.show', ['section' => $section])
            ->with('status', 'Saved successfully.');
    }

    /**
     * @return Collection<string, CmsItem>
     */
    private function cmsMap(): Collection
    {
        return CmsItem::query()
            ->where('section', HomeCmsKeys::SECTION)
            ->get()
            ->keyBy('cms_key');
    }

    private function partialName(string $section): string
    {
        return str_replace(['-', ' '], '_', $section);
    }
}
