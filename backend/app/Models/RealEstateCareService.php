<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RealEstateCareService extends Model
{
    protected $fillable = [
        'title',
        'description',
        'bullets',
        'show_bullets',
        'sort_order',
        'is_published',
    ];

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'bullets' => 'array',
            'show_bullets' => 'boolean',
            'is_published' => 'boolean',
            'sort_order' => 'integer',
        ];
    }
}
