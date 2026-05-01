<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Country;
use App\Models\State;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;

class StateController extends Controller
{
    public function index(): View
    {
        $states = State::query()
            ->with('country')
            ->orderBy('country_id')
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get();

        return view('admin.real_estate.states.index', compact('states'));
    }

    public function create(): View
    {
        return view('admin.real_estate.states.form', [
            'state' => new State,
            'countries' => Country::query()->orderBy('sort_order')->orderBy('name')->get(),
            'mode' => 'create',
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_active'] = $request->boolean('is_active', true);
        $data['slug'] = $this->uniqueSlugForCountry((int) $data['country_id'], $data['slug'], $data['name']);

        $state = State::query()->create($data);

        return redirect()
            ->route('admin.states.edit', $state)
            ->with('status', 'State created.');
    }

    public function edit(State $state): View
    {
        return view('admin.real_estate.states.form', [
            'state' => $state,
            'countries' => Country::query()->orderBy('sort_order')->orderBy('name')->get(),
            'mode' => 'edit',
        ]);
    }

    public function update(Request $request, State $state): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_active'] = $request->boolean('is_active', $state->is_active);
        $data['slug'] = $this->uniqueSlugForCountry((int) $data['country_id'], $data['slug'], $data['name'], $state->id);

        $state->update($data);

        return redirect()
            ->route('admin.states.edit', $state)
            ->with('status', 'State updated.');
    }

    public function destroy(State $state): RedirectResponse
    {
        $state->delete();

        return redirect()
            ->route('admin.states.index')
            ->with('status', 'State deleted.');
    }

    /**
     * @return array{country_id: int, name: string, slug: string|null, sort_order: int}
     */
    private function validated(Request $request): array
    {
        return $request->validate([
            'country_id' => ['required', 'exists:re_countries,id'],
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:160'],
            'sort_order' => ['nullable', 'integer', 'min:0', 'max:999999'],
        ]) + ['sort_order' => (int) $request->input('sort_order', 0)];
    }

    private function uniqueSlugForCountry(int $countryId, ?string $slug, string $name, ?int $ignoreStateId = null): string
    {
        $base = Str::slug($slug ?: $name);
        if ($base === '') {
            $base = 'item';
        }
        $candidate = $base;
        $n = 2;
        while (State::query()
            ->where('country_id', $countryId)
            ->where('slug', $candidate)
            ->when($ignoreStateId !== null, fn ($q) => $q->where('id', '!=', $ignoreStateId))
            ->exists()) {
            $candidate = $base.'-'.$n;
            $n++;
        }

        return $candidate;
    }
}
