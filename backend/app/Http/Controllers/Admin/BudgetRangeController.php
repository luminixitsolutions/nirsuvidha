<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BudgetRange;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;

class BudgetRangeController extends Controller
{
    public function index(): View
    {
        $budgetRanges = BudgetRange::query()
            ->orderBy('sort_order')
            ->orderBy('label')
            ->get();

        return view('admin.real_estate.budget_ranges.index', compact('budgetRanges'));
    }

    public function create(): View
    {
        return view('admin.real_estate.budget_ranges.form', [
            'budgetRange' => new BudgetRange,
            'mode' => 'create',
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_active'] = $request->boolean('is_active', true);
        $data['slug'] = $this->uniqueSlug(BudgetRange::class, $data['slug'], $data['label']);

        $budgetRange = BudgetRange::query()->create($data);

        return redirect()
            ->route('admin.budget_ranges.edit', $budgetRange)
            ->with('status', 'Budget range created.');
    }

    public function edit(BudgetRange $budget_range): View
    {
        return view('admin.real_estate.budget_ranges.form', [
            'budgetRange' => $budget_range,
            'mode' => 'edit',
        ]);
    }

    public function update(Request $request, BudgetRange $budget_range): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_active'] = $request->boolean('is_active', $budget_range->is_active);
        $data['slug'] = $this->uniqueSlug(BudgetRange::class, $data['slug'], $data['label'], $budget_range->id);

        $budget_range->update($data);

        return redirect()
            ->route('admin.budget_ranges.edit', $budget_range)
            ->with('status', 'Budget range updated.');
    }

    public function destroy(BudgetRange $budget_range): RedirectResponse
    {
        $budget_range->delete();

        return redirect()
            ->route('admin.budget_ranges.index')
            ->with('status', 'Budget range deleted.');
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
