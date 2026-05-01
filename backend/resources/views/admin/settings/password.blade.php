@extends('admin.layouts.shell', ['title' => 'Change password — NRI Suvidha Admin'])

@push('head')
<style>
    .set-wrap { max-width: 32rem; }
    .set-wrap h1 { font-size: 1.2rem; margin: 0 0 0.25rem; }
    .set-wrap .lead { color: #64748b; font-size: 0.88rem; margin: 0 0 1.2rem; line-height: 1.4; }
    .field { margin-bottom: 0.9rem; }
    .field label { display: block; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.02em; color: #64748b; margin-bottom: 0.25rem; }
    .field input[type="password"] {
        width: 100%; border-radius: 0.5rem; border: 1px solid rgba(15, 23, 42, 0.12);
        padding: 0.5rem 0.65rem; font-size: 0.9rem; background: #fff;
    }
    .card-form { background: #fff; border: 1px solid rgba(15, 23, 42, 0.08); border-radius: 0.75rem; padding: 1.25rem 1.5rem 1.5rem; }
    .save-bar { margin-top: 1.15rem; }
    .btn-gold { display: inline-block; border: none; border-radius: 0.5rem; font-weight: 600; font-size: 0.9rem; padding: 0.6rem 1.25rem; cursor: pointer; background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%); color: #fff; }
</style>
@endpush

@section('content')
<div class="set-wrap">
    <div class="card-form form">
        <h1>Change password</h1>
        <p class="lead">Use a strong password. You will stay signed in after updating.</p>
        <form method="post" action="{{ route('admin.settings.password.update') }}">
            @csrf
            @method('PUT')
            <div class="field">
                <label for="current_password">Current password</label>
                <input id="current_password" name="current_password" type="password" required autocomplete="current-password" />
            </div>
            <div class="field">
                <label for="password">New password</label>
                <input id="password" name="password" type="password" required autocomplete="new-password" />
            </div>
            <div class="field">
                <label for="password_confirmation">Confirm new password</label>
                <input id="password_confirmation" name="password_confirmation" type="password" required autocomplete="new-password" />
            </div>
            <div class="save-bar">
                <button type="submit" class="btn-gold">Update password</button>
            </div>
        </form>
    </div>
</div>
@endsection
