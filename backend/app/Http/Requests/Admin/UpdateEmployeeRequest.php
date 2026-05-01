<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateEmployeeRequest extends FormRequest
{
    private const FILE_RULE = ['nullable', 'file', 'max:10240', 'mimes:jpeg,jpg,png,webp,pdf'];

    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        $employee = $this->route('employee');

        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'nullable',
                'email',
                'max:255',
                Rule::unique('employees', 'email')->ignore($employee),
            ],
            'phone' => ['nullable', 'string', 'max:32'],
            'designation_id' => ['nullable', 'integer', 'exists:designations,id'],
            'new_designation' => ['nullable', 'string', 'max:255'],
            'aadhar_number' => ['nullable', 'string', 'max:20'],
            'pan_number' => ['nullable', 'string', 'max:12'],
            'gst_number' => ['nullable', 'string', 'max:20'],
            'aadhar_document' => self::FILE_RULE,
            'pan_document' => self::FILE_RULE,
            'supporting_document' => self::FILE_RULE,
            'photo' => ['nullable', 'file', 'max:5120', 'mimes:jpeg,jpg,png,webp'],
            'remove_aadhar_document' => ['nullable', 'boolean'],
            'remove_pan_document' => ['nullable', 'boolean'],
            'remove_supporting_document' => ['nullable', 'boolean'],
            'remove_photo' => ['nullable', 'boolean'],
            'notes' => ['nullable', 'string', 'max:20000'],
            'is_active' => ['nullable', 'boolean'],
            'permissions' => ['nullable', 'array'],
            'permissions.*' => ['nullable', 'array'],
            'permissions.*.view' => ['nullable', 'boolean'],
            'permissions.*.add' => ['nullable', 'boolean'],
            'permissions.*.edit' => ['nullable', 'boolean'],
            'permissions.*.delete' => ['nullable', 'boolean'],
        ];
    }
}
