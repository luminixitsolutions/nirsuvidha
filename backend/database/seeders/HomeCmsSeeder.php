<?php

namespace Database\Seeders;

use App\Models\CmsItem;
use App\Support\HomeCmsKeys;
use Illuminate\Database\Seeder;

class HomeCmsSeeder extends Seeder
{
    public function run(): void
    {
        $s = HomeCmsKeys::SECTION;
        $rows = $this->defaults();
        foreach ($rows as $key => $value) {
            CmsItem::query()->updateOrCreate(
                ['section' => $s, 'cms_key' => $key],
                ['value' => $value]
            );
        }
    }

    /**
     * @return array<string, string|null>
     */
    private function defaults(): array
    {
        $stats = [
            ['kind' => 'count', 'title' => 'Global Indians served', 'end' => 50, 'suffix' => 'K+'],
            ['kind' => 'text', 'title' => 'India remittances', 'value' => '₹2500Cr+'],
            ['kind' => 'count', 'title' => 'Countries supported', 'end' => 100, 'suffix' => '+'],
            ['kind' => 'text', 'title' => 'User rating', 'value' => '4.9★'],
        ];
        $badge = [
            'Trusted by 100K+ NRIs Worldwide',
            'Serving NRIs across 75+ cities in India',
            '120K+ services fulfilled for global Indians',
            'Secure processes built for NRIs & OCIs',
            'Loved by families in the US, UK, UAE & Canada',
        ];
        $aboutFeatures = [
            ['icon' => 'fa-shield-halved', 'title' => 'Secure & Compliant', 'desc' => 'Bank-grade security'],
            ['icon' => 'fa-headset', 'title' => 'Expert Support', 'desc' => 'Verified professionals'],
            ['icon' => 'fa-globe', 'title' => 'Anywhere, Anytime', 'desc' => 'Access from any device'],
            ['icon' => 'fa-bolt', 'title' => 'Fast & Efficient', 'desc' => 'Save time, stay ahead'],
        ];
        $howSteps = [
            ['n' => 1, 'icon' => 'fa-user-check', 'title' => 'Sign Up & Verify', 'body' => 'Create your account and complete secure KYC verification.', 'active' => true],
            ['n' => 2, 'icon' => 'fa-hand-pointer', 'title' => 'Choose Your Service', 'body' => 'Select from banking, tax, legal, investment, or property services.', 'active' => true],
            ['n' => 3, 'icon' => 'fa-user-tie', 'title' => 'Get Expert Assigned', 'body' => 'A dedicated expert is assigned to manage your request.', 'active' => true],
            ['n' => 4, 'icon' => 'fa-chart-line', 'title' => 'Track Progress', 'body' => 'Monitor status, upload documents, and get real-time updates.', 'active' => true],
            ['n' => 5, 'icon' => 'fa-circle-check', 'title' => 'Task Completed', 'body' => 'We handle everything end-to-end with full transparency.', 'active' => true],
        ];
        $why = [
            'One Platform for All India Needs',
            'Verified Experts & Compliance',
            'Secure Document Handling',
            'Transparent Pricing',
        ];

        return [
            'hero_title_before' => 'Financial Super-App for ',
            'hero_title_gold' => 'Global Indians',
            'hero_subtitle' => 'From taxes and investments to remittances and compliance — manage everything in one place, built exclusively for NRIs and OCIs.',
            'hero_primary_cta' => "Get Started – It's Free",
            'hero_secondary_cta' => 'Login',
            'section_services_title' => 'All-in-One NRI Services Platform',
            'section_services_subtitle' => 'Manage your financial, legal, and investment needs in India from anywhere in the world with a single trusted platform.',
            'section_how_it_works_title' => 'How It Works',
            'testimonials_heading' => 'Trusted by NRIs Worldwide',
            'testimonials_subtitle' => 'Real stories from global Indians who simplified legal, tax, and banking in India with NRI Suvidha.',
            'site_name_short' => 'NRI Suvidha',
            'about_badge' => 'About us',
            'about_title_before' => 'Your India Stack. ',
            'about_title_gold' => 'Simplified.',
            'about_lead' => 'A Financial Super-App built exclusively for NRIs & OCIs',
            'about_p1' => 'NRI Suvidha is your trusted partner for managing financial, legal, and investment needs in India from anywhere in the world.',
            'about_p2' => 'From banking and taxation to real estate and compliance, we bring everything into one unified platform — eliminating the need to coordinate with multiple agents or travel.',
            'about_goal_kicker' => 'Our goal is simple:',
            'about_goal_statement' => 'Make India-related tasks effortless for global Indians.',
            'about_foot' => 'With verified experts, secure digital processes, and end-to-end assistance, you stay in control while we handle the complexity.',
            'how_work_title' => 'Simple. Transparent. Fully Managed.',
            'how_work_subtitle' => 'Five clear steps from signup to completion — the same care we bring to every NRI and OCI.',
            'stats_json' => json_encode($stats, JSON_UNESCAPED_SLASHES),
            'hero_badge_lines_json' => json_encode($badge, JSON_UNESCAPED_SLASHES),
            'about_features_json' => json_encode($aboutFeatures, JSON_UNESCAPED_SLASHES),
            'how_work_steps_json' => json_encode($howSteps, JSON_UNESCAPED_SLASHES),
            'why_choose_points_json' => json_encode($why, JSON_UNESCAPED_SLASHES),
        ];
    }
}
