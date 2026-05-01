<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UpdatePartnerOnboardingRequest;
use App\Http\Requests\Api\StorePartnerOnboardingRequest;
use App\Models\PartnerOnboarding;
use App\Support\PartnerOnboardingLists;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class PartnerOnboardingController extends Controller
{
    public function index(): View
    {
        $rows = PartnerOnboarding::query()
            ->orderByDesc('id')
            ->get();

        return view('admin.partner_onboardings.index', compact('rows'));
    }

    public function create(): View
    {
        return view('admin.partner_onboardings.create', [
            'p' => new PartnerOnboarding,
            'lists' => $this->listsForForm(),
        ]);
    }

    public function store(StorePartnerOnboardingRequest $request): RedirectResponse
    {
        $record = PartnerOnboarding::createFromStoreRequest($request);

        return redirect()
            ->route('admin.partner_onboardings.edit', $record)
            ->with('status', 'Partner onboarding created.');
    }

    public function show(PartnerOnboarding $partner_onboarding): View
    {
        return view('admin.partner_onboardings.show', [
            'p' => $partner_onboarding,
            'lists' => [
                'states' => PartnerOnboardingLists::indianStates(),
                'languages' => PartnerOnboardingLists::languages(),
            ],
        ]);
    }

    public function edit(PartnerOnboarding $partner_onboarding): View
    {
        return view('admin.partner_onboardings.edit', [
            'p' => $partner_onboarding,
            'lists' => $this->listsForForm(),
        ]);
    }

    /**
     * @return array<string, mixed>
     */
    private function listsForForm(): array
    {
        return [
            'states' => PartnerOnboardingLists::indianStates(),
            'languages' => PartnerOnboardingLists::languages(),
            'practiceAreas' => PartnerOnboardingLists::practiceAreas(),
            'courtLevels' => PartnerOnboardingLists::courtLevels(),
            'clientCategories' => PartnerOnboardingLists::clientCategories(),
            'caSpecializations' => PartnerOnboardingLists::caSpecializations(),
            'industries' => PartnerOnboardingLists::industries(),
            'clientSizePreference' => PartnerOnboardingLists::clientSizePreference(),
            'softwareExpertise' => PartnerOnboardingLists::softwareExpertise(),
            'additionalCertifications' => PartnerOnboardingLists::additionalCertifications(),
            'propertyTypes' => PartnerOnboardingLists::propertyTypes(),
            'transactionTypes' => PartnerOnboardingLists::transactionTypes(),
            'priceRangeExpertise' => PartnerOnboardingLists::priceRangeExpertise(),
        ];
    }

    public function update(UpdatePartnerOnboardingRequest $request, PartnerOnboarding $partner_onboarding): RedirectResponse
    {
        $data = $request->validated();
        $data = PartnerOnboarding::nullUnusedBranchFields($data);

        $partner_onboarding->update($data);

        return redirect()
            ->route('admin.partner_onboardings.edit', $partner_onboarding)
            ->with('status', 'Partner onboarding updated.');
    }

    public function destroy(PartnerOnboarding $partner_onboarding): RedirectResponse
    {
        $partner_onboarding->deleteUploadedFiles();

        $partner_onboarding->delete();

        return redirect()
            ->route('admin.partner_onboardings.index')
            ->with('status', 'Submission deleted.');
    }
}
