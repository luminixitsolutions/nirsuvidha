<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\SubService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class PublicServiceController extends Controller
{
    public function index(): JsonResponse
    {
        $published = Service::query()
            ->where('is_published', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        $pairs = self::slugPairs($published);

        $data = $pairs->map(function (array $pair) {
            $s = $pair['service'];
            $slug = $pair['slug'];
            $extra = is_array($s->multiple_photos) ? $s->multiple_photos : [];

            return [
                'id' => $s->id,
                'slug' => $slug,
                'title' => $s->title,
                'icon' => $s->icon,
                'short_details' => $s->short_details,
                'full_details' => $s->full_details,
                'below_short_title' => $s->below_short_title,
                'photo' => $s->photo ? asset('storage/'.ltrim($s->photo, '/')) : null,
                'multiple_photos' => array_map(
                    fn (string $p) => asset('storage/'.ltrim($p, '/')),
                    $extra
                ),
                'sort_order' => $s->sort_order,
                'link_href' => $s->link_href,
            ];
        })->values();

        return response()->json(['data' => $data]);
    }

    public function show(string $slug): JsonResponse
    {
        $service = self::findPublishedServiceBySlug($slug);

        if (! $service) {
            return response()->json(['message' => 'Not found'], 404);
        }

        $extra = is_array($service->multiple_photos) ? $service->multiple_photos : [];

        $servicePayload = [
            'id' => $service->id,
            'slug' => $slug,
            'title' => $service->title,
            'icon' => $service->icon,
            'short_details' => $service->short_details,
            'full_details' => $service->full_details,
            'below_short_title' => $service->below_short_title,
            'photo' => $service->photo ? asset('storage/'.ltrim($service->photo, '/')) : null,
            'multiple_photos' => array_map(
                fn (string $p) => asset('storage/'.ltrim($p, '/')),
                $extra
            ),
            'sort_order' => $service->sort_order,
            'link_href' => $service->link_href,
        ];

        $subServices = SubService::query()
            ->where('service_id', $service->id)
            ->where('is_published', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->map(function (SubService $ss) {
                return [
                    'id' => $ss->id,
                    'name' => $ss->name,
                    'icon' => $ss->icon,
                    'short_details' => $ss->short_details,
                    'details' => $ss->details,
                    'photo' => $ss->photo ? asset('storage/'.ltrim($ss->photo, '/')) : null,
                    'cases_handled' => $ss->cases_handled,
                    'sort_order' => $ss->sort_order,
                ];
            })
            ->values();

        return response()->json([
            'data' => [
                'service' => $servicePayload,
                'sub_services' => $subServices,
            ],
        ]);
    }

    /**
     * @param  Collection<int, Service>  $published
     * @return Collection<int, array{service: Service, slug: string}>
     */
    private static function slugPairs(Collection $published): Collection
    {
        $baseGroups = $published->groupBy(fn (Service $s) => Str::slug($s->title));

        return $published->map(function (Service $s) use ($baseGroups) {
            $base = Str::slug($s->title);
            $slug = ($baseGroups[$base]->count() ?? 0) > 1 ? $base.'-'.$s->id : $base;

            return ['service' => $s, 'slug' => $slug];
        });
    }

    private static function findPublishedServiceBySlug(string $slug): ?Service
    {
        $published = Service::query()
            ->where('is_published', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        $pairs = self::slugPairs($published);
        $hit = $pairs->first(fn (array $p) => $p['slug'] === $slug);

        return $hit['service'] ?? null;
    }
}
