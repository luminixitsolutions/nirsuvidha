<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreDesignationRequest;
use App\Http\Requests\Admin\UpdateDesignationRequest;
use App\Models\Designation;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class DesignationController extends Controller
{
    public function index(): View
    {
        $designations = Designation::query()
            ->orderBy('name')
            ->orderBy('id')
            ->get();

        return view('admin.designations.index', compact('designations'));
    }

    public function create(): View
    {
        return view('admin.designations.form', [
            'designation' => new Designation,
            'mode' => 'create',
        ]);
    }

    public function store(StoreDesignationRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $data['is_active'] = $request->boolean('is_active', true);

        $designation = Designation::query()->create($data);

        return redirect()
            ->route('admin.designations.edit', $designation)
            ->with('status', 'Designation created.');
    }

    public function edit(Designation $designation): View
    {
        return view('admin.designations.form', [
            'designation' => $designation,
            'mode' => 'edit',
        ]);
    }

    public function update(UpdateDesignationRequest $request, Designation $designation): RedirectResponse
    {
        $data = $request->validated();
        $data['is_active'] = $request->boolean('is_active', $designation->is_active);

        $designation->update($data);

        return redirect()
            ->route('admin.designations.edit', $designation)
            ->with('status', 'Designation updated.');
    }

    public function destroy(Designation $designation): RedirectResponse
    {
        $designation->delete();

        return redirect()
            ->route('admin.designations.index')
            ->with('status', 'Designation deleted.');
    }
}
