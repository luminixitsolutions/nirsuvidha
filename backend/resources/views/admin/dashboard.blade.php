@extends('admin.layouts.shell', ['title' => 'Dashboard — NRI Suvidha Admin'])

@push('head')
<style>
    .dash-hero { margin: 0 0 1.5rem; }
    .dash-hero h1 { font-size: 1.45rem; margin: 0 0 0.35rem; font-weight: 700; color: #0f172a; }
    .dash-hero p { margin: 0; font-size: 0.875rem; color: #64748b; }

    .stats-row {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        margin-bottom: 1.25rem;
    }
    @media (max-width: 1100px) { .stats-row { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 520px) { .stats-row { grid-template-columns: 1fr; } }

    .stat-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        background: #fff;
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 0.75rem;
        padding: 1.1rem 1.15rem;
        box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
        min-height: 5.5rem;
    }
    .stat-body { min-width: 0; }
    .stat-value {
        display: block;
        font-size: 1.65rem;
        font-weight: 700;
        line-height: 1.1;
        letter-spacing: -0.02em;
        color: #0f172a;
    }
    .stat-label {
        display: block;
        margin-top: 0.25rem;
        font-size: 0.8rem;
        font-weight: 500;
        color: #64748b;
    }
    .stat-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 0.6rem;
        font-size: 1.1rem;
        flex-shrink: 0;
    }
    .stat-card--c .stat-value { color: #92400e; }
    .stat-card--c .stat-icon { background: linear-gradient(135deg, rgba(201, 163, 78, 0.2) 0%, rgba(201, 163, 78, 0.08) 100%); color: #9A7B32; }
    .stat-card--e .stat-value { color: #15803d; }
    .stat-card--e .stat-icon { background: linear-gradient(135deg, rgba(22, 163, 74, 0.18) 0%, rgba(22, 163, 74, 0.06) 100%); color: #16a34a; }
    .stat-card--p .stat-value { color: #1d4ed8; }
    .stat-card--p .stat-icon { background: linear-gradient(135deg, rgba(37, 99, 235, 0.16) 0%, rgba(37, 99, 235, 0.06) 100%); color: #2563eb; }
    .stat-card--s .stat-value { color: #7c3aed; }
    .stat-card--s .stat-icon { background: linear-gradient(135deg, rgba(124, 58, 237, 0.14) 0%, rgba(124, 58, 237, 0.05) 100%); color: #7c3aed; }

    .chart-panel {
        background: #fff;
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 0.75rem;
        padding: 1.15rem 1.25rem 1rem;
        margin-bottom: 1.75rem;
        box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
    }
    .chart-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 0.75rem;
        margin-bottom: 0.5rem;
    }
    .chart-head h2 { font-size: 1rem; font-weight: 600; margin: 0; color: #0f172a; }
    .chart-head span { font-size: 0.8rem; color: #94a3b8; }
    .chart-wrap { position: relative; height: 260px; width: 100%; }
</style>
@endpush

@section('content')
<div class="dash-hero">
    <h1>Dashboard</h1>
    <p>Overview of your workspace — key figures and a sample trend (illustrative data for customers, team, and partners).</p>
</div>

<div class="stats-row" role="group" aria-label="Key metrics">
    <div class="stat-card stat-card--c">
        <div class="stat-body">
            <span class="stat-value" aria-label="Customers">{{ number_format($stats['customers']) }}</span>
            <span class="stat-label">Customers</span>
        </div>
        <div class="stat-icon" aria-hidden="true">
            <i class="fa-solid fa-users"></i>
        </div>
    </div>
    <div class="stat-card stat-card--e">
        <div class="stat-body">
            <span class="stat-value" aria-label="Employees">{{ number_format($stats['employees']) }}</span>
            <span class="stat-label">Employees</span>
        </div>
        <div class="stat-icon" aria-hidden="true">
            <i class="fa-solid fa-user-group"></i>
        </div>
    </div>
    <div class="stat-card stat-card--p">
        <div class="stat-body">
            <span class="stat-value" aria-label="Partners">{{ number_format($stats['partners']) }}</span>
            <span class="stat-label">Partners</span>
        </div>
        <div class="stat-icon" aria-hidden="true">
            <i class="fa-solid fa-handshake"></i>
        </div>
    </div>
    <div class="stat-card stat-card--s">
        <div class="stat-body">
            <span class="stat-value" aria-label="Services in database">{{ number_format($stats['services']) }}</span>
            <span class="stat-label">Services</span>
        </div>
        <div class="stat-icon" aria-hidden="true">
            <i class="fa-solid fa-briefcase"></i>
        </div>
    </div>
</div>

<div class="chart-panel">
    <div class="chart-head">
        <div>
            <h2>Activity overview</h2>
            <span>Sample index over recent months (illustrative)</span>
        </div>
    </div>
    <div class="chart-wrap">
        <canvas id="dashboardActivityChart" aria-label="Line chart" role="img"></canvas>
    </div>
</div>
@endsection

@push('scripts')
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.6/dist/chart.umd.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
(function () {
    const labels = @json($chart['labels']);
    const values = @json($chart['values']);
    const el = document.getElementById('dashboardActivityChart');
    if (!el || typeof Chart === 'undefined') return;
    const gold = 'rgba(201, 163, 78, 0.9)';
    const goldFill = 'rgba(201, 163, 78, 0.12)';

    new Chart(el, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Index',
                data: values,
                borderColor: gold,
                backgroundColor: goldFill,
                borderWidth: 2.5,
                pointRadius: 3.5,
                pointBackgroundColor: '#fff',
                pointBorderColor: gold,
                pointBorderWidth: 2,
                fill: true,
                tension: 0.35,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { intersect: false, mode: 'index' },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    padding: 10,
                    cornerRadius: 8,
                },
            },
            scales: {
                x: {
                    grid: { color: 'rgba(15, 23, 42, 0.06)' },
                    ticks: { color: '#94a3b8', font: { size: 11 } },
                },
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(15, 23, 42, 0.06)' },
                    ticks: { color: '#94a3b8', font: { size: 11 } },
                },
            },
        },
    });
})();
</script>
@endpush
