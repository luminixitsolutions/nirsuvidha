<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $title ?? 'Admin — NRI Suvidha' }}</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        :root {
            --nri-cream: #fdfbf7;
            --brand-gold: #C9A34E;
            --brand-gold-bright: #D4B76A;
            --brand-gold-light: #E8C96B;
            --brand-gold-dark: #9A7B32;
            --brand-gold-dim: #7a5f28;
            --hero-gold: #c9a24a;
            --surface: #ffffff;
            --surface-muted: #f7f1e8;
            --ink: #0f172a;
            --ink-muted: #64748b;
            --sidebar-w: 16rem;
        }
        * { box-sizing: border-box; }
        body { margin: 0; min-height: 100vh; font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; color: var(--ink); background: var(--surface-muted); }
        a { color: inherit; text-decoration: none; }
        .admin-app { display: flex; min-height: 100vh; }
        /* Sidebar: match frontend (hero) gold + deep warm charcoal — layered gradients + gold cap */
        .sidebar {
            --sidebar-fg: rgba(253, 251, 247, 0.92);
            position: relative;
            width: var(--sidebar-w);
            flex-shrink: 0;
            z-index: 1;
            color: var(--sidebar-fg);
            padding: 0 0 1rem 0;
            background:
                linear-gradient(165deg, rgba(201, 163, 78, 0.14) 0%, rgba(201, 163, 78, 0.03) 38%, transparent 55%),
                linear-gradient(200deg, rgba(30, 24, 18, 0.97) 0%, #16120e 40%, #0c0a08 100%);
            border-right: 1px solid rgba(201, 163, 78, 0.22);
            box-shadow: 4px 0 32px rgba(0, 0, 0, 0.2), inset -1px 0 0 rgba(255, 255, 255, 0.04);
        }
        .sidebar::before {
            content: '';
            position: absolute; left: 0; right: 0; top: 0; height: 3px;
            background: linear-gradient(90deg, var(--brand-gold-dark) 0%, var(--brand-gold) 22%, var(--brand-gold-light) 50%, var(--brand-gold) 78%, var(--brand-gold-dark) 100%);
            z-index: 2;
        }
        .sidebar::after {
            content: '';
            position: absolute; inset: 0; pointer-events: none;
            background: radial-gradient(120% 80% at 0% 0%, rgba(201, 163, 78, 0.15) 0%, transparent 55%);
            z-index: 0;
        }
        .sidebar > * { position: relative; z-index: 1; }
        .sidebar-brand {
            margin: 0 0.75rem 0.25rem 0.75rem;
            padding: 1rem 0.9rem 1.1rem;
            font-weight: 700;
            font-size: 1.02rem;
            letter-spacing: 0.01em;
            border-radius: 0.5rem;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(201, 163, 78, 0.06) 100%);
            border: 1px solid rgba(201, 163, 78, 0.18);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        .sidebar-brand .gold { color: var(--brand-gold-bright); }
        @supports ((-webkit-background-clip: text) or (background-clip: text)) {
            .sidebar-brand .gold {
                background: linear-gradient(180deg, var(--brand-gold-light) 0%, var(--hero-gold) 45%, var(--brand-gold-dark) 100%);
                -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent;
            }
        }
        .sidebar-brand small {
            display: block; font-weight: 500; color: rgba(244, 244, 245, 0.5);
            font-size: 0.7rem; margin-top: 0.35rem; letter-spacing: 0.04em;
        }
        .nav-section {
            padding: 0.75rem 0.9rem 0.35rem;
            font-size: 0.62rem; font-weight: 600;
            text-transform: uppercase; letter-spacing: 0.12em;
            color: rgba(201, 163, 78, 0.55);
        }
        .nav a {
            display: flex;
            align-items: center;
            gap: 0.55rem;
            margin: 0.12rem 0.65rem; padding: 0.55rem 0.9rem; border-radius: 0.4rem;
            font-size: 0.875rem;
            color: rgba(253, 251, 247, 0.88);
            border-left: 3px solid transparent;
            transition: background 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .nav-top-icon {
            width: 1.15rem;
            flex-shrink: 0;
            text-align: center;
            font-size: 0.9rem;
            color: rgba(201, 163, 78, 0.88);
            opacity: 0.98;
        }
        .nav a:hover .nav-top-icon { color: var(--brand-gold-bright); }
        .nav a.is-active .nav-top-icon { color: var(--brand-gold-light); }
        .nav-summary-label {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            min-width: 0;
        }
        .nav a:hover {
            background: linear-gradient(90deg, rgba(201, 163, 78, 0.15) 0%, rgba(201, 163, 78, 0.06) 100%);
            color: #fff; box-shadow: 0 1px 0 rgba(201, 163, 78, 0.12);
        }
        .nav a.is-active {
            background: linear-gradient(90deg, rgba(201, 163, 78, 0.28) 0%, rgba(201, 163, 78, 0.08) 100%);
            border-left-color: var(--brand-gold);
            color: #fff; font-weight: 600; box-shadow: inset 0 0 0 1px rgba(201, 163, 78, 0.12);
        }
        .nav-details {
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            margin: 0 0.4rem 0.15rem; border-radius: 0.4rem; overflow: hidden;
        }
        .nav-details > summary {
            list-style: none; cursor: pointer; padding: 0.5rem 0.9rem; font-size: 0.8rem; font-weight: 600;
            color: rgba(253, 251, 247, 0.96); user-select: none; display: flex; align-items: center; justify-content: space-between;
            border-radius: 0.4rem;
            transition: background 0.2s, color 0.2s;
        }
        .nav-details > summary:hover {
            background: linear-gradient(90deg, rgba(201, 163, 78, 0.12) 0%, transparent 100%);
        }
        .nav-details[open] > summary {
            color: #fff; background: linear-gradient(90deg, rgba(201, 163, 78, 0.1) 0%, transparent 100%);
        }
        .nav-details > summary:hover .nav-top-icon { color: var(--brand-gold-bright); }
        .nav-details[open] > summary .nav-top-icon { color: var(--brand-gold-light); }
        .nav-details > summary::-webkit-details-marker { display: none; }
        .nav-details > summary::after {
            content: '▸'; font-size: 0.65rem; color: var(--brand-gold); opacity: 0.75;
            transition: transform 0.2s ease;
        }
        .nav-details[open] > summary::after { transform: rotate(90deg); }
        .nav-children { padding: 0.2rem 0 0.55rem; }
        .nav-sub {
            display: block; margin: 0.15rem 0.3rem; padding: 0.45rem 0.8rem 0.45rem 0.85rem; font-size: 0.82rem;
            color: rgba(253, 251, 247, 0.82);
            border-left: 2px solid transparent; border-radius: 0.35rem;
            transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .nav-sub:hover {
            background: linear-gradient(90deg, rgba(201, 163, 78, 0.14) 0%, rgba(201, 163, 78, 0.04) 100%);
            color: #fff; border-left-color: rgba(201, 163, 78, 0.45);
        }
        .nav-sub.is-active {
            background: linear-gradient(90deg, rgba(201, 163, 78, 0.25) 0%, rgba(201, 163, 78, 0.06) 100%);
            border-left-color: var(--brand-gold); color: #fff; font-weight: 600;
        }
        .nav-logout-wrap { margin: 0; padding: 0; }
        .nav-sub--button {
            display: block; width: calc(100% - 0.6rem); margin: 0.2rem 0.3rem;
            padding: 0.45rem 0.8rem 0.45rem 0.85rem; font-size: 0.82rem; text-align: left;
            background: transparent; border: none; border-left: 2px solid transparent;
            color: rgba(253, 251, 247, 0.82); border-radius: 0.35rem; cursor: pointer; font-family: inherit;
            transition: background 0.2s, color 0.2s;
        }
        .nav-sub--button:hover {
            background: linear-gradient(90deg, rgba(201, 163, 78, 0.14) 0%, rgba(201, 163, 78, 0.04) 100%);
            color: #fff;
        }
        .main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
        .topbar {
            display: flex; align-items: center; justify-content: flex-end;
            gap: 0.75rem;
            padding: 0.65rem 1.25rem;
            min-height: 3.25rem;
            background: linear-gradient(180deg, #fffef9 0%, #fff 100%);
            border-bottom: 1px solid rgba(201, 163, 78, 0.15);
            box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset;
        }
        .topbar-user-menu { position: relative; z-index: 50; }
        .topbar-user-trigger {
            display: inline-flex; align-items: center; gap: 0.55rem;
            padding: 0.35rem 0.65rem 0.35rem 0.4rem;
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid rgba(201, 163, 78, 0.28);
            border-radius: 999px;
            cursor: pointer;
            font-family: inherit;
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--ink);
            box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
            transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
        }
        .topbar-user-trigger:hover {
            border-color: rgba(201, 163, 78, 0.45);
            box-shadow: 0 2px 10px rgba(201, 163, 78, 0.12);
        }
        .topbar-user-trigger:focus {
            outline: none;
            box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(201, 163, 78, 0.45);
        }
        .topbar-user-trigger .topbar-chevron {
            font-size: 0.6rem;
            color: var(--ink-muted);
            margin-left: 0.15rem;
            transition: transform 0.2s ease;
        }
        .topbar-user-menu.is-open .topbar-user-trigger .topbar-chevron {
            transform: rotate(180deg);
        }
        .topbar-avatar {
            width: 2.25rem; height: 2.25rem; flex-shrink: 0;
            border-radius: 999px;
            display: inline-flex; align-items: center; justify-content: center;
            background: linear-gradient(145deg, var(--brand-gold-light) 0%, var(--brand-gold) 50%, var(--brand-gold-dark) 100%);
            color: #1a1205;
            font-size: 0.72rem;
            font-weight: 800;
            letter-spacing: 0.02em;
            border: 2px solid rgba(255, 255, 255, 0.95);
            box-shadow: 0 1px 4px rgba(15, 23, 42, 0.12);
        }
        .topbar-avatar i { font-size: 0.95rem; opacity: 0.9; }
        .topbar-name-stack {
            display: flex; flex-direction: column; align-items: flex-start;
            gap: 0.05rem; min-width: 0;
        }
        .topbar-name-text {
            max-width: 12.5rem;
            white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
            text-align: left;
        }
        .topbar-name-sub {
            display: block;
            font-size: 0.68rem;
            font-weight: 500;
            color: var(--ink-muted);
            max-width: 12.5rem;
            white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .topbar-dropdown {
            display: none;
            position: absolute;
            right: 0;
            top: calc(100% + 0.35rem);
            min-width: 13.5rem;
            padding: 0.35rem 0;
            background: #fff;
            border: 1px solid rgba(15, 23, 42, 0.08);
            border-radius: 0.55rem;
            box-shadow: 0 10px 40px rgba(15, 23, 42, 0.12), 0 2px 8px rgba(15, 23, 42, 0.06);
        }
        .topbar-user-menu.is-open .topbar-dropdown { display: block; }
        .topbar-dropdown a,
        .topbar-dropdown button[type="submit"] {
            display: flex; align-items: center; gap: 0.55rem;
            width: 100%;
            padding: 0.55rem 1rem;
            border: none; background: none;
            font-family: inherit; font-size: 0.84rem;
            color: var(--ink);
            text-align: left; cursor: pointer;
            text-decoration: none;
            transition: background 0.12s;
        }
        .topbar-dropdown a:hover,
        .topbar-dropdown button[type="submit"]:hover {
            background: rgba(201, 163, 78, 0.12);
            color: var(--brand-gold-dark);
        }
        .topbar-dropdown i {
            width: 1rem;
            text-align: center;
            color: var(--ink-muted);
            font-size: 0.85rem;
        }
        .topbar-dropdown a:hover i,
        .topbar-dropdown button[type="submit"]:hover i { color: var(--brand-gold-dark); }
        .topbar-dropdown hr {
            margin: 0.35rem 0.65rem;
            border: none;
            border-top: 1px solid rgba(15, 23, 42, 0.08);
        }
        .topbar-dropdown-form { margin: 0; padding: 0; }
        .topbar-dropdown .topbar-logout { color: #b91c1c; }
        .topbar-dropdown .topbar-logout:hover { background: #fef2f2; color: #991b1b; }
        .topbar-dropdown .topbar-logout:hover i { color: #991b1b; }
        .topbar-dropdown .topbar-logout i { color: #b91c1c; opacity: 0.85; }
        .btn {
            display: inline-flex; align-items: center; justify-content: center; border: none; border-radius: 0.5rem;
            font-weight: 600; font-size: 0.875rem; padding: 0.45rem 0.9rem; cursor: pointer;
        }
        .btn-ghost { background: var(--surface); border: 1px solid rgba(201, 163, 78, 0.35); color: var(--ink); }
        .content { flex: 1; padding: 1rem 1.25rem 2rem; width: 100%; max-width: none; }
        .msg { background: #ecfdf5; color: #166534; padding: 0.75rem 1rem; border-radius: 0.5rem; margin-bottom: 1rem; font-size: 0.875rem; }
        .msg-err { background: #fef2f2; color: #b91c1c; }
        .row-actions--icons { display: inline-flex; align-items: center; gap: 0.15rem; flex-wrap: nowrap; }
        .row-action-form { display: inline; margin: 0; }
        .row-action {
            display: inline-flex; align-items: center; justify-content: center; width: 2.1rem; height: 2.1rem;
            border-radius: 0.4rem; font-size: 0.9rem; line-height: 1; box-sizing: border-box;
        }
        .row-action--edit {
            color: var(--ink); text-decoration: none; transition: color 0.15s, background 0.15s;
        }
        .row-action--edit:hover { color: var(--brand-gold-dark); background: rgba(201, 163, 78, 0.12); }
        .row-action--delete {
            background: none; border: none; color: #b91c1c; cursor: pointer; padding: 0; font: inherit;
            transition: color 0.15s, background 0.15s;
        }
        .row-action--delete:hover { color: #991b1b; background: #fef2f2; }
        @media (max-width: 900px) {
            .admin-app { flex-direction: column; }
            .sidebar { width: 100%; padding-bottom: 0.75rem; box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
            .nav { display: flex; flex-wrap: wrap; gap: 0.15rem; padding: 0 0.5rem 0.75rem; }
            .nav a { border-left: none; border-radius: 0.35rem; padding: 0.4rem 0.65rem; }
        }
    </style>
    @stack('head')
</head>
<body>
    <div class="admin-app">
        @include('admin.partials.sidebar')
        <div class="main">
            <header class="topbar">
                @auth
                @php
                    $u = auth()->user();
                    $displayName = $u->name ? trim($u->name) : '';
                    if ($displayName === '') {
                        $displayName = strstr((string) $u->email, '@', true) ?: $u->email;
                    }
                    $words = preg_split('/\s+/', $displayName, -1, PREG_SPLIT_NO_EMPTY) ?: [];
                    $initials = '';
                    if (count($words) >= 2) {
                        $initials = strtoupper(mb_substr($words[0], 0, 1).mb_substr($words[count($words) - 1], 0, 1));
                    } elseif ($displayName !== '') {
                        $initials = strtoupper(mb_substr($displayName, 0, 2));
                    } else {
                        $initials = '?';
                    }
                @endphp
                <div class="topbar-user-menu" id="admin-user-menu" role="navigation" aria-label="Account menu">
                    <button type="button" class="topbar-user-trigger" id="admin-user-menu-btn" aria-expanded="false" aria-controls="admin-user-menu-panel" aria-haspopup="true">
                        <span class="topbar-avatar" aria-hidden="true">{{ $initials }}</span>
                        <span class="topbar-name-stack">
                            <span class="topbar-name-text">{{ $displayName }}</span>
                            <span class="topbar-name-sub">{{ $u->email }}</span>
                        </span>
                        <i class="fa-solid fa-chevron-down topbar-chevron" aria-hidden="true"></i>
                    </button>
                    <div class="topbar-dropdown" id="admin-user-menu-panel" role="menu" aria-labelledby="admin-user-menu-btn">
                        <a href="{{ route('admin.settings.account.edit') }}" role="menuitem">
                            <i class="fa-regular fa-user" aria-hidden="true"></i>
                            Profile
                        </a>
                        <a href="{{ route('admin.settings.password.edit') }}" role="menuitem">
                            <i class="fa-solid fa-key" aria-hidden="true"></i>
                            Change password
                        </a>
                        <hr aria-hidden="true" />
                        <form method="post" action="{{ route('admin.logout') }}" class="topbar-dropdown-form">
                            @csrf
                            <button type="submit" class="topbar-logout" role="menuitem">
                                <i class="fa-solid fa-right-from-bracket" aria-hidden="true"></i>
                                Log out
                            </button>
                        </form>
                    </div>
                </div>
                @else
                <span></span>
                @endauth
            </header>
            <div class="content">
                @if(session('status'))
                <p class="msg" role="status">{{ session('status') }}</p>
                @endif
                @if ($errors->any())
                <p class="msg msg-err" role="alert">@foreach($errors->all() as $e) {{ $e }} @if(!$loop->last)<br>@endif @endforeach</p>
                @endif
                <main>
                    @yield('content')
                </main>
            </div>
        </div>
    </div>
    @include('admin.partials.datatable-label-modal')
    @stack('scripts')
    <script>
    (function () {
        var wrap = document.getElementById('admin-user-menu');
        var btn = document.getElementById('admin-user-menu-btn');
        if (!wrap || !btn) return;
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var open = wrap.classList.toggle('is-open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        document.addEventListener('click', function () {
            wrap.classList.remove('is-open');
            btn.setAttribute('aria-expanded', 'false');
        });
        wrap.addEventListener('click', function (e) {
            e.stopPropagation();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                wrap.classList.remove('is-open');
                btn.setAttribute('aria-expanded', 'false');
            }
        });
    })();
    </script>
</body>
</html>
