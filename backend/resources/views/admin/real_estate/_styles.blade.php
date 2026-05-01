@push('head')
<style>
    .re-toolbar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.75rem; margin-bottom: 1rem; }
    .re-toolbar h1 { font-size: 1.25rem; margin: 0; }
    .re-btn-sm { display: inline-block; padding: 0.45rem 0.9rem; border-radius: 0.45rem; font-size: 0.875rem; font-weight: 600;
        background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%); color: #fff; text-decoration: none; }
    .re-table-wrap { font-size: 0.875rem; background: #fff; border: 1px solid rgba(15,23,42,0.08); border-radius: 0.75rem; overflow: hidden; }
    .re-table-wrap table { width: 100%; border-collapse: collapse; }
    .re-table-wrap th, .re-table-wrap td { padding: 0.65rem 0.85rem; text-align: left; border-bottom: 1px solid rgba(15,23,42,0.06); }
    .re-table-wrap th { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; color: #64748b; background: #faf8f4; }
    .re-muted { color: #64748b; font-size: 0.82rem; }
    .re-badge { display: inline-block; padding: 0.15rem 0.45rem; border-radius: 0.25rem; font-size: 0.75rem; }
    .re-badge-on { background: #ecfdf5; color: #166534; }
    .re-badge-off { background: #fef2f2; color: #b91c1c; }
    .re-actions { display: flex; flex-wrap: wrap; gap: 0.35rem; }
    .re-actions a, .re-actions button { font-size: 0.8rem; padding: 0.25rem 0.5rem; border-radius: 0.35rem; border: 1px solid rgba(201,163,78,0.35); background: #fff; cursor: pointer; color: #0f172a; text-decoration: none; }
    .re-actions button[type="submit"] { color: #b91c1c; border-color: rgba(185,28,28,0.35); }
    .re-form h1 { font-size: 1.25rem; margin: 0 0 1rem; }
    .re-field { margin-bottom: 0.9rem; }
    .re-field label { display: block; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.02em; color: #64748b; margin-bottom: 0.25rem; }
    .re-field input[type="text"], .re-field input[type="number"], .re-field select, .re-field textarea {
        width: 100%; border-radius: 0.5rem; border: 1px solid rgba(15, 23, 42, 0.12);
        padding: 0.5rem 0.65rem; font-size: 0.9rem; background: #fff;
    }
    .re-field textarea { min-height: 88px; resize: vertical; }
    .re-check { display: flex; align-items: center; gap: 0.4rem; margin: 0.5rem 0; font-size: 0.9rem; }
    .re-card-form { background: #fff; border: 1px solid rgba(15, 23, 42, 0.08); border-radius: 0.75rem; padding: 1.25rem 1.5rem 1.5rem; }
    .re-btn-gold { border: none; border-radius: 0.5rem; font-weight: 600; font-size: 0.9rem; padding: 0.6rem 1.2rem; cursor: pointer;
        background: linear-gradient(135deg, #C9A34E 0%, #9A7B32 100%); color: #fff; }
    .re-btn-ghost { border: 1px solid rgba(201, 163, 78, 0.4); background: #fff; border-radius: 0.5rem; padding: 0.5rem 1rem; font-size: 0.875rem; text-decoration: none; color: #0f172a; display: inline-block; }
    .re-hint { font-size: 0.8rem; color: #64748b; margin-top: 0.25rem; }
    .re-field input[type="file"] { font-size: 0.85rem; max-width: 100%; }
    .re-media-preview-grid { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 0.5rem; }
    .re-media-thumb { border: 1px solid rgba(15,23,42,0.1); border-radius: 0.5rem; overflow: hidden; width: 120px; background: #fafafa; }
    .re-media-thumb img { display: block; width: 100%; height: 86px; object-fit: cover; }
    .re-media-thumb .re-media-meta { padding: 0.35rem 0.45rem; font-size: 0.72rem; }
    .re-doc-list { margin-top: 0.5rem; font-size: 0.85rem; }
    .re-doc-row { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; padding: 0.35rem 0; border-bottom: 1px solid rgba(15,23,42,0.06); }
    .re-doc-row:last-child { border-bottom: none; }
</style>
@endpush
