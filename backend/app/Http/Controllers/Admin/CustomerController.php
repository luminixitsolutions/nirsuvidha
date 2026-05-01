<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreCustomerRequest;
use App\Http\Requests\Admin\UpdateCustomerRequest;
use App\Models\Customer;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class CustomerController extends Controller
{
    /** @var array<string, string> */
    private const FILE_DIRS = [
        'aadhar_document' => 'customers/aadhar',
        'pan_document' => 'customers/pan',
        'supporting_document' => 'customers/documents',
        'photo' => 'customers/photos',
    ];

    public function index(): View
    {
        $customers = Customer::query()
            ->orderBy('name')
            ->orderBy('id')
            ->get();

        return view('admin.customers.index', compact('customers'));
    }

    public function create(): View
    {
        return view('admin.customers.form', [
            'customer' => new Customer,
            'mode' => 'create',
        ]);
    }

    public function store(StoreCustomerRequest $request): RedirectResponse
    {
        $data = collect($request->validated())
            ->except(array_keys(self::FILE_DIRS))
            ->all();
        $data['is_active'] = $request->boolean('is_active', true);

        foreach (array_keys(self::FILE_DIRS) as $field) {
            if ($request->hasFile($field)) {
                $data[$field] = $request->file($field)->store(self::FILE_DIRS[$field], 'public');
            }
        }

        $customer = Customer::query()->create($data);

        return redirect()
            ->route('admin.customers.edit', $customer)
            ->with('status', 'Customer created.');
    }

    public function edit(Customer $customer): View
    {
        return view('admin.customers.form', [
            'customer' => $customer,
            'mode' => 'edit',
        ]);
    }

    public function update(UpdateCustomerRequest $request, Customer $customer): RedirectResponse
    {
        $data = collect($request->validated())
            ->except(array_merge(array_keys(self::FILE_DIRS), [
                'remove_aadhar_document',
                'remove_pan_document',
                'remove_supporting_document',
                'remove_photo',
            ]))
            ->all();
        $data['is_active'] = $request->boolean('is_active', $customer->is_active);

        foreach (array_keys(self::FILE_DIRS) as $field) {
            $removeKey = match ($field) {
                'aadhar_document' => 'remove_aadhar_document',
                'pan_document' => 'remove_pan_document',
                'supporting_document' => 'remove_supporting_document',
                'photo' => 'remove_photo',
                default => null,
            };

            if ($request->hasFile($field)) {
                if ($customer->{$field}) {
                    Storage::disk('public')->delete($customer->{$field});
                }
                $data[$field] = $request->file($field)->store(self::FILE_DIRS[$field], 'public');

                continue;
            }

            if ($removeKey && $request->boolean($removeKey)) {
                if ($customer->{$field}) {
                    Storage::disk('public')->delete($customer->{$field});
                }
                $data[$field] = null;

                continue;
            }

            unset($data[$field]);
        }

        $customer->update($data);

        return redirect()
            ->route('admin.customers.edit', $customer)
            ->with('status', 'Customer updated.');
    }

    public function destroy(Customer $customer): RedirectResponse
    {
        foreach (array_keys(self::FILE_DIRS) as $field) {
            if ($customer->{$field}) {
                Storage::disk('public')->delete($customer->{$field});
            }
        }

        $customer->delete();

        return redirect()
            ->route('admin.customers.index')
            ->with('status', 'Customer deleted.');
    }
}
