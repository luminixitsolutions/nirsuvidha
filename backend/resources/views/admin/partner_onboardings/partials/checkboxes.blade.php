@php
    $sel = old($name, $selected ?? []);
    if (! is_array($sel)) {
        $sel = [];
    }
@endphp
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:0.35rem;max-height:240px;overflow:auto;border:1px solid rgba(15,23,42,0.1);padding:0.75rem;border-radius:0.5rem;background:#fafafa;">
@foreach($options as $opt)
<label style="display:flex;gap:0.35rem;align-items:flex-start;font-size:0.82rem;margin:0;">
    <input type="checkbox" name="{{ $name }}[]" value="{{ $opt }}" @checked(in_array($opt, $sel, true)) />
    <span>{{ $opt }}</span>
</label>
@endforeach
</div>
