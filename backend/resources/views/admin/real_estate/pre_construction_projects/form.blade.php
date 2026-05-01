@php
    use App\Models\PreConstructionProject;
    $isEdit = $mode === 'edit';
    $m = $project;
@endphp

@extends('admin.layouts.shell', ['title' => ($isEdit ? 'Edit pre-construction project' : 'Add pre-construction project') . ' — NRI Suvidha Admin'])

@include('admin.real_estate._styles')

@section('content')
<div class="re-card-form re-form">
    <h1>{{ $isEdit ? 'Edit pre-construction project' : 'Add pre-construction project' }}</h1>
    <p class="re-muted" style="margin:-0.5rem 0 1rem;">
        These cards appear on the public site under <strong>Real Estate Services → Pre-Construction</strong>.
    </p>

    <form method="post" action="{{ $isEdit ? route('admin.pre_construction_projects.update', $m) : route('admin.pre_construction_projects.store') }}">
        @csrf
        @if($isEdit)
            @method('PUT')
        @endif

        <div class="re-field">
            <label for="title">Project name *</label>
            <input id="title" name="title" type="text" value="{{ old('title', $m->title) }}" required />
        </div>

        <div class="re-field">
            <label for="status_badge">Status badge *</label>
            <input id="status_badge" name="status_badge" type="text" value="{{ old('status_badge', $m->status_badge) }}" required placeholder="e.g. Launching Soon" />
        </div>

        <div class="re-field">
            <label for="badge_variant">Badge style *</label>
            <select id="badge_variant" name="badge_variant" required>
                <option value="{{ PreConstructionProject::BADGE_MUTED }}" @selected(old('badge_variant', $m->badge_variant) === PreConstructionProject::BADGE_MUTED)>Soft (muted)</option>
                <option value="{{ PreConstructionProject::BADGE_ACCENT }}" @selected(old('badge_variant', $m->badge_variant) === PreConstructionProject::BADGE_ACCENT)>Highlight (accent)</option>
            </select>
        </div>

        <div class="re-field">
            <label for="description">Short description *</label>
            <textarea id="description" name="description" required>{{ old('description', $m->description) }}</textarea>
        </div>

        <div class="re-field">
            <label for="starting_price_display">Starting price (display) *</label>
            <input id="starting_price_display" name="starting_price_display" type="text" value="{{ old('starting_price_display', $m->starting_price_display) }}" required placeholder="e.g. ₹2.5 Crores" />
        </div>

        <div class="re-field">
            <label for="possession_display">Possession *</label>
            <input id="possession_display" name="possession_display" type="text" value="{{ old('possession_display', $m->possession_display) }}" required placeholder="e.g. Dec 2027" />
        </div>

        <div class="re-field">
            <label for="payment_plan">Payment plan *</label>
            <input id="payment_plan" name="payment_plan" type="text" value="{{ old('payment_plan', $m->payment_plan) }}" required placeholder="e.g. 20:80" />
        </div>

        <div class="re-field">
            <label for="benefits_heading">Benefits / offers heading *</label>
            <input id="benefits_heading" name="benefits_heading" type="text" value="{{ old('benefits_heading', $m->benefits_heading) }}" required placeholder="e.g. Pre-launch Benefits" />
        </div>

        <div class="re-field">
            <label for="benefits_text">Benefits list (one per line)</label>
            <textarea id="benefits_text" name="benefits_text" placeholder="Each line becomes a bullet">{{ old('benefits_text', $benefitsText ?? '') }}</textarea>
        </div>

        <div class="re-field">
            <label for="cta_button_text">Button text *</label>
            <input id="cta_button_text" name="cta_button_text" type="text" value="{{ old('cta_button_text', $m->cta_button_text) }}" required placeholder="e.g. Register Interest" />
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
            <a href="{{ route('admin.pre_construction_projects.index') }}" class="re-btn-ghost">Back to list</a>
        </div>
    </form>
</div>
@endsection
