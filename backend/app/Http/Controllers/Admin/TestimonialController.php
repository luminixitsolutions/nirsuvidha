<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreTestimonialRequest;
use App\Http\Requests\Admin\UpdateTestimonialRequest;
use App\Models\Testimonial;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class TestimonialController extends Controller
{
    public function index(): View
    {
        $testimonials = Testimonial::query()
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        return view('admin.testimonials.index', compact('testimonials'));
    }

    public function create(): View
    {
        return view('admin.testimonials.form', [
            'testimonial' => new Testimonial,
            'mode' => 'create',
        ]);
    }

    public function store(StoreTestimonialRequest $request): RedirectResponse
    {
        $data = $this->payload($request);
        $data['sort_order'] = (int) $request->input('sort_order', 0);
        $data['is_active'] = $request->boolean('is_active');
        $data['photo'] = $request->hasFile('photo')
            ? $request->file('photo')->store('testimonials/photos', 'public')
            : null;

        $t = Testimonial::query()->create($data);

        return redirect()
            ->route('admin.testimonials.edit', $t)
            ->with('status', 'Testimonial created.');
    }

    public function edit(Testimonial $testimonial): View
    {
        return view('admin.testimonials.form', [
            'testimonial' => $testimonial,
            'mode' => 'edit',
        ]);
    }

    public function update(UpdateTestimonialRequest $request, Testimonial $testimonial): RedirectResponse
    {
        $data = $this->payload($request);
        $data['is_active'] = $request->boolean('is_active', $testimonial->is_active);
        $data['sort_order'] = (int) $request->input('sort_order', $testimonial->sort_order);

        if ($request->boolean('remove_photo') && $testimonial->photo) {
            Storage::disk('public')->delete($testimonial->photo);
            $data['photo'] = null;
        } elseif ($request->hasFile('photo')) {
            if ($testimonial->photo) {
                Storage::disk('public')->delete($testimonial->photo);
            }
            $data['photo'] = $request->file('photo')->store('testimonials/photos', 'public');
        } else {
            unset($data['photo']);
        }

        $testimonial->update($data);

        return redirect()
            ->route('admin.testimonials.edit', $testimonial)
            ->with('status', 'Testimonial updated.');
    }

    public function destroy(Testimonial $testimonial): RedirectResponse
    {
        if ($testimonial->photo) {
            Storage::disk('public')->delete($testimonial->photo);
        }
        $testimonial->delete();

        return redirect()
            ->route('admin.testimonials.index')
            ->with('status', 'Testimonial deleted.');
    }

    /**
     * @return array{name: string, designation: string|null, rating: int, feedback: string}
     */
    private function payload(Request $request): array
    {
        return [
            'name' => (string) $request->input('name'),
            'designation' => $request->filled('designation') ? (string) $request->input('designation') : null,
            'rating' => (int) $request->input('rating', 5),
            'feedback' => (string) $request->input('feedback'),
        ];
    }
}
