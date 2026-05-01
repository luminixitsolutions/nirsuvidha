<?php

namespace App\Models;

use App\Http\Requests\Api\StorePartnerOnboardingRequest;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class PartnerOnboarding extends Model
{
    protected $fillable = [
        'partner_type',
        'full_name',
        'email',
        'phone_number',
        'business_name',
        'years_experience',
        'primary_city',
        'service_radius',
        'operating_states',
        'languages_spoken',
        'consultation_fee',
        'availability_type',
        'response_time',
        'profile_photo_path',
        'license_path',
        'partner_agreement_path',
        'unique_selling_point',
        'success_stories',
        'agree_terms',
        'bar_council_state',
        'bar_registration_number',
        'law_school',
        'practice_areas',
        'court_levels',
        'client_categories',
        'notable_case_types',
        'icai_membership_number',
        'ca_final_year',
        'specializations',
        'industry_expertise',
        'client_size_preference',
        'software_expertise',
        'additional_certifications',
        'rera_registration_number',
        'rera_state',
        'team_size',
        'property_types',
        'transaction_types',
        'price_range_expertise',
        'locality_expertise',
        'notable_projects',
    ];

    protected function casts(): array
    {
        return [
            'operating_states' => 'array',
            'languages_spoken' => 'array',
            'practice_areas' => 'array',
            'court_levels' => 'array',
            'client_categories' => 'array',
            'specializations' => 'array',
            'industry_expertise' => 'array',
            'client_size_preference' => 'array',
            'software_expertise' => 'array',
            'additional_certifications' => 'array',
            'property_types' => 'array',
            'transaction_types' => 'array',
            'price_range_expertise' => 'array',
            'agree_terms' => 'boolean',
        ];
    }

    /**
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    public static function nullUnusedBranchFields(array $data): array
    {
        $type = $data['partner_type'] ?? '';

        if ($type !== 'lawyer') {
            $data['bar_council_state'] = null;
            $data['bar_registration_number'] = null;
            $data['law_school'] = null;
            $data['practice_areas'] = null;
            $data['court_levels'] = null;
            $data['client_categories'] = null;
            $data['notable_case_types'] = null;
        }

        if ($type !== 'accountant') {
            $data['icai_membership_number'] = null;
            $data['ca_final_year'] = null;
            $data['specializations'] = null;
            $data['industry_expertise'] = null;
            $data['client_size_preference'] = null;
            $data['software_expertise'] = null;
            $data['additional_certifications'] = null;
        }

        if ($type !== 'property-broker') {
            $data['rera_registration_number'] = null;
            $data['rera_state'] = null;
            $data['team_size'] = null;
            $data['property_types'] = null;
            $data['transaction_types'] = null;
            $data['price_range_expertise'] = null;
            $data['locality_expertise'] = null;
            $data['notable_projects'] = null;
        }

        return $data;
    }

    public static function createFromStoreRequest(StorePartnerOnboardingRequest $request): self
    {
        $data = $request->validated();

        unset($data['profile_photo'], $data['license'], $data['partner_agreement']);

        $data['profile_photo_path'] = null;
        $data['license_path'] = null;
        $data['partner_agreement_path'] = null;

        if ($request->hasFile('profile_photo')) {
            $data['profile_photo_path'] = $request->file('profile_photo')->store('partner-onboarding/profile', 'public');
        }
        if ($request->hasFile('license')) {
            $data['license_path'] = $request->file('license')->store('partner-onboarding/license', 'public');
        }
        if ($request->hasFile('partner_agreement')) {
            $data['partner_agreement_path'] = $request->file('partner_agreement')->store('partner-onboarding/agreements', 'public');
        }

        $data = self::nullUnusedBranchFields($data);

        return self::query()->create($data);
    }

    public function deleteUploadedFiles(): void
    {
        foreach (['profile_photo_path', 'license_path', 'partner_agreement_path'] as $col) {
            $path = $this->{$col};
            if ($path) {
                Storage::disk('public')->delete($path);
            }
        }
    }
}
