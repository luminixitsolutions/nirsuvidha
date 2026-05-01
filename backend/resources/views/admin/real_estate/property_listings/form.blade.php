@php
    use App\Models\PropertyListing;
    $isEdit = $mode === 'edit';
    $m = $listing;
    $amenitiesMaster = $amenitiesMaster ?? collect();
    $selectedAmenityIds = collect(old('amenity_ids', $selectedAmenityIds ?? []))->map(fn ($v) => (int) $v)->all();
    $amenitiesExtraText = old('amenities_extra_text', $amenitiesExtraText ?? '');
    $reGeoStates = $states->map(fn ($s) => ['id' => $s->id, 'country_id' => $s->country_id, 'name' => $s->name])->values();
    $reGeoCities = $cities->map(fn ($ci) => ['id' => $ci->id, 'state_id' => $ci->state_id, 'name' => $ci->name])->values();
    $reGeoInitial = [
        'country_id' => old('country_id', $m->country_id),
        'state_id' => old('state_id', $m->state_id),
        'city_id' => old('city_id', $m->city_id),
    ];
@endphp

@extends('admin.layouts.shell', ['title' => ($isEdit ? 'Edit property' : 'Add property') . ' — NRI Suvidha Admin'])

@include('admin.real_estate._styles')

@push('head')
<style>
    .property-details-ckeditor-wrap .ck-editor__editable {
        min-height: 280px;
    }
    .property-details-ckeditor-wrap .ck.ck-editor {
        border-radius: 0.5rem;
        overflow: hidden;
    }
</style>
@endpush

