@extends('admin.layouts.shell', ['title' => 'Property interest enquiries — NRI Suvidha Admin'])

@php
    $frontendBase = config('services.frontend_url');
@endphp

@include('admin.partials.datatable-vendor-assets')
@include('admin.real_estate._styles')

@push('head')
<style>
    .toolbar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.75rem; margin-bottom: 1rem; }
    .toolbar h1 { font-size: 1.25rem; margin: 0; }
    .muted { color: #64748b; }
    .cell-msg { max-width: 320px; font-size: 0.82rem; line-height: 1.45; white-space: normal; word-break: break-word; }
    .cell-title { font-weight: 600; color: #0f172a; }
</style>
@endpush

@push('scripts')
<script>
jQuery(function () {
  if (window.nriDataTable) {
    nriDataTable.init('dt-property-inquiries', { order: [[0, 'desc']] });
  }
});
</script>
@endpush

@section('content')
<div class="toolbar">
    <h1>Interest enquiries</h1>
    <p class="muted mb-0" style="font-size:0.875rem;">Express interest submissions from public property pages.</p>
</div>

<div class="nri-dt-outer table-wrap--dt">
    <div class="nri-dt-toolbar2">
        <button type="button" class="nri-dt-open-labels">Customize column names</button>
    </div>
    <div class="table-wrap" style="overflow:visible">
        <table id="dt-property-inquiries" class="display nowrap compact row-border hover stripe" style="width:100%;">
            <thead>
                <tr>
                    <th data-dt-id="submitted" data-dt-default="Submitted">Submitted</th>
                    <th data-dt-id="property" data-dt-default="Property">Property</th>
                    <th data-dt-id="name" data-dt-default="Full name">Full name</th>
                    <th data-dt-id="email" data-dt-default="Email">Email</th>
                    <th data-dt-id="phone" data-dt-default="Phone">Phone</th>
                    <th data-dt-id="message" data-dt-default="Message">Message</th>
                    <th data-dt-id="actions" data-dt-default=""></th>
                </tr>
            </thead>
            <tbody>
                @forelse($inquiries as $row)
                <tr>
                    <td data-order="{{ $row->created_at?->timestamp ?? 0 }}">{{ $row->created_at?->format('Y-m-d H:i') ?? '—' }}</td>
                    <td>
                        @if($row->propertyListing)
                            <span class="cell-title">{{ $row->propertyListing->title }}</span>
                            <span class="muted" style="display:block;font-size:0.75rem;">ID {{ $row->property_listing_id }}</span>
                        @else
                            <span class="muted">ID {{ $row->property_listing_id }}</span>
                        @endif
                    </td>
                    <td>{{ $row->full_name }}</td>
                    <td><a href="mailto:{{ e($row->email) }}">{{ $row->email }}</a></td>
                    <td>{{ $row->phone }}</td>
                    <td class="cell-msg">{{ $row->message ? \Illuminate\Support\Str::limit(strip_tags($row->message), 400) : '—' }}</td>
                    <td>
                        @if($frontendBase !== '' && $row->propertyListing)
                            <a
                                class="re-btn-sm"
                                style="font-size:0.75rem;padding:0.25rem 0.5rem;"
                                href="{{ $frontendBase }}/property/{{ $row->property_listing_id }}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >View listing</a>
                        @elseif($row->propertyListing)
                            <span class="muted" style="font-size:0.75rem;" title="Set FRONTEND_URL in .env">—</span>
                        @endif
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="7" class="muted" style="padding:1.5rem;">No enquiries yet.</td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection
