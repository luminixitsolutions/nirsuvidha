<?php

namespace App\Http\Requests\Admin;

use App\Support\HomeCmsKeys;
use Illuminate\Foundation\Http\FormRequest;

class HomepageSectionUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation(): void
    {
        $section = (string) $this->route('section', '');
        if (! isset(HomeCmsKeys::MENU[$section])) {
            abort(404);
        }
    }

    public function rules(): array
    {
        $section = (string) $this->route('section', '');
        $menu = HomeCmsKeys::MENU[$section];

        $textRules = ['nullable', 'string', 'max:10000'];
        $jsonRules = ['nullable', 'string', 'max:20000', 'json'];
        $fileRules = [
            'nullable',
            'file',
            'image',
            'mimes:jpeg,png,webp,jpg,gif',
            'max:5120',
        ];

        $rules = [];
        foreach ($menu['text'] as $key) {
            $rules[$key] = $textRules;
        }
        foreach ($menu['json'] as $key) {
            $rules[$key] = $jsonRules;
        }
        foreach ($menu['image'] as $key) {
            $rules[$key] = $fileRules;
        }

        return $rules;
    }
}
