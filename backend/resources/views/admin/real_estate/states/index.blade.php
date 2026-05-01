@extends('admin.layouts.shell', ['title' => 'States — NRI Suvidha Admin'])

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
    nriDataTable.init('dt-re-states');
  }
});
</script>
@endpush

@section('content')
<div class="re-toolbar">
    <h1>States</h1>
    <a class="re-btn-sm" href="{{ route('admin.states.create') }}">Add state</a>
</div>

<div class="nri-dt-outer table-wrap--dt">
    <div class="nri-dt-toolbar2">
        <button type="button" class="nri-dt-open-labels">Customize column names</button>
    </div>
    <div class="re-table-wrap" style="overflow:visible">
        <table id="dt-re-states" class="display nowrap compact row-border hover stripe" style="width:100%;">
            <thead>
                <tr>
                    <th data-dt-id="country" data-dt-default="Country">Country</th>
                    <th data-dt-id="name" data-dt-default="Name">Name</th>
                    <th data-dt-id="slug" data-dt-default="Slug">Slug</th>
                    <th data-dt-id="sort_order" data-dt-default="Sort">Sort</th>
                    <th data-dt-id="status" data-dt-default="Status">Status</th>
                    <th data-dt-id="actions" data-dt-default=""></th>
                </tr>
            </thead>
            <tbody>
                @forelse($states as $s)
                <tr>
                    <td>{{ $s->country?->name ?? '—' }}</td>
                    <td><strong>{{ $s->name }}</strong></td>
                    <td class="re-muted">{{ $s->slug }}</td>
                    <td>{{ $s->sort_order }}</td>
                    <td>
                        @if($s->is_active)
                        <span class="re-badge re-badge-on">Active</span>
                        @else
                        <span class="re-badge re-badge-off">Inactive</span>
                        @endif
                    </td>
                    <td>
                        @include('admin.partials.table-row-actions', [
                            'editUrl' => route('admin.states.edit', $s),
                            'destroyUrl' => route('admin.states.destroy', $s),
                            'confirm' => 'Delete this state? Cities under it will be deleted.',
                        ])
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="6" class="re-muted" style="padding:1.5rem;">No states yet.</td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection
