<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\State;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;

class CityController extends Controller
{
    public function index(): View
    {
        $cities = City::query()
            ->with('state.country')
            ->orderBy('state_id')
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get();

        return view('admin.real_estate.cities.index', compact('cities'));
    }

    public function create(): View
    {
        return view('admin.real_estate.cities.form', [
            'city' => new City,
            'states' => State::query()->with('country')->orderBy('country_id')->orderBy('sort_order')->orderBy('name')->get(),
            'mode' => 'create',
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_active'] = $request->boolean('is_active', true);
        $data['slug'] = $this->uniqueSlugForState((int) $data['state_id'], $data['slug'], $data['name']);

        $city = City::query()->create($data);

        return redirect()
            ->route('admin.cities.edit', $city)
            ->with('status', 'City created.');
    }

    public function edit(City $city): View
    {
        return view('admin.real_estate.cities.form', [
            'city' => $city,
            'states' => State::query()->with('country')->orderBy('country_id')->orderBy('sort_order')->orderBy('name')->get(),
            'mode' => 'edit',
        ]);
    }

    public function update(Request $request, City $city): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_active'] = $request->boolean('is_active', $city->is_active);
        $data['slug'] = $this->uniqueSlugForState((int) $data['state_id'], $data['slug'], $data['name'], $city->id);

        $city->update($data);

        return redirect()
            ->route('admin.cities.edit', $city)
            ->with('status', 'City updated.');
    }

    public function destroy(City $city): RedirectResponse
    {
        $city->delete();

        return redirect()
            ->route('admin.cities.index')
            ->with('status', 'City deleted.');
    }

    /**
     * @return array{state_id: int, name: string, slug: string|null, sort_order: int}
     */
    private function validated(Request $request): array
    {
        return $request->validate([
            'state_id' => ['required', 'exists:re_states,id'],
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:160'],
            'sort_order' => ['nullable', 'integer', 'min:0', 'max:999999'],
        ]) + ['sort_order' => (int) $request->input('sort_order', 0)];
    }

    private function uniqueSlugForState(int $stateId, ?string $slug, string $name, ?int $ignoreCityId = null): string
    {
        $base = Str::slug($slug ?: $name);
        if ($base === '') {
            $base = 'item';
        }
        $candidate = $base;
        $n = 2;
        while (City::query()
            ->where('state_id', $stateId)
            ->where('slug', $candidate)
            ->when($ignoreCityId !== null, fn ($q) => $q->where('id', '!=', $ignoreCityId))
            ->exists()) {
            $candidate = $base.'-'.$n;
            $n++;
        }

        return $candidate;
    }
}
