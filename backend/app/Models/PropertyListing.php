<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Storage;

class PropertyListing extends Model
{
    protected $table = 're_property_listings';

    public const TYPE_CURATED = 'curated';

    public const TYPE_FEATURED = 'featured';

    public const TX_BUY = 'buy';

    public const TX_RENT = 'rent';

    public const TX_SELL = 'sell';

    /** @return list<string> */
    public static function transactionTypes(): array
    {
        return [self::TX_BUY, self::TX_RENT, self::TX_SELL];
    }

    protected $fillable = [
        'listing_type',
        'transaction_type',
        'title',
        'price_display',
        'gradient_css',
        'image_url',
        'gallery_images',
        'documents',
        'seller_variant',
        'seller_label',
        'location_label',
        'status_label',
        'bhk_label',
        'sqft_label',
        'rera_number',
        'amenities',
        'builder_label',
        'property_details',
        'country_id',
        'state_id',
        'city_id',
        'property_type_id',
        'budget_range_id',
        'bhk_type_id',
        'sort_order',
        'is_published',
        'is_featured',
    ];

    protected function casts(): array
    {
        return [
            'amenities' => 'array',
            'gallery_images' => 'array',
            'documents' => 'array',
            'is_published' => 'boolean',
            'is_featured' => 'boolean',
        ];
    }

    protected static function booted(): void
    {
        static::deleting(function (PropertyListing $listing): void {
            $disk = Storage::disk('public');
            $dir = 're-properties/'.$listing->id;
            if ($disk->exists($dir)) {
                $disk->deleteDirectory($dir);
            }
            $hero = $listing->image_url;
            if (is_string($hero) && $hero !== '' && ! str_starts_with($hero, 'http') && ! str_starts_with($hero, $dir)) {
                $disk->delete(ltrim($hero, '/'));
            }
        });
    }

    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class, 'country_id');
    }

    public function state(): BelongsTo
    {
        return $this->belongsTo(State::class, 'state_id');
    }

    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class, 'city_id');
    }

    public function propertyType(): BelongsTo
    {
        return $this->belongsTo(PropertyType::class, 'property_type_id');
    }

    public function budgetRange(): BelongsTo
    {
        return $this->belongsTo(BudgetRange::class, 'budget_range_id');
    }

    public function bhkType(): BelongsTo
    {
        return $this->belongsTo(BhkType::class, 'bhk_type_id');
    }

    /** @return HasMany<PropertyListingInquiry, $this> */
    public function inquiries(): HasMany
    {
        return $this->hasMany(PropertyListingInquiry::class, 'property_listing_id');
    }
}
