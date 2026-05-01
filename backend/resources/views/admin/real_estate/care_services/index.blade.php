@extends('admin.layouts.shell', ['title' => 'Real estate service cards — NRI Suvidha Admin'])

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
    nriDataTable.init('dt-re-care-services');
  }
});
</script>
@endpush

@section('content')
<div class="re-toolbar">
    <h1>Real estate service cards</h1>
    <a class="re-btn-sm" href="{{ route('admin.real_estate_care_services.create') }}">Add card</a>
</div>

<p class="re-muted" style="margin:-0.5rem 0 1rem;">Shown in the <strong>Real Estate Services</strong> grid on the public real-estate page (Buy/Sell/Rent tab).</p>

<div class="nri-dt-outer table-wrap--dt">
    <div class="nri-dt-toolbar2">
        <button type="button" class="nri-dt-open-labels">Customize column names</button>
    </div>
    <div class="re-table-wrap" style="overflow:visible">
        <table id="dt-re-care-services" class="display nowrap compact row-border hover stripe" style="width:100%;">
            <thead>
                <tr>
                    <th data-dt-id="title" data-dt-default="Title">Title</th>
                    <th data-dt-id="bullets" data-dt-default="Bullets">Bullets</th>
                    <th data-dt-id="published" data-dt-default="Published">Published</th>
                    <th data-dt-id="sort_order" data-dt-default="Sort">Sort</th>
                    <th data-dt-id="actions" data-dt-default=""></th>
                </tr>
            </thead>
            <tbody>
                @forelse($items as $row)
                <tr>
                    <td><strong>{{ $row->title }}</strong></td>
                    <td class="re-muted">
                        @php $bc = is_array($row->bullets) ? count($row->bullets) : 0; @endphp
                        {{ $bc }} line(s)
                    </td>
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
                            'editUrl' => route('admin.real_estate_care_services.edit', $row),
                            'destroyUrl' => route('admin.real_estate_care_services.destroy', $row),
                            'confirm' => 'Delete this card?',
                        ])
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="5" class="re-muted" style="padding:1.5rem;">No cards yet.</td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection
