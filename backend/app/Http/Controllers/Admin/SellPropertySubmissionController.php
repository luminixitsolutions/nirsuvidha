<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SellPropertySubmission;
use App\Services\ApproveSellPropertySubmission;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class SellPropertySubmissionController extends Controller
{
    public function index(): View
    {
        $rows = SellPropertySubmission::query()
            ->with(['propertyListing', 'state', 'city'])
            ->orderByRaw("CASE status WHEN 'pending' THEN 0 WHEN 'approved' THEN 1 ELSE 2 END")
            ->orderByDesc('created_at')
            ->get();

        return view('admin.sell_property_submissions.index', compact('rows'));
    }

    public function show(SellPropertySubmission $sell_property_submission): View
    {
        $sell_property_submission->load(['propertyListing', 'state', 'city']);

        return view('admin.sell_property_submissions.show', [
            's' => $sell_property_submission,
        ]);
    }

    public function approve(
        Request $request,
        SellPropertySubmission $sell_property_submission,
        ApproveSellPropertySubmission $approver,
    ): RedirectResponse {
        try {
            $approver->handle($sell_property_submission->fresh());
        } catch (\Throwable $e) {
            return redirect()
                ->route('admin.sell_property_submissions.show', $sell_property_submission)
                ->withErrors(['approve' => $e->getMessage()]);
        }

        return redirect()
            ->route('admin.sell_property_submissions.show', $sell_property_submission->fresh())
            ->with('status', 'Approved and published as a property listing.');
    }

    public function reject(Request $request, SellPropertySubmission $sell_property_submission): RedirectResponse
    {
        $request->validate([
            'rejected_reason' => ['nullable', 'string', 'max:2000'],
        ]);

        if ($sell_property_submission->status !== SellPropertySubmission::STATUS_PENDING) {
            return redirect()
                ->route('admin.sell_property_submissions.show', $sell_property_submission)
                ->withErrors(['reject' => 'Only pending submissions can be rejected.']);
        }

        $sell_property_submission->status = SellPropertySubmission::STATUS_REJECTED;
        $sell_property_submission->rejected_reason = $request->input('rejected_reason');
        $sell_property_submission->save();

        return redirect()
            ->route('admin.sell_property_submissions.show', $sell_property_submission)
            ->with('status', 'Submission rejected.');
    }
}
