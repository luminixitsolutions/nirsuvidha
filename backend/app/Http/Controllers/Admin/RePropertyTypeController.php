<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PropertyType;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;

class RePropertyTypeController extends Controller
{
    public function index(): View
    {
        $propertyTypes = PropertyType::query()
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get();

        return view('admin.real_estate.property_types.index', compact('propertyTypes'));
    }

    public function create(): View
    {
        return view('admin.real_estate.property_types.form', [
            'propertyType' => new PropertyType,
            'mode' => 'create',
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_active'] = $request->boolean('is_active', true);
        $data['slug'] = $this->uniqueSlug(PropertyType::class, $data['slug'], $data['name']);

        $propertyType = PropertyType::query()->create($data);

        return redirect()
            ->route('admin.property_types.edit', $propertyType)
            ->with('status', 'Property type created.');
    }

    public function edit(PropertyType $property_type): View
    {
        return view('admin.real_estate.property_types.form', [
            'propertyType' => $property_type,
            'mode' => 'edit',
        ]);
    }

    public function update(Request $request, PropertyType $property_type): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_active'] = $request->boolean('is_active', $property_type->is_active);
        $data['slug'] = $this->uniqueSlug(PropertyType::class, $data['slug'], $data['name'], $property_type->id);

        $property_type->update($data);

        return redirect()
            ->route('admin.property_types.edit', $property_type)
            ->with('status', 'Property type updated.');
    }

    public function destroy(PropertyType $property_type): RedirectResponse
    {
        $property_type->delete();

        return redirect()
            ->route('admin.property_types.index')
            ->with('status', 'Property type deleted.');
    }

    /**
     * @return array{name: string, slug: string|null, sort_order: int}
     */
    private function validated(Request $request): array
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:160'],
            'sort_order' => ['nullable', 'integer', 'min:0', 'max:999999'],
        ]) + ['sort_order' => (int) $request->input('sort_order', 0)];
    }

    private function uniqueSlug(string $modelClass, ?string $slug, string $name, ?int $ignoreId = null): string
    {
        $base = Str::slug($slug ?: $name);
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
