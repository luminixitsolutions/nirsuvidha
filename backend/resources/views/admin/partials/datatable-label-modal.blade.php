{{-- One-time: column rename modal (used by public/js/admin-datatable.js) --}}
<div id="nri-dt-label-modal" class="nri-dt-modal" hidden>
    <div class="nri-dt-modal__backdrop" data-dt-backdrop="1" aria-hidden="true"></div>
    <div class="nri-dt-modal__panel" role="dialog" aria-labelledby="nri-dt-label-title">
        <h2 id="nri-dt-label-title" class="nri-dt-modal__title">Column names</h2>
        <p class="nri-dt-modal__hint">These labels are stored in your browser. Drag table headers to reorder columns; use <strong>Show / hide</strong> for visibility.</p>
        <form id="nri-dt-label-form" class="nri-dt-label-form" onsubmit="return false;"></form>
        <div class="nri-dt-modal__actions">
            <button type="button" class="nri-dt-modal__btn nri-dt-modal__btn--ghost" id="nri-dt-label-cancel">Cancel</button>
            <button type="button" class="nri-dt-modal__btn nri-dt-modal__btn--primary" id="nri-dt-label-save">Save names</button>
        </div>
    </div>
</div>
<style>
    .nri-dt-modal { position: fixed; inset: 0; z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 1rem; }
    .nri-dt-modal[hidden] { display: none !important; }
    .nri-dt-modal__backdrop { position: absolute; inset: 0; background: rgba(15, 23, 42, 0.5); }
    .nri-dt-modal__panel { position: relative; background: #fff; border-radius: 0.75rem; max-width: 28rem; width: 100%; padding: 1.25rem; box-shadow: 0 20px 50px rgba(0,0,0,0.2); }
    .nri-dt-modal__title { font-size: 1.1rem; margin: 0 0 0.5rem; }
    .nri-dt-modal__hint { font-size: 0.82rem; color: #64748b; margin: 0 0 1rem; line-height: 1.4; }
    .nri-dt-label-form { max-height: 50vh; overflow: auto; }
    .nri-dt-label-row { display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.85rem; }
    .nri-dt-label-row label { font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: #64748b; }
    .nri-dt-label-row input { width: 100%; border: 1px solid rgba(15,23,42,0.12); border-radius: 0.5rem; padding: 0.5rem 0.65rem; font-size: 0.9rem; }
    .nri-dt-modal__actions { display: flex; gap: 0.5rem; justify-content: flex-end; margin-top: 1rem; }
    .nri-dt-modal__btn { border-radius: 0.5rem; padding: 0.45rem 0.9rem; font-size: 0.875rem; font-weight: 600; cursor: pointer; }
    .nri-dt-modal__btn--ghost { border: 1px solid rgba(201, 163, 78, 0.4); background: #fff; color: #0f172a; }
    .nri-dt-modal__btn--primary { border: none; background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%); color: #fff; }
</style>
