@php
    $isEdit = $mode === 'edit';
    $m = $customer;
@endphp

@extends('admin.layouts.shell', ['title' => ($isEdit ? 'Edit customer' : 'Add customer') . ' — NRI Suvidha Admin'])

@push('head')
<style>
    .form h1 { font-size: 1.25rem; margin: 0 0 1rem; }
    .form h2 { font-size: 0.95rem; margin: 1.25rem 0 0.65rem; color: #9A7B32; font-weight: 600; }
    .field { margin-bottom: 0.9rem; }
    .field label { display: block; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.02em; color: #64748b; margin-bottom: 0.25rem; }
    .field input[type="text"], .field input[type="email"], .field textarea, .field input[type="file"] {
        width: 100%; border-radius: 0.5rem; border: 1px solid rgba(15, 23, 42, 0.12);
        padding: 0.5rem 0.65rem; font-size: 0.9rem; background: #fff;
    }
    .field input[type="file"] { padding: 0.4rem; font-size: 0.82rem; }
    .field textarea { min-height: 5rem; font-family: system-ui, sans-serif; }
    .row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
    @media (max-width: 600px) { .row2 { grid-template-columns: 1fr; } }
    .check { display: flex; align-items: center; gap: 0.4rem; margin: 0.35rem 0 0.6rem; font-size: 0.85rem; }
    .check label { text-transform: none; font-weight: 500; color: #0f172a; margin: 0; }
    .card-form { background: #fff; border: 1px solid rgba(15, 23, 42, 0.08); border-radius: 0.75rem; padding: 1.25rem 1.5rem 1.5rem; }
    .btn-gold { border: none; border-radius: 0.5rem; font-weight: 600; font-size: 0.9rem; padding: 0.6rem 1.2rem; cursor: pointer;
        background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%); color: #fff; }
    .btn-ghost { border: 1px solid rgba(201, 163, 78, 0.4); background: #fff; border-radius: 0.5rem; padding: 0.5rem 1rem; font-size: 0.875rem; text-decoration: none; color: #0f172a; display: inline-block; }
    .hint { font-size: 0.75rem; color: #64748b; margin-top: 0.2rem; }
    .current-file { font-size: 0.82rem; margin: 0 0 0.35rem; }
    .current-file a { color: #9A7B32; font-weight: 600; }
    .photo-prev { max-height: 96px; border-radius: 0.5rem; margin-bottom: 0.35rem; border: 1px solid rgba(201,163,78,0.25); }
</style>
@endpush

@section('content')
<div class="card-form form">
    <h1>{{ $isEdit ? 'Edit customer' : 'Add customer' }}</h1>

    <form method="post" action="{{ $isEdit ? route('admin.customers.update', $m) : route('admin.customers.store') }}" enctype="multipart/form-data">
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
                <label for="company">Company</label>
                <input id="company" name="company" type="text" value="{{ old('company', $m->company) }}" />
            </div>
        </div>

        <div class="row2">
            <div class="field">
                <label for="email">Email</label>
                <input id="email" name="email" type="email" value="{{ old('email', $m->email) }}" autocomplete="email" />
            </div>
            <div class="field">
                <label for="phone">Phone</label>
                <input id="phone" name="phone" type="text" value="{{ old('phone', $m->phone) }}" />
            </div>
        </div>

        <h2>Identity &amp; tax (optional)</h2>
        <div class="row2">
            <div class="field">
                <label for="aadhar_number">Aadhaar number</label>
                <input id="aadhar_number" name="aadhar_number" type="text" value="{{ old('aadhar_number', $m->aadhar_number) }}" inputmode="numeric" autocomplete="off" maxlength="20" placeholder="e.g. last 4 digits or full per your policy" />
            </div>
            <div class="field">
                <label for="pan_number">PAN</label>
                <input id="pan_number" name="pan_number" type="text" value="{{ old('pan_number', $m->pan_number) }}" maxlength="12" placeholder="ABCDE1234F" style="text-transform:uppercase;" />
            </div>
        </div>
        <div class="field">
            <label for="gst_number">GSTIN</label>
            <input id="gst_number" name="gst_number" type="text" value="{{ old('gst_number', $m->gst_number) }}" maxlength="20" placeholder="Optional — for business customers" />
        </div>

        <h2>Documents &amp; photo</h2>
        <p class="hint" style="margin-top:-0.25rem;margin-bottom:0.75rem;">Upload scans or PDFs (max ~10 MB each for documents; photo max ~5 MB). JPG, PNG, WebP, or PDF.</p>

        <div class="field">
            <label for="aadhar_document">Aadhaar card (scan / PDF)</label>
            @if($isEdit && $m->aadhar_document)
            <p class="current-file"><a href="{{ asset('storage/'.ltrim($m->aadhar_document, '/')) }}" target="_blank" rel="noopener">View current file</a></p>
            <div class="check">
                <input type="checkbox" name="remove_aadhar_document" id="remove_aadhar_document" value="1" />
                <label for="remove_aadhar_document">Remove on save</label>
            </div>
            @endif
            <input id="aadhar_document" name="aadhar_document" type="file" accept=".pdf,.jpg,.jpeg,.png,.webp,image/*,application/pdf" />
        </div>

        <div class="field">
            <label for="pan_document">PAN card (scan / PDF)</label>
            @if($isEdit && $m->pan_document)
            <p class="current-file"><a href="{{ asset('storage/'.ltrim($m->pan_document, '/')) }}" target="_blank" rel="noopener">View current file</a></p>
            <div class="check">
                <input type="checkbox" name="remove_pan_document" id="remove_pan_document" value="1" />
                <label for="remove_pan_document">Remove on save</label>
            </div>
            @endif
            <input id="pan_document" name="pan_document" type="file" accept=".pdf,.jpg,.jpeg,.png,.webp,image/*,application/pdf" />
        </div>

        <div class="field">
            <label for="supporting_document">Other supporting document</label>
            @if($isEdit && $m->supporting_document)
            <p class="current-file"><a href="{{ asset('storage/'.ltrim($m->supporting_document, '/')) }}" target="_blank" rel="noopener">View current file</a></p>
            <div class="check">
                <input type="checkbox" name="remove_supporting_document" id="remove_supporting_document" value="1" />
                <label for="remove_supporting_document">Remove on save</label>
            </div>
            @endif
            <input id="supporting_document" name="supporting_document" type="file" accept=".pdf,.jpg,.jpeg,.png,.webp,image/*,application/pdf" />
        </div>

        <div class="field">
            <label for="photo">Photo</label>
            @if($isEdit && $m->photo)
            <img class="photo-prev" src="{{ asset('storage/'.ltrim($m->photo, '/')) }}" alt="Customer photo" />
            <div class="check">
                <input type="checkbox" name="remove_photo" id="remove_photo" value="1" />
                <label for="remove_photo">Remove current photo on save</label>
            </div>
            @endif
            <input id="photo" name="photo" type="file" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" />
        </div>

        <h2>Notes</h2>
        <div class="field">
            <label for="notes">Notes</label>
            <textarea id="notes" name="notes">{{ old('notes', $m->notes) }}</textarea>
        </div>

        <div class="check">
            <input type="hidden" name="is_active" value="0" />
            <input id="is_active" name="is_active" type="checkbox" value="1" @checked((bool) old('is_active', $m->exists ? $m->is_active : true)) />
            <label for="is_active">Active</label>
        </div>

        <div style="display:flex;gap:0.75rem;margin-top:1.25rem;flex-wrap:wrap;">
            <button type="submit" class="btn-gold">Save</button>
            <a class="btn-ghost" href="{{ route('admin.customers.index') }}">Back to list</a>
        </div>
    </form>
</div>
@endsection
