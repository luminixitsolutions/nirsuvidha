<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateServiceRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, array<int, string|int>>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'icon' => ['required', 'string', 'max:255'],
            'short_details' => ['required', 'string', 'max:2000'],
            'full_details' => ['nullable', 'string', 'max:200000'],
            'below_short_title' => ['nullable', 'string', 'max:500'],
            'link_href' => ['nullable', 'string', 'max:500'],
            'sort_order' => ['nullable', 'integer', 'min:0', 'max:99999'],
            'is_published' => ['nullable', 'boolean'],
            'photo' => ['nullable', 'file', 'image', 'mimes:jpeg,png,webp,jpg,gif', 'max:5120'],
            'remove_photo' => ['nullable', 'boolean'],
            'gallery_files' => ['nullable', 'array'],
            'gallery_files.*' => ['file', 'image', 'mimes:jpeg,png,webp,jpg,gif', 'max:5120'],
            'remove_gallery' => ['nullable', 'array'],
            'remove_gallery.*' => ['string', 'max:500'],
        ];
    }
}
