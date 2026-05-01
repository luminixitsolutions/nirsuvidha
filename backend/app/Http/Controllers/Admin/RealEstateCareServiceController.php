<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\RealEstateCareService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\View\View;

class RealEstateCareServiceController extends Controller
{
    public function index(): View
    {
        $items = RealEstateCareService::query()
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        return view('admin.real_estate.care_services.index', compact('items'));
    }

    public function create(): View
    {
        return view('admin.real_estate.care_services.form', [
            'item' => new RealEstateCareService([
                'sort_order' => 0,
                'is_published' => true,
                'show_bullets' => true,
            ]),
            'bulletsText' => '',
            'mode' => 'create',
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_published'] = $request->boolean('is_published', true);
        $data['show_bullets'] = $request->boolean('show_bullets', true);
        $data['bullets'] = $this->parseBullets($request->input('bullets_text'));

        $item = RealEstateCareService::query()->create($data);

        return redirect()
            ->route('admin.real_estate_care_services.edit', $item)
            ->with('status', 'Real estate service card created.');
    }

    public function edit(RealEstateCareService $real_estate_care_service): View
    {
        $bulletsText = '';
        if (is_array($real_estate_care_service->bullets)) {
            $bulletsText = implode("\n", $real_estate_care_service->bullets);
        }

        return view('admin.real_estate.care_services.form', [
            'item' => $real_estate_care_service,
            'bulletsText' => $bulletsText,
            'mode' => 'edit',
        ]);
    }

    public function update(Request $request, RealEstateCareService $real_estate_care_service): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_published'] = $request->boolean('is_published', $real_estate_care_service->is_published);
        $data['show_bullets'] = $request->boolean('show_bullets', $real_estate_care_service->show_bullets);
        $data['bullets'] = $this->parseBullets($request->input('bullets_text'));

        $real_estate_care_service->update($data);

        return redirect()
            ->route('admin.real_estate_care_services.edit', $real_estate_care_service)
            ->with('status', 'Real estate service card updated.');
    }

    public function destroy(RealEstateCareService $real_estate_care_service): RedirectResponse
    {
        $real_estate_care_service->delete();

        return redirect()
            ->route('admin.real_estate_care_services.index')
            ->with('status', 'Real estate service card deleted.');
    }

    /**
     * @return array<string, mixed>
     */
    private function validated(Request $request): array
    {
        $base = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string', 'max:100000'],
            'sort_order' => ['nullable', 'integer', 'min:0', 'max:999999'],
        ]);

        $base['sort_order'] = (int) ($base['sort_order'] ?? 0);
        $clean = $this->sanitizeCareDescriptionHtml((string) $base['description']);
        if ($clean === null || $clean === '') {
            throw ValidationException::withMessages([
                'description' => ['Please enter a description.'],
            ]);
        }
        $textOnly = trim(preg_replace('/\s+/u', ' ', strip_tags($clean)));
        if ($textOnly === '') {
            throw ValidationException::withMessages([
                'description' => ['Please enter a description.'],
            ]);
        }
        $base['description'] = $clean;

        return $base;
    }

    /**
     * @return list<string>|null
     */
    private function parseBullets(?string $text): ?array
    {
        if ($text === null || trim($text) === '') {
            return null;
        }
        $lines = preg_split('/\r\n|\r|\n/', $text) ?: [];
        $out = [];
        foreach ($lines as $line) {
            $t = trim($line);
            if ($t !== '') {
                $out[] = $t;
            }
        }

        return $out === [] ? null : $out;
    }

    /**
     * Strip unsafe tags/attributes from CKEditor HTML (admin-entered).
     */
    private function sanitizeCareDescriptionHtml(string $html): ?string
    {
        $t = trim($html);
        if ($t === '') {
            return null;
        }
        $t = preg_replace('/<\s*(script|style|iframe|object|embed|form|input|button)[^>]*>.*?<\s*\/\s*\\1\s*>/is', '', $t) ?? $t;
        $t = preg_replace('/<\s*(script|style|iframe|object|embed)[^>]*\/?\s*>/i', '', $t) ?? $t;
        $allowed = '<p><div><br><span><strong><b><em><i><u><h2><h3><h4><ul><ol><li><a><blockquote>';
        $t = strip_tags($t, $allowed);
        $t = trim($t);

        return $t === '' ? null : $t;
    }
}
