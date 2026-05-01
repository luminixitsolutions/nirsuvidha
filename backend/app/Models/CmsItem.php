<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CmsItem extends Model
{
    protected $fillable = ['section', 'cms_key', 'value'];

    /**
     * @param  array<string, mixed>  $attributes
     */
    public static function upsertValue(string $section, string $key, ?string $value): self
    {
        return self::query()->updateOrCreate(
            ['section' => $section, 'cms_key' => $key],
            ['value' => $value]
        );
    }
}
