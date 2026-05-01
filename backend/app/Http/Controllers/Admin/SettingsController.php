<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UpdateAdminAccountRequest;
use App\Http\Requests\Admin\UpdateAdminPasswordRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class SettingsController extends Controller
{
    public function editAccount(): View
    {
        return view('admin.settings.account', [
            'user' => request()->user(),
        ]);
    }

    public function updateAccount(UpdateAdminAccountRequest $request): RedirectResponse
    {
        $user = $request->user();
        $user->name = (string) $request->input('name');
        $user->email = (string) $request->input('email');
        $user->save();

        return redirect()
            ->route('admin.settings.account.edit')
            ->with('status', 'Account details saved.');
    }

    public function editPassword(): View
    {
        return view('admin.settings.password');
    }

    public function updatePassword(UpdateAdminPasswordRequest $request): RedirectResponse
    {
        $user = $request->user();
        $user->password = (string) $request->input('password');
        $user->save();

        return redirect()
            ->route('admin.settings.password.edit')
            ->with('status', 'Password updated successfully.');
    }
}
