@php
    $isEdit = $mode === 'edit';
    $m = $employee;
    $permState = \App\Support\AdminPermissionCatalog::normalizePermissions(old('permissions', $m->exists ? ($m->menu_permissions ?? []) : []));
@endphp

@extends('admin.layouts.shell', ['title' => ($isEdit ? 'Edit employee' : 'Add employee') . ' — NRI Suvidha Admin'])

@push('head')
<style>
    .form h1 { font-size: 1.25rem; margin: 0 0 1rem; }
    .form h2 { font-size: 0.95rem; margin: 1.25rem 0 0.65rem; color: #9A7B32; font-weight: 600; }
    .field { margin-bottom: 0.9rem; }
    .field label { display: block; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.02em; color: #64748b; margin-bottom: 0.25rem; }
    .field input[type="text"], .field input[type="email"], .field textarea, .field select, .field input[type="file"] {
        width: 100%; border-radius: 0.5rem; border: 1px solid rgba(15, 23, 42, 0.12);
        padding: 0.5rem 0.65rem; font-size: 0.9rem; background: #fff;
    }
    .field input[type="file"] { padding: 0.4rem; font-size: 0.82rem; }
    .hint { font-size: 0.75rem; color: #64748b; margin-top: 0.25rem; }
    .field textarea { min-height: 5rem; font-family: system-ui, sans-serif; }
    .row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
    @media (max-width: 600px) { .row2 { grid-template-columns: 1fr; } }
    .check { display: flex; align-items: center; gap: 0.4rem; margin: 0.35rem 0 0.6rem; font-size: 0.85rem; }
    .check label { text-transform: none; font-weight: 500; color: #0f172a; margin: 0; }
    .card-form { background: #fff; border: 1px solid rgba(15, 23, 42, 0.08); border-radius: 0.75rem; padding: 1.25rem 1.5rem 1.5rem; }
    .btn-gold { border: none; border-radius: 0.5rem; font-weight: 600; font-size: 0.9rem; padding: 0.6rem 1.2rem; cursor: pointer;
        background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%); color: #fff; }
    .btn-ghost { border: 1px solid rgba(201, 163, 78, 0.4); background: #fff; border-radius: 0.5rem; padding: 0.5rem 1rem; font-size: 0.875rem; text-decoration: none; color: #0f172a; display: inline-block; }
    .doc-hint { font-size: 0.75rem; color: #64748b; margin-top: -0.25rem; margin-bottom: 0.75rem; }
    .current-file { font-size: 0.82rem; margin: 0 0 0.35rem; }
    .current-file a { color: #9A7B32; font-weight: 600; }
    .photo-prev { max-height: 96px; border-radius: 0.5rem; margin-bottom: 0.35rem; border: 1px solid rgba(201,163,78,0.25); }
    .perm-intro { font-size: 0.8rem; color: #64748b; margin: 0 0 0.75rem; max-width: 52rem; line-height: 1.45; }
    .perm-intro code { font-size: 0.72rem; background: #f1f5f9; padding: 0.1rem 0.25rem; border-radius: 0.25rem; }
    .perm-matrix { margin-top: 0.35rem; }
    .perm-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; margin-bottom: 0.65rem; border: 1px solid rgba(15, 23, 42, 0.08); border-radius: 0.5rem; overflow: hidden; }
    .perm-table thead { background: linear-gradient(180deg, #faf7f2 0%, #f3efe8 100%); color: #475569; text-transform: uppercase; letter-spacing: 0.04em; font-size: 0.68rem; }
    .perm-table th, .perm-table td { padding: 0.45rem 0.55rem; border-bottom: 1px solid rgba(15, 23, 42, 0.06); text-align: center; }
    .perm-table th:first-child, .perm-table td:first-child { text-align: left; }
    .perm-table tbody tr:nth-child(even) { background: #fafafa; }
    .perm-table tbody tr:nth-child(odd) { background: #fff; }
    .perm-col-module { width: 42%; }
    .perm-module-label { font-weight: 500; color: #0f172a; }
    .perm-cell input[type="checkbox"] { width: 1rem; height: 1rem; accent-color: #2563eb; cursor: pointer; vertical-align: middle; }
    .perm-dash { color: #94a3b8; font-weight: 500; }
    .perm-mod { margin-bottom: 0.5rem; border: 1px solid rgba(15, 23, 42, 0.08); border-radius: 0.5rem; overflow: hidden; background: #fff; }
    .perm-mod > summary {
        list-style: none; cursor: pointer; padding: 0.55rem 0.65rem; font-weight: 600; font-size: 0.88rem;
        background: linear-gradient(180deg, #fdfbf7 0%, #f6f0e6 100%); border-bottom: 1px solid rgba(15, 23, 42, 0.06); color: #334155;
    }
    .perm-mod > summary::-webkit-details-marker { display: none; }
    .perm-mod > summary::before { content: '+ '; font-weight: 700; color: #9A7B32; }
    .perm-mod[open] > summary::before { content: '− '; }
    .perm-mod .perm-table { margin-bottom: 0; border: none; border-radius: 0; }
</style>
@endpush

@section('content')
<div class="card-form form">
    <h1>{{ $isEdit ? 'Edit employee' : 'Add employee' }}</h1>

    <form method="post" action="{{ $isEdit ? route('admin.employees.update', $m) : route('admin.employees.store') }}" enctype="multipart/form-data">
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
                <label for="email">Email</label>
                <input id="email" name="email" type="email" value="{{ old('email', $m->email) }}" autocomplete="email" />
            </div>
        </div>

        <div class="row2">
            <div class="field">
                <label for="phone">Phone</label>
                <input id="phone" name="phone" type="text" value="{{ old('phone', $m->phone) }}" />
            </div>
            <div class="field">
                <label for="designation_id">Designation</label>
                <select id="designation_id" name="designation_id">
                    <option value="">— Select —</option>
                    @foreach($designations as $d)
                    <option value="{{ $d->id }}" @selected((string) old('designation_id', $m->designation_id) === (string) $d->id)>{{ $d->name }}</option>
                    @endforeach
                </select>
                <p class="hint">Pick an existing title or add a new one below (new name is saved to the master list).</p>
            </div>
        </div>

        <div class="field">
            <label for="new_designation">New designation</label>
            <input id="new_designation" name="new_designation" type="text" value="{{ old('new_designation') }}" placeholder="Type only if not in the list above" autocomplete="off" />
        </div>

        <h2>Identity &amp; tax (optional)</h2>
        <div class="row2">
            <div class="field">
                <label for="aadhar_number">Aadhaar number</label>
                <input id="aadhar_number" name="aadhar_number" type="text" value="{{ old('aadhar_number', $m->aadhar_number) }}" inputmode="numeric" autocomplete="off" maxlength="20" placeholder="Per your policy" />
            </div>
            <div class="field">
                <label for="pan_number">PAN</label>
                <input id="pan_number" name="pan_number" type="text" value="{{ old('pan_number', $m->pan_number) }}" maxlength="12" placeholder="ABCDE1234F" style="text-transform:uppercase;" />
            </div>
        </div>
        <div class="field">
            <label for="gst_number">GSTIN</label>
            <input id="gst_number" name="gst_number" type="text" value="{{ old('gst_number', $m->gst_number) }}" maxlength="20" placeholder="Optional" />
        </div>

        <h2>Documents &amp; photo</h2>
        <p class="doc-hint">Scans or PDFs (max ~10 MB each for documents; photo max ~5 MB). JPG, PNG, WebP, or PDF.</p>

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
            <img class="photo-prev" src="{{ asset('storage/'.ltrim($m->photo, '/')) }}" alt="Employee photo" />
            <div class="check">
                <input type="checkbox" name="remove_photo" id="remove_photo" value="1" />
                <label for="remove_photo">Remove current photo on save</label>
            </div>
            @endif
            <input id="photo" name="photo" type="file" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" />
        </div>

        <h2>Menu access</h2>
        @include('admin.employees._menu_permissions', ['permState' => $permState])

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
            <a class="btn-ghost" href="{{ route('admin.employees.index') }}">Back to list</a>
        </div>
    </form>
</div>
@endsection
