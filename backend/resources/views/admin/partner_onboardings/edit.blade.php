@php
    $pt = old('partner_type', $p->partner_type);
    $serviceRadiusOpts = [
        'city-only' => 'City Only',
        'metro-area' => 'Metro Area',
        'state-wide' => 'State Wide',
        'pan-india' => 'Pan India',
        'international' => 'International',
    ];
    $availOpts = [
        'full-time' => 'Full-time (Mon-Sat)',
        'part-time' => 'Part-time',
        'consultation-only' => 'Consultation Only',
    ];
    $respOpts = [
        'within-1-hour' => 'Within 1 hour',
        'within-4-hours' => 'Within 4 hours',
        'within-24-hours' => 'Within 24 hours',
        'within-48-hours' => 'Within 48 hours',
    ];
    $teamOpts = [
        'solo' => 'Solo Practice',
        '2-5' => '2-5 Members',
        '6-10' => '6-10 Members',
        '11-25' => '11-25 Members',
        '25+' => '25+ Members',
    ];
@endphp

@extends('admin.layouts.shell', ['title' => 'Edit partner onboarding #'.$p->id.' — NRI Suvidha Admin'])

@push('head')
<style>
    .form h1 { font-size: 1.25rem; margin: 0 0 1rem; }
    .field { margin-bottom: 0.85rem; }
    .field label { display: block; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.02em; color: #64748b; margin-bottom: 0.25rem; }
    .field input[type="text"], .field input[type="email"], .field input[type="number"], .field select, .field textarea {
        width: 100%; max-width: 40rem; border-radius: 0.5rem; border: 1px solid rgba(15, 23, 42, 0.12);
        padding: 0.5rem 0.65rem; font-size: 0.9rem; background: #fff;
    }
    .field textarea { min-height: 5rem; max-width: 100%; }
    .check { display: flex; align-items: flex-start; gap: 0.5rem; margin: 0.5rem 0; font-size: 0.9rem; }
    .card-form { background: #fff; border: 1px solid rgba(15, 23, 42, 0.08); border-radius: 0.75rem; padding: 1.25rem 1.5rem 1.5rem; margin-bottom: 1rem; }
    .btn-gold { border: none; border-radius: 0.5rem; font-weight: 600; font-size: 0.9rem; padding: 0.6rem 1.2rem; cursor: pointer;
        background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%); color: #fff; }
    .btn-ghost { border: 1px solid rgba(201, 163, 78, 0.4); background: #fff; border-radius: 0.5rem; padding: 0.5rem 1rem; font-size: 0.875rem; text-decoration: none; color: #0f172a; display: inline-block; }
    .sec-title { font-size: 0.95rem; margin: 0 0 0.75rem; color: #9A7B32; border-bottom: 1px solid rgba(201,163,78,0.25); padding-bottom: 0.35rem; }
    .err { color: #b91c1c; font-size: 0.8rem; margin-top: 0.2rem; }
    .muted { color: #64748b; font-size: 0.82rem; }
    .doc-links a { margin-right: 0.75rem; }
</style>
@endpush

@section('content')
<div class="card-form form">
    <h1>Edit submission #{{ $p->id }}</h1>
    <p class="muted" style="margin:-0.35rem 0 1rem;">Uploaded files cannot be replaced here. Use View for download links.</p>
    <div class="doc-links muted" style="margin-bottom:1rem;">
        @if($p->profile_photo_path)<a href="{{ asset('storage/'.ltrim($p->profile_photo_path,'/')) }}" target="_blank">Profile photo</a>@endif
        @if($p->license_path)<a href="{{ asset('storage/'.ltrim($p->license_path,'/')) }}" target="_blank">License</a>@endif
        @if($p->partner_agreement_path)<a href="{{ asset('storage/'.ltrim($p->partner_agreement_path,'/')) }}" target="_blank">Agreement</a>@endif
    </div>

    @if ($errors->any())
        <div class="err" style="margin-bottom:1rem;padding:0.75rem;background:#fef2f2;border-radius:0.5rem;">
            <strong>Please fix the following:</strong>
            <ul style="margin:0.35rem 0 0 1rem;">
                @foreach ($errors->all() as $e)
                    <li>{{ $e }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form method="post" action="{{ route('admin.partner_onboardings.update', $p) }}">
        @csrf
        @method('PUT')

        <h2 class="sec-title">Partner type</h2>
        <div class="field">
            <label for="partner_type">Partner Type *</label>
            <select id="partner_type" name="partner_type" required>
                <option value="">Select your professional category</option>
                <option value="lawyer" @selected($pt === 'lawyer')>Lawyer / Advocate</option>
                <option value="accountant" @selected($pt === 'accountant')>Chartered Accountant</option>
                <option value="property-broker" @selected($pt === 'property-broker')>Property Broker / Real Estate Agent</option>
            </select>
        </div>

        <h2 class="sec-title">Basic information</h2>
        <div class="field"><label for="full_name">Full Name *</label>
            <input id="full_name" name="full_name" type="text" value="{{ old('full_name', $p->full_name) }}" required /></div>
        <div class="field"><label for="email">Email Address *</label>
            <input id="email" name="email" type="email" value="{{ old('email', $p->email) }}" required /></div>
        <div class="field"><label for="phone_number">Mobile Number *</label>
            <input id="phone_number" name="phone_number" type="text" value="{{ old('phone_number', $p->phone_number) }}" required />
            <p class="muted" style="margin:0.25rem 0 0;font-size:0.8rem;">Indian mobile number starting with 6-9</p></div>
        <div class="field"><label for="business_name">Business / Firm Name *</label>
            <input id="business_name" name="business_name" type="text" value="{{ old('business_name', $p->business_name) }}" required /></div>
        <div class="field"><label for="years_experience">Years of Experience *</label>
            <input id="years_experience" name="years_experience" type="text" value="{{ old('years_experience', $p->years_experience) }}" required /></div>

        <h2 class="sec-title">Service area &amp; location</h2>
        <div class="field"><label for="primary_city">Primary City *</label>
            <input id="primary_city" name="primary_city" type="text" value="{{ old('primary_city', $p->primary_city) }}" placeholder="e.g., Mumbai, Delhi, Bangalore" required /></div>
        <div class="field"><label for="service_radius">Service Radius *</label>
            <select id="service_radius" name="service_radius" required>
                <option value="">Select service radius</option>
                @foreach($serviceRadiusOpts as $val => $lab)
                    <option value="{{ $val }}" @selected(old('service_radius', $p->service_radius) === $val)>{{ $lab }}</option>
                @endforeach
            </select></div>
        <div class="field">
            <label>Operating States *</label>
            <p class="muted" style="margin:0 0 0.35rem;font-size:0.8rem;">Select all states where you provide services</p>
            @include('admin.partner_onboardings.partials.checkboxes', ['name' => 'operating_states', 'options' => $lists['states'], 'selected' => $p->operating_states ?? []])
        </div>
        <div class="field">
            <label>Languages Spoken *</label>
            <p class="muted" style="margin:0 0 0.35rem;font-size:0.8rem;">Select all languages you can communicate in</p>
            @include('admin.partner_onboardings.partials.checkboxes', ['name' => 'languages_spoken', 'options' => $lists['languages'], 'selected' => $p->languages_spoken ?? []])
        </div>

        <h2 class="sec-title">Pricing &amp; availability</h2>
        <div class="field"><label for="consultation_fee">Consultation Fee (₹) *</label>
            <input id="consultation_fee" name="consultation_fee" type="text" value="{{ old('consultation_fee', $p->consultation_fee) }}" placeholder="e.g., 1000" required />
            <p class="muted" style="margin:0.25rem 0 0;font-size:0.8rem;">Per hour consultation fee</p></div>
        <div class="field"><label for="availability_type">Availability Type *</label>
            <select id="availability_type" name="availability_type" required>
                <option value="">Select availability</option>
                @foreach($availOpts as $val => $lab)
                    <option value="{{ $val }}" @selected(old('availability_type', $p->availability_type) === $val)>{{ $lab }}</option>
                @endforeach
            </select></div>
        <div class="field"><label for="response_time">Response Time *</label>
            <select id="response_time" name="response_time" required>
                <option value="">Expected response time</option>
                @foreach($respOpts as $val => $lab)
                    <option value="{{ $val }}" @selected(old('response_time', $p->response_time) === $val)>{{ $lab }}</option>
                @endforeach
            </select></div>

        <h2 class="sec-title">Your value proposition</h2>
        <div class="field"><label for="unique_selling_point">What makes you unique? *</label>
            <textarea id="unique_selling_point" name="unique_selling_point" required>{{ old('unique_selling_point', $p->unique_selling_point) }}</textarea>
            <p class="muted" style="margin:0.25rem 0 0;font-size:0.8rem;">This will be displayed on your profile to attract clients</p></div>
        <div class="field"><label for="success_stories">Success Stories (Optional)</label>
            <textarea id="success_stories" name="success_stories">{{ old('success_stories', $p->success_stories) }}</textarea>
            <p class="muted" style="margin:0.25rem 0 0;font-size:0.8rem;">Help clients understand your track record</p></div>

        <div class="check">
            <input type="hidden" name="agree_terms" value="0" />
            <input id="agree_terms" name="agree_terms" type="checkbox" value="1" @checked(old('agree_terms', $p->agree_terms)) />
            <label for="agree_terms" style="text-transform:none;font-weight:500;color:#0f172a;line-height:1.35;">
                I agree to the Partner Terms &amp; Conditions, Code of Conduct, and Data Privacy Policy *
                <span class="muted" style="display:block;font-size:0.75rem;margin-top:0.35rem;">By checking this box, you confirm that all information provided is accurate and you agree to maintain professional standards.</span>
            </label>
        </div>

        <h2 class="sec-title">Legal practice information</h2>
        <div class="field"><label for="bar_council_state">Bar Council State Registration *</label>
            <select id="bar_council_state" name="bar_council_state">
                <option value="">Select Bar Council state</option>
                @foreach($lists['states'] as $s)
                    <option value="{{ $s }}" @selected(old('bar_council_state', $p->bar_council_state) === $s)>{{ $s }}</option>
                @endforeach
            </select></div>
        <div class="field"><label for="bar_registration_number">Bar Registration Number *</label>
            <input id="bar_registration_number" name="bar_registration_number" type="text" value="{{ old('bar_registration_number', $p->bar_registration_number) }}" placeholder="Enter bar registration number" /></div>
        <div class="field"><label for="law_school">Law School/University *</label>
            <input id="law_school" name="law_school" type="text" value="{{ old('law_school', $p->law_school) }}" placeholder="e.g., National Law School, Government Law College" /></div>
        <div class="field"><label>Practice Areas *</label>
            <p class="muted" style="margin:0 0 0.35rem;font-size:0.8rem;">Select your areas of legal expertise</p>
            @include('admin.partner_onboardings.partials.checkboxes', ['name' => 'practice_areas', 'options' => $lists['practiceAreas'], 'selected' => $p->practice_areas ?? []])</div>
        <div class="field"><label>Court Levels *</label>
            <p class="muted" style="margin:0 0 0.35rem;font-size:0.8rem;">Select courts where you practice</p>
            @include('admin.partner_onboardings.partials.checkboxes', ['name' => 'court_levels', 'options' => $lists['courtLevels'], 'selected' => $p->court_levels ?? []])</div>
        <div class="field"><label>Client Categories *</label>
            <p class="muted" style="margin:0 0 0.35rem;font-size:0.8rem;">Types of clients you typically serve</p>
            @include('admin.partner_onboardings.partials.checkboxes', ['name' => 'client_categories', 'options' => $lists['clientCategories'], 'selected' => $p->client_categories ?? []])</div>
        <div class="field"><label for="notable_case_types">Notable Case Types (Optional)</label>
            <textarea id="notable_case_types" name="notable_case_types">{{ old('notable_case_types', $p->notable_case_types) }}</textarea></div>

        <h2 class="sec-title">Chartered Accountant information</h2>
        <div class="field"><label for="icai_membership_number">ICAI Membership Number *</label>
            <input id="icai_membership_number" name="icai_membership_number" type="text" value="{{ old('icai_membership_number', $p->icai_membership_number) }}" placeholder="Enter ICAI membership number" /></div>
        <div class="field"><label for="ca_final_year">CA Final Completion Year *</label>
            <input id="ca_final_year" name="ca_final_year" type="text" value="{{ old('ca_final_year', $p->ca_final_year) }}" placeholder="e.g., 2015" /></div>
        <div class="field"><label>Specializations *</label>
            <p class="muted" style="margin:0 0 0.35rem;font-size:0.8rem;">Select your areas of expertise</p>
            @include('admin.partner_onboardings.partials.checkboxes', ['name' => 'specializations', 'options' => $lists['caSpecializations'], 'selected' => $p->specializations ?? []])</div>
        <div class="field"><label>Industry Expertise *</label>
            <p class="muted" style="margin:0 0 0.35rem;font-size:0.8rem;">Industries you have experience working with</p>
            @include('admin.partner_onboardings.partials.checkboxes', ['name' => 'industry_expertise', 'options' => $lists['industries'], 'selected' => $p->industry_expertise ?? []])</div>
        <div class="field"><label>Client Size Preference *</label>
            <p class="muted" style="margin:0 0 0.35rem;font-size:0.8rem;">Types of clients you prefer to work with</p>
            @include('admin.partner_onboardings.partials.checkboxes', ['name' => 'client_size_preference', 'options' => $lists['clientSizePreference'], 'selected' => $p->client_size_preference ?? []])</div>
        <div class="field"><label>Software Expertise *</label>
            <p class="muted" style="margin:0 0 0.35rem;font-size:0.8rem;">Software and tools you are proficient in</p>
            @include('admin.partner_onboardings.partials.checkboxes', ['name' => 'software_expertise', 'options' => $lists['softwareExpertise'], 'selected' => $p->software_expertise ?? []])</div>
        <div class="field"><label>Additional Certifications (Optional)</label>
            <p class="muted" style="margin:0 0 0.35rem;font-size:0.8rem;">Other professional certifications you hold</p>
            @include('admin.partner_onboardings.partials.checkboxes', ['name' => 'additional_certifications', 'options' => $lists['additionalCertifications'], 'selected' => $p->additional_certifications ?? []])</div>

        <h2 class="sec-title">Property broker information</h2>
        <div class="field"><label for="rera_registration_number">RERA Registration Number *</label>
            <input id="rera_registration_number" name="rera_registration_number" type="text" value="{{ old('rera_registration_number', $p->rera_registration_number) }}" placeholder="Enter RERA registration number" /></div>
        <div class="field"><label for="rera_state">RERA Registration State *</label>
            <select id="rera_state" name="rera_state">
                <option value="">Select RERA state</option>
                @foreach($lists['states'] as $s)
                    <option value="{{ $s }}" @selected(old('rera_state', $p->rera_state) === $s)>{{ $s }}</option>
                @endforeach
            </select></div>
        <div class="field"><label for="team_size">Team Size *</label>
            <select id="team_size" name="team_size">
                <option value="">Select team size</option>
                @foreach($teamOpts as $val => $lab)
                    <option value="{{ $val }}" @selected(old('team_size', $p->team_size) === $val)>{{ $lab }}</option>
                @endforeach
            </select></div>
        <div class="field"><label>Property Types *</label>
            <p class="muted" style="margin:0 0 0.35rem;font-size:0.8rem;">Types of properties you deal with</p>
            @include('admin.partner_onboardings.partials.checkboxes', ['name' => 'property_types', 'options' => $lists['propertyTypes'], 'selected' => $p->property_types ?? []])</div>
        <div class="field"><label>Transaction Types *</label>
            <p class="muted" style="margin:0 0 0.35rem;font-size:0.8rem;">Types of transactions you handle</p>
            @include('admin.partner_onboardings.partials.checkboxes', ['name' => 'transaction_types', 'options' => $lists['transactionTypes'], 'selected' => $p->transaction_types ?? []])</div>
        <div class="field"><label>Price Range Expertise *</label>
            <p class="muted" style="margin:0 0 0.35rem;font-size:0.8rem;">Property value ranges you specialize in</p>
            @include('admin.partner_onboardings.partials.checkboxes', ['name' => 'price_range_expertise', 'options' => $lists['priceRangeExpertise'], 'selected' => $p->price_range_expertise ?? []])</div>
        <div class="field"><label for="locality_expertise">Locality Expertise *</label>
            <textarea id="locality_expertise" name="locality_expertise">{{ old('locality_expertise', $p->locality_expertise) }}</textarea>
            <p class="muted" style="margin:0.25rem 0 0;font-size:0.8rem;">This helps clients find you for specific areas</p></div>
        <div class="field"><label for="notable_projects">Notable Projects (Optional)</label>
            <textarea id="notable_projects" name="notable_projects">{{ old('notable_projects', $p->notable_projects) }}</textarea></div>

        <div style="display:flex;gap:0.75rem;margin-top:1.25rem;flex-wrap:wrap;">
            <button type="submit" class="btn-gold">Save changes</button>
            <a class="btn-ghost" href="{{ route('admin.partner_onboardings.show', $p) }}">View</a>
            <a class="btn-ghost" href="{{ route('admin.partner_onboardings.index') }}">Back to list</a>
        </div>
    </form>
</div>
@endsection
