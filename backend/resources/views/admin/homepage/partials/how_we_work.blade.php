@php
    $howStepsJson = (string) $v('how_work_steps_json');
    $howSteps = [];
    if ($howStepsJson !== '') {
        $decoded = json_decode($howStepsJson, true);
        if (is_array($decoded)) {
            $howSteps = $decoded;
        }
    }
@endphp

<div class="field">
    <label for="how_work_title">Section title</label>
    <input id="how_work_title" name="how_work_title" type="text" value="{{ $v('how_work_title') }}" />
</div>
<div class="field">
    <label for="how_work_subtitle">Subtitle</label>
    <textarea id="how_work_subtitle" name="how_work_subtitle" rows="2">{{ $v('how_work_subtitle') }}</textarea>
</div>

@push('head')
<style>
    .hw-editor { margin: 1rem 0; border: 1px solid rgba(15,23,42,0.1); border-radius: 0.65rem; overflow: hidden; }
    .hw-editor-head { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.5rem; padding: 0.75rem 1rem; background: #fafafa; border-bottom: 1px solid rgba(15,23,42,0.08); }
    .hw-editor-head strong { font-size: 0.85rem; }
    .hw-add { font-size: 0.8rem; font-weight: 600; padding: 0.4rem 0.8rem; border-radius: 0.45rem; cursor: pointer; border: 1px solid rgba(201, 163, 78, 0.45); background: #fff; color: #0f172a; }
    .hw-add:hover { border-color: #9A7B32; color: #9A7B32; }
    .hw-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
    .hw-table th, .hw-table td { text-align: left; padding: 0.5rem 0.65rem; border-bottom: 1px solid rgba(15,23,42,0.06); vertical-align: top; }
    .hw-table th { background: #fff; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.04em; color: #64748b; font-weight: 600; }
    .hw-table input[type="text"], .hw-table input[type="number"] { width: 100%; min-width: 0; border-radius: 0.4rem; border: 1px solid rgba(15,23,42,0.12); padding: 0.35rem 0.45rem; font-size: 0.85rem; }
    .hw-table textarea { width: 100%; min-width: 12rem; min-height: 3.2rem; border-radius: 0.4rem; border: 1px solid rgba(15,23,42,0.12); padding: 0.35rem 0.45rem; font-size: 0.85rem; font-family: system-ui, sans-serif; }
    .hw-actions { display: flex; flex-wrap: wrap; gap: 0.25rem; align-items: center; }
    .hw-actions button { font-size: 0.7rem; padding: 0.2rem 0.45rem; border-radius: 0.3rem; cursor: pointer; border: 1px solid rgba(15,23,42,0.12); background: #fff; }
    .hw-actions .hw-remove { color: #b91c1c; border-color: rgba(185, 28, 28, 0.3); }
    .hw-hint { font-size: 0.75rem; color: #64748b; margin: 0.5rem 0 0; padding: 0 1rem 0.75rem; }
    .hw-col-n { width: 3.5rem; }
    .hw-col-ico { min-width: 7rem; }
    .hw-col-on { width: 3rem; text-align: center; }
</style>
@endpush

<div class="field" style="margin-top:0.5rem">
    <label>Process steps (cards in order)</label>
    <p class="hint" style="margin:0.25rem 0 0.5rem">These appear as “Step 01”, “Step 02”, … on the public site. Icon: Font Awesome name after <code>fa-solid</code> (e.g. <code>fa-user-check</code>). Inactive steps are hidden on the site.</p>
    <div class="hw-editor">
        <div class="hw-editor-head">
            <strong>Steps</strong>
            <button type="button" class="hw-add" id="hw-add-step">+ Add step</button>
        </div>
        <div style="overflow-x:auto">
            <table class="hw-table" id="hw-table">
                <thead>
                    <tr>
                        <th class="hw-col-n">#</th>
                        <th class="hw-col-ico">Icon (FA)</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th class="hw-col-on">On</th>
                        <th>Move / remove</th>
                    </tr>
                </thead>
                <tbody id="hw-tbody">
                    @forelse($howSteps as $i => $step)
                    <tr>
                        <td class="hw-col-n"><input class="hw-n" type="number" min="1" max="99" value="{{ (int) ($step['n'] ?? $i + 1) }}" /></td>
                        <td class="hw-col-ico"><input class="hw-icon" type="text" value="{{ $step['icon'] ?? '' }}" placeholder="fa-user-check" /></td>
                        <td><input class="hw-title" type="text" value="{{ $step['title'] ?? '' }}" /></td>
                        <td><textarea class="hw-body" rows="2">{{ $step['body'] ?? '' }}</textarea></td>
                        <td class="hw-col-on" style="text-align:center"><input class="hw-active" type="checkbox" @checked((bool)($step['active'] ?? true)) /></td>
                        <td>
                            <div class="hw-actions">
                                <button type="button" class="hw-up" title="Up">↑</button>
                                <button type="button" class="hw-down" title="Down">↓</button>
                                <button type="button" class="hw-remove">Remove</button>
                            </div>
                        </td>
                    </tr>
                    @empty
                    @endforelse
                </tbody>
            </table>
        </div>
        <p class="hw-hint">The four checkmark bullets below the steps (One Platform…, etc.) use <code>why_choose_points_json</code>. You can <a href="{{ route('admin.homepage.show', 'json-data') }}">open the JSON &amp; stats editor</a> (it is hidden from the sidebar; bookmark if needed).</p>
    </div>
    <input type="hidden" name="how_work_steps_json" id="how_work_steps_json" value="{{ $v('how_work_steps_json') }}" />
</div>

<template id="hw-row-template">
    <tr>
        <td class="hw-col-n"><input class="hw-n" type="number" min="1" max="99" value="1" /></td>
        <td class="hw-col-ico"><input class="hw-icon" type="text" value="" placeholder="fa-user-check" /></td>
        <td><input class="hw-title" type="text" value="" /></td>
        <td><textarea class="hw-body" rows="2"></textarea></td>
        <td class="hw-col-on" style="text-align:center"><input class="hw-active" type="checkbox" checked /></td>
        <td>
            <div class="hw-actions">
                <button type="button" class="hw-up" title="Up">↑</button>
                <button type="button" class="hw-down" title="Down">↓</button>
                <button type="button" class="hw-remove">Remove</button>
            </div>
        </td>
    </tr>
</template>

@push('scripts')
<script>
(function () {
  const tbody = document.getElementById('hw-tbody');
  const outField = document.getElementById('how_work_steps_json');
  const template = document.getElementById('hw-row-template');
  if (!tbody || !outField || !template) return;

  function syncJson() {
    const rows = tbody.querySelectorAll('tr');
    const out = [];
    rows.forEach(function (tr, i) {
      const n = parseInt(tr.querySelector('.hw-n') && tr.querySelector('.hw-n').value, 10);
      const icon = (tr.querySelector('.hw-icon') && tr.querySelector('.hw-icon').value) || '';
      const title = (tr.querySelector('.hw-title') && tr.querySelector('.hw-title').value) || '';
      const body = (tr.querySelector('.hw-body') && tr.querySelector('.hw-body').value) || '';
      const activeEl = tr.querySelector('.hw-active');
      const active = activeEl ? activeEl.checked : true;
      out.push({
        n: Number.isFinite(n) && n > 0 ? n : (i + 1),
        icon: icon.trim(),
        title: title.trim(),
        body: body.trim(),
        active: active
      });
    });
    outField.value = out.length ? JSON.stringify(out) : '[]';
  }

  function wireRow(tr) {
    tr.querySelectorAll('.hw-up, .hw-down, .hw-remove').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (btn.classList.contains('hw-up')) {
          const p = tr.previousElementSibling;
          if (p) tbody.insertBefore(tr, p);
        } else if (btn.classList.contains('hw-down')) {
          const n = tr.nextElementSibling;
          if (n) tbody.insertBefore(n, tr);
        } else {
          tr.remove();
        }
        renumber();
        syncJson();
      });
    });
    tr.querySelectorAll('.hw-n, .hw-icon, .hw-title, .hw-body, .hw-active').forEach(function (el) {
      el.addEventListener('input', syncJson);
      el.addEventListener('change', syncJson);
    });
  }

  function renumber() {
    tbody.querySelectorAll('tr').forEach(function (tr, i) {
      const inp = tr.querySelector('.hw-n');
      if (inp) inp.value = i + 1;
    });
  }

  document.getElementById('hw-add-step') && document.getElementById('hw-add-step').addEventListener('click', function () {
    const c = template.content && template.content.cloneNode(true);
    const tr = c.querySelector('tr') || c.firstElementChild;
    if (!tr) return;
    const next = tbody.querySelectorAll('tr').length + 1;
    const n = tr.querySelector('.hw-n');
    if (n) n.value = String(next);
    tbody.appendChild(tr);
    wireRow(tr);
    syncJson();
  });

  tbody.querySelectorAll('tr').forEach(wireRow);

  const form = document.querySelector('form[action*="/admin/homepage"]') || document.querySelector('.card-form form');
  if (form) {
    form.addEventListener('submit', function () {
      syncJson();
    });
  }
  syncJson();
})();
</script>
@endpush
