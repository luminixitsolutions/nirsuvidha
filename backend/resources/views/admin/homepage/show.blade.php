@extends('admin.layouts.shell', ['title' => $meta['label'].' — NRI Suvidha Admin'])

@php
    $m = $map;
    $v = function (string $k) use ($m) {
        return old($k, $m->get($k)?->value ?? '');
    };
@endphp

@push('head')
<style>
    .form h1 { font-size: 1.3rem; margin: 0 0 0.25rem; }
    .form .lead { color: #64748b; font-size: 0.9rem; margin: 0 0 1.25rem; line-height: 1.5; }
    .field { margin-bottom: 0.9rem; }
    .field label { display: block; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.02em; color: #64748b; margin-bottom: 0.25rem; }
    .field input[type="text"], .field input[type="file"], .field textarea {
        width: 100%; border-radius: 0.5rem; border: 1px solid rgba(15, 23, 42, 0.12);
        padding: 0.5rem 0.65rem; font-size: 0.9rem; background: #fff;
    }
    .field textarea { min-height: 4.5rem; font-family: system-ui, sans-serif; }
    .field textarea.json { min-height: 7rem; font-family: ui-monospace, monospace; font-size: 0.8rem; }
    .hint { font-size: 0.75rem; color: #64748b; margin-top: 0.2rem; }
    .preview { max-width: 100%; max-height: 200px; border-radius: 0.5rem; margin-top: 0.4rem; border: 1px solid rgba(201, 163, 78, 0.3); }
    .card-form { background: #fff; border: 1px solid rgba(15, 23, 42, 0.08); border-radius: 0.75rem; padding: 1.25rem 1.5rem 1.5rem; box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04); }
    .save-bar { margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid rgba(15, 23, 42, 0.06); }
    .btn-gold { width: auto; display: inline-block; text-align: center; border: none; border-radius: 0.5rem; font-weight: 600; font-size: 0.9rem; padding: 0.6rem 1.35rem; cursor: pointer; background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%); color: #fff; }
</style>
@endpush

@section('content')
<div class="card-form form">
    <h1>{{ $meta['label'] }}</h1>
    <p class="lead">{{ $meta['description'] }}</p>

    <form method="post" action="{{ route('admin.homepage.update', $section) }}" enctype="multipart/form-data" novalidate>
        @csrf
        @include('admin.homepage.partials.' . $partial, ['m' => $map, 'v' => $v])
        <div class="save-bar">
            <button type="submit" class="btn-gold">Save this page</button>
        </div>
    </form>
</div>
@endsection
