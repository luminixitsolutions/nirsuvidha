@php
    $isEdit = $mode === 'edit';
    $m = $state;
@endphp

@extends('admin.layouts.shell', ['title' => ($isEdit ? 'Edit state' : 'Add state') . ' — NRI Suvidha Admin'])

@include('admin.real_estate._styles')

@section('content')
<div class="re-card-form re-form">
    <h1>{{ $isEdit ? 'Edit state' : 'Add state' }}</h1>

    <form method="post" action="{{ $isEdit ? route('admin.states.update', $m) : route('admin.states.store') }}">
        @csrf
        @if($isEdit)
            @method('PUT')
        @endif

        <div class="re-field">
            <label for="country_id">Country *</label>
            <select id="country_id" name="country_id" required>
                <option value="">Select country</option>
                @foreach($countries as $c)
                <option value="{{ $c->id }}" @selected((string) old('country_id', $m->country_id) === (string) $c->id)>{{ $c->name }}</option>
                @endforeach
            </select>
        </div>
        <div class="re-field">
            <label for="name">Name *</label>
            <input id="name" name="name" type="text" value="{{ old('name', $m->name) }}" required />
        </div>
        <div class="re-field">
            <label for="slug">Slug</label>
            <input id="slug" name="slug" type="text" value="{{ old('slug', $m->slug) }}" placeholder="Unique within country; auto if empty" />
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
            <a class="re-btn-ghost" href="{{ route('admin.states.index') }}">Back to list</a>
        </div>
    </form>
</div>
@endsection
