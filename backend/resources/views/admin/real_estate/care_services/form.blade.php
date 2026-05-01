@php
    $isEdit = $mode === 'edit';
    $m = $item;
@endphp

@extends('admin.layouts.shell', ['title' => ($isEdit ? 'Edit service card' : 'Add service card') . ' — NRI Suvidha Admin'])

@include('admin.real_estate._styles')

@push('head')
<style>
    .care-desc-ckeditor-wrap .ck-editor__editable {
        min-height: 200px;
    }
    .care-desc-ckeditor-wrap .ck.ck-editor {
        border-radius: 0.5rem;
        overflow: hidden;
    }
</style>
@endpush

@section('content')
<div class="re-card-form re-form">
    <h1>{{ $isEdit ? 'Edit real estate service card' : 'Add real estate service card' }}</h1>
    <p class="re-muted" style="margin:-0.5rem 0 1rem;">
        Public page: <strong>Real Estate Services</strong> → scroll to “Additional property care and monitoring services”.
    </p>

    <form method="post" action="{{ $isEdit ? route('admin.real_estate_care_services.update', $m) : route('admin.real_estate_care_services.store') }}">
        @csrf
        @if($isEdit)
            @method('PUT')
        @endif

        <div class="re-field">
            <label for="title">Title *</label>
            <input id="title" name="title" type="text" value="{{ old('title', $m->title) }}" required />
        </div>

        <div class="re-field care-desc-ckeditor-wrap">
            <label for="description">Description *</label>
            <textarea id="description" name="description" rows="8" placeholder="Summary for the public card…">{{ old('description', $m->description) }}</textarea>
            <p class="re-hint">Rich text: headings, bold, lists, links, quotes. Shown on the real estate services page (HTML is sanitized).</p>
        </div>

        <div class="re-field">
            <label for="bullets_text">Bullet points (one per line)</label>
            <textarea id="bullets_text" name="bullets_text" rows="6" placeholder="Up to five show on the site">{{ old('bullets_text', $bulletsText ?? '') }}</textarea>
            <p class="re-hint">The public page shows the first five bullets when “Show bullets on card” is enabled.</p>
        </div>

        <div class="re-check">
            <input id="show_bullets" name="show_bullets" type="checkbox" value="1" @checked(old('show_bullets', $m->show_bullets)) />
            <label for="show_bullets">Show bullet list on the card</label>
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
            <a href="{{ route('admin.real_estate_care_services.index') }}" class="re-btn-ghost">Back to list</a>
        </div>
    </form>
</div>
@endsection

@push('scripts')
<script src="https://cdn.ckeditor.com/ckeditor5/41.4.2/classic/ckeditor.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
(function () {
    var el = document.querySelector('#description');
    if (!el || typeof ClassicEditor === 'undefined') {
        return;
    }
    ClassicEditor.create(el, {
        toolbar: {
            items: [
                'heading', '|',
                'bold', 'italic', '|',
                'link', '|',
                'bulletedList', 'numberedList', '|',
                'blockQuote', '|',
                'undo', 'redo'
            ]
        },
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading3', view: 'h3', title: 'Heading', class: 'ck-heading_heading3' }
            ]
        },
        link: {
            addTargetToExternalLinks: true,
            defaultProtocol: 'https://'
        }
    }).then(function (editor) {
        var form = el.closest('form');
        if (form) {
            form.addEventListener('submit', function () {
                editor.updateSourceElement();
            });
        }
    }).catch(function (err) {
        console.error(err);
    });
})();
</script>
@endpush
