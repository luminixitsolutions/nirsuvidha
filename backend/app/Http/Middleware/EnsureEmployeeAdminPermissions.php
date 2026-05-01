<?php

namespace App\Http\Middleware;

use App\Support\AdminAccess;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureEmployeeAdminPermissions
{
    /**
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();
        if ($request->routeIs('admin.logout')) {
            return $next($request);
        }

        if (! AdminAccess::isFullyPrivileged($user)) {
            $user?->loadMissing('employee');
            $employee = $user?->employee;
            if ($employee === null || ! $employee->is_active) {
                abort(403, 'Your account is not authorized for admin access.');
            }

            $permissions = $employee->menu_permissions;
            if (! AdminAccess::allowsRequest($user, is_array($permissions) ? $permissions : [], $request)) {
                abort(403, 'You do not have permission for this action.');
            }
        }

        return $next($request);
    }
}
