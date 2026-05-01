@php
    $fmtList = function ($v) {
        if ($v === null) return '—';
        if (is_array($v)) return $v === [] ? '—' : implode(', ', $v);
        return (string) $v;
    };
    $fileUrl = function ($path) {
        if (!$path) return null;
        return asset('storage/'.ltrim($path, '/'));
    };
@endphp

@extends('admin.layouts.shell', ['title' => 'Partner onboarding #'.$p->id.' — NRI Suvidha Admin'])

@push('head')
<style>
    .toolbar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.75rem; margin-bottom: 1rem; }
    .card { background: #fff; border: 1px solid rgba(15,23,42,0.08); border-radius: 0.75rem; padding: 1.25rem 1.5rem; }
    dt { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.03em; color: #64748b; margin-top: 0.85rem; }
    dt:first-of-type { margin-top: 0; }
    dd { margin: 0.2rem 0 0; font-size: 0.95rem; }
    .btn-gold { border: none; border-radius: 0.5rem; font-weight: 600; font-size: 0.9rem; padding: 0.5rem 1rem; cursor: pointer;
        background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%); color: #fff; text-decoration: none; display: inline-block; }
    .btn-ghost { border: 1px solid rgba(201, 163, 78, 0.4); background: #fff; border-radius: 0.5rem; padding: 0.5rem 1rem; font-size: 0.875rem; text-decoration: none; color: #0f172a; display: inline-block; }
    .actions { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.25rem; }
    h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
    .meta { color: #64748b; font-size: 0.88rem; margin-bottom: 1rem; }
</style>
@endpush

@section('content')
<div class="toolbar">
    <div>
        <h1>Partner onboarding #{{ $p->id }}</h1>
        <p class="meta">Submitted {{ $p->created_at->format('Y-m-d H:i') }} · Updated {{ $p->updated_at->format('Y-m-d H:i') }}</p>
    </div>
    <div class="actions">
        <a class="btn-gold" href="{{ route('admin.partner_onboardings.edit', $p) }}">Edit</a>
        <a class="btn-ghost" href="{{ route('admin.partner_onboardings.index') }}">Back to list</a>
    </div>
</div>

<div class="card">
    <h2 style="font-size:1rem;margin:0 0 0.75rem;color:#9A7B32;">Documents</h2>
    <dl>
        <dt>Profile photo</dt>
        <dd>@if($fileUrl($p->profile_photo_path))<a href="{{ $fileUrl($p->profile_photo_path) }}" target="_blank" rel="noopener">Open file</a>@else — @endif</dd>
        <dt>Professional license</dt>
        <dd>@if($fileUrl($p->license_path))<a href="{{ $fileUrl($p->license_path) }}" target="_blank" rel="noopener">Open file</a>@else — @endif</dd>
        <dt>Partner agreement</dt>
        <dd>@if($fileUrl($p->partner_agreement_path))<a href="{{ $fileUrl($p->partner_agreement_path) }}" target="_blank" rel="noopener">Open file</a>@else — @endif</dd>
    </dl>
</div>

<div class="card" style="margin-top:1rem;">
    <h2 style="font-size:1rem;margin:0 0 0.75rem;color:#9A7B32;">Application</h2>
    <dl>
        <dt>Partner type</dt><dd>{{ $p->partner_type }}</dd>
        <dt>Full name</dt><dd>{{ $p->full_name }}</dd>
        <dt>Email</dt><dd>{{ $p->email }}</dd>
        <dt>Mobile</dt><dd>{{ $p->phone_number }}</dd>
        <dt>Business / firm name</dt><dd>{{ $p->business_name }}</dd>
        <dt>Years of experience</dt><dd>{{ $p->years_experience }}</dd>
        <dt>Primary city</dt><dd>{{ $p->primary_city }}</dd>
        <dt>Service radius</dt><dd>{{ $p->service_radius }}</dd>
        <dt>Operating states</dt><dd>{{ $fmtList($p->operating_states) }}</dd>
        <dt>Languages spoken</dt><dd>{{ $fmtList($p->languages_spoken) }}</dd>
        <dt>Consultation fee (₹)</dt><dd>{{ $p->consultation_fee }}</dd>
        <dt>Availability type</dt><dd>{{ $p->availability_type }}</dd>
        <dt>Response time</dt><dd>{{ $p->response_time }}</dd>
        <dt>What makes you unique</dt><dd style="white-space:pre-wrap;">{{ $p->unique_selling_point }}</dd>
        <dt>Success stories</dt><dd style="white-space:pre-wrap;">{{ $p->success_stories ?: '—' }}</dd>
        <dt>Agreed to terms</dt><dd>{{ $p->agree_terms ? 'Yes' : 'No' }}</dd>
    </dl>
</div>

@if($p->partner_type === 'lawyer')
<div class="card" style="margin-top:1rem;">
    <h2 style="font-size:1rem;margin:0 0 0.75rem;color:#9A7B32;">Legal practice</h2>
    <dl>
        <dt>Bar Council state</dt><dd>{{ $p->bar_council_state ?: '—' }}</dd>
        <dt>Bar registration number</dt><dd>{{ $p->bar_registration_number ?: '—' }}</dd>
        <dt>Law school</dt><dd>{{ $p->law_school ?: '—' }}</dd>
        <dt>Practice areas</dt><dd>{{ $fmtList($p->practice_areas) }}</dd>
        <dt>Court levels</dt><dd>{{ $fmtList($p->court_levels) }}</dd>
        <dt>Client categories</dt><dd>{{ $fmtList($p->client_categories) }}</dd>
        <dt>Notable case types</dt><dd style="white-space:pre-wrap;">{{ $p->notable_case_types ?: '—' }}</dd>
    </dl>
</div>
@endif

@if($p->partner_type === 'accountant')
<div class="card" style="margin-top:1rem;">
    <h2 style="font-size:1rem;margin:0 0 0.75rem;color:#9A7B32;">Chartered Accountant</h2>
    <dl>
        <dt>ICAI membership number</dt><dd>{{ $p->icai_membership_number ?: '—' }}</dd>
        <dt>CA final year</dt><dd>{{ $p->ca_final_year ?: '—' }}</dd>
        <dt>Specializations</dt><dd>{{ $fmtList($p->specializations) }}</dd>
        <dt>Industry expertise</dt><dd>{{ $fmtList($p->industry_expertise) }}</dd>
        <dt>Client size preference</dt><dd>{{ $fmtList($p->client_size_preference) }}</dd>
        <dt>Software expertise</dt><dd>{{ $fmtList($p->software_expertise) }}</dd>
        <dt>Additional certifications</dt><dd>{{ $fmtList($p->additional_certifications) }}</dd>
    </dl>
</div>
@endif

@if($p->partner_type === 'property-broker')
<div class="card" style="margin-top:1rem;">
    <h2 style="font-size:1rem;margin:0 0 0.75rem;color:#9A7B32;">Property broker</h2>
    <dl>
        <dt>RERA registration number</dt><dd>{{ $p->rera_registration_number ?: '—' }}</dd>
        <dt>RERA state</dt><dd>{{ $p->rera_state ?: '—' }}</dd>
        <dt>Team size</dt><dd>{{ $p->team_size ?: '—' }}</dd>
        <dt>Property types</dt><dd>{{ $fmtList($p->property_types) }}</dd>
        <dt>Transaction types</dt><dd>{{ $fmtList($p->transaction_types) }}</dd>
        <dt>Price range expertise</dt><dd>{{ $fmtList($p->price_range_expertise) }}</dd>
        <dt>Locality expertise</dt><dd style="white-space:pre-wrap;">{{ $p->locality_expertise ?: '—' }}</dd>
        <dt>Notable projects</dt><dd style="white-space:pre-wrap;">{{ $p->notable_projects ?: '—' }}</dd>
    </dl>
</div>
@endif

<div class="actions">
    <form method="post" action="{{ route('admin.partner_onboardings.destroy', $p) }}" onsubmit="return confirm('Delete this submission permanently?');">
        @csrf
        @method('DELETE')
        <button type="submit" class="btn-ghost" style="color:#b91c1c;border-color:rgba(185,28,28,0.35);">Delete submission</button>
    </form>
</div>
@endsection
