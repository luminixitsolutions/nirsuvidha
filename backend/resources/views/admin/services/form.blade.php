@php
    $isEdit = $mode === 'edit';
    $m = $service;
@endphp

@extends('admin.layouts.shell', ['title' => ($isEdit ? 'Edit service' : 'Add service') . ' — NRI Suvidha Admin'])

@push('head')
<style>
    .form h1 { font-size: 1.25rem; margin: 0 0 1rem; }
    .field { margin-bottom: 0.9rem; }
    .field label { display: block; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.02em; color: #64748b; margin-bottom: 0.25rem; }
    .field input[type="text"], .field input[type="number"], .field input[type="file"], .field textarea {
        width: 100%; border-radius: 0.5rem; border: 1px solid rgba(15, 23, 42, 0.12);
        padding: 0.5rem 0.65rem; font-size: 0.9rem; background: #fff;
    }
    .field textarea { min-height: 5rem; font-family: system-ui, sans-serif; }
    .field textarea.md { min-height: 8rem; }
    .field textarea.lg { min-height: 16rem; }
    .hint { font-size: 0.75rem; color: #64748b; margin-top: 0.2rem; }
    .row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
    @media (max-width: 600px) { .row2 { grid-template-columns: 1fr; } }
    .check { display: flex; align-items: center; gap: 0.4rem; margin: 0.5rem 0; font-size: 0.9rem; }
    .card-form { background: #fff; border: 1px solid rgba(15, 23, 42, 0.08); border-radius: 0.75rem; padding: 1.25rem 1.5rem 1.5rem; }
    .btn-gold { border: none; border-radius: 0.5rem; font-weight: 600; font-size: 0.9rem; padding: 0.6rem 1.2rem; cursor: pointer;
        background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%); color: #fff; }
    .btn-ghost { border: 1px solid rgba(201, 163, 78, 0.4); background: #fff; border-radius: 0.5rem; padding: 0.5rem 1rem; font-size: 0.875rem; text-decoration: none; color: #0f172a; display: inline-block; }
    .gallery-grid { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 0.5rem; }
    .g-item { position: relative; width: 100px; }
    .g-item img { width: 100px; height: 80px; object-fit: cover; border-radius: 0.35rem; border: 1px solid rgba(0,0,0,0.1); }
    .g-item label { font-size: 0.65rem; text-transform: none; position: static; }
    .photo-prev { max-height: 160px; border-radius: 0.4rem; margin-top: 0.35rem; border: 1px solid rgba(201,163,78,0.3); }
</style>
@endpush

@section('content')
<div class="card-form form">
    <h1>{{ $isEdit ? 'Edit service' : 'Add service' }}</h1>

    <form method="post" action="{{ $isEdit ? route('admin.services.update', $m) : route('admin.services.store') }}" enctype="multipart/form-data">
        @csrf
        @if($isEdit)
            @method('PUT')
        @endif

        <div class="row2">
            <div class="field">
                <label for="title">Title *</label>
                <input id="title" name="title" type="text" value="{{ old('title', $m->title) }}" required />
            </div>
            <div class="field">
                <label for="sort_order">Sort order</label>
                <input id="sort_order" name="sort_order" type="number" min="0" value="{{ old('sort_order', $m->sort_order ?? 0) }}" />
            </div>
        </div>

        <div class="field">
            <label for="icon">Icon (Font Awesome class) *</label>
            <input id="icon" name="icon" type="text" value="{{ old('icon', $m->icon) }}" required placeholder="fa-solid fa-scale-balanced" />
            <p class="hint">Example: <code>fa-solid fa-briefcase</code> (matches your Next.js service cards)</p>
        </div>

        <div class="field">
            <label for="short_details">Short details *</label>
            <textarea id="short_details" name="short_details" class="md" required>{{ old('short_details', $m->short_details) }}</textarea>
        </div>

        <div class="field">
            <label for="below_short_title">Below short title (gold kicker line)</label>
            <input id="below_short_title" name="below_short_title" type="text" value="{{ old('below_short_title', $m->below_short_title) }}" />
        </div>

        <div class="field">
            <label for="full_details">Full details (detail page / long copy)</label>
            <textarea id="full_details" name="full_details" class="lg">{{ old('full_details', $m->full_details) }}</textarea>
        </div>

        <div class="field">
            <label for="link_href">Link (href for card)</label>
            <input id="link_href" name="link_href" type="text" value="{{ old('link_href', $m->link_href) }}" placeholder="/#services" />
        </div>

        <div class="check">
            <input id="is_published" name="is_published" type="checkbox" value="1" @checked(old('is_published', $m->is_published ?? true)) />
            <label for="is_published" style="text-transform: none; font-weight: 500; color: #0f172a;">Published (visible in API &amp; site)</label>
        </div>

        <h2 style="font-size:0.9rem;margin:1.25rem 0 0.5rem;color:#9A7B32;">Main photo (optional)</h2>
        @if($isEdit && $m->photo)
        <p class="hint" style="margin-bottom:0.4rem">Current:</p>
        <img class="photo-prev" src="{{ asset('storage/'.ltrim($m->photo,'/')) }}" alt="" />
        <div class="check">
            <input type="checkbox" name="remove_photo" id="remove_photo" value="1" />
            <label for="remove_photo" style="text-transform:none;font-weight:500;">Remove current photo on save</label>
        </div>
        @endif
        <div class="field">
            <label for="photo">{{ $isEdit ? 'Replace' : 'Upload' }} main photo</label>
            <input id="photo" name="photo" type="file" accept="image/*" />
        </div>

        <h2 style="font-size:0.9rem;margin:1.25rem 0 0.5rem;color:#9A7B32;">Gallery (multiple photos)</h2>
        @if($isEdit && is_array($m->multiple_photos) && count($m->multiple_photos) > 0)
        <p class="hint">Remove images by checking the box, then save.</p>
        <div class="gallery-grid">
            @foreach($m->multiple_photos as $p)
            <div class="g-item">
                <img src="{{ asset('storage/'.ltrim($p,'/')) }}" alt="" />
                <label class="check" style="margin:0.25rem 0 0 0">
                    <input type="checkbox" name="remove_gallery[]" value="{{ $p }}" />
                    <span>Remove</span>
                </label>
            </div>
            @endforeach
        </div>
        @endif
        <div class="field">
            <label for="gallery_files">Add images (one or more)</label>
            <input id="gallery_files" name="gallery_files[]" type="file" accept="image/*" multiple />
        </div>

        <div style="display:flex;gap:0.75rem;margin-top:1.25rem;flex-wrap:wrap;">
            <button type="submit" class="btn-gold">Save</button>
            <a class="btn-ghost" href="{{ route('admin.services.index') }}">Back to list</a>
        </div>
    </form>
</div>
@endsection
