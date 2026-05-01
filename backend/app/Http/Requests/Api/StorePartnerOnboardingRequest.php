<?php

namespace App\Http\Requests\Api;

use App\Support\PartnerOnboardingLists;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StorePartnerOnboardingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation(): void
    {
        $jsonArrays = [
            'operating_states',
            'languages_spoken',
            'practice_areas',
            'court_levels',
            'client_categories',
            'specializations',
            'industry_expertise',
            'client_size_preference',
            'software_expertise',
            'additional_certifications',
            'property_types',
            'transaction_types',
            'price_range_expertise',
        ];
        foreach ($jsonArrays as $key) {
            $v = $this->input($key);
            if (is_array($v)) {
                continue;
            }
            if (is_string($v) && $v !== '') {
                $dec = json_decode($v, true);
                if (is_array($dec)) {
                    $this->merge([$key => $dec]);
                }
            }
        }

        $this->merge([
            'agree_terms' => $this->boolean('agree_terms'),
        ]);
    }

    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        $states = PartnerOnboardingLists::indianStates();
        $langs = PartnerOnboardingLists::languages();

        $base = [
            'partner_type' => ['required', Rule::in(['lawyer', 'accountant', 'property-broker'])],
            'full_name' => ['required', 'string', 'min:2'],
            'email' => ['required', 'email'],
            'phone_number' => ['required', 'regex:/^[6-9]\d{9}$/'],
            'business_name' => ['required', 'string', 'min:2'],
            'years_experience' => ['required', 'string', 'min:1'],
            'primary_city' => ['required', 'string', 'min:2'],
            'service_radius' => ['required', Rule::in(['city-only', 'metro-area', 'state-wide', 'pan-india', 'international'])],
            'operating_states' => ['required', 'array', 'min:1'],
            'operating_states.*' => ['string', Rule::in($states)],
            'languages_spoken' => ['required', 'array', 'min:1'],
            'languages_spoken.*' => ['string', Rule::in($langs)],
            'consultation_fee' => ['required', 'string', 'min:1'],
            'availability_type' => ['required', Rule::in(['full-time', 'part-time', 'consultation-only'])],
            'response_time' => ['required', Rule::in(['within-1-hour', 'within-4-hours', 'within-24-hours', 'within-48-hours'])],
            'profile_photo' => ['nullable', 'file', 'mimes:jpg,jpeg,png', 'max:10240'],
            'license' => ['required', 'file', 'mimes:pdf,jpg,jpeg,png', 'max:10240'],
            'partner_agreement' => ['required', 'file', 'mimes:pdf', 'max:10240'],
            'unique_selling_point' => ['required', 'string', 'min:20'],
            'success_stories' => ['nullable', 'string'],
            'agree_terms' => ['accepted'],
        ];

        $lawyer = [
            'bar_council_state' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'lawyer'),
                'nullable',
                'string',
                Rule::in($states),
            ],
            'bar_registration_number' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'lawyer'),
                'nullable',
                'string',
                'min:1',
            ],
            'law_school' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'lawyer'),
                'nullable',
                'string',
                'min:1',
            ],
            'practice_areas' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'lawyer'),
                'nullable',
                'array',
                'min:1',
            ],
            'practice_areas.*' => ['string', Rule::in(PartnerOnboardingLists::practiceAreas())],
            'court_levels' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'lawyer'),
                'nullable',
                'array',
                'min:1',
            ],
            'court_levels.*' => ['string', Rule::in(PartnerOnboardingLists::courtLevels())],
            'client_categories' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'lawyer'),
                'nullable',
                'array',
                'min:1',
            ],
            'client_categories.*' => ['string', Rule::in(PartnerOnboardingLists::clientCategories())],
            'notable_case_types' => ['nullable', 'string'],
        ];

        $accountant = [
            'icai_membership_number' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'accountant'),
                'nullable',
                'string',
                'min:1',
            ],
            'ca_final_year' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'accountant'),
                'nullable',
                'string',
                'min:4',
            ],
            'specializations' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'accountant'),
                'nullable',
                'array',
                'min:1',
            ],
            'specializations.*' => ['string', Rule::in(PartnerOnboardingLists::caSpecializations())],
            'industry_expertise' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'accountant'),
                'nullable',
                'array',
                'min:1',
            ],
            'industry_expertise.*' => ['string', Rule::in(PartnerOnboardingLists::industries())],
            'client_size_preference' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'accountant'),
                'nullable',
                'array',
                'min:1',
            ],
            'client_size_preference.*' => ['string', Rule::in(PartnerOnboardingLists::clientSizePreference())],
            'software_expertise' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'accountant'),
                'nullable',
                'array',
                'min:1',
            ],
            'software_expertise.*' => ['string', Rule::in(PartnerOnboardingLists::softwareExpertise())],
            'additional_certifications' => ['nullable', 'array'],
            'additional_certifications.*' => ['string', Rule::in(PartnerOnboardingLists::additionalCertifications())],
        ];

        $broker = [
            'rera_registration_number' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'property-broker'),
                'nullable',
                'string',
                'min:1',
            ],
            'rera_state' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'property-broker'),
                'nullable',
                'string',
                Rule::in($states),
            ],
            'team_size' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'property-broker'),
                'nullable',
                'string',
                Rule::in(['solo', '2-5', '6-10', '11-25', '25+']),
            ],
            'property_types' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'property-broker'),
                'nullable',
                'array',
                'min:1',
            ],
            'property_types.*' => ['string', Rule::in(PartnerOnboardingLists::propertyTypes())],
            'transaction_types' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'property-broker'),
                'nullable',
                'array',
                'min:1',
            ],
            'transaction_types.*' => ['string', Rule::in(PartnerOnboardingLists::transactionTypes())],
            'price_range_expertise' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'property-broker'),
                'nullable',
                'array',
                'min:1',
            ],
            'price_range_expertise.*' => ['string', Rule::in(PartnerOnboardingLists::priceRangeExpertise())],
            'locality_expertise' => [
                Rule::requiredIf(fn () => $this->input('partner_type') === 'property-broker'),
                'nullable',
                'string',
                'min:10',
            ],
            'notable_projects' => ['nullable', 'string'],
        ];

        return array_merge($base, $lawyer, $accountant, $broker);
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'partner_type.required' => 'Please select a partner type',
            'phone_number.regex' => 'Please enter a valid Indian mobile number',
            'full_name.min' => 'Full name must be at least 2 characters',
            'business_name.min' => 'Business/Firm name is required',
            'years_experience.min' => 'Years of experience is required',
            'primary_city.min' => 'Primary city is required',
            'operating_states.min' => 'Select at least one operating state',
            'languages_spoken.min' => 'Select at least one language',
            'availability_type.required' => 'Please select availability type',
            'unique_selling_point.min' => 'Please describe what makes you unique (minimum 20 characters)',
            'agree_terms.accepted' => 'You must agree to the Terms & Conditions',
        ];
    }
}
