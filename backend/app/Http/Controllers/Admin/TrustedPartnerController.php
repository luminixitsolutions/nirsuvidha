<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreTrustedPartnerRequest;
use App\Http\Requests\Admin\UpdateTrustedPartnerRequest;
use App\Models\TrustedPartner;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class TrustedPartnerController extends Controller
{
    public function index(): View
    {
        $trustedPartners = TrustedPartner::query()
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        return view('admin.trusted_partners.index', compact('trustedPartners'));
    }

    public function create(): View
    {
        return view('admin.trusted_partners.form', [
            'trustedPartner' => new TrustedPartner,
            'mode' => 'create',
        ]);
    }

    public function store(StoreTrustedPartnerRequest $request): RedirectResponse
    {
        $data = [
            'name' => (string) $request->input('name'),
            'sort_order' => (int) $request->input('sort_order', 0),
            'is_active' => $request->boolean('is_active'),
        ];
        $data['logo'] = $request->hasFile('logo')
            ? $request->file('logo')->store('trusted_partners/logos', 'public')
            : null;

        $p = TrustedPartner::query()->create($data);

        return redirect()
            ->route('admin.trusted_partners.edit', $p)
            ->with('status', 'Trusted partner created.');
    }

    public function edit(TrustedPartner $trustedPartner): View
    {
        return view('admin.trusted_partners.form', [
            'trustedPartner' => $trustedPartner,
            'mode' => 'edit',
        ]);
    }

    public function update(UpdateTrustedPartnerRequest $request, TrustedPartner $trustedPartner): RedirectResponse
    {
        $data = [
            'name' => (string) $request->input('name'),
            'sort_order' => (int) $request->input('sort_order', $trustedPartner->sort_order),
            'is_active' => $request->boolean('is_active'),
        ];

        if ($request->boolean('remove_logo') && $trustedPartner->logo) {
            Storage::disk('public')->delete($trustedPartner->logo);
            $data['logo'] = null;
        } elseif ($request->hasFile('logo')) {
            if ($trustedPartner->logo) {
                Storage::disk('public')->delete($trustedPartner->logo);
            }
            $data['logo'] = $request->file('logo')->store('trusted_partners/logos', 'public');
        } else {
            unset($data['logo']);
        }

        $trustedPartner->update($data);

        return redirect()
            ->route('admin.trusted_partners.edit', $trustedPartner)
            ->with('status', 'Trusted partner updated.');
    }

    public function destroy(TrustedPartner $trustedPartner): RedirectResponse
    {
        if ($trustedPartner->logo) {
            Storage::disk('public')->delete($trustedPartner->logo);
        }
        $trustedPartner->delete();

        return redirect()
            ->route('admin.trusted_partners.index')
            ->with('status', 'Trusted partner deleted.');
    }
}
