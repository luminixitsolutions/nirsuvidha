<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class StoreCustomerRequest extends FormRequest
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
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['nullable', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:32'],
            'company' => ['nullable', 'string', 'max:255'],
            'aadhar_number' => ['nullable', 'string', 'max:20'],
            'pan_number' => ['nullable', 'string', 'max:12'],
            'gst_number' => ['nullable', 'string', 'max:20'],
            'aadhar_document' => self::FILE_RULE,
            'pan_document' => self::FILE_RULE,
            'supporting_document' => self::FILE_RULE,
            'photo' => ['nullable', 'file', 'max:5120', 'mimes:jpeg,jpg,png,webp'],
            'notes' => ['nullable', 'string', 'max:20000'],
            'is_active' => ['nullable', 'boolean'],
        ];
    }
}
