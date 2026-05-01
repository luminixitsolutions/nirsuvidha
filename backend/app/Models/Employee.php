<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Employee extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'designation_id',
        'aadhar_number',
        'pan_number',
        'gst_number',
        'aadhar_document',
        'pan_document',
        'supporting_document',
        'photo',
        'notes',
        'is_active',
        'menu_permissions',
    ];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
            'menu_permissions' => 'array',
        ];
    }

    public function designation(): BelongsTo
    {
        return $this->belongsTo(Designation::class);
    }
}
