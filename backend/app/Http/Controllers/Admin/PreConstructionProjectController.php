<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PreConstructionProject;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class PreConstructionProjectController extends Controller
{
    public function index(): View
    {
        $projects = PreConstructionProject::query()
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        return view('admin.real_estate.pre_construction_projects.index', compact('projects'));
    }

    public function create(): View
    {
        return view('admin.real_estate.pre_construction_projects.form', [
            'project' => new PreConstructionProject([
                'badge_variant' => PreConstructionProject::BADGE_MUTED,
                'sort_order' => 0,
                'is_published' => true,
            ]),
            'benefitsText' => '',
            'mode' => 'create',
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_published'] = $request->boolean('is_published', true);
        $data['benefits'] = $this->parseBenefits($request->input('benefits_text'));

        $project = PreConstructionProject::query()->create($data);

        return redirect()
            ->route('admin.pre_construction_projects.edit', $project)
            ->with('status', 'Pre-construction project created.');
    }

    public function edit(PreConstructionProject $pre_construction_project): View
    {
        $benefitsText = '';
        if (is_array($pre_construction_project->benefits)) {
            $benefitsText = implode("\n", $pre_construction_project->benefits);
        }

        return view('admin.real_estate.pre_construction_projects.form', [
            'project' => $pre_construction_project,
            'benefitsText' => $benefitsText,
            'mode' => 'edit',
        ]);
    }

    public function update(Request $request, PreConstructionProject $pre_construction_project): RedirectResponse
    {
        $data = $this->validated($request);
        $data['is_published'] = $request->boolean('is_published', $pre_construction_project->is_published);
        $data['benefits'] = $this->parseBenefits($request->input('benefits_text'));

        $pre_construction_project->update($data);

        return redirect()
            ->route('admin.pre_construction_projects.edit', $pre_construction_project)
            ->with('status', 'Pre-construction project updated.');
    }

    public function destroy(PreConstructionProject $pre_construction_project): RedirectResponse
    {
        $pre_construction_project->delete();

        return redirect()
            ->route('admin.pre_construction_projects.index')
            ->with('status', 'Pre-construction project deleted.');
    }

    /**
     * @return array<string, mixed>
     */
    private function validated(Request $request): array
    {
        $variants = implode(',', PreConstructionProject::BADGE_VARIANTS);

        $base = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'status_badge' => ['required', 'string', 'max:120'],
            'badge_variant' => ['required', 'in:'.$variants],
            'description' => ['required', 'string', 'max:5000'],
            'starting_price_display' => ['required', 'string', 'max:120'],
            'possession_display' => ['required', 'string', 'max:120'],
            'payment_plan' => ['required', 'string', 'max:64'],
            'benefits_heading' => ['required', 'string', 'max:255'],
            'cta_button_text' => ['required', 'string', 'max:120'],
            'sort_order' => ['nullable', 'integer', 'min:0', 'max:999999'],
        ]);

        $base['sort_order'] = (int) ($base['sort_order'] ?? 0);

        return $base;
    }

    /**
     * @return list<string>|null
     */
    private function parseBenefits(?string $text): ?array
    {
        if ($text === null || trim($text) === '') {
            return null;
        }
        $lines = preg_split('/\r\n|\r|\n/', $text) ?: [];
        $out = [];
        foreach ($lines as $line) {
            $t = trim($line);
            if ($t !== '') {
                $out[] = $t;
            }
        }

        return $out === [] ? null : $out;
    }
}
