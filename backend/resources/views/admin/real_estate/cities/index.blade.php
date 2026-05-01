@extends('admin.layouts.shell', ['title' => 'Cities — NRI Suvidha Admin'])

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
    nriDataTable.init('dt-re-cities');
  }
});
</script>
@endpush

@section('content')
<div class="re-toolbar">
    <h1>Cities</h1>
    <a class="re-btn-sm" href="{{ route('admin.cities.create') }}">Add city</a>
</div>

<div class="nri-dt-outer table-wrap--dt">
    <div class="nri-dt-toolbar2">
        <button type="button" class="nri-dt-open-labels">Customize column names</button>
    </div>
    <div class="re-table-wrap" style="overflow:visible">
        <table id="dt-re-cities" class="display nowrap compact row-border hover stripe" style="width:100%;">
            <thead>
                <tr>
                    <th data-dt-id="region" data-dt-default="State / Country">State / Country</th>
                    <th data-dt-id="name" data-dt-default="Name">Name</th>
                    <th data-dt-id="slug" data-dt-default="Slug">Slug</th>
                    <th data-dt-id="sort_order" data-dt-default="Sort">Sort</th>
                    <th data-dt-id="status" data-dt-default="Status">Status</th>
                    <th data-dt-id="actions" data-dt-default=""></th>
                </tr>
            </thead>
            <tbody>
                @forelse($cities as $city)
                <tr>
                    <td>
                        {{ $city->state?->name ?? '—' }}
                        @if($city->state?->country)
                        <span class="re-muted">({{ $city->state->country->name }})</span>
                        @endif
                    </td>
                    <td><strong>{{ $city->name }}</strong></td>
                    <td class="re-muted">{{ $city->slug }}</td>
                    <td>{{ $city->sort_order }}</td>
                    <td>
                        @if($city->is_active)
                        <span class="re-badge re-badge-on">Active</span>
                        @else
                        <span class="re-badge re-badge-off">Inactive</span>
                        @endif
                    </td>
                    <td>
                        @include('admin.partials.table-row-actions', [
                            'editUrl' => route('admin.cities.edit', $city),
                            'destroyUrl' => route('admin.cities.destroy', $city),
                            'confirm' => 'Delete this city?',
                        ])
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="6" class="re-muted" style="padding:1.5rem;">No cities yet.</td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection
