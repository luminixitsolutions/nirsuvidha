@push('head')
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.7/css/jquery.dataTables.min.css" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.datatables.net/colreorder/1.7.0/css/colReorder.dataTables.min.css" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/2.4.2/css/buttons.dataTables.min.css" crossorigin="anonymous" />
    <style>
        .nri-dt-outer { width: 100%; }
        .nri-dt-toolbar2 { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; }
        .nri-dt-open-labels { font-size: 0.8rem; font-weight: 600; padding: 0.4rem 0.75rem; border-radius: 0.45rem; cursor: pointer; border: 1px solid rgba(201, 163, 78, 0.45); background: #fff; color: #0f172a; }
        .nri-dt-open-labels:hover { border-color: #9A7B32; color: #9A7B32; }
        .nri-dt-top { width: 100%; margin-bottom: 0.5rem; }
        .nri-dt-top-inner { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.75rem; }
        .nri-dt-top .dt-buttons { display: flex; flex-wrap: wrap; gap: 0.35rem; align-items: center; }
        .nri-dt-top .nri-dt-btn { font-size: 0.8rem; padding: 0.35rem 0.7rem; border-radius: 0.4rem; }
        .nri-dt-top .dataTables_length label { font-size: 0.85rem; }
        .nri-dt-top .dataTables_filter input { border-radius: 0.4rem; border: 1px solid rgba(15,23,42,0.12); padding: 0.35rem 0.5rem; }
        .nri-dt-bottom { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 0.5rem; margin-top: 0.5rem; font-size: 0.82rem; color: #64748b; }
        div.dataTables_wrapper { width: 100% !important; }
        .dataTable thead th { position: relative; }
        .table-wrap--dt { width: 100%; background: #fff; border: 1px solid rgba(15,23,42,0.08); border-radius: 0.65rem; padding: 0.5rem; }
        table.dataTable { width: 100% !important; margin: 0 !important; }
        table.dataTable.no-footer { border-bottom: 1px solid rgba(15,23,42,0.08); }
        .dataTables_paginate .paginate_button { color: #0f172a !important; }
        .dataTables_paginate .paginate_button.current { background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%) !important; color: #fff !important; border: none !important; }
    </style>
@endpush
@push('scripts')
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.datatables.net/colreorder/1.7.0/js/dataTables.colReorder.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.datatables.net/buttons/2.4.2/js/dataTables.buttons.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.datatables.net/buttons/2.4.2/js/buttons.colVis.min.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.datatables.net/buttons/2.4.2/js/buttons.html5.min.js" crossorigin="anonymous"></script>
    <script src="{{ asset('js/admin-datatable.js') }}?v=2"></script>
@endpush
