<?php

namespace App\Http\Requests\Admin;

use App\Http\Requests\Api\StorePartnerOnboardingRequest;

class UpdatePartnerOnboardingRequest extends StorePartnerOnboardingRequest
{
    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        $rules = parent::rules();
        unset(
            $rules['profile_photo'],
            $rules['license'],
            $rules['partner_agreement'],
        );

        return $rules;
    }
}
