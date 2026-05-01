@extends('admin.layouts.shell', ['title' => 'Testimonials — NRI Suvidha Admin'])

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
    .thumb { width: 40px; height: 40px; object-fit: cover; border-radius: 50%; border: 1px solid rgba(0,0,0,0.08); }
</style>
@endpush

@push('scripts')
<script>
jQuery(function () {
  if (window.nriDataTable) {
    nriDataTable.init('dt-testimonials');
  }
});
</script>
@endpush

@section('content')
<div class="toolbar">
    <h1>Testimonials</h1>
    <a class="btn-sm" href="{{ route('admin.testimonials.create') }}">Add testimonial</a>
</div>

<div class="nri-dt-outer table-wrap--dt">
    <div class="nri-dt-toolbar2">
        <button type="button" class="nri-dt-open-labels">Customize column names</button>
    </div>
    <div class="table-wrap" style="overflow:visible">
        <table id="dt-testimonials" class="display nowrap compact row-border hover stripe" style="width:100%;">
        <thead>
            <tr>
                <th data-dt-id="order" data-dt-default="Order">Order</th>
                <th data-dt-id="photo" data-dt-default="Photo">Photo</th>
                <th data-dt-id="name" data-dt-default="Name">Name</th>
                <th data-dt-id="designation" data-dt-default="Designation">Designation</th>
                <th data-dt-id="rating" data-dt-default="Rating">Rating</th>
                <th data-dt-id="status" data-dt-default="Status">Status</th>
                <th data-dt-id="actions" data-dt-default=""></th>
            </tr>
        </thead>
        <tbody>
            @forelse($testimonials as $t)
            <tr>
                <td>{{ $t->sort_order }}</td>
                <td>
                    @if($t->photo)
                    <img class="thumb" src="{{ asset('storage/'.ltrim($t->photo,'/')) }}" alt="" />
                    @else
                    <span class="muted">—</span>
                    @endif
                </td>
                <td><strong>{{ $t->name }}</strong></td>
                <td class="muted" style="font-size:0.82rem;">{{ $t->designation }}</td>
                <td>{{ $t->rating }} / 5</td>
                <td>
                    @if($t->is_active)
                    <span class="badge badge-on">Active</span>
                    @else
                    <span class="badge badge-off">Inactive</span>
                    @endif
                </td>
                <td>
                    @include('admin.partials.table-row-actions', [
                        'editUrl' => route('admin.testimonials.edit', $t),
                        'destroyUrl' => route('admin.testimonials.destroy', $t),
                        'confirm' => 'Delete this testimonial?',
                    ])
                </td>
            </tr>
            @empty
            <tr>
                <td colspan="7" class="muted" style="padding:1.5rem;">No testimonials. <a href="{{ route('admin.testimonials.create') }}">Add one</a>.</td>
            </tr>
            @endforelse
        </tbody>
    </table>
    </div>
</div>
@endsection
