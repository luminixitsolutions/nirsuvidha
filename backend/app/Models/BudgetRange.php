<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BudgetRange extends Model
{
    protected $table = 're_budget_ranges';

    protected $fillable = [
        'label',
        'slug',
        'sort_order',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
        ];
    }
}
