<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreEmployeeRequest;
use App\Http\Requests\Admin\UpdateEmployeeRequest;
use App\Models\Designation;
use App\Models\Employee;
use App\Support\AdminPermissionCatalog;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class EmployeeController extends Controller
{
    /** @var array<string, string> */
    private const FILE_DIRS = [
        'aadhar_document' => 'employees/aadhar',
        'pan_document' => 'employees/pan',
        'supporting_document' => 'employees/documents',
        'photo' => 'employees/photos',
    ];

    public function index(): View
    {
        $employees = Employee::query()
            ->with('designation')
            ->orderBy('name')
            ->orderBy('id')
            ->get();

        return view('admin.employees.index', compact('employees'));
    }

    public function create(): View
    {
        return view('admin.employees.form', [
            'employee' => new Employee,
            'mode' => 'create',
            'designations' => $this->designationOptions(),
        ]);
    }

    public function store(StoreEmployeeRequest $request): RedirectResponse
    {
        $data = $this->employeePayload($request);
        $data['is_active'] = $request->boolean('is_active', true);

        foreach (array_keys(self::FILE_DIRS) as $field) {
            if ($request->hasFile($field)) {
                $data[$field] = $request->file($field)->store(self::FILE_DIRS[$field], 'public');
            }
        }

        $data['menu_permissions'] = AdminPermissionCatalog::normalizePermissions($request->input('permissions', []));

        $employee = Employee::query()->create($data);

        return redirect()
            ->route('admin.employees.edit', $employee)
            ->with('status', 'Employee created.');
    }

    public function edit(Employee $employee): View
    {
        return view('admin.employees.form', [
            'employee' => $employee->load('designation'),
            'mode' => 'edit',
            'designations' => $this->designationOptions($employee),
        ]);
    }

    public function update(UpdateEmployeeRequest $request, Employee $employee): RedirectResponse
    {
        $data = $this->employeePayload($request);
        $data['is_active'] = $request->boolean('is_active', $employee->is_active);

        foreach (array_keys(self::FILE_DIRS) as $field) {
            $removeKey = match ($field) {
                'aadhar_document' => 'remove_aadhar_document',
                'pan_document' => 'remove_pan_document',
                'supporting_document' => 'remove_supporting_document',
                'photo' => 'remove_photo',
                default => null,
            };

            if ($request->hasFile($field)) {
                if ($employee->{$field}) {
                    Storage::disk('public')->delete($employee->{$field});
                }
                $data[$field] = $request->file($field)->store(self::FILE_DIRS[$field], 'public');

                continue;
            }

            if ($removeKey && $request->boolean($removeKey)) {
                if ($employee->{$field}) {
                    Storage::disk('public')->delete($employee->{$field});
                }
                $data[$field] = null;

                continue;
            }

            unset($data[$field]);
        }

        $data['menu_permissions'] = AdminPermissionCatalog::normalizePermissions($request->input('permissions', []));

        $employee->update($data);

        return redirect()
            ->route('admin.employees.edit', $employee)
            ->with('status', 'Employee updated.');
    }

    public function destroy(Employee $employee): RedirectResponse
    {
        foreach (array_keys(self::FILE_DIRS) as $field) {
            if ($employee->{$field}) {
                Storage::disk('public')->delete($employee->{$field});
            }
        }

        $employee->delete();

        return redirect()
            ->route('admin.employees.index')
            ->with('status', 'Employee deleted.');
    }

    /**
     * @return Collection<int, Designation>
     */
    private function designationOptions(?Employee $forEmployee = null)
    {
        return Designation::query()
            ->where(function ($q) use ($forEmployee) {
                $q->where('is_active', true);
                if ($forEmployee?->designation_id) {
                    $q->orWhere('id', $forEmployee->designation_id);
                }
            })
            ->orderBy('name')
            ->orderBy('id')
            ->get();
    }

    /** @var list<string> */
    private const FILE_FIELD_KEYS = ['aadhar_document', 'pan_document', 'supporting_document', 'photo'];

    /** @var list<string> */
    private const REMOVE_FIELD_KEYS = [
        'remove_aadhar_document',
        'remove_pan_document',
        'remove_supporting_document',
        'remove_photo',
    ];

    /**
     * @return array<string, mixed>
     */
    private function employeePayload(StoreEmployeeRequest|UpdateEmployeeRequest $request): array
    {
        $data = collect($request->validated())
            ->except(array_merge(self::FILE_FIELD_KEYS, self::REMOVE_FIELD_KEYS))
            ->all();
        unset($data['new_designation']);

        $newName = trim((string) $request->input('new_designation', ''));
        if ($newName !== '') {
            $designation = Designation::query()->firstOrCreate(
                ['name' => $newName],
                ['is_active' => true]
            );
            $data['designation_id'] = $designation->id;
        } else {
            $designationId = $data['designation_id'] ?? null;
            $data['designation_id'] = $designationId ? (int) $designationId : null;
        }

        return $data;
    }
}
