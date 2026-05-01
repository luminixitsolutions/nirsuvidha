/**
 * NRI Suvidha admin: DataTables (ColReorder, ColVis, stateSave) + custom column names (localStorage).
 * Table: #id; each thead th has data-dt-id (unique) and data-dt-default; last column data-dt-id="actions".
 */
(function (window, document) {
  'use strict';
  if (!window.jQuery || !window.jQuery.fn.dataTable) {
    return;
  }
  const $ = window.jQuery;

  function isEmptyStateTable($table) {
    const $tr = $table.find('tbody tr');
    if ($tr.length === 0) {
      return true;
    }
    if ($tr.length === 1 && $tr.find('td[colspan]').length) {
      return true;
    }
    return false;
  }

  function labelKey(tableId) {
    return 'nri_admin_col_labels_' + tableId;
  }

  function loadLabels(tableId) {
    try {
      return JSON.parse(localStorage.getItem(labelKey(tableId)) || '{}') || {};
    } catch (e) {
      return {};
    }
  }

  function saveLabels(tableId, map) {
    localStorage.setItem(labelKey(tableId), JSON.stringify(map));
  }

  function applyThLabels($thContainer, tableId) {
    const labels = loadLabels(tableId);
    $thContainer.find('th[data-dt-id]').each(function () {
      const id = this.getAttribute('data-dt-id');
      if (!id) {
        return;
      }
      const def = this.getAttribute('data-dt-default') || '';
      if (Object.prototype.hasOwnProperty.call(labels, id) && labels[id]) {
        this.textContent = labels[id];
      } else {
        this.textContent = def;
      }
    });
  }

  function getTableApi($table) {
    if (!$.fn.dataTable.isDataTable($table[0])) {
      return null;
    }
    return $table.DataTable();
  }

  function headerContainer($table) {
    const api = getTableApi($table);
    if (api) {
      return $(api.table().node()).find('thead');
    }
    return $table.find('thead');
  }

  function openLabelModal($table, tableId) {
    const wrap = document.getElementById('nri-dt-label-modal');
    const form = document.getElementById('nri-dt-label-form');
    if (!wrap || !form) {
      return;
    }
    form.innerHTML = '';
    const current = loadLabels(tableId);
    const $headers = headerContainer($table).find('th[data-dt-id]');
    $headers.each(function () {
      const th = this;
      const id = th.getAttribute('data-dt-id');
      if (!id || id === 'actions') {
        return;
      }
      const def = (th.getAttribute('data-dt-default') || th.textContent || '').trim();
      const val = current[id] != null && current[id] !== '' ? current[id] : def;
      const row = document.createElement('div');
      row.className = 'nri-dt-label-row';
      const lab = document.createElement('label');
      lab.setAttribute('for', 'nri-dt-l-' + id);
      lab.textContent = 'Column: ' + def;
      const inp = document.createElement('input');
      inp.type = 'text';
      inp.id = 'nri-dt-l-' + id;
      inp.name = id;
      inp.setAttribute('autocomplete', 'off');
      inp.value = val;
      row.appendChild(lab);
      row.appendChild(inp);
      form.appendChild(row);
    });
    wrap.hidden = false;
    wrap.setAttribute('data-table', tableId);
  }

  function closeLabelModal() {
    const wrap = document.getElementById('nri-dt-label-modal');
    if (wrap) {
      wrap.hidden = true;
    }
  }

  function saveLabelModal() {
    const wrap = document.getElementById('nri-dt-label-modal');
    const form = document.getElementById('nri-dt-label-form');
    if (!wrap || !form || wrap.hidden) {
      return;
    }
    const tableId = wrap.getAttribute('data-table');
    if (!tableId) {
      return;
    }
    const $table = $('#' + tableId);
    if (!$table.length) {
      return;
    }
    const map = {};
    form.querySelectorAll('input[type="text"]').forEach(function (input) {
      const id = input.name;
      if (!id || id === 'actions') {
        return;
      }
      const t = String(input.value).trim();
      if (t !== '') {
        map[id] = t;
      }
    });
    saveLabels(tableId, map);
    const api = getTableApi($table);
    if (api) {
      applyThLabels($(api.table().node()).find('thead'), tableId);
      api.columns.adjust();
      window.dispatchEvent(new Event('resize'));
    } else {
      applyThLabels($table.find('thead'), tableId);
    }
    closeLabelModal();
  }

  document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'nri-dt-label-save') {
      e.preventDefault();
      saveLabelModal();
    }
    if (e.target && (e.target.id === 'nri-dt-label-cancel' || e.target.getAttribute('data-dt-backdrop') === '1')) {
      e.preventDefault();
      closeLabelModal();
    }
  });

  function initNriDataTable(tableId, opts) {
    opts = opts || {};
    const $t = $('#' + tableId);
    if ($t.length === 0) {
      return;
    }
    if (isEmptyStateTable($t)) {
      return;
    }
    applyThLabels($t.find('thead'), tableId);
    const thCount = $t.find('thead th').length;
    const colvisIndexes =
      thCount > 1 ? Array.from({ length: thCount - 1 }, function (_, i) { return i; }) : [];
    const exportColumns = colvisIndexes;
    const order = opts.order != null ? opts.order : [[0, 'asc']];

    $t.DataTable({
      colReorder: { fixedColumnsLeft: 0, fixedColumnsRight: 1 },
      stateSave: true,
      stateDuration: 0,
      scrollX: true,
      pageLength: 25,
      lengthMenu: [
        [10, 25, 50, 100, -1],
        [10, 25, 50, 100, 'All'],
      ],
      order: order,
      columnDefs: [{ orderable: false, targets: -1 }],
      autoWidth: false,
      language: {
        search: 'Filter:',
        lengthMenu: 'Show _MENU_',
        info: 'Showing _START_ to _END_ of _TOTAL_',
        infoEmpty: 'No records',
        infoFiltered: '(_MAX_ total)',
        zeroRecords: 'No matching rows',
        emptyTable: '—',
        paginate: { first: 'First', last: 'Last', next: 'Next', previous: 'Prev' },
      },
      dom: "<'nri-dt-top'<'nri-dt-top-inner'Blf>r>t<'nri-dt-bottom'ip>",
      buttons: [
        {
          extend: 'csvHtml5',
          text: 'Export CSV',
          className: 'nri-dt-btn',
          exportOptions: { columns: exportColumns },
        },
        {
          extend: 'excelHtml5',
          text: 'Export Excel',
          className: 'nri-dt-btn',
          exportOptions: { columns: exportColumns },
        },
        {
          extend: 'colvis',
          text: 'Show / hide',
          className: 'nri-dt-btn',
          columns: colvisIndexes,
        },
      ],
      initComplete: function () {
        const api = this.api();
        applyThLabels($(api.table().node()).find('thead'), tableId);
        api.columns.adjust();
      },
    });

    const wrap = $t.closest('.nri-dt-outer');
    if (wrap.length) {
      const btn = wrap.find('.nri-dt-open-labels');
      if (btn.length) {
        btn.on('click', function (e) {
          e.preventDefault();
          openLabelModal($t, tableId);
        });
      }
    }
  }

  window.nriDataTable = { init: initNriDataTable };
})(window, document);
