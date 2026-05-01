<?php

namespace App\Support;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;

final class AdminPermissionCatalog
{
    /** @var list<string> */
    public const ACTIONS = ['view', 'add', 'edit', 'delete'];

    /**
     * @return list<array{id: string, label: string, capabilities: list<string>, children?: list<array<string, mixed>>}>
     */
    public static function menuTree(): array
    {
        $homepageChildren = [];
        foreach (HomeCmsKeys::MENU as $slug => $meta) {
            if ($slug === 'json-data') {
                continue;
            }
            $pid = self::homepagePermissionId($slug);
            $homepageChildren[] = [
                'id' => $pid,
                'label' => 'Home page › '.$meta['label'],
                'capabilities' => ['view', 'edit'],
            ];
        }

        return [
            [
                'id' => 'core.dashboard',
                'label' => 'Dashboard',
                'capabilities' => ['view'],
                'children' => [],
            ],
            [
                'id' => 'group.homepage',
                'label' => 'Home page',
                'capabilities' => [],
                'children' => $homepageChildren,
            ],
            [
                'id' => 'group.services',
                'label' => 'Services',
                'capabilities' => [],
                'children' => [
                    [
                        'id' => 'crud.services',
                        'label' => 'Services › Services',
                        'capabilities' => ['view', 'add', 'edit', 'delete'],
                    ],
                    [
                        'id' => 'crud.sub_services',
                        'label' => 'Services › Sub services',
                        'capabilities' => ['view', 'add', 'edit', 'delete'],
                    ],
                ],
            ],
            [
                'id' => 'group.masters_re',
                'label' => 'Masters',
                'capabilities' => [],
                'children' => [
                    ['id' => 'masters.countries', 'label' => 'Masters › Countries', 'capabilities' => ['view', 'add', 'edit', 'delete']],
                    ['id' => 'masters.states', 'label' => 'Masters › States', 'capabilities' => ['view', 'add', 'edit', 'delete']],
                    ['id' => 'masters.cities', 'label' => 'Masters › Cities', 'capabilities' => ['view', 'add', 'edit', 'delete']],
                    ['id' => 'masters.property_types', 'label' => 'Masters › Property types', 'capabilities' => ['view', 'add', 'edit', 'delete']],
                    ['id' => 'masters.budget_ranges', 'label' => 'Masters › Budget ranges', 'capabilities' => ['view', 'add', 'edit', 'delete']],
                    ['id' => 'masters.bhk_types', 'label' => 'Masters › BHK types', 'capabilities' => ['view', 'add', 'edit', 'delete']],
                    ['id' => 'masters.amenities', 'label' => 'Masters › Amenities', 'capabilities' => ['view', 'add', 'edit', 'delete']],
                ],
            ],
            [
                'id' => 'group.properties_re',
                'label' => 'Real estate — listings',
                'capabilities' => [],
                'children' => [
                    ['id' => 'masters.property_listings', 'label' => 'Properties', 'capabilities' => ['view', 'add', 'edit', 'delete']],
                    ['id' => 'masters.property_inquiries', 'label' => 'Property interest enquiries', 'capabilities' => ['view']],
                    ['id' => 'masters.pre_construction_projects', 'label' => 'Pre-construction projects', 'capabilities' => ['view', 'add', 'edit', 'delete']],
                    ['id' => 'masters.home_loan_partners', 'label' => 'Home loan partners', 'capabilities' => ['view', 'add', 'edit', 'delete']],
                    ['id' => 'masters.real_estate_care_services', 'label' => 'Real estate service cards', 'capabilities' => ['view', 'add', 'edit', 'delete']],
                ],
            ],
            [
                'id' => 'group.content',
                'label' => 'Content',
                'capabilities' => [],
                'children' => [
                    ['id' => 'content.testimonials', 'label' => 'Testimonials', 'capabilities' => ['view', 'add', 'edit', 'delete']],
                    ['id' => 'content.trusted_partners', 'label' => 'Trusted by', 'capabilities' => ['view', 'add', 'edit', 'delete']],
                ],
            ],
            [
                'id' => 'group.partners',
                'label' => 'Partners',
                'capabilities' => [],
                'children' => [
                    ['id' => 'partners.onboardings', 'label' => 'Partners › Partner onboardings', 'capabilities' => ['view', 'add', 'edit', 'delete']],
                ],
            ],
            [
                'id' => 'group.hr',
                'label' => 'Employees',
                'capabilities' => [],
                'children' => [
                    ['id' => 'hr.designations', 'label' => 'Employees › Designations', 'capabilities' => ['view', 'add', 'edit', 'delete']],
                    ['id' => 'hr.employees', 'label' => 'Employees › Employees', 'capabilities' => ['view', 'add', 'edit', 'delete']],
                ],
            ],
            [
                'id' => 'group.customers',
                'label' => 'Customers',
                'capabilities' => [],
                'children' => [
                    ['id' => 'crm.customers', 'label' => 'Customers › Customers', 'capabilities' => ['view', 'add', 'edit', 'delete']],
                ],
            ],
            [
                'id' => 'group.settings',
                'label' => 'Settings',
                'capabilities' => [],
                'children' => [
                    ['id' => 'settings.account', 'label' => 'Settings › Account', 'capabilities' => ['view', 'edit']],
                    ['id' => 'settings.password', 'label' => 'Settings › Change password', 'capabilities' => ['view', 'edit']],
                ],
            ],
        ];
    }

