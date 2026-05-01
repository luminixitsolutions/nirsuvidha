@php
    $isEdit = $mode === 'edit';
    $m = $designation;
@endphp

@extends('admin.layouts.shell', ['title' => ($isEdit ? 'Edit designation' : 'Add designation') . ' — NRI Suvidha Admin'])

@push('head')
<style>
    .form h1 { font-size: 1.25rem; margin: 0 0 1rem; }
    .field { margin-bottom: 0.9rem; }
    .field label { display: block; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.02em; color: #64748b; margin-bottom: 0.25rem; }
    .field input[type="text"] {
        width: 100%; border-radius: 0.5rem; border: 1px solid rgba(15, 23, 42, 0.12);
        padding: 0.5rem 0.65rem; font-size: 0.9rem; background: #fff;
    }
    .check { display: flex; align-items: center; gap: 0.4rem; margin: 0.5rem 0; font-size: 0.9rem; }
    .card-form { background: #fff; border: 1px solid rgba(15, 23, 42, 0.08); border-radius: 0.75rem; padding: 1.25rem 1.5rem 1.5rem; }
    .btn-gold { border: none; border-radius: 0.5rem; font-weight: 600; font-size: 0.9rem; padding: 0.6rem 1.2rem; cursor: pointer;
        background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%); color: #fff; }
    .btn-ghost { border: 1px solid rgba(201, 163, 78, 0.4); background: #fff; border-radius: 0.5rem; padding: 0.5rem 1rem; font-size: 0.875rem; text-decoration: none; color: #0f172a; display: inline-block; }
</style>
@endpush

@section('content')
<div class="card-form form">
    <h1>{{ $isEdit ? 'Edit designation' : 'Add designation' }}</h1>

    <form method="post" action="{{ $isEdit ? route('admin.designations.update', $m) : route('admin.designations.store') }}">
        @csrf
        @if($isEdit)
            @method('PUT')
        @endif

        <div class="field">
            <label for="name">Name *</label>
            <input id="name" name="name" type="text" value="{{ old('name', $m->name) }}" required placeholder="e.g. Senior Manager, HR Executive" />
        </div>

        <div class="check">
            <input type="hidden" name="is_active" value="0" />
            <input id="is_active" name="is_active" type="checkbox" value="1" @checked((bool) old('is_active', $m->exists ? $m->is_active : true)) />
            <label for="is_active" style="text-transform: none; font-weight: 500; color: #0f172a;">Active</label>
        </div>

        <div style="display:flex;gap:0.75rem;margin-top:1.25rem;flex-wrap:wrap;">
            <button type="submit" class="btn-gold">Save</button>
            <a class="btn-ghost" href="{{ route('admin.designations.index') }}">Back to list</a>
        </div>
    </form>
</div>
@endsection
