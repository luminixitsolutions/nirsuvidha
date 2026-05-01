<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Service extends Model
{
    protected $fillable = [
        'title',
        'icon',
        'short_details',
        'full_details',
        'below_short_title',
        'photo',
        'multiple_photos',
        'sort_order',
        'is_published',
        'link_href',
    ];

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'multiple_photos' => 'array',
            'is_published' => 'boolean',
        ];
    }

    public function subServices(): HasMany
    {
        return $this->hasMany(SubService::class)->orderBy('sort_order')->orderBy('id');
    }
}
