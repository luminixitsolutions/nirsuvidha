@foreach(['hero_title_before' => 'Title (before gold)', 'hero_title_gold' => 'Title (gold part)', 'hero_primary_cta' => 'Primary CTA', 'hero_secondary_cta' => 'Secondary CTA', 'site_name_short' => 'Short site name'] as $key => $label)
<div class="field">
    <label for="{{ $key }}">{{ $label }}</label>
    <input id="{{ $key }}" name="{{ $key }}" type="text" value="{{ $v($key) }}" />
</div>
@endforeach
<div class="field">
    <label for="hero_subtitle">Hero subtitle</label>
    <textarea id="hero_subtitle" name="hero_subtitle" rows="2">{{ $v('hero_subtitle') }}</textarea>
</div>
