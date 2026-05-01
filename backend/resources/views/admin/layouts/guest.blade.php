<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $title ?? 'Admin — NRI Suvidha' }}</title>
    <style>
        :root {
            --nri-cream: #fdfbf7;
            --brand-gold: #C9A34E;
            --brand-gold-dark: #9A7B32;
            --surface: #ffffff;
            --ink: #0f172a;
            --ink-muted: #64748b;
        }
        * { box-sizing: border-box; }
        body { margin: 0; min-height: 100vh; font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; color: var(--ink);
            background: linear-gradient(165deg, #fdfbf7 0%, #f5efe4 45%, #ebe4d4 100%);
        }
        a { color: var(--brand-gold-dark); }
        .shell { width: 100%; max-width: 24rem; margin: 0 auto; padding: 2rem 1.25rem; }
    </style>
    @stack('head')
</head>
<body>
    @yield('content')
</body>
</html>