@section('content')
<div class="re-card-form re-form">
    <h1>{{ $isEdit ? 'Edit property' : 'Add property' }}</h1>

    <form method="post" action="{{ $isEdit ? route('admin.properties.update', $m) : route('admin.properties.store') }}" enctype="multipart/form-data">
        @csrf
        @if($isEdit)
            @method('PUT')
        @endif

        <div class="re-field">
            <label for="listing_type">Listing placement *</label>
            <select id="listing_type" name="listing_type" required>
                <option value="{{ PropertyListing::TYPE_CURATED }}" @selected(old('listing_type', $m->listing_type) === PropertyListing::TYPE_CURATED)>Main property feed (curated grid)</option>
                <option value="{{ PropertyListing::TYPE_FEATURED }}" @selected(old('listing_type', $m->listing_type) === PropertyListing::TYPE_FEATURED)>Featured section only (not in main grid)</option>
            </select>
        </div>

        <div class="re-field">
            <label for="transaction_type">Property purpose *</label>
            <select id="transaction_type" name="transaction_type" required>
                @php $txOld = old('transaction_type', $m->transaction_type ?? PropertyListing::TX_BUY); @endphp
                <option value="{{ PropertyListing::TX_BUY }}" @selected($txOld === PropertyListing::TX_BUY)>Buy</option>
                <option value="{{ PropertyListing::TX_RENT }}" @selected($txOld === PropertyListing::TX_RENT)>Rent</option>
                <option value="{{ PropertyListing::TX_SELL }}" @selected($txOld === PropertyListing::TX_SELL)>Sell</option>
            </select>
        </div>

        <div class="re-check">
            <input type="hidden" name="is_featured" value="0" />
            <input id="is_featured" name="is_featured" type="checkbox" value="1" @checked((bool) old('is_featured', $m->exists ? ((bool) $m->is_featured || $m->listing_type === PropertyListing::TYPE_FEATURED) : false)) />
            <label for="is_featured" style="text-transform: none; font-weight: 500; color: #0f172a;">Show in Featured Properties</label>
        </div>

        <div class="re-field">
            <label for="title">Title *</label>
            <input id="title" name="title" type="text" value="{{ old('title', $m->title) }}" required />
        </div>
        <div class="re-field">
            <label for="price_display">Price (display text) *</label>
            <input id="price_display" name="price_display" type="text" value="{{ old('price_display', $m->price_display) }}" required placeholder="e.g. ₹4.2 Cr" />
        </div>

        <hr style="margin:1.25rem 0;border:none;border-top:1px solid rgba(15,23,42,0.08);" />
        <p style="font-weight:600;margin-bottom:0.75rem;">Curated feed fields</p>

        <div class="re-field">
            <label for="gradient_css">Gradient CSS</label>
            <input id="gradient_css" name="gradient_css" type="text" value="{{ old('gradient_css', $m->gradient_css) }}" placeholder="linear-gradient(...)" />
            <p class="re-hint">Fallback background when no hero image is set.</p>
        </div>
        <div class="re-field">
            <label for="image_url">Hero image URL or storage path</label>
            <input id="image_url" name="image_url" type="text" value="{{ old('image_url', $m->image_url) }}" placeholder="https://… or properties/photo.jpg (under storage/app/public)" />
            <p class="re-hint">Optional. Full URL, or path inside <code>storage/app/public</code>. Upload below saves under <code>re-properties/{{ $m->exists ? $m->id : '{id}' }}/hero.*</code> and updates this field.</p>
        </div>
        <div class="re-field">
            <label for="hero_image">Upload hero image (single)</label>
            <input id="hero_image" name="hero_image" type="file" accept="image/jpeg,image/png,image/webp,image/gif" />
            @if($isEdit && $m->image_url && ! str_starts_with((string) $m->image_url, 'http'))
                <div style="margin-top:0.5rem;">
                    <img src="{{ asset('storage/'.ltrim($m->image_url, '/')) }}" alt="" width="160" height="100" style="object-fit:cover;border-radius:0.45rem;border:1px solid rgba(15,23,42,0.1);" />
                </div>
            @elseif($isEdit && $m->image_url)
                <div style="margin-top:0.5rem;font-size:0.85rem;"><a href="{{ $m->image_url }}" target="_blank" rel="noopener">Open current hero URL</a></div>
            @endif
            @if($isEdit)
                <div class="re-check" style="margin-top:0.5rem;">
                    <input id="clear_hero_image" name="clear_hero_image" type="checkbox" value="1" @checked(old('clear_hero_image')) />
                    <label for="clear_hero_image" style="text-transform:none;font-weight:500;color:#0f172a;">Remove uploaded hero file (re-properties/…/hero.* only)</label>
                </div>
            @endif
        </div>

        <div class="re-field">
            <label for="gallery_uploads">Gallery photos (multiple)</label>
            <input id="gallery_uploads" name="gallery_uploads[]" type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple />
            <p class="re-hint">New files are appended. Tick remove on existing thumbnails to delete them from storage.</p>
            @if($isEdit && is_array($m->gallery_images) && count($m->gallery_images) > 0)
                <div class="re-media-preview-grid">
                    @foreach($m->gallery_images as $gpath)
                        @if(is_string($gpath) && $gpath !== '')
                            <div class="re-media-thumb">
                                <img src="{{ asset('storage/'.ltrim($gpath, '/')) }}" alt="" />
                                <div class="re-media-meta">
                                    <label style="text-transform:none;font-weight:500;display:flex;align-items:center;gap:0.35rem;">
                                        <input type="checkbox" name="remove_gallery_paths[]" value="{{ $gpath }}" @checked(collect(old('remove_gallery_paths', []))->contains($gpath)) />
                                        Remove
                                    </label>
                                </div>
                            </div>
                        @endif
                    @endforeach
                </div>
            @endif
        </div>

        <div class="re-field">
            <label for="documents_upload">Attached documents (multiple)</label>
            <input id="documents_upload" name="documents_upload[]" type="file" multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.jpg,.jpeg,.png,.webp,application/pdf" />
            <p class="re-hint">PDF, Office, CSV, text, or images up to ~15 MB each. Tick remove to delete from storage.</p>
            @if($isEdit && is_array($m->documents) && count($m->documents) > 0)
                <div class="re-doc-list">
                    @foreach($m->documents as $doc)
                        @if(is_array($doc) && ! empty($doc['path']))
                            @php $dpath = $doc['path']; $dname = $doc['name'] ?? basename($dpath); @endphp
                            <div class="re-doc-row">
                                <a href="{{ asset('storage/'.ltrim($dpath, '/')) }}" target="_blank" rel="noopener">{{ $dname }}</a>
                                <label style="text-transform:none;font-weight:500;display:inline-flex;align-items:center;gap:0.35rem;margin:0;">
                                    <input type="checkbox" name="remove_document_paths[]" value="{{ $dpath }}" @checked(collect(old('remove_document_paths', []))->contains($dpath)) />
                                    Remove
                                </label>
                            </div>
                        @endif
                    @endforeach
                </div>
            @endif
        </div>
        <div class="re-field">
            <label for="seller_variant">Seller variant (curated)</label>
            <select id="seller_variant" name="seller_variant">
                <option value="">—</option>
                <option value="nri" @selected(old('seller_variant', $m->seller_variant) === 'nri')>NRI</option>
                <option value="builder" @selected(old('seller_variant', $m->seller_variant) === 'builder')>Builder</option>
                <option value="private" @selected(old('seller_variant', $m->seller_variant) === 'private')>Private</option>
            </select>
            <p class="re-hint">Required when listing type is curated.</p>
        </div>
        <div class="re-field">
            <label for="seller_label">Seller pill label override</label>
            <input id="seller_label" name="seller_label" type="text" value="{{ old('seller_label', $m->seller_label) }}" placeholder="Leave blank to use NRI Seller / Builder / Private Seller" />
        </div>

        <hr style="margin:1.25rem 0;border:none;border-top:1px solid rgba(15,23,42,0.08);" />
        <p style="font-weight:600;margin-bottom:0.75rem;">Card details (location, specs, listed by)</p>
        <p class="re-hint" style="margin:-0.35rem 0 0.85rem;">Shown on curated grid cards and on featured properties. Leave blank to hide a row.</p>

        <div class="re-field">
            <label for="location_label">Location</label>
            <input id="location_label" name="location_label" type="text" value="{{ old('location_label', $m->location_label) }}" placeholder="e.g. Bandra West, Mumbai" />
        </div>
        <div class="re-field">
            <label for="status_label">Status / possession</label>
            <input id="status_label" name="status_label" type="text" value="{{ old('status_label', $m->status_label) }}" placeholder="Ready · Dec 2026 · Under construction" />
        </div>
        <div class="re-field">
            <label for="bhk_label">BHK (display)</label>
            <input id="bhk_label" name="bhk_label" type="text" value="{{ old('bhk_label', $m->bhk_label) }}" placeholder="3 BHK" />
        </div>
        <div class="re-field">
            <label for="sqft_label">Area</label>
            <input id="sqft_label" name="sqft_label" type="text" value="{{ old('sqft_label', $m->sqft_label) }}" placeholder="1450 sq ft" />
        </div>
        <div class="re-field">
            <label for="rera_number">RERA number</label>
            <input id="rera_number" name="rera_number" type="text" value="{{ old('rera_number', $m->rera_number) }}" />
        </div>
        <div class="re-field">
            <label for="builder_label">Listed by (display name)</label>
            <input id="builder_label" name="builder_label" type="text" value="{{ old('builder_label', $m->builder_label) }}" placeholder="e.g. NRI Owner (UAE), Lodha Group" />
        </div>
        <div class="re-field property-details-ckeditor-wrap">
            <label for="property_details">Property details</label>
            <textarea id="property_details" name="property_details" rows="12" placeholder="Describe the property for the public detail page…">{{ old('property_details', $m->property_details) }}</textarea>
            <p class="re-hint">Rich text: headings, bold, italic, lists, links, and quotes. This content is shown on the public property page (HTML is sanitized). Upload images and documents using the fields above.</p>
        </div>
        <div class="re-field">
            <span class="re-label-block">Amenities</span>
            <p class="re-hint" style="margin:0 0 0.6rem;">Choose from the master list. Only active amenities appear here.</p>
            @if($amenitiesMaster->isEmpty())
                <p class="re-muted" style="margin:0 0 0.75rem;">No amenities in master yet. Add them under <strong>Masters → Amenities</strong>.</p>
            @else
                <div class="re-amenity-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:0.35rem 1rem;margin-bottom:0.75rem;">
                    @foreach($amenitiesMaster as $am)
                        <div class="re-check" style="margin:0;">
                            <input
                                type="checkbox"
                                name="amenity_ids[]"
                                value="{{ $am->id }}"
                                id="amenity_{{ $am->id }}"
                                @checked(in_array((int) $am->id, $selectedAmenityIds, true))
                            />
                            <label for="amenity_{{ $am->id }}" style="text-transform:none;font-weight:500;color:#0f172a;">{{ $am->label }}</label>
                        </div>
                    @endforeach
                </div>
            @endif
            <label for="amenities_extra_text">Additional amenities (optional, one per line)</label>
            <textarea id="amenities_extra_text" name="amenities_extra_text" placeholder="Custom lines not in the list above">{{ $amenitiesExtraText }}</textarea>
        </div>

        <hr style="margin:1.25rem 0;border:none;border-top:1px solid rgba(15,23,42,0.08);" />
        <p style="font-weight:600;margin-bottom:0.75rem;">Filter linkage (optional)</p>

        <div class="re-field">
            <label for="country_id">Country</label>
            <select id="country_id" name="country_id">
                <option value="">—</option>
                @foreach($countries as $c)
                <option value="{{ $c->id }}" @selected((string) old('country_id', $m->country_id) === (string) $c->id)>{{ $c->name }}</option>
                @endforeach
            </select>
        </div>
        <div class="re-field">
            <label for="state_id">State</label>
            <select id="state_id" name="state_id">
                <option value="">—</option>
            </select>
            <p class="re-hint">States shown for the selected country.</p>
        </div>
        <div class="re-field">
            <label for="city_id">City</label>
            <select id="city_id" name="city_id">
                <option value="">—</option>
            </select>
            <p class="re-hint">Cities shown for the selected state.</p>
        </div>
        <div class="re-field">
            <label for="property_type_id">Property type</label>
            <select id="property_type_id" name="property_type_id">
                <option value="">—</option>
                @foreach($propertyTypes as $pt)
                <option value="{{ $pt->id }}" @selected((string) old('property_type_id', $m->property_type_id) === (string) $pt->id)>{{ $pt->name }}</option>
                @endforeach
            </select>
        </div>
        <div class="re-field">
            <label for="budget_range_id">Budget range</label>
            <select id="budget_range_id" name="budget_range_id">
                <option value="">—</option>
                @foreach($budgetRanges as $br)
                <option value="{{ $br->id }}" @selected((string) old('budget_range_id', $m->budget_range_id) === (string) $br->id)>{{ $br->label }}</option>
                @endforeach
            </select>
        </div>
        <div class="re-field">
            <label for="bhk_type_id">BHK type</label>
            <select id="bhk_type_id" name="bhk_type_id">
                <option value="">—</option>
                @foreach($bhkTypes as $bt)
                <option value="{{ $bt->id }}" @selected((string) old('bhk_type_id', $m->bhk_type_id) === (string) $bt->id)>{{ $bt->label }}</option>
                @endforeach
            </select>
        </div>

        <div class="re-field">
            <label for="sort_order">Sort order</label>
            <input id="sort_order" name="sort_order" type="number" min="0" value="{{ old('sort_order', $m->sort_order ?? 0) }}" />
        </div>

        <div class="re-check">
            <input type="hidden" name="is_published" value="0" />
            <input id="is_published" name="is_published" type="checkbox" value="1" @checked((bool) old('is_published', $m->exists ? $m->is_published : true)) />
            <label for="is_published" style="text-transform: none; font-weight: 500; color: #0f172a;">Published (visible on website)</label>
        </div>

        <div style="display:flex;gap:0.75rem;margin-top:1.25rem;flex-wrap:wrap;">
            <button type="submit" class="re-btn-gold">Save</button>
            <a class="re-btn-ghost" href="{{ route('admin.properties.index') }}">Back to list</a>
        </div>
    </form>
