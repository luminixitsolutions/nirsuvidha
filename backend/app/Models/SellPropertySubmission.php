<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SellPropertySubmission extends Model
{
    protected $table = 're_sell_property_submissions';

    public const STATUS_PENDING = 'pending';

    public const STATUS_APPROVED = 'approved';

    public const STATUS_REJECTED = 'rejected';

    protected $fillable = [
        'status',
        'state_id',
        'city_id',
        'state_slug',
        'city_slug',
        'locality',
        'property_type_slug',
        'bhk_slug',
        'built_up_sqft',
        'carpet_sqft',
        'expected_price',
        'price_negotiable',
        'contact_mode',
        'whatsapp_number',
        'best_time_ist',
        'photo_paths',
        'document_paths',
        'property_listing_id',
        'rejected_reason',
    ];

    protected function casts(): array
    {
        return [
            'photo_paths' => 'array',
            'document_paths' => 'array',
        ];
    }

    public function propertyListing(): BelongsTo
    {
        return $this->belongsTo(PropertyListing::class, 'property_listing_id');
    }

    public function state(): BelongsTo
    {
        return $this->belongsTo(State::class, 'state_id');
    }

    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class, 'city_id');
    }
}
