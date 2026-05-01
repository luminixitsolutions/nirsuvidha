<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PropertyListingInquiry extends Model
{
    protected $fillable = [
        'property_listing_id',
        'full_name',
        'email',
        'phone',
        'message',
    ];

    public function propertyListing(): BelongsTo
    {
        return $this->belongsTo(PropertyListing::class, 'property_listing_id');
    }
}
