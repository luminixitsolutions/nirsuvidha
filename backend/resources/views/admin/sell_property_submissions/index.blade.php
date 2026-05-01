@extends('admin.layouts.shell', ['title' => 'Sell property submissions — NRI Suvidha Admin'])

@push('head')
<style>
    .toolbar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.75rem; margin-bottom: 1rem; }
    .toolbar h1 { font-size: 1.25rem; margin: 0; }
    .table-wrap { font-size: 0.875rem; background: #fff; border: 1px solid rgba(15,23,42,0.08); border-radius: 0.75rem; overflow: hidden; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 0.65rem 0.85rem; text-align: left; border-bottom: 1px solid rgba(15,23,42,0.06); }
    th { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; color: #64748b; background: #faf8f4; }
    .muted { color: #64748b; font-size: 0.82rem; }
    .badge { display: inline-block; padding: 0.2rem 0.55rem; border-radius: 999px; font-size: 0.72rem; font-weight: 700; }
    .badge--pending { background: #fef3c7; color: #92400e; }
    .badge--ok { background: #d1fae5; color: #065f46; }
    .badge--no { background: #fee2e2; color: #991b1b; }
</style>
@endpush

@section('content')
<div class="toolbar">
    <h1>Sell property submissions</h1>
</div>

<div class="table-wrap">
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Location</th>
                <th>Price</th>
                <th>Submitted</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            @forelse($rows as $r)
            <tr>
                <td>{{ $r->id }}</td>
                <td>
                    @if($r->status === \App\Models\SellPropertySubmission::STATUS_PENDING)
                        <span class="badge badge--pending">Pending</span>
                    @elseif($r->status === \App\Models\SellPropertySubmission::STATUS_APPROVED)
                        <span class="badge badge--ok">Approved</span>
                    @else
                        <span class="badge badge--no">Rejected</span>
                    @endif
                </td>
                <td><strong>{{ $r->locality }}</strong>
                    @if($r->city)<span class="muted">, {{ $r->city->name }}</span>@endif
                </td>
                <td class="muted">{{ $r->expected_price }}</td>
                <td class="muted">{{ $r->created_at->format('Y-m-d H:i') }}</td>
                <td><a href="{{ route('admin.sell_property_submissions.show', $r) }}">Review</a></td>
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
