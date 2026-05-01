<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSubServiceRequest extends FormRequest
{
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
            'service_id' => ['required', 'integer', 'exists:services,id'],
            'name' => ['required', 'string', 'max:255'],
            'icon' => ['required', 'string', 'max:255'],
            'short_details' => ['required', 'string', 'max:2000'],
            'details' => ['nullable', 'string', 'max:200000'],
            'cases_handled' => ['nullable', 'integer', 'min:0', 'max:9999999'],
            'sort_order' => ['nullable', 'integer', 'min:0', 'max:99999'],
            'is_published' => ['nullable', 'boolean'],
            'photo' => ['nullable', 'file', 'image', 'mimes:jpeg,png,webp,jpg,gif', 'max:5120'],
            'remove_photo' => ['nullable', 'boolean'],
        ];
    }
}
