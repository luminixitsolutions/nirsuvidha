@extends('admin.layouts.shell', ['title' => 'Trusted by — NRI Suvidha Admin'])

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
    .logo-thumb { max-height: 40px; max-width: 120px; object-fit: contain; }
</style>
@endpush

@push('scripts')
<script>
jQuery(function () {
  if (window.nriDataTable) {
    nriDataTable.init('dt-trusted');
  }
});
</script>
@endpush

@section('content')
<div class="toolbar">
    <h1>Trusted by</h1>
    <a class="btn-sm" href="{{ route('admin.trusted_partners.create') }}">Add company</a>
</div>

<div class="nri-dt-outer table-wrap--dt">
    <div class="nri-dt-toolbar2">
        <button type="button" class="nri-dt-open-labels">Customize column names</button>
    </div>
    <div class="table-wrap" style="overflow:visible">
        <table id="dt-trusted" class="display nowrap compact row-border hover stripe" style="width:100%;">
        <thead>
            <tr>
                <th data-dt-id="order" data-dt-default="Order">Order</th>
                <th data-dt-id="logo" data-dt-default="Logo">Logo</th>
                <th data-dt-id="company" data-dt-default="Company">Company</th>
                <th data-dt-id="status" data-dt-default="Status">Status</th>
                <th data-dt-id="actions" data-dt-default=""></th>
            </tr>
        </thead>
        <tbody>
            @forelse($trustedPartners as $p)
            <tr>
                <td>{{ $p->sort_order }}</td>
                <td>
                    @if($p->logo)
                    <img class="logo-thumb" src="{{ asset('storage/'.ltrim($p->logo,'/')) }}" alt="" />
                    @else
                    <span class="muted">—</span>
                    @endif
                </td>
                <td><strong>{{ $p->name }}</strong></td>
                <td>
                    @if($p->is_active)
                    <span class="badge badge-on">Active</span>
                    @else
                    <span class="badge badge-off">Inactive</span>
                    @endif
                </td>
                <td>
                    @include('admin.partials.table-row-actions', [
                        'editUrl' => route('admin.trusted_partners.edit', $p),
                        'destroyUrl' => route('admin.trusted_partners.destroy', $p),
                        'confirm' => 'Delete this company?',
                    ])
                </td>
            </tr>
            @empty
            <tr>
                <td colspan="5" class="muted" style="padding:1.5rem;">No companies. <a href="{{ route('admin.trusted_partners.create') }}">Add one</a>.</td>
            </tr>
            @endforelse
        </tbody>
    </table>
    </div>
</div>
@endsection
