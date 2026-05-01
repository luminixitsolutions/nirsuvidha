<div class="field">
    <label for="stats_json">Stats row (JSON array)</label>
    <p class="hint">count: kind, title, end, suffix · text: kind, title, value</p>
    <textarea class="json" id="stats_json" name="stats_json">{{ $v('stats_json') }}</textarea>
</div>
<div class="field">
    <label for="hero_badge_lines_json">Hero badge lines (JSON array of strings)</label>
    <textarea class="json" id="hero_badge_lines_json" name="hero_badge_lines_json">{{ $v('hero_badge_lines_json') }}</textarea>
</div>
<div class="field">
    <label for="about_features_json">About feature cards (JSON: icon, title, desc)</label>
    <textarea class="json" id="about_features_json" name="about_features_json">{{ $v('about_features_json') }}</textarea>
</div>
<div class="field">
    <label for="why_choose_points_json">Why choose — points (JSON array of strings)</label>
    <textarea class="json" id="why_choose_points_json" name="why_choose_points_json">{{ $v('why_choose_points_json') }}</textarea>
</div>
