@php
    $isEdit = $mode === 'edit';
    $m = $amenity;
@endphp

@extends('admin.layouts.shell', ['title' => ($isEdit ? 'Edit amenity' : 'Add amenity') . ' — NRI Suvidha Admin'])

@include('admin.real_estate._styles')

@section('content')
<div class="re-card-form re-form">
    <h1>{{ $isEdit ? 'Edit amenity' : 'Add amenity' }}</h1>

    <form method="post" action="{{ $isEdit ? route('admin.amenities.update', $m) : route('admin.amenities.store') }}">
        @csrf
        @if($isEdit)
            @method('PUT')
        @endif

        <div class="re-field">
            <label for="label">Label *</label>
            <input id="label" name="label" type="text" value="{{ old('label', $m->label) }}" required placeholder="e.g. Swimming pool" />
        </div>
        <div class="re-field">
            <label for="slug">Slug</label>
            <input id="slug" name="slug" type="text" value="{{ old('slug', $m->slug) }}" placeholder="Auto from label if empty" />
        </div>
        <div class="re-field">
            <label for="icon_class">Icon (Font Awesome class)</label>
            <input id="icon_class" name="icon_class" type="text" value="{{ old('icon_class', $m->icon_class) }}" placeholder="e.g. fa-solid fa-dumbbell" />
            <p class="re-hint">Optional. One class string only (Font Awesome v5/v6). If empty, the website uses a default icon.</p>
        </div>
        <div class="re-field">
            <label for="sort_order">Sort order</label>
            <input id="sort_order" name="sort_order" type="number" min="0" value="{{ old('sort_order', $m->sort_order ?? 0) }}" />
        </div>

        <div class="re-check">
            <input type="hidden" name="is_active" value="0" />
            <input id="is_active" name="is_active" type="checkbox" value="1" @checked((bool) old('is_active', $m->exists ? $m->is_active : true)) />
            <label for="is_active" style="text-transform: none; font-weight: 500; color: #0f172a;">Active</label>
        </div>

        <div style="display:flex;gap:0.75rem;margin-top:1.25rem;flex-wrap:wrap;">
            <button type="submit" class="re-btn-gold">Save</button>
            <a class="re-btn-ghost" href="{{ route('admin.amenities.index') }}">Back to list</a>
        </div>
    </form>
</div>
@endsection
