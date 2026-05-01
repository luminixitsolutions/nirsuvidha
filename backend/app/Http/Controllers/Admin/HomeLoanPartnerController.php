<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HomeLoanPartner;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class HomeLoanPartnerController extends Controller
{
    public function index(): View
    {
        $partners = HomeLoanPartner::query()
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        return view('admin.real_estate.home_loan_partners.index', compact('partners'));
    }

    public function create(): View
    {
        return view('admin.real_estate.home_loan_partners.form', [
            'partner' => new HomeLoanPartner([
                'icon_class' => 'fa-solid fa-building-columns',
                'sort_order' => 0,
                'is_published' => true,
            ]),
            'mode' => 'create',
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_published'] = $request->boolean('is_published', true);

        $partner = HomeLoanPartner::query()->create($data);

        return redirect()
            ->route('admin.home_loan_partners.edit', $partner)
            ->with('status', 'Home loan partner created.');
    }

    public function edit(HomeLoanPartner $home_loan_partner): View
    {
        return view('admin.real_estate.home_loan_partners.form', [
            'partner' => $home_loan_partner,
            'mode' => 'edit',
        ]);
    }

    public function update(Request $request, HomeLoanPartner $home_loan_partner): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_published'] = $request->boolean('is_published', $home_loan_partner->is_published);

        $home_loan_partner->update($data);

        return redirect()
            ->route('admin.home_loan_partners.edit', $home_loan_partner)
            ->with('status', 'Home loan partner updated.');
    }

    public function destroy(HomeLoanPartner $home_loan_partner): RedirectResponse
    {
        $home_loan_partner->delete();

        return redirect()
            ->route('admin.home_loan_partners.index')
            ->with('status', 'Home loan partner deleted.');
    }

    /**
     * @return array<string, mixed>
     */
    private function validated(Request $request): array
    {
        $base = $request->validate([
            'bank_name' => ['required', 'string', 'max:255'],
            'icon_class' => ['nullable', 'string', 'max:255'],
            'interest_rate_display' => ['required', 'string', 'max:64'],
            'processing_fee_display' => ['required', 'string', 'max:64'],
            'max_tenure_display' => ['required', 'string', 'max:64'],
            'sort_order' => ['nullable', 'integer', 'min:0', 'max:999999'],
        ]);

        $base['sort_order'] = (int) ($base['sort_order'] ?? 0);

        if (isset($base['icon_class']) && trim((string) $base['icon_class']) === '') {
            $base['icon_class'] = null;
        }

        return $base;
    }
}
