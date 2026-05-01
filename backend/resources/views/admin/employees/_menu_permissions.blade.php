@php
    use App\Support\AdminPermissionCatalog;
@endphp

<div class="perm-matrix" role="region" aria-label="Menu access permissions">
    <p class="perm-intro">
        Control which admin menus this employee may use. Sub-menus match the sidebar; View / Add / Edit / Del line up with list, create, edit, and delete actions.
        To enforce this, link the employee to an admin user profile (<code>users.employee_id</code>).
    </p>

    @foreach (AdminPermissionCatalog::menuTree() as $module)
        @php
            $children = $module['children'] ?? [];
            $modCaps = $module['capabilities'] ?? [];
        @endphp

        @if ($children === [])
            <table class="perm-table perm-table--leaf">
                <thead>
                    <tr>
                        <th scope="col" class="perm-col-module">Module / screen</th>
                        <th scope="col">View</th>
                        <th scope="col">Add</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Del</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="perm-module-label">{{ $module['label'] }}</td>
                        @foreach (AdminPermissionCatalog::ACTIONS as $action)
                            <td class="perm-cell">
                                @if (in_array($action, $modCaps, true))
                                    <input type="hidden" name="permissions[{{ $module['id'] }}][{{ $action }}]" value="0" />
                                    <input
                                        type="checkbox"
                                        name="permissions[{{ $module['id'] }}][{{ $action }}]"
                                        value="1"
                                        @checked($permState[$module['id']][$action] ?? false)
                                    />
                                @else
                                    <span class="perm-dash">—</span>
                                @endif
                            </td>
                        @endforeach
                    </tr>
                </tbody>
            </table>
        @else
            <details class="perm-mod">
                <summary>{{ $module['label'] }}</summary>
                <table class="perm-table">
                    <thead>
                        <tr>
                            <th scope="col" class="perm-col-module">Sub-menu</th>
                            <th scope="col">View</th>
                            <th scope="col">Add</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Del</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($children as $child)
                            @php
                                $cid = $child['id'];
                                $ccaps = $child['capabilities'];
                            @endphp
                            <tr>
                                <td class="perm-module-label">{{ $child['label'] }}</td>
                                @foreach (AdminPermissionCatalog::ACTIONS as $action)
                                    <td class="perm-cell">
                                        @if (in_array($action, $ccaps, true))
                                            <input type="hidden" name="permissions[{{ $cid }}][{{ $action }}]" value="0" />
                                            <input
                                                type="checkbox"
                                                name="permissions[{{ $cid }}][{{ $action }}]"
                                                value="1"
                                                @checked($permState[$cid][$action] ?? false)
                                            />
                                        @else
                                            <span class="perm-dash">—</span>
                                        @endif
                                    </td>
                                @endforeach
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </details>
        @endif
    @endforeach
</div>
