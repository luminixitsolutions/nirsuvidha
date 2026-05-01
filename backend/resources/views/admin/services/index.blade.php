@extends('admin.layouts.shell', ['title' => 'Services — NRI Suvidha Admin'])

@include('admin.partials.datatable-vendor-assets')

@push('head')
<style>
    .toolbar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.75rem; margin-bottom: 1rem; }
    .toolbar h1 { font-size: 1.25rem; margin: 0; }
    .btn-sm { display: inline-block; padding: 0.45rem 0.9rem; border-radius: 0.45rem; font-size: 0.875rem; font-weight: 600;
        background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%); color: #fff; text-decoration: none; }
    .table-wrap, .table-wrap--dt { font-size: 0.875rem; }
    .muted { color: #64748b; }
    .badge { display: inline-block; padding: 0.15rem 0.45rem; border-radius: 0.25rem; font-size: 0.75rem; }
    .badge-on { background: #ecfdf5; color: #166534; }
    .badge-off { background: #fef2f2; color: #b91c1c; }
</style>
@endpush

@push('scripts')
<script>
jQuery(function () {
  if (window.nriDataTable) {
    nriDataTable.init('dt-services');
  }
});
</script>
@endpush

@section('content')
<div class="toolbar">
    <h1>Services</h1>
    <a class="btn-sm" href="{{ route('admin.services.create') }}">Add service</a>
</div>

<div class="nri-dt-outer table-wrap--dt">
    <div class="nri-dt-toolbar2">
        <button type="button" class="nri-dt-open-labels">Customize column names</button>
    </div>
    <div class="table-wrap" style="overflow:visible">
        <table id="dt-services" class="display nowrap compact row-border hover stripe" style="width:100%;">
        <thead>
            <tr>
                <th data-dt-id="order" data-dt-default="Order">Order</th>
                <th data-dt-id="title" data-dt-default="Title">Title</th>
                <th data-dt-id="icon" data-dt-default="Icon">Icon</th>
                <th data-dt-id="published" data-dt-default="Published">Published</th>
                <th data-dt-id="actions" data-dt-default=""></th>
            </tr>
        </thead>
        <tbody>
            @forelse($services as $s)
            <tr>
                <td>{{ $s->sort_order }}</td>
                <td><strong>{{ $s->title }}</strong></td>
                <td class="muted" style="font-size:0.8rem;max-width:12rem;overflow:hidden;text-overflow:ellipsis;">{{ $s->icon }}</td>
                <td>
                    @if($s->is_published)
                    <span class="badge badge-on">Live</span>
                    @else
                    <span class="badge badge-off">Hidden</span>
                    @endif
                </td>
                <td>
                    @include('admin.partials.table-row-actions', [
                        'editUrl' => route('admin.services.edit', $s),
                        'destroyUrl' => route('admin.services.destroy', $s),
                        'confirm' => 'Delete this service?',
                    ])
                </td>
            </tr>
            @empty
            <tr>
                <td colspan="5" class="muted" style="padding:1.5rem;">No services yet. <a href="{{ route('admin.services.create') }}">Add one</a>.</td>
            </tr>
            @endforelse
        </tbody>
    </table>
    </div>
</div>
@endsection
