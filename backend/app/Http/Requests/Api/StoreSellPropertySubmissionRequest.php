<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class StoreSellPropertySubmissionRequest extends FormRequest
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
            'has_api_geo' => ['required', 'in:0,1'],
            'state_id' => ['nullable', 'integer', 'exists:re_states,id'],
            'city_id' => ['nullable', 'integer', 'exists:re_cities,id'],
            'state_slug' => ['nullable', 'string', 'max:120'],
            'city_slug' => ['nullable', 'string', 'max:120'],
            'locality' => ['required', 'string', 'max:255'],
            'property_type_slug' => ['required', 'string', 'max:120'],
            'bhk_slug' => ['nullable', 'string', 'max:120'],
            'built_up_sqft' => ['nullable', 'string', 'max:64'],
            'carpet_sqft' => ['nullable', 'string', 'max:64'],
            'expected_price' => ['required', 'string', 'max:255'],
            'price_negotiable' => ['required', 'in:yes,fixed'],
            'contact_mode' => ['required', 'in:email,whatsapp,team'],
            'whatsapp_number' => ['nullable', 'string', 'max:64'],
            'best_time_ist' => ['required', 'string', 'max:255'],
            'photos' => ['nullable', 'array', 'max:12'],
            'photos.*' => ['file', 'image', 'max:5120'],
            'documents' => ['nullable', 'array', 'max:12'],
            'documents.*' => ['file', 'max:15360', 'mimes:pdf,doc,docx,xls,xlsx,csv,txt,jpg,jpeg,png,webp'],
        ];
    }

    public function withValidator(Validator $validator): void
    {
        $validator->after(function (Validator $v): void {
            $api = $this->boolean('has_api_geo');
            if ($api) {
                if (! $this->filled('state_id')) {
                    $v->errors()->add('state_id', 'Select a state.');
                }
                if (! $this->filled('city_id')) {
                    $v->errors()->add('city_id', 'Select a city.');
                }
            } else {
                if (! $this->filled('state_slug')) {
                    $v->errors()->add('state_slug', 'Select a state.');
                }
                if (! $this->filled('city_slug')) {
                    $v->errors()->add('city_slug', 'Select a city.');
                }
            }
            if ($this->input('contact_mode') === 'whatsapp' && ! $this->filled('whatsapp_number')) {
                $v->errors()->add('whatsapp_number', 'WhatsApp number is required for this contact mode.');
            }
        });
    }
}