</div>
@endsection

@push('scripts')
<script>
(function () {
    var geoStates = @json($reGeoStates);
    var geoCities = @json($reGeoCities);
    var initial = @json($reGeoInitial);
    var countryEl = document.getElementById('country_id');
    var stateEl = document.getElementById('state_id');
    var cityEl = document.getElementById('city_id');
    if (!countryEl || !stateEl || !cityEl) return;

    function norm(v) {
        return v != null && v !== '' ? String(v) : '';
    }

    function setPlaceholder(selectEl, emptyMsg) {
        selectEl.innerHTML = '';
        var o = document.createElement('option');
        o.value = '';
        o.textContent = emptyMsg;
        selectEl.appendChild(o);
    }

    function fillStates(countryId, selectedStateId) {
        var cid = norm(countryId);
        var sid = norm(selectedStateId);
        if (!cid) {
            setPlaceholder(stateEl, '— Select country first —');
            return;
        }
        setPlaceholder(stateEl, '—');
        var rows = geoStates.filter(function (s) { return String(s.country_id) === cid; });
        if (sid) {
            var orphan = geoStates.find(function (s) { return String(s.id) === sid; });
            if (orphan && !rows.some(function (r) { return String(r.id) === sid; })) {
                rows = rows.concat([orphan]);
            }
        }
        rows.sort(function (a, b) { return String(a.name).localeCompare(String(b.name), undefined, { sensitivity: 'base' }); });
        rows.forEach(function (s) {
            var o = document.createElement('option');
            o.value = s.id;
            o.textContent = s.name;
            stateEl.appendChild(o);
        });
        if (sid) stateEl.value = sid;
    }

    function fillCities(stateId, selectedCityId) {
        var stid = norm(stateId);
        var cityId = norm(selectedCityId);
        if (!stid) {
            setPlaceholder(cityEl, '— Select state first —');
            return;
        }
        setPlaceholder(cityEl, '—');
        var rows = geoCities.filter(function (c) { return String(c.state_id) === stid; });
        if (cityId) {
            var orphan = geoCities.find(function (c) { return String(c.id) === cityId; });
            if (orphan && !rows.some(function (r) { return String(r.id) === cityId; })) {
                rows = rows.concat([orphan]);
            }
        }
        rows.sort(function (a, b) { return String(a.name).localeCompare(String(b.name), undefined, { sensitivity: 'base' }); });
        rows.forEach(function (c) {
            var o = document.createElement('option');
            o.value = c.id;
            o.textContent = c.name;
            cityEl.appendChild(o);
        });
        if (cityId) cityEl.value = cityId;
    }

    countryEl.addEventListener('change', function () {
        fillStates(countryEl.value, '');
        fillCities('', '');
    });
    stateEl.addEventListener('change', function () {
        fillCities(stateEl.value, '');
    });

    fillStates(initial.country_id, initial.state_id);
    fillCities(initial.state_id, initial.city_id);
})();
</script>
<script src="https://cdn.ckeditor.com/ckeditor5/41.4.2/classic/ckeditor.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
(function () {
    var el = document.querySelector('#property_details');
    if (!el || typeof ClassicEditor === 'undefined') {
        return;
    }
    ClassicEditor.create(el, {
        toolbar: {
            items: [
                'heading', '|',
                'bold', 'italic', '|',
                'link', '|',
                'bulletedList', 'numberedList', '|',
                'blockQuote', '|',
                'undo', 'redo'
            ]
        },
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading3', view: 'h3', title: 'Heading', class: 'ck-heading_heading3' }
            ]
        },
        link: {
            addTargetToExternalLinks: true,
            defaultProtocol: 'https://'
        }
    }).then(function (editor) {
        var form = el.closest('form');
        if (form) {
            form.addEventListener('submit', function () {
                editor.updateSourceElement();
            });
        }
    }).catch(function (err) {
        console.error(err);
    });
})();
</script>
@endpush