    /**
     * @return array<string, list<string>> permission id => capabilities
     */
    public static function leafCapabilityMap(): array
    {
        $map = [];
        foreach (self::menuTree() as $module) {
            $children = $module['children'] ?? [];
            if ($children === []) {
                $map[$module['id']] = $module['capabilities'];

                continue;
            }
            foreach ($children as $child) {
                $map[$child['id']] = $child['capabilities'];
            }
        }

        return $map;
    }

    /** @return list<string> */
    public static function leafIds(): array
    {
        return array_keys(self::leafCapabilityMap());
    }

    /**
     * @param  array<string, mixed>  $input
     * @return array<string, array<string, bool>>
     */
    public static function normalizePermissions(array $input): array
    {
        $map = self::leafCapabilityMap();
        $out = [];
        foreach ($map as $leafId => $caps) {
            $row = is_array($input[$leafId] ?? null) ? $input[$leafId] : [];
            $out[$leafId] = [];
            foreach (self::ACTIONS as $action) {
                $out[$leafId][$action] = in_array($action, $caps, true)
                    && filter_var($row[$action] ?? false, FILTER_VALIDATE_BOOLEAN);
            }
        }

        return $out;
    }

    public static function homepagePermissionId(string $sectionSlug): string
    {
        return 'homepage.'.str_replace('-', '_', $sectionSlug);
    }

    /**
     * @return array{0: string, 1: string}|null [permission id, action]
     */
    public static function routeRequirement(Request $request): ?array
    {
        /** @var Route|null $route */
        $route = $request->route();
        if ($route === null) {
            return null;
        }

        $name = $route->getName();
        if ($name === null || ! str_starts_with($name, 'admin.')) {
            return null;
        }

        if (in_array($name, ['admin.logout', 'admin.login', 'admin.login.post'], true)) {
            return null;
        }

        if ($name === 'admin.dashboard') {
            return ['core.dashboard', 'view'];
        }

        if ($name === 'admin.homepage.show') {
            $section = (string) $route->parameter('section');
            if ($section === '' || ! isset(HomeCmsKeys::MENU[$section])) {
                return null;
            }

            return [self::homepagePermissionId($section), 'view'];
        }

        if ($name === 'admin.homepage.update') {
            $section = (string) $route->parameter('section');
            if ($section === '' || ! isset(HomeCmsKeys::MENU[$section])) {
                return null;
            }

            return [self::homepagePermissionId($section), 'edit'];
        }

        if ($name === 'admin.settings.account.edit') {
            return ['settings.account', 'view'];
        }

        if ($name === 'admin.settings.account.update') {
            return ['settings.account', 'edit'];
        }

        if ($name === 'admin.settings.password.edit') {
            return ['settings.password', 'view'];
        }

        if ($name === 'admin.settings.password.update') {
            return ['settings.password', 'edit'];
        }

        /** @var array<string, string> $prefixToPermission */
        $prefixToPermission = [
            'admin.services.' => 'crud.services',
            'admin.sub_services.' => 'crud.sub_services',
            'admin.countries.' => 'masters.countries',
            'admin.states.' => 'masters.states',
            'admin.cities.' => 'masters.cities',
            'admin.property_types.' => 'masters.property_types',
            'admin.budget_ranges.' => 'masters.budget_ranges',
            'admin.bhk_types.' => 'masters.bhk_types',
            'admin.amenities.' => 'masters.amenities',
            'admin.properties.' => 'masters.property_listings',
            'admin.property_inquiries.' => 'masters.property_inquiries',
            'admin.sell_property_submissions.' => 'masters.property_listings',
            'admin.pre_construction_projects.' => 'masters.pre_construction_projects',
            'admin.home_loan_partners.' => 'masters.home_loan_partners',
            'admin.real_estate_care_services.' => 'masters.real_estate_care_services',
            'admin.testimonials.' => 'content.testimonials',
            'admin.trusted_partners.' => 'content.trusted_partners',
            'admin.partner_onboardings.' => 'partners.onboardings',
            'admin.designations.' => 'hr.designations',
            'admin.employees.' => 'hr.employees',
            'admin.customers.' => 'crm.customers',
        ];

        foreach ($prefixToPermission as $prefix => $permissionId) {
            if (! str_starts_with($name, $prefix)) {
                continue;
            }
            $suffix = substr($name, strlen($prefix));
            $action = match ($suffix) {
                'index', 'show' => 'view',
                'create', 'store' => 'add',
                'edit', 'update' => 'edit',
                'destroy' => 'delete',
                'approve', 'reject' => 'edit',
                default => null,
            };
            if ($action === null) {
                return null;
            }

            return [$permissionId, $action];
        }

        return null;
    }
}
