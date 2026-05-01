<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TrustedPartner extends Model
{
    protected $fillable = [
        'name',
        'logo',
        'is_active',
        'sort_order',
    ];

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
        ];
    }
}
