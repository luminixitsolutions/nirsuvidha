@foreach(['about_badge' => 'Badge', 'about_title_before' => 'Title (before gold)', 'about_title_gold' => 'Title (gold)', 'about_lead' => 'Lead line', 'about_p1' => 'Paragraph 1', 'about_p2' => 'Paragraph 2', 'about_goal_kicker' => 'Goal kicker', 'about_goal_statement' => 'Goal statement', 'about_foot' => 'Footer line'] as $key => $label)
<div class="field">
    <label for="{{ $key }}">{{ $label }}</label>
    @if(in_array($key, ['about_p1','about_p2','about_foot','about_lead','about_goal_statement'], true))
    <textarea id="{{ $key }}" name="{{ $key }}" rows="2">{{ $v($key) }}</textarea>
    @else
    <input id="{{ $key }}" name="{{ $key }}" type="text" value="{{ $v($key) }}" />
    @endif
</div>
@endforeach
