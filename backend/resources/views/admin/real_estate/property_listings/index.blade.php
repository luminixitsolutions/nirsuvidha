@php
    use App\Models\PropertyListing;
    $frontendBase = config('services.frontend_url');
@endphp

@extends('admin.layouts.shell', ['title' => 'Properties — NRI Suvidha Admin'])

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
    nriDataTable.init('dt-re-properties');
  }
});
</script>
@endpush

@section('content')
<div class="re-toolbar">
    <h1>Properties</h1>
    <a class="re-btn-sm" href="{{ route('admin.properties.create') }}">Add property</a>
</div>

<div class="nri-dt-outer table-wrap--dt">
    <div class="nri-dt-toolbar2">
        <button type="button" class="nri-dt-open-labels">Customize column names</button>
    </div>
    <div class="re-table-wrap" style="overflow:visible">
        <table id="dt-re-properties" class="display nowrap compact row-border hover stripe" style="width:100%;">
            <thead>
                <tr>
                    <th data-dt-id="listing_type" data-dt-default="Placement">Placement</th>
                    <th data-dt-id="transaction_type" data-dt-default="Purpose">Purpose</th>
                    <th data-dt-id="featured" data-dt-default="Featured">Featured</th>
                    <th data-dt-id="title" data-dt-default="Title">Title</th>
                    <th data-dt-id="price" data-dt-default="Price">Price</th>
                    <th data-dt-id="published" data-dt-default="Published">Published</th>
                    <th data-dt-id="sort_order" data-dt-default="Sort">Sort</th>
                    <th data-dt-id="website" data-dt-default="Website">View on site</th>
                    <th data-dt-id="actions" data-dt-default=""></th>
                </tr>
            </thead>
            <tbody>
                @forelse($listings as $row)
                <tr>
                    <td><span class="re-badge {{ $row->listing_type === PropertyListing::TYPE_FEATURED ? 're-badge-on' : '' }}" style="{{ $row->listing_type === PropertyListing::TYPE_CURATED ? 'background:#eff6ff;color:#1e40af;' : '' }}">{{ $row->listing_type }}</span></td>
                    <td><span class="re-badge" style="background:#f5f3ef;color:#7c6a3e;">{{ $row->transaction_type ?? 'buy' }}</span></td>
                    <td>
                        @if($row->is_featured || $row->listing_type === PropertyListing::TYPE_FEATURED)
                        <span class="re-badge re-badge-on">Yes</span>
                        @else
                        <span class="re-badge re-badge-off">No</span>
                        @endif
                    </td>
                    <td><strong>{{ $row->title }}</strong></td>
                    <td>{{ $row->price_display }}</td>
                    <td>
                        @if($row->is_published)
                        <span class="re-badge re-badge-on">Yes</span>
                        @else
                        <span class="re-badge re-badge-off">No</span>
                        @endif
                    </td>
                    <td>{{ $row->sort_order }}</td>
                    <td>
                        @if($frontendBase !== '')
                            <a
                                href="{{ $frontendBase }}/property/{{ $row->id }}"
                                class="re-btn-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Open public property page (new tab)"
                            >View details</a>
                        @else
                            <span class="re-muted" title="Set FRONTEND_URL in .env">—</span>
                        @endif
                    </td>
                    <td>
                        @include('admin.partials.table-row-actions', [
                            'editUrl' => route('admin.properties.edit', $row),
                            'destroyUrl' => route('admin.properties.destroy', $row),
                            'confirm' => 'Delete this property?',
                        ])
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="9" class="re-muted" style="padding:1.5rem;">No properties yet. Use Add property to create curated grid cards or featured blocks.</td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection
