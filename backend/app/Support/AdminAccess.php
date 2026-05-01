<?php

namespace App\Support;

use App\Models\Employee;
use App\Models\User;
use Illuminate\Http\Request;

final class AdminAccess
{
    /**
     * Users without a linked employee keep full admin access (legacy / super admin).
     */
    public static function isFullyPrivileged(?User $user): bool
    {
        return $user === null || $user->employee_id === null;
    }

    public static function employeeFor(?User $user): ?Employee
    {
        if ($user === null || $user->employee_id === null) {
            return null;
        }

        return $user->employee;
    }

    /**
     * @param  array<string, array<string, bool>>|null  $permissions
     */
    public static function allows(?User $user, ?array $permissions, string $permissionKey, string $action): bool
    {
        if (self::isFullyPrivileged($user)) {
            return true;
        }

        if ($permissions === null) {
            return false;
        }

        $row = $permissions[$permissionKey] ?? null;
        if (! is_array($row)) {
            return false;
        }

        return filter_var($row[$action] ?? false, FILTER_VALIDATE_BOOLEAN);
    }

    public static function allowsRequest(?User $user, ?array $permissions, Request $request): bool
    {
        if (self::isFullyPrivileged($user)) {
            return true;
        }

        $req = AdminPermissionCatalog::routeRequirement($request);
        if ($req === null) {
            return true;
        }

        [$key, $action] = $req;

        return self::allows($user, $permissions, $key, $action);
    }

    public static function can(?User $user, string $permissionKey, string $action): bool
    {
        if (self::isFullyPrivileged($user)) {
            return true;
        }

        $perms = self::employeeFor($user)?->menu_permissions;

        return self::allows($user, is_array($perms) ? $perms : [], $permissionKey, $action);
    }

    /**
     * @param  list<array{0: string, 1: string}>  $checks
     */
    public static function any(?User $user, array $checks): bool
    {
        foreach ($checks as [$key, $action]) {
            if (self::can($user, $key, $action)) {
                return true;
            }
        }

        return false;
    }
}
