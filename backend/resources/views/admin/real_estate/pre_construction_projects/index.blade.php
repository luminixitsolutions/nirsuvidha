@extends('admin.layouts.shell', ['title' => 'Pre-construction projects — NRI Suvidha Admin'])

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
    nriDataTable.init('dt-re-pre-construction');
  }
});
</script>
@endpush

@section('content')
<div class="re-toolbar">
    <h1>Pre-construction projects</h1>
    <a class="re-btn-sm" href="{{ route('admin.pre_construction_projects.create') }}">Add project</a>
</div>

<div class="nri-dt-outer table-wrap--dt">
    <div class="nri-dt-toolbar2">
        <button type="button" class="nri-dt-open-labels">Customize column names</button>
    </div>
    <div class="re-table-wrap" style="overflow:visible">
        <table id="dt-re-pre-construction" class="display nowrap compact row-border hover stripe" style="width:100%;">
            <thead>
                <tr>
                    <th data-dt-id="title" data-dt-default="Title">Title</th>
                    <th data-dt-id="badge" data-dt-default="Badge">Badge</th>
                    <th data-dt-id="price" data-dt-default="Price">Price</th>
                    <th data-dt-id="published" data-dt-default="Published">Published</th>
                    <th data-dt-id="sort_order" data-dt-default="Sort">Sort</th>
                    <th data-dt-id="actions" data-dt-default=""></th>
                </tr>
            </thead>
            <tbody>
                @forelse($projects as $row)
                <tr>
                    <td><strong>{{ $row->title }}</strong></td>
                    <td>{{ $row->status_badge }}</td>
                    <td>{{ $row->starting_price_display }}</td>
                    <td>
                        @if($row->is_published)
                        <span class="re-badge re-badge-on">Yes</span>
                        @else
                        <span class="re-badge re-badge-off">No</span>
                        @endif
                    </td>
                    <td>{{ $row->sort_order }}</td>
                    <td>
                        @include('admin.partials.table-row-actions', [
                            'editUrl' => route('admin.pre_construction_projects.edit', $row),
                            'destroyUrl' => route('admin.pre_construction_projects.destroy', $row),
                            'confirm' => 'Delete this project?',
                        ])
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="6" class="re-muted" style="padding:1.5rem;">No pre-construction projects yet.</td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection
