<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;

class CountryController extends Controller
{
    public function index(): View
    {
        $countries = Country::query()
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get();

        return view('admin.real_estate.countries.index', compact('countries'));
    }

    public function create(): View
    {
        return view('admin.real_estate.countries.form', [
            'country' => new Country,
            'mode' => 'create',
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_active'] = $request->boolean('is_active', true);
        $data['slug'] = $this->uniqueSlug(Country::class, $data['slug'], $data['name']);

        $country = Country::query()->create($data);

        return redirect()
            ->route('admin.countries.edit', $country)
            ->with('status', 'Country created.');
    }

    public function edit(Country $country): View
    {
        return view('admin.real_estate.countries.form', [
            'country' => $country,
            'mode' => 'edit',
        ]);
    }

    public function update(Request $request, Country $country): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_active'] = $request->boolean('is_active', $country->is_active);
        $data['slug'] = $this->uniqueSlug(Country::class, $data['slug'], $data['name'], $country->id);

        $country->update($data);

        return redirect()
            ->route('admin.countries.edit', $country)
            ->with('status', 'Country updated.');
    }

    public function destroy(Country $country): RedirectResponse
    {
        $country->delete();

        return redirect()
            ->route('admin.countries.index')
            ->with('status', 'Country deleted.');
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
