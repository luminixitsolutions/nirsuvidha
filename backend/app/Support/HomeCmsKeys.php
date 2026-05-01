<?php

namespace App\Support;

class HomeCmsKeys
{
    public const SECTION = 'home';

    /** @var list<string> */
    public const IMAGE_KEYS = [
        'hero_right_image',
        'services_section_image',
        'about_section_image',
    ];

    /** @var list<string> */
    public const TEXT_KEYS = [
        'hero_title_before',
        'hero_title_gold',
        'hero_subtitle',
        'hero_primary_cta',
        'hero_secondary_cta',
        'section_services_title',
        'section_services_subtitle',
        'section_how_it_works_title',
        'testimonials_heading',
        'testimonials_subtitle',
        'site_name_short',
        'about_badge',
        'about_title_before',
        'about_title_gold',
        'about_lead',
        'about_p1',
        'about_p2',
        'about_goal_kicker',
        'about_goal_statement',
        'about_foot',
        'how_work_title',
        'how_work_subtitle',
    ];

    /** @var list<string> */
    public const JSON_KEYS = [
        'stats_json',
        'hero_badge_lines_json',
        'about_features_json',
        'how_work_steps_json',
        'why_choose_points_json',
    ];

    /**
     * Admin menu: URL slug => label + which CMS keys belong to that page.
     *
     * @var array<string, array{label: string, description: string, text: list<string>, json: list<string>, image: list<string>}>
     */
    public const MENU = [
        'images' => [
            'label' => 'Homepage images',
            'description' => 'Upload hero, services column, and about images. Shown on the public site via the API as full storage URLs.',
            'text' => [],
            'json' => [],
            'image' => self::IMAGE_KEYS,
        ],
        'hero' => [
            'label' => 'Hero & brand',
            'description' => 'Headlines, CTA copy, and short brand name for the home hero.',
            'text' => [
                'hero_title_before',
                'hero_title_gold',
                'hero_subtitle',
                'hero_primary_cta',
                'hero_secondary_cta',
                'site_name_short',
            ],
            'json' => [],
            'image' => [],
        ],
        'services' => [
            'label' => 'Services band',
            'description' => 'Title and copy for the services block; includes the “How it works” label line.',
            'text' => [
                'section_services_title',
                'section_services_subtitle',
                'section_how_it_works_title',
            ],
            'json' => [],
            'image' => [],
        ],
        'testimonials' => [
            'label' => 'Testimonials',
            'description' => 'Headline and subtitle above the testimonial area.',
            'text' => [
                'testimonials_heading',
                'testimonials_subtitle',
            ],
            'json' => [],
            'image' => [],
        ],
        'about' => [
            'label' => 'About block',
            'description' => 'The “Your India stack” / about copy on the home page.',
            'text' => [
                'about_badge',
                'about_title_before',
                'about_title_gold',
                'about_lead',
                'about_p1',
                'about_p2',
                'about_goal_kicker',
                'about_goal_statement',
                'about_foot',
            ],
            'json' => [],
            'image' => [],
        ],
        'how-we-work' => [
            'label' => 'How we work',
            'description' => 'Section heading, intro, and the process steps (cards) shown in the “How we work” band on the home page.',
            'text' => [
                'how_work_title',
                'how_work_subtitle',
            ],
            'json' => [
                'how_work_steps_json',
            ],
            'image' => [],
        ],
        'json-data' => [
            'label' => 'JSON & stats',
            'description' => 'Stats row, hero badge rotation, about feature cards, and why-choose items (JSON). (How-we-work steps are edited on the “How we work” page.)',
            'text' => [],
            'json' => [
                'stats_json',
                'hero_badge_lines_json',
                'about_features_json',
                'why_choose_points_json',
            ],
            'image' => [],
        ],
    ];

    /**
     * @return list<string>
     */
    public static function sectionSlugs(): array
    {
        return array_keys(self::MENU);
    }

    /** @return array<string, string> slug => label */
    public static function sectionLabels(): array
    {
        $out = [];
        foreach (self::MENU as $slug => $meta) {
            $out[$slug] = $meta['label'];
        }

        return $out;
    }

    /**
     * @return list<string> All unique keys (text, json, image) for a menu section, or null if invalid.
     */
    public static function allKeysForSection(string $slug): ?array
    {
        if (! isset(self::MENU[$slug])) {
            return null;
        }
        $m = self::MENU[$slug];

        return array_values(array_unique(array_merge($m['text'], $m['json'], $m['image'])));
    }
}
