@foreach(\App\Support\HomeCmsKeys::IMAGE_KEYS as $key)
<div class="field">
    <label for="{{ $key }}">{{ str_replace('_', ' ', $key) }} (optional)</label>
    @if($m->get($key)?->value)
    <p class="hint">Current file — <a href="{{ asset('storage/'.ltrim($m->get($key)->value, '/')) }}" target="_blank" rel="noopener">view</a></p>
    <img class="preview" src="{{ asset('storage/'.ltrim($m->get($key)->value, '/')) }}" alt="" />
    @endif
    <input id="{{ $key }}" name="{{ $key }}" type="file" accept="image/*" />
</div>
@endforeach
