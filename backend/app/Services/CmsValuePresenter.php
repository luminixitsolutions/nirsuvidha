<?php

namespace App\Services;

class CmsValuePresenter
{
    /**
     * Image keys store a path relative to storage/app/public; API returns absolute URL.
     */
    public static function isImageKey(string $key): bool
    {
        return str_ends_with($key, '_image');
    }

    public static function toPublicValue(string $key, ?string $raw): ?string
    {
        if ($raw === null || $raw === '') {
            return $raw;
        }
        if (self::isImageKey($key)) {
            return asset('storage/'.ltrim($raw, '/'));
        }

        return $raw;
    }
}
