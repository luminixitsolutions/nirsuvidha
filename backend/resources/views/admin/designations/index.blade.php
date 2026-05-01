@extends('admin.layouts.shell', ['title' => 'Designations — NRI Suvidha Admin'])

@push('head')
<style>
    .toolbar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.75rem; margin-bottom: 1rem; }
    .toolbar h1 { font-size: 1.25rem; margin: 0; }
    .btn-sm { display: inline-block; padding: 0.45rem 0.9rem; border-radius: 0.45rem; font-size: 0.875rem; font-weight: 600;
        background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%); color: #fff; text-decoration: none; }
    .table-wrap { font-size: 0.875rem; background: #fff; border: 1px solid rgba(15,23,42,0.08); border-radius: 0.75rem; overflow: hidden; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 0.65rem 0.85rem; text-align: left; border-bottom: 1px solid rgba(15,23,42,0.06); }
    th { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; color: #64748b; background: #faf8f4; }
    .muted { color: #64748b; font-size: 0.82rem; }
    .badge { display: inline-block; padding: 0.15rem 0.45rem; border-radius: 0.25rem; font-size: 0.75rem; }
    .badge-on { background: #ecfdf5; color: #166534; }
    .badge-off { background: #fef2f2; color: #b91c1c; }
    .actions { display: flex; flex-wrap: wrap; gap: 0.35rem; }
    .actions a, .actions button { font-size: 0.8rem; padding: 0.25rem 0.5rem; border-radius: 0.35rem; border: 1px solid rgba(201,163,78,0.35); background: #fff; cursor: pointer; color: #0f172a; text-decoration: none; }
    .actions button[type="submit"] { color: #b91c1c; border-color: rgba(185,28,28,0.35); }
</style>
@endpush

@section('content')
<div class="toolbar">
    <h1>Designations</h1>
    <a class="btn-sm" href="{{ route('admin.designations.create') }}">Add designation</a>
</div>

<div class="table-wrap">
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Status</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            @forelse($designations as $d)
            <tr>
                <td><strong>{{ $d->name }}</strong></td>
                <td>
                    @if($d->is_active)
                    <span class="badge badge-on">Active</span>
                    @else
                    <span class="badge badge-off">Inactive</span>
                    @endif
                </td>
                <td>
                    <div class="actions">
                        <a href="{{ route('admin.designations.edit', $d) }}">Edit</a>
                        <form method="post" action="{{ route('admin.designations.destroy', $d) }}" style="display:inline;" onsubmit="return confirm('Delete this designation? Employees linked to it will have no designation.');">
                            @csrf
                            @method('DELETE')
                            <button type="submit">Delete</button>
                        </form>
                    </div>
                </td>
            </tr>
            @empty
            <tr>
                <td colspan="3" class="muted" style="padding:1.5rem;">No designations yet. Add one here or when adding an employee.</td>
            </tr>
            @endforelse
        </tbody>
    </table>
</div>
@endsection
