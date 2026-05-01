@extends('admin.layouts.shell', ['title' => 'Amenities — NRI Suvidha Admin'])

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
    nriDataTable.init('dt-re-amenities');
  }
});
</script>
@endpush

@section('content')
<div class="re-toolbar">
    <h1>Amenities</h1>
    <a class="re-btn-sm" href="{{ route('admin.amenities.create') }}">Add amenity</a>
</div>

<div class="nri-dt-outer table-wrap--dt">
    <div class="nri-dt-toolbar2">
        <button type="button" class="nri-dt-open-labels">Customize column names</button>
    </div>
    <div class="re-table-wrap" style="overflow:visible">
        <table id="dt-re-amenities" class="display nowrap compact row-border hover stripe" style="width:100%;">
            <thead>
                <tr>
                    <th data-dt-id="label" data-dt-default="Label">Label</th>
                    <th data-dt-id="slug" data-dt-default="Slug">Slug</th>
                    <th data-dt-id="icon" data-dt-default="Icon">Icon</th>
                    <th data-dt-id="sort_order" data-dt-default="Sort">Sort</th>
                    <th data-dt-id="status" data-dt-default="Status">Status</th>
                    <th data-dt-id="actions" data-dt-default=""></th>
                </tr>
            </thead>
            <tbody>
                @forelse($amenities as $a)
                <tr>
                    <td><strong>{{ $a->label }}</strong></td>
                    <td class="re-muted">{{ $a->slug }}</td>
                    <td class="re-muted" style="font-size:0.8rem;max-width:14rem;word-break:break-word;">
                        @if($a->icon_class)
                            <code>{{ $a->icon_class }}</code>
                        @else
                            —
                        @endif
                    </td>
                    <td>{{ $a->sort_order }}</td>
                    <td>
                        @if($a->is_active)
                        <span class="re-badge re-badge-on">Active</span>
                        @else
                        <span class="re-badge re-badge-off">Inactive</span>
                        @endif
                    </td>
                    <td>
                        @include('admin.partials.table-row-actions', [
                            'editUrl' => route('admin.amenities.edit', $a),
                            'destroyUrl' => route('admin.amenities.destroy', $a),
                            'confirm' => 'Delete this amenity?',
                        ])
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="6" class="re-muted" style="padding:1.5rem;">No amenities yet.</td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection
