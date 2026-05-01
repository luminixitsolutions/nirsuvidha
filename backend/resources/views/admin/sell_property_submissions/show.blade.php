@php
    use App\Models\SellPropertySubmission;
    $fileUrl = function ($path) {
        if (!$path) return null;
        return asset('storage/'.ltrim($path, '/'));
    };
@endphp

@extends('admin.layouts.shell', ['title' => 'Sell submission #'.$s->id.' — NRI Suvidha Admin'])

@push('head')
<style>
    .toolbar { display: flex; flex-wrap: wrap; align-items: flex-start; justify-content: space-between; gap: 0.75rem; margin-bottom: 1rem; }
    .card { background: #fff; border: 1px solid rgba(15,23,42,0.08); border-radius: 0.75rem; padding: 1.25rem 1.5rem; margin-bottom: 1rem; }
    dt { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.03em; color: #64748b; margin-top: 0.85rem; }
    dt:first-of-type { margin-top: 0; }
    dd { margin: 0.2rem 0 0; font-size: 0.95rem; }
    .btn-gold { border: none; border-radius: 0.5rem; font-weight: 600; font-size: 0.9rem; padding: 0.5rem 1rem; cursor: pointer;
        background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%); color: #fff; }
    .btn-ghost { border: 1px solid rgba(201, 163, 78, 0.4); background: #fff; border-radius: 0.5rem; padding: 0.5rem 1rem; font-size: 0.875rem; text-decoration: none; color: #0f172a; display: inline-block; }
    .btn-danger { border: 1px solid rgba(185,28,28,0.45); color: #b91c1c; background: #fff; border-radius: 0.5rem; padding: 0.5rem 1rem; font-weight: 600; cursor: pointer; }
    h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
    .meta { color: #64748b; font-size: 0.88rem; margin-bottom: 0.5rem; }
    .alert { padding: 0.75rem 1rem; border-radius: 0.5rem; margin-bottom: 1rem; font-size: 0.9rem; }
    .alert--ok { background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; }
    .alert--err { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; }
    textarea { width: 100%; min-height: 4rem; padding: 0.5rem; border-radius: 0.35rem; border: 1px solid rgba(15,23,42,0.15); font: inherit; margin-top: 0.35rem; }
    .actions { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; margin-top: 1rem; }
</style>
@endpush

@section('content')
<div class="toolbar">
    <div>
        <h1>Sell submission #{{ $s->id }}</h1>
        <p class="meta">Submitted {{ $s->created_at->format('Y-m-d H:i') }}</p>
        <p class="meta">Status: <strong>{{ $s->status }}</strong>
            @if($s->property_listing_id)
                · <a href="{{ route('admin.properties.edit', $s->property_listing_id) }}">Edit listing #{{ $s->property_listing_id }}</a>
            @endif
        </p>
    </div>
    <a class="btn-ghost" href="{{ route('admin.sell_property_submissions.index') }}">Back to list</a>
</div>

@if(session('status'))
    <div class="alert alert--ok">{{ session('status') }}</div>
@endif
@if($errors->any())
    <div class="alert alert--err">{{ $errors->first() }}</div>
@endif

<div class="card">
    <h2 style="font-size:1rem;margin:0 0 0.75rem;color:#9A7B32;">Property</h2>
    <dl>
        <dt>State</dt><dd>{{ $s->state?->name ?? $s->state_slug ?? '—' }}</dd>
        <dt>City</dt><dd>{{ $s->city?->name ?? $s->city_slug ?? '—' }}</dd>
        <dt>Locality</dt><dd>{{ $s->locality }}</dd>
        <dt>Property type (slug)</dt><dd>{{ $s->property_type_slug }}</dd>
        <dt>BHK (slug)</dt><dd>{{ $s->bhk_slug ?: '—' }}</dd>
        <dt>Built-up sq ft</dt><dd>{{ $s->built_up_sqft ?: '—' }}</dd>
        <dt>Carpet sq ft</dt><dd>{{ $s->carpet_sqft ?: '—' }}</dd>
        <dt>Expected price</dt><dd>{{ $s->expected_price }} ({{ $s->price_negotiable === 'fixed' ? 'Fixed' : 'Negotiable' }})</dd>
    </dl>
</div>

<div class="card">
    <h2 style="font-size:1rem;margin:0 0 0.75rem;color:#9A7B32;">Contact</h2>
    <dl>
        <dt>Mode</dt><dd>{{ $s->contact_mode }}</dd>
        <dt>WhatsApp</dt><dd>{{ $s->whatsapp_number ?: '—' }}</dd>
        <dt>Best time (IST)</dt><dd>{{ $s->best_time_ist }}</dd>
    </dl>
</div>

<div class="card">
    <h2 style="font-size:1rem;margin:0 0 0.75rem;color:#9A7B32;">Photos</h2>
    @php $photos = is_array($s->photo_paths) ? $s->photo_paths : []; @endphp
    @if(count($photos) === 0)
        <p style="color:#64748b;margin:0;">None</p>
    @else
        <ul style="margin:0;padding-left:1.2rem;">
            @foreach($photos as $p)
                <li><a href="{{ $fileUrl($p) }}" target="_blank" rel="noopener">{{ basename($p) }}</a></li>
            @endforeach
        </ul>
    @endif
</div>

<div class="card">
    <h2 style="font-size:1rem;margin:0 0 0.75rem;color:#9A7B32;">Documents</h2>
    @php $docs = is_array($s->document_paths) ? $s->document_paths : []; @endphp
    @if(count($docs) === 0)
        <p style="color:#64748b;margin:0;">None</p>
    @else
        <ul style="margin:0;padding-left:1.2rem;">
            @foreach($docs as $d)
                @php $path = is_array($d) ? ($d['path'] ?? '') : ''; $nm = is_array($d) ? ($d['name'] ?? basename($path)) : ''; @endphp
                @if($path)
                    <li><a href="{{ $fileUrl($path) }}" target="_blank" rel="noopener">{{ $nm }}</a></li>
                @endif
            @endforeach
        </ul>
    @endif
</div>

@if($s->status === SellPropertySubmission::STATUS_REJECTED && $s->rejected_reason)
<div class="card">
    <h2 style="font-size:1rem;margin:0 0 0.75rem;color:#9A7B32;">Rejection note</h2>
    <p style="margin:0;white-space:pre-wrap;">{{ $s->rejected_reason }}</p>
</div>
@endif

@if($s->status === SellPropertySubmission::STATUS_PENDING)
<div class="card">
    <h2 style="font-size:1rem;margin:0 0 0.75rem;color:#9A7B32;">Review</h2>
    <p class="meta">Approving creates a published curated listing (Sell) and copies the first photo as the hero image when available.</p>
    <div class="actions">
        <form method="post" action="{{ route('admin.sell_property_submissions.approve', $s) }}" onsubmit="return confirm('Approve and publish this listing on the website?');">
            @csrf
            <button type="submit" class="btn-gold">Approve &amp; publish</button>
        </form>
        <form method="post" action="{{ route('admin.sell_property_submissions.reject', $s) }}" style="display:flex;flex-direction:column;align-items:flex-start;gap:0.5rem;">
            @csrf
            <label for="rejected_reason" style="font-size:0.8rem;color:#64748b;">Reject (optional note)</label>
            <textarea id="rejected_reason" name="rejected_reason" placeholder="Reason for rejection…"></textarea>
            <button type="submit" class="btn-danger" onclick="return confirm('Reject this submission?');">Reject</button>
        </form>
    </div>
</div>
@endif

@endsection
