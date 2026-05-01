<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BhkType;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;

class BhkTypeController extends Controller
{
    public function index(): View
    {
        $bhkTypes = BhkType::query()
            ->orderBy('sort_order')
            ->orderBy('label')
            ->get();

        return view('admin.real_estate.bhk_types.index', compact('bhkTypes'));
    }

    public function create(): View
    {
        return view('admin.real_estate.bhk_types.form', [
            'bhkType' => new BhkType,
            'mode' => 'create',
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_active'] = $request->boolean('is_active', true);
        $data['slug'] = $this->uniqueSlug(BhkType::class, $data['slug'], $data['label']);

        $bhkType = BhkType::query()->create($data);

        return redirect()
            ->route('admin.bhk_types.edit', $bhkType)
            ->with('status', 'BHK type created.');
    }

    public function edit(BhkType $bhk_type): View
    {
        return view('admin.real_estate.bhk_types.form', [
            'bhkType' => $bhk_type,
            'mode' => 'edit',
        ]);
    }

    public function update(Request $request, BhkType $bhk_type): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_active'] = $request->boolean('is_active', $bhk_type->is_active);
        $data['slug'] = $this->uniqueSlug(BhkType::class, $data['slug'], $data['label'], $bhk_type->id);

        $bhk_type->update($data);

        return redirect()
            ->route('admin.bhk_types.edit', $bhk_type)
            ->with('status', 'BHK type updated.');
    }

    public function destroy(BhkType $bhk_type): RedirectResponse
    {
        $bhk_type->delete();

        return redirect()
            ->route('admin.bhk_types.index')
            ->with('status', 'BHK type deleted.');
    }

    /**
     * @return array{label: string, slug: string|null, sort_order: int}
     */
    private function validated(Request $request): array
    {
        return $request->validate([
            'label' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:160'],
            'sort_order' => ['nullable', 'integer', 'min:0', 'max:999999'],
        ]) + ['sort_order' => (int) $request->input('sort_order', 0)];
    }

    private function uniqueSlug(string $modelClass, ?string $slug, string $label, ?int $ignoreId = null): string
    {
        $base = Str::slug($slug ?: $label);
        if ($base === '') {
            $base = 'item';
        }
        $candidate = $base;
        $n = 2;
        while ($modelClass::query()
            ->where('slug', $candidate)
            ->when($ignoreId !== null, fn ($q) => $q->where('id', '!=', $ignoreId))
            ->exists()) {
            $candidate = $base.'-'.$n;
            $n++;
        }

        return $candidate;
    }
}
