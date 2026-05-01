@php
    $isEdit = $mode === 'edit';
    $m = $country;
@endphp

@extends('admin.layouts.shell', ['title' => ($isEdit ? 'Edit country' : 'Add country') . ' — NRI Suvidha Admin'])

@include('admin.real_estate._styles')

@section('content')
<div class="re-card-form re-form">
    <h1>{{ $isEdit ? 'Edit country' : 'Add country' }}</h1>

    <form method="post" action="{{ $isEdit ? route('admin.countries.update', $m) : route('admin.countries.store') }}">
        @csrf
        @if($isEdit)
            @method('PUT')
        @endif

        <div class="re-field">
            <label for="name">Name *</label>
            <input id="name" name="name" type="text" value="{{ old('name', $m->name) }}" required />
        </div>
        <div class="re-field">
            <label for="slug">Slug</label>
            <input id="slug" name="slug" type="text" value="{{ old('slug', $m->slug) }}" placeholder="Auto from name if empty" />
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
            <a class="re-btn-ghost" href="{{ route('admin.countries.index') }}">Back to list</a>
        </div>
    </form>
</div>
@endsection
