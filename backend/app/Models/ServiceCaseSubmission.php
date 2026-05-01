<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ServiceCaseSubmission extends Model
{
    protected $fillable = [
        'service_id',
        'case_title',
        'case_description',
        'document_path',
        'preferred_consultation_at',
    ];

    protected function casts(): array
    {
        return [
            'preferred_consultation_at' => 'datetime',
        ];
    }

    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }
}
