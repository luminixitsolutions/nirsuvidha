@extends('admin.layouts.shell', ['title' => 'Home loan partners — NRI Suvidha Admin'])

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
    nriDataTable.init('dt-re-home-loan-partners');
  }
});
</script>
@endpush

@section('content')
<div class="re-toolbar">
    <h1>Home loan partners</h1>
    <a class="re-btn-sm" href="{{ route('admin.home_loan_partners.create') }}">Add partner</a>
</div>

<div class="nri-dt-outer table-wrap--dt">
    <div class="nri-dt-toolbar2">
        <button type="button" class="nri-dt-open-labels">Customize column names</button>
    </div>
    <div class="re-table-wrap" style="overflow:visible">
        <table id="dt-re-home-loan-partners" class="display nowrap compact row-border hover stripe" style="width:100%;">
            <thead>
                <tr>
                    <th data-dt-id="bank" data-dt-default="Bank">Bank</th>
                    <th data-dt-id="rate" data-dt-default="Rate">Rate</th>
                    <th data-dt-id="fee" data-dt-default="Fee">Fee</th>
                    <th data-dt-id="tenure" data-dt-default="Tenure">Tenure</th>
                    <th data-dt-id="published" data-dt-default="Published">Published</th>
                    <th data-dt-id="sort_order" data-dt-default="Sort">Sort</th>
                    <th data-dt-id="actions" data-dt-default=""></th>
                </tr>
            </thead>
            <tbody>
                @forelse($partners as $row)
                <tr>
                    <td><strong>{{ $row->bank_name }}</strong></td>
                    <td>{{ $row->interest_rate_display }}</td>
                    <td>{{ $row->processing_fee_display }}</td>
                    <td>{{ $row->max_tenure_display }}</td>
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
                            'editUrl' => route('admin.home_loan_partners.edit', $row),
                            'destroyUrl' => route('admin.home_loan_partners.destroy', $row),
                            'confirm' => 'Delete this partner?',
                        ])
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="7" class="re-muted" style="padding:1.5rem;">No home loan partners yet.</td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection
