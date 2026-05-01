@php
    $isEdit = $mode === 'edit';
    $m = $partner;
@endphp

@extends('admin.layouts.shell', ['title' => ($isEdit ? 'Edit home loan partner' : 'Add home loan partner') . ' — NRI Suvidha Admin'])

@include('admin.real_estate._styles')

@section('content')
<div class="re-card-form re-form">
    <h1>{{ $isEdit ? 'Edit home loan partner' : 'Add home loan partner' }}</h1>
    <p class="re-muted" style="margin:-0.5rem 0 1rem;">
        Shown on the public site under <strong>Real Estate Services → Home Loans</strong>.
    </p>

    <form method="post" action="{{ $isEdit ? route('admin.home_loan_partners.update', $m) : route('admin.home_loan_partners.store') }}">
        @csrf
        @if($isEdit)
            @method('PUT')
        @endif

        <div class="re-field">
            <label for="bank_name">Lender / bank name *</label>
            <input id="bank_name" name="bank_name" type="text" value="{{ old('bank_name', $m->bank_name) }}" required />
        </div>

        <div class="re-field">
            <label for="icon_class">Font Awesome icon classes</label>
            <input id="icon_class" name="icon_class" type="text" value="{{ old('icon_class', $m->icon_class) }}" placeholder="e.g. fa-solid fa-building-columns" />
            <p class="re-hint">Optional. Site loads Font Awesome — use classes like <code>fa-solid fa-landmark</code>.</p>
        </div>

        <div class="re-field">
            <label for="interest_rate_display">Interest rate (display) *</label>
            <input id="interest_rate_display" name="interest_rate_display" type="text" value="{{ old('interest_rate_display', $m->interest_rate_display) }}" required placeholder="e.g. 8.5%" />
        </div>

        <div class="re-field">
            <label for="processing_fee_display">Processing fee (display) *</label>
            <input id="processing_fee_display" name="processing_fee_display" type="text" value="{{ old('processing_fee_display', $m->processing_fee_display) }}" required placeholder="e.g. 0.5%" />
        </div>

        <div class="re-field">
            <label for="max_tenure_display">Max tenure (display) *</label>
            <input id="max_tenure_display" name="max_tenure_display" type="text" value="{{ old('max_tenure_display', $m->max_tenure_display) }}" required placeholder="e.g. 30 years" />
        </div>

        <div class="re-field">
            <label for="sort_order">Sort order</label>
            <input id="sort_order" name="sort_order" type="number" min="0" value="{{ old('sort_order', $m->sort_order) }}" />
        </div>

        <div class="re-check">
            <input id="is_published" name="is_published" type="checkbox" value="1" @checked(old('is_published', $m->is_published)) />
            <label for="is_published">Published on public site</label>
        </div>

        <div style="display:flex; flex-wrap:wrap; gap:0.75rem; margin-top:1.25rem;">
            <button type="submit" class="re-btn-gold">Save</button>
            <a href="{{ route('admin.home_loan_partners.index') }}" class="re-btn-ghost">Back to list</a>
        </div>
    </form>
</div>
@endsection
