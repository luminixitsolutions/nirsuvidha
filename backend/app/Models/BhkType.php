<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BhkType extends Model
{
    protected $table = 're_bhk_types';

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
