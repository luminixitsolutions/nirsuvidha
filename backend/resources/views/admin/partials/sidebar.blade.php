@php
    use App\Support\AdminAccess;
    use App\Support\AdminPermissionCatalog;
    use App\Support\HomeCmsKeys;

    $activeSection = request()->route('section');
    $u = auth()->user();

    $canHomepageNav = false;
    foreach (HomeCmsKeys::MENU as $slug => $_meta) {
        if ($slug === 'json-data') {
            continue;
        }
        if (AdminAccess::can($u, AdminPermissionCatalog::homepagePermissionId($slug), 'view')) {
            $canHomepageNav = true;
            break;
        }
    }
@endphp
<aside class="sidebar" aria-label="Main navigation">
    <div class="sidebar-brand">
        <span class="gold">NRI</span> Suvidha
        <small>Content admin</small>
    </div>

    @if (AdminAccess::can($u, 'core.dashboard', 'view'))
        <div class="nav-section">Overview</div>
        <nav class="nav" aria-label="Main">
            <a href="{{ route('admin.dashboard') }}" class="nav-top-link @if(request()->routeIs('admin.dashboard')) is-active @endif">
                <i class="fa-solid fa-gauge-high nav-top-icon" aria-hidden="true"></i>
                <span>Dashboard</span>
            </a>
        </nav>
    @endif

    @if ($canHomepageNav)
        <details class="nav-details" @if(request()->routeIs('admin.homepage.*')) open @endif>
            <summary>
                <span class="nav-summary-label">
                    <i class="fa-solid fa-house-chimney nav-top-icon" aria-hidden="true"></i>
                    Home page
                </span>
            </summary>
            <div class="nav-children">
                @foreach (HomeCmsKeys::MENU as $slug => $meta)
                    @if ($slug === 'json-data')
                        @continue
                    @endif
                    @if (AdminAccess::can($u, AdminPermissionCatalog::homepagePermissionId($slug), 'view'))
                        <a
                            href="{{ route('admin.homepage.show', $slug) }}"
                            class="nav-sub @if(request()->routeIs('admin.homepage.*') && $activeSection === $slug) is-active @endif"
                        >{{ $meta['label'] }}</a>
                    @endif
                @endforeach
            </div>
        </details>
    @endif

    @if (AdminAccess::any($u, [['crud.services', 'view'], ['crud.services', 'add'], ['crud.sub_services', 'view'], ['crud.sub_services', 'add']]))
        <details class="nav-details" @if(request()->routeIs('admin.services.*', 'admin.sub_services.*')) open @endif>
            <summary>
                <span class="nav-summary-label">
                    <i class="fa-solid fa-briefcase nav-top-icon" aria-hidden="true"></i>
                    Services
                </span>
            </summary>
            <div class="nav-children">
                @if (AdminAccess::can($u, 'crud.services', 'add'))
                    <a href="{{ route('admin.services.create') }}" class="nav-sub @if(request()->routeIs('admin.services.create')) is-active @endif">Add service</a>
                @endif
                @if (AdminAccess::can($u, 'crud.services', 'view'))
                    <a href="{{ route('admin.services.index') }}" class="nav-sub @if(request()->routeIs('admin.services.index') || request()->routeIs('admin.services.edit')) is-active @endif">View services</a>
                @endif
                @if (AdminAccess::can($u, 'crud.sub_services', 'add'))
                    <a href="{{ route('admin.sub_services.create') }}" class="nav-sub @if(request()->routeIs('admin.sub_services.create')) is-active @endif">Add sub service</a>
                @endif
                @if (AdminAccess::can($u, 'crud.sub_services', 'view'))
                    <a href="{{ route('admin.sub_services.index') }}" class="nav-sub @if(request()->routeIs('admin.sub_services.index') || request()->routeIs('admin.sub_services.edit')) is-active @endif">View sub services</a>
                @endif
            </div>
        </details>
    @endif

    @if (AdminAccess::any($u, [
        ['masters.countries', 'view'],
        ['masters.states', 'view'],
        ['masters.cities', 'view'],
        ['masters.property_types', 'view'],
        ['masters.budget_ranges', 'view'],
        ['masters.bhk_types', 'view'],
        ['masters.amenities', 'view'],
    ]))
        <details class="nav-details" @if(request()->routeIs(
            'admin.countries.*',
            'admin.states.*',
            'admin.cities.*',
            'admin.property_types.*',
            'admin.budget_ranges.*',
            'admin.bhk_types.*',
            'admin.amenities.*',
        )) open @endif>
            <summary>
                <span class="nav-summary-label">
                    <i class="fa-solid fa-layer-group nav-top-icon" aria-hidden="true"></i>
                    Masters
                </span>
            </summary>
            <div class="nav-children">
                @if (AdminAccess::can($u, 'masters.countries', 'view'))
                    <a href="{{ route('admin.countries.index') }}" class="nav-sub @if(request()->routeIs('admin.countries.*')) is-active @endif">Countries</a>
                @endif
                @if (AdminAccess::can($u, 'masters.states', 'view'))
                    <a href="{{ route('admin.states.index') }}" class="nav-sub @if(request()->routeIs('admin.states.*')) is-active @endif">States</a>
                @endif
                @if (AdminAccess::can($u, 'masters.cities', 'view'))
                    <a href="{{ route('admin.cities.index') }}" class="nav-sub @if(request()->routeIs('admin.cities.*')) is-active @endif">Cities</a>
                @endif
                @if (AdminAccess::can($u, 'masters.property_types', 'view'))
                    <a href="{{ route('admin.property_types.index') }}" class="nav-sub @if(request()->routeIs('admin.property_types.*')) is-active @endif">Property types</a>
                @endif
                @if (AdminAccess::can($u, 'masters.budget_ranges', 'view'))
                    <a href="{{ route('admin.budget_ranges.index') }}" class="nav-sub @if(request()->routeIs('admin.budget_ranges.*')) is-active @endif">Budget ranges</a>
                @endif
                @if (AdminAccess::can($u, 'masters.bhk_types', 'view'))
                    <a href="{{ route('admin.bhk_types.index') }}" class="nav-sub @if(request()->routeIs('admin.bhk_types.*')) is-active @endif">BHK types</a>
                @endif
                @if (AdminAccess::can($u, 'masters.amenities', 'view'))
                    <a href="{{ route('admin.amenities.index') }}" class="nav-sub @if(request()->routeIs('admin.amenities.*')) is-active @endif">Amenities</a>
                @endif
            </div>
        </details>
    @endif

    @if (AdminAccess::any($u, [
        ['masters.property_listings', 'view'],
        ['masters.property_listings', 'add'],
        ['masters.property_inquiries', 'view'],
        ['masters.pre_construction_projects', 'view'],
        ['masters.pre_construction_projects', 'add'],
        ['masters.home_loan_partners', 'view'],
        ['masters.home_loan_partners', 'add'],
        ['masters.real_estate_care_services', 'view'],
        ['masters.real_estate_care_services', 'add'],
    ]))
        <details class="nav-details" @if(request()->routeIs('admin.properties.*', 'admin.sell_property_submissions.*', 'admin.property_inquiries.*', 'admin.pre_construction_projects.*', 'admin.home_loan_partners.*', 'admin.real_estate_care_services.*')) open @endif>
            <summary>
                <span class="nav-summary-label">
                    <i class="fa-solid fa-building nav-top-icon" aria-hidden="true"></i>
                    Properties
                </span>
            </summary>
            <div class="nav-children">
                @if (AdminAccess::can($u, 'masters.property_listings', 'add'))
                    <a href="{{ route('admin.properties.create') }}" class="nav-sub @if(request()->routeIs('admin.properties.create')) is-active @endif">Add property</a>
                @endif
                @if (AdminAccess::can($u, 'masters.property_listings', 'view'))
                    <a href="{{ route('admin.properties.index') }}" class="nav-sub @if(request()->routeIs('admin.properties.index') || request()->routeIs('admin.properties.edit')) is-active @endif">View properties</a>
                @endif
                @if (AdminAccess::can($u, 'masters.property_listings', 'view'))
                    <a href="{{ route('admin.sell_property_submissions.index') }}" class="nav-sub @if(request()->routeIs('admin.sell_property_submissions.*')) is-active @endif">Sell submissions</a>
                @endif
                @if (AdminAccess::can($u, 'masters.property_inquiries', 'view'))
                    <a href="{{ route('admin.property_inquiries.index') }}" class="nav-sub @if(request()->routeIs('admin.property_inquiries.*')) is-active @endif">Interest enquiries</a>
                @endif
                @if (AdminAccess::can($u, 'masters.pre_construction_projects', 'add'))
                    <a href="{{ route('admin.pre_construction_projects.create') }}" class="nav-sub @if(request()->routeIs('admin.pre_construction_projects.create')) is-active @endif">Add pre-construction</a>
                @endif
                @if (AdminAccess::can($u, 'masters.pre_construction_projects', 'view'))
                    <a href="{{ route('admin.pre_construction_projects.index') }}" class="nav-sub @if(request()->routeIs('admin.pre_construction_projects.index') || request()->routeIs('admin.pre_construction_projects.edit')) is-active @endif">Pre-construction list</a>
                @endif
                @if (AdminAccess::can($u, 'masters.home_loan_partners', 'add'))
                    <a href="{{ route('admin.home_loan_partners.create') }}" class="nav-sub @if(request()->routeIs('admin.home_loan_partners.create')) is-active @endif">Add home loan partner</a>
                @endif
                @if (AdminAccess::can($u, 'masters.home_loan_partners', 'view'))
                    <a href="{{ route('admin.home_loan_partners.index') }}" class="nav-sub @if(request()->routeIs('admin.home_loan_partners.index') || request()->routeIs('admin.home_loan_partners.edit')) is-active @endif">Home loan partners</a>
                @endif
                @if (AdminAccess::can($u, 'masters.real_estate_care_services', 'add'))
                    <a href="{{ route('admin.real_estate_care_services.create') }}" class="nav-sub @if(request()->routeIs('admin.real_estate_care_services.create')) is-active @endif">Add RE service card</a>
                @endif
                @if (AdminAccess::can($u, 'masters.real_estate_care_services', 'view'))
                    <a href="{{ route('admin.real_estate_care_services.index') }}" class="nav-sub @if(request()->routeIs('admin.real_estate_care_services.index') || request()->routeIs('admin.real_estate_care_services.edit')) is-active @endif">RE service cards</a>
                @endif
            </div>
        </details>
    @endif

    @if (AdminAccess::any($u, [['content.testimonials', 'view'], ['content.testimonials', 'add']]))
        <details class="nav-details" @if(request()->routeIs('admin.testimonials.*')) open @endif>
            <summary>
                <span class="nav-summary-label">
                    <i class="fa-solid fa-comment-dots nav-top-icon" aria-hidden="true"></i>
                    Testimonials
                </span>
            </summary>
            <div class="nav-children">
                @if (AdminAccess::can($u, 'content.testimonials', 'add'))
                    <a href="{{ route('admin.testimonials.create') }}" class="nav-sub @if(request()->routeIs('admin.testimonials.create')) is-active @endif">Add testimonial</a>
                @endif
                @if (AdminAccess::can($u, 'content.testimonials', 'view'))
                    <a href="{{ route('admin.testimonials.index') }}" class="nav-sub @if(request()->routeIs('admin.testimonials.index') || request()->routeIs('admin.testimonials.edit')) is-active @endif">View testimonials</a>
                @endif
            </div>
        </details>
    @endif

    @if (AdminAccess::any($u, [['content.trusted_partners', 'view'], ['content.trusted_partners', 'add']]))
        <details class="nav-details" @if(request()->routeIs('admin.trusted_partners.*')) open @endif>
            <summary>
                <span class="nav-summary-label">
                    <i class="fa-solid fa-handshake nav-top-icon" aria-hidden="true"></i>
                    Trusted by
                </span>
            </summary>
            <div class="nav-children">
                @if (AdminAccess::can($u, 'content.trusted_partners', 'add'))
                    <a href="{{ route('admin.trusted_partners.create') }}" class="nav-sub @if(request()->routeIs('admin.trusted_partners.create')) is-active @endif">Add company</a>
                @endif
                @if (AdminAccess::can($u, 'content.trusted_partners', 'view'))
                    <a href="{{ route('admin.trusted_partners.index') }}" class="nav-sub @if(request()->routeIs('admin.trusted_partners.index') || request()->routeIs('admin.trusted_partners.edit')) is-active @endif">View list</a>
                @endif
            </div>
        </details>
    @endif

    @if (AdminAccess::any($u, [['partners.onboardings', 'view'], ['partners.onboardings', 'add']]))
        <details class="nav-details" @if(request()->routeIs('admin.partner_onboardings.*')) open @endif>
            <summary>
                <span class="nav-summary-label">
                    <i class="fa-solid fa-user-plus nav-top-icon" aria-hidden="true"></i>
                    Partners
                </span>
            </summary>
            <div class="nav-children">
                @if (AdminAccess::can($u, 'partners.onboardings', 'add'))
                    <a href="{{ route('admin.partner_onboardings.create') }}" class="nav-sub @if(request()->routeIs('admin.partner_onboardings.create')) is-active @endif">Add partner</a>
                @endif
                @if (AdminAccess::can($u, 'partners.onboardings', 'view'))
                    <a href="{{ route('admin.partner_onboardings.index') }}" class="nav-sub @if(request()->routeIs('admin.partner_onboardings.index') || request()->routeIs('admin.partner_onboardings.show') || request()->routeIs('admin.partner_onboardings.edit')) is-active @endif">View submissions</a>
                @endif
            </div>
        </details>
    @endif

    @if (AdminAccess::any($u, [
        ['hr.designations', 'view'],
        ['hr.designations', 'add'],
        ['hr.employees', 'view'],
        ['hr.employees', 'add'],
    ]))
        <details class="nav-details" @if(request()->routeIs('admin.employees.*', 'admin.designations.*')) open @endif>
            <summary>
                <span class="nav-summary-label">
                    <i class="fa-solid fa-user-tie nav-top-icon" aria-hidden="true"></i>
                    Employees
                </span>
            </summary>
            <div class="nav-children">
                @if (AdminAccess::can($u, 'hr.designations', 'add'))
                    <a href="{{ route('admin.designations.create') }}" class="nav-sub @if(request()->routeIs('admin.designations.create')) is-active @endif">Add designation</a>
                @endif
                @if (AdminAccess::can($u, 'hr.designations', 'view'))
                    <a href="{{ route('admin.designations.index') }}" class="nav-sub @if(request()->routeIs('admin.designations.index') || request()->routeIs('admin.designations.edit')) is-active @endif">View designations</a>
                @endif
                @if (AdminAccess::can($u, 'hr.employees', 'add'))
                    <a href="{{ route('admin.employees.create') }}" class="nav-sub @if(request()->routeIs('admin.employees.create')) is-active @endif">Add employee</a>
                @endif
                @if (AdminAccess::can($u, 'hr.employees', 'view'))
                    <a href="{{ route('admin.employees.index') }}" class="nav-sub @if(request()->routeIs('admin.employees.index') || request()->routeIs('admin.employees.edit')) is-active @endif">View employees</a>
                @endif
            </div>
        </details>
    @endif

    @if (AdminAccess::any($u, [['crm.customers', 'view'], ['crm.customers', 'add']]))
        <details class="nav-details" @if(request()->routeIs('admin.customers.*')) open @endif>
            <summary>
                <span class="nav-summary-label">
                    <i class="fa-solid fa-users nav-top-icon" aria-hidden="true"></i>
                    Customers
                </span>
            </summary>
            <div class="nav-children">
                @if (AdminAccess::can($u, 'crm.customers', 'add'))
                    <a href="{{ route('admin.customers.create') }}" class="nav-sub @if(request()->routeIs('admin.customers.create')) is-active @endif">Add customer</a>
                @endif
                @if (AdminAccess::can($u, 'crm.customers', 'view'))
                    <a href="{{ route('admin.customers.index') }}" class="nav-sub @if(request()->routeIs('admin.customers.index') || request()->routeIs('admin.customers.edit')) is-active @endif">View customers</a>
                @endif
            </div>
        </details>
    @endif

    <details class="nav-details" @if(request()->routeIs('admin.settings.*')) open @endif>
        <summary>
            <span class="nav-summary-label">
                <i class="fa-solid fa-gear nav-top-icon" aria-hidden="true"></i>
                Settings
            </span>
        </summary>
        <div class="nav-children">
            @if (AdminAccess::can($u, 'settings.account', 'view'))
                <a
                    href="{{ route('admin.settings.account.edit') }}"
                    class="nav-sub @if(request()->routeIs('admin.settings.account.*')) is-active @endif"
                >Account</a>
            @endif
            @if (AdminAccess::can($u, 'settings.password', 'view'))
                <a
                    href="{{ route('admin.settings.password.edit') }}"
                    class="nav-sub @if(request()->routeIs('admin.settings.password.*')) is-active @endif"
                >Change password</a>
            @endif
            <form method="post" action="{{ route('admin.logout') }}" class="nav-logout-wrap">
                @csrf
                <button type="submit" class="nav-sub nav-sub--button">Log out</button>
            </form>
        </div>
    </details>
</aside>
