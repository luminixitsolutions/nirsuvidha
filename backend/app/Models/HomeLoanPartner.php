<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HomeLoanPartner extends Model
{
    protected $fillable = [
        'bank_name',
        'icon_class',
        'interest_rate_display',
        'processing_fee_display',
        'max_tenure_display',
        'sort_order',
        'is_published',
    ];

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'is_published' => 'boolean',
            'sort_order' => 'integer',
        ];
    }
}
