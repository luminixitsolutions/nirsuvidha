@extends('admin.layouts.shell', ['title' => 'Partner onboarding — NRI Suvidha Admin'])

@push('head')
<style>
    .toolbar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.75rem; margin-bottom: 1rem; }
    .toolbar h1 { font-size: 1.25rem; margin: 0; }
    .btn-sm { display: inline-block; padding: 0.45rem 0.9rem; border-radius: 0.45rem; font-size: 0.875rem; font-weight: 600;
        background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%); color: #fff; text-decoration: none; }
    .btn-sm--ghost { background: #fff; color: #0f172a; border: 1px solid rgba(201,163,78,0.45); }
    .table-wrap { font-size: 0.875rem; background: #fff; border: 1px solid rgba(15,23,42,0.08); border-radius: 0.75rem; overflow: hidden; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 0.65rem 0.85rem; text-align: left; border-bottom: 1px solid rgba(15,23,42,0.06); }
    th { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; color: #64748b; background: #faf8f4; }
    .muted { color: #64748b; font-size: 0.82rem; }
    .actions { display: flex; flex-wrap: wrap; gap: 0.35rem; }
    .actions a, .actions button { font-size: 0.8rem; padding: 0.25rem 0.5rem; border-radius: 0.35rem; border: 1px solid rgba(201,163,78,0.35); background: #fff; cursor: pointer; color: #0f172a; text-decoration: none; }
    .actions button[type="submit"] { color: #b91c1c; border-color: rgba(185,28,28,0.35); }
</style>
@endpush

@section('content')
<div class="toolbar">
    <h1>Partner onboarding submissions</h1>
    <a class="btn-sm" href="{{ route('admin.partner_onboardings.create') }}">Add partner</a>
</div>

<div class="table-wrap">
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Name</th>
                <th>Email</th>
                <th>Submitted</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            @forelse($rows as $r)
            <tr>
                <td>{{ $r->id }}</td>
                <td><span class="muted">{{ $r->partner_type }}</span></td>
                <td><strong>{{ $r->full_name }}</strong></td>
                <td class="muted">{{ $r->email }}</td>
                <td class="muted">{{ $r->created_at->format('Y-m-d H:i') }}</td>
                <td>
                    <div class="actions">
                        <a href="{{ route('admin.partner_onboardings.show', $r) }}">View</a>
                        <a href="{{ route('admin.partner_onboardings.edit', $r) }}">Edit</a>
                        <form method="post" action="{{ route('admin.partner_onboardings.destroy', $r) }}" style="display:inline;" onsubmit="return confirm('Delete this submission permanently?');">
                            @csrf
                            @method('DELETE')
                            <button type="submit">Delete</button>
                        </form>
                    </div>
                </td>
            </tr>
            @empty
            <tr>
                <td colspan="6" class="muted" style="padding:1.5rem;">No submissions yet.</td>
            </tr>
            @endforelse
        </tbody>
    </table>
</div>
@endsection
