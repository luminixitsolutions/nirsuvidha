@php
    $isEdit = $mode === 'edit';
    $m = $testimonial;
@endphp

@extends('admin.layouts.shell', ['title' => ($isEdit ? 'Edit testimonial' : 'Add testimonial') . ' — NRI Suvidha Admin'])

@push('head')
<style>
    .form h1 { font-size: 1.25rem; margin: 0 0 1rem; }
    .field { margin-bottom: 0.9rem; }
    .field label { display: block; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.02em; color: #64748b; margin-bottom: 0.25rem; }
    .field input[type="text"], .field input[type="number"], .field input[type="file"], .field textarea, .field select {
        width: 100%; border-radius: 0.5rem; border: 1px solid rgba(15, 23, 42, 0.12);
        padding: 0.5rem 0.65rem; font-size: 0.9rem; background: #fff;
    }
    .field textarea { min-height: 7rem; font-family: system-ui, sans-serif; }
    .hint { font-size: 0.75rem; color: #64748b; margin-top: 0.2rem; }
    .row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
    @media (max-width: 600px) { .row2 { grid-template-columns: 1fr; } }
    .check { display: flex; align-items: center; gap: 0.4rem; margin: 0.5rem 0; font-size: 0.9rem; }
    .card-form { background: #fff; border: 1px solid rgba(15, 23, 42, 0.08); border-radius: 0.75rem; padding: 1.25rem 1.5rem 1.5rem; }
    .btn-gold { border: none; border-radius: 0.5rem; font-weight: 600; font-size: 0.9rem; padding: 0.6rem 1.2rem; cursor: pointer;
        background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%); color: #fff; }
    .btn-ghost { border: 1px solid rgba(201, 163, 78, 0.4); background: #fff; border-radius: 0.5rem; padding: 0.5rem 1rem; font-size: 0.875rem; text-decoration: none; color: #0f172a; display: inline-block; }
    .photo-prev { max-height: 120px; border-radius: 50%; margin-top: 0.35rem; border: 1px solid rgba(201,163,78,0.3); }
</style>
@endpush

@section('content')
<div class="card-form form">
    <h1>{{ $isEdit ? 'Edit testimonial' : 'Add testimonial' }}</h1>

    <form method="post" action="{{ $isEdit ? route('admin.testimonials.update', $m) : route('admin.testimonials.store') }}" enctype="multipart/form-data">
        @csrf
        @if($isEdit)
            @method('PUT')
        @endif

        <div class="row2">
            <div class="field">
                <label for="name">Name *</label>
                <input id="name" name="name" type="text" value="{{ old('name', $m->name) }}" required />
            </div>
            <div class="field">
                <label for="designation">Designation</label>
                <input id="designation" name="designation" type="text" value="{{ old('designation', $m->designation) }}" placeholder="NRI · Singapore" />
            </div>
        </div>

        <div class="row2">
            <div class="field">
                <label for="rating">Rating (1–5) *</label>
                <select id="rating" name="rating" required>
                    @for($i = 1; $i <= 5; $i++)
                    <option value="{{ $i }}" @selected((int)old('rating', $m->rating ?? 5) === $i)>{{ $i }} stars</option>
                    @endfor
                </select>
            </div>
            <div class="field">
                <label for="sort_order">Sort order</label>
                <input id="sort_order" name="sort_order" type="number" min="0" value="{{ old('sort_order', $m->sort_order ?? 0) }}" />
            </div>
        </div>

        <div class="field">
            <label for="feedback">Feedback *</label>
            <textarea id="feedback" name="feedback" required>{{ old('feedback', $m->feedback) }}</textarea>
        </div>

        <div class="check">
            <input type="hidden" name="is_active" value="0" />
            <input id="is_active" name="is_active" type="checkbox" value="1" @checked((bool) old('is_active', $m->exists ? $m->is_active : true)) />
            <label for="is_active" style="text-transform: none; font-weight: 500; color: #0f172a;">Active (show on website)</label>
        </div>

        <h2 style="font-size:0.9rem;margin:1.25rem 0 0.5rem;color:#9A7B32;">Photo</h2>
        @if($isEdit && $m->photo)
        <img class="photo-prev" src="{{ asset('storage/'.ltrim($m->photo,'/')) }}" alt="" />
        <div class="check">
            <input type="checkbox" name="remove_photo" id="remove_photo" value="1" />
            <label for="remove_photo" style="text-transform:none;font-weight:500;">Remove current photo on save</label>
        </div>
        @endif
        <div class="field">
            <label for="photo">{{ $isEdit ? 'Replace' : 'Upload' }} photo (optional)</label>
            <input id="photo" name="photo" type="file" accept="image/*" />
        </div>

        <div style="display:flex;gap:0.75rem;margin-top:1.25rem;flex-wrap:wrap;">
            <button type="submit" class="btn-gold">Save</button>
            <a class="btn-ghost" href="{{ route('admin.testimonials.index') }}">Back to list</a>
        </div>
    </form>
</div>
@endsection
