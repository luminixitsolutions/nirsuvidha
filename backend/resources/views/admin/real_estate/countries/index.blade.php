@extends('admin.layouts.shell', ['title' => 'Countries — NRI Suvidha Admin'])

@include('admin.partials.datatable-vendor-assets')
@include('admin.real_estate._styles')

@push('head')
<style>
    .re-toolbar { margin-bottom: 0.85rem; }
    .nri-dt-outer.table-wrap--dt { margin-top: 0; }
</style>
@endpush

@push('scripts')
<script>
jQuery(function () {
  if (window.nriDataTable) {
    nriDataTable.init('dt-re-countries');
  }
});
</script>
@endpush

@section('content')
<div class="re-toolbar">
    <h1>Countries</h1>
    <a class="re-btn-sm" href="{{ route('admin.countries.create') }}">Add country</a>
</div>

<div class="nri-dt-outer table-wrap--dt">
    <div class="nri-dt-toolbar2">
        <button type="button" class="nri-dt-open-labels">Customize column names</button>
    </div>
    <div class="re-table-wrap" style="overflow:visible">
        <table id="dt-re-countries" class="display nowrap compact row-border hover stripe" style="width:100%;">
            <thead>
                <tr>
                    <th data-dt-id="name" data-dt-default="Name">Name</th>
                    <th data-dt-id="slug" data-dt-default="Slug">Slug</th>
                    <th data-dt-id="sort_order" data-dt-default="Sort">Sort</th>
                    <th data-dt-id="status" data-dt-default="Status">Status</th>
                    <th data-dt-id="actions" data-dt-default=""></th>
                </tr>
            </thead>
            <tbody>
                @forelse($countries as $c)
                <tr>
                    <td><strong>{{ $c->name }}</strong></td>
                    <td class="re-muted">{{ $c->slug }}</td>
                    <td>{{ $c->sort_order }}</td>
                    <td>
                        @if($c->is_active)
                        <span class="re-badge re-badge-on">Active</span>
                        @else
                        <span class="re-badge re-badge-off">Inactive</span>
                        @endif
                    </td>
                    <td>
                        @include('admin.partials.table-row-actions', [
                            'editUrl' => route('admin.countries.edit', $c),
                            'destroyUrl' => route('admin.countries.destroy', $c),
                            'confirm' => 'Delete this country? States and cities under it will be deleted.',
                        ])
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="5" class="re-muted" style="padding:1.5rem;">No countries yet.</td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection
