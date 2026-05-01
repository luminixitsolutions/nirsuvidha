@php
    $isEdit = $mode === 'edit';
    $m = $trustedPartner;
@endphp

@extends('admin.layouts.shell', ['title' => ($isEdit ? 'Edit company' : 'Add company') . ' (Trusted by) — NRI Suvidha Admin'])

@push('head')
<style>
    .form h1 { font-size: 1.25rem; margin: 0 0 1rem; }
    .field { margin-bottom: 0.9rem; }
    .field label { display: block; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.02em; color: #64748b; margin-bottom: 0.25rem; }
    .field input[type="text"], .field input[type="number"], .field input[type="file"] {
        width: 100%; border-radius: 0.5rem; border: 1px solid rgba(15, 23, 42, 0.12);
        padding: 0.5rem 0.65rem; font-size: 0.9rem; background: #fff;
    }
    .check { display: flex; align-items: center; gap: 0.4rem; margin: 0.5rem 0; font-size: 0.9rem; }
    .card-form { background: #fff; border: 1px solid rgba(15, 23, 42, 0.08); border-radius: 0.75rem; padding: 1.25rem 1.5rem 1.5rem; }
    .btn-gold { border: none; border-radius: 0.5rem; font-weight: 600; font-size: 0.9rem; padding: 0.6rem 1.2rem; cursor: pointer;
        background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%); color: #fff; }
    .btn-ghost { border: 1px solid rgba(201, 163, 78, 0.4); background: #fff; border-radius: 0.5rem; padding: 0.5rem 1rem; font-size: 0.875rem; text-decoration: none; color: #0f172a; display: inline-block; }
    .logo-prev { max-height: 80px; max-width: 200px; object-fit: contain; margin-top: 0.35rem; border: 1px solid rgba(201,163,78,0.2); border-radius: 0.35rem; padding: 0.25rem; }
</style>
@endpush

@section('content')
<div class="card-form form">
    <h1>{{ $isEdit ? 'Edit company' : 'Add company' }}</h1>
    <p class="muted" style="font-size:0.9rem;margin:-0.5rem 0 1rem;color:#64748b;">Fields: company name, logo, and whether it is shown on the home “Trusted by” strip.</p>

    <form method="post" action="{{ $isEdit ? route('admin.trusted_partners.update', $m) : route('admin.trusted_partners.store') }}" enctype="multipart/form-data">
        @csrf
        @if($isEdit)
            @method('PUT')
        @endif

        <div class="field">
            <label for="name">Company name *</label>
            <input id="name" name="name" type="text" value="{{ old('name', $m->name) }}" required />
        </div>

        <div class="field" style="max-width: 12rem;">
            <label for="sort_order">Sort order</label>
            <input id="sort_order" name="sort_order" type="number" min="0" value="{{ old('sort_order', $m->sort_order ?? 0) }}" />
        </div>

        <div class="check">
            <input type="hidden" name="is_active" value="0" />
            <input id="is_active" name="is_active" type="checkbox" value="1" @checked((bool) old('is_active', $m->exists ? $m->is_active : true)) />
            <label for="is_active" style="text-transform: none; font-weight: 500; color: #0f172a;">Active (show on website)</label>
        </div>

        <h2 style="font-size:0.9rem;margin:1.25rem 0 0.5rem;color:#9A7B32;">Logo</h2>
        @if($isEdit && $m->logo)
        <img class="logo-prev" src="{{ asset('storage/'.ltrim($m->logo,'/')) }}" alt="" />
        <div class="check">
            <input type="checkbox" name="remove_logo" id="remove_logo" value="1" />
            <label for="remove_logo" style="text-transform:none;font-weight:500;">Remove current logo on save</label>
        </div>
        @endif
        <div class="field">
            <label for="logo">{{ $isEdit ? 'Replace' : 'Upload' }} logo (PNG, JPG, WebP, SVG — optional)</label>
            <input id="logo" name="logo" type="file" accept="image/*,.svg" />
        </div>

        <div style="display:flex;gap:0.75rem;margin-top:1.25rem;flex-wrap:wrap;">
            <button type="submit" class="btn-gold">Save</button>
            <a class="btn-ghost" href="{{ route('admin.trusted_partners.index') }}">Back to list</a>
        </div>
    </form>
</div>
@endsection
