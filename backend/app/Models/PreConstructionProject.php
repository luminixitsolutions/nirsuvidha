<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PreConstructionProject extends Model
{
    public const BADGE_MUTED = 'muted';

    public const BADGE_ACCENT = 'accent';

    /** @var list<string> */
    public const BADGE_VARIANTS = [self::BADGE_MUTED, self::BADGE_ACCENT];

    protected $fillable = [
        'title',
        'status_badge',
        'badge_variant',
        'description',
        'starting_price_display',
        'possession_display',
        'payment_plan',
        'benefits_heading',
        'benefits',
        'cta_button_text',
        'sort_order',
        'is_published',
    ];

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'benefits' => 'array',
            'is_published' => 'boolean',
            'sort_order' => 'integer',
        ];
    }
}
