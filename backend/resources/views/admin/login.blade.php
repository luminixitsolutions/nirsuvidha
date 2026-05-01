@extends('admin.layouts.guest', ['title' => 'Log in — NRI Suvidha Admin'])

@push('head')
<style>
    .login-outer { min-height: 100vh; display: flex; align-items: center; justify-content: center; }
    .card {
        background: #fff;
        border: 1px solid rgba(15, 23, 42, 0.06);
        border-radius: 1rem;
        box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 20px 40px -12px rgba(15, 23, 42, 0.12);
        padding: 2rem 1.75rem 1.85rem;
    }
    .login-box { max-width: 24rem; margin: 0 auto; }
    .login-brand {
        display: block;
        text-align: center;
        margin-bottom: 1.5rem;
    }
    .login-brand img {
        max-width: 220px;
        width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
        border-radius: 0.5rem;
        box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
    }
    .login-box h1 {
        text-align: center;
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        margin: 0 0 1.25rem;
        color: #0f172a;
    }
    label { display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.25rem; color: #0f172a; }
    input[type="email"], input[type="password"] {
        width: 100%; border-radius: 0.5rem; border: 1px solid rgba(15, 23, 42, 0.12);
        padding: 0.65rem 0.8rem; font-size: 1rem; background: #faf9f6; margin-bottom: 0.75rem;
        transition: border-color 0.15s, box-shadow 0.15s;
    }
    input[type="email"]:focus, input[type="password"]:focus {
        outline: none; border-color: #C9A34E; background: #fff;
        box-shadow: 0 0 0 3px rgba(201, 163, 78, 0.2);
    }
    .row-check { display: flex; align-items: center; gap: 0.4rem; margin: 0.5rem 0 1rem; font-size: 0.85rem; color: #475569; }
    .form-actions { display: flex; flex-direction: column; gap: 0.5rem; }
    .btn { display: inline-flex; align-items: center; justify-content: center; border: none; border-radius: 0.5rem; font-weight: 600; font-size: 0.95rem; padding: 0.65rem 1rem; cursor: pointer; }
    .btn-gold { background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%); color: #fff; width: 100%; box-shadow: 0 2px 8px rgba(154, 123, 50, 0.35); }
    .btn-gold:hover { filter: brightness(1.04); }
    .msg-err { background: #fef2f2; color: #b91c1c; padding: 0.65rem; border-radius: 0.5rem; font-size: 0.85rem; margin-bottom: 1rem; }
</style>
@endpush

@section('content')
<div class="login-outer">
<div class="shell">
    <div class="card login-box">
    @if ($errors->any())
    <p class="msg-err" role="alert">@foreach($errors->all() as $e) {{ $e }} @if(!$loop->last)<br>@endif @endforeach</p>
    @endif
    <a class="login-brand" href="{{ url('/') }}" title="NRI Suvidha">
        <img src="{{ asset('img/logo.png') }}" width="256" alt="NRI Suvidha" loading="eager" />
    </a>
    <h1>Sign in</h1>
    <form method="post" action="{{ route('admin.login.post') }}" novalidate>
        @csrf
        <label for="email">Email</label>
        <input id="email" name="email" type="email" value="{{ old('email') }}" required autocomplete="email" />
        <label for="password">Password</label>
        <input id="password" name="password" type="password" required autocomplete="current-password" />
        <div class="row-check">
            <input id="remember" name="remember" type="checkbox" value="1" />
            <label for="remember" style="margin: 0; font-weight: 500;">Remember</label>
        </div>
        <div class="form-actions">
            <button class="btn btn-gold" type="submit">Continue</button>
        </div>
    </form>
    </div>
</div>
</div>
@endsection
