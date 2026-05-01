<?php

namespace Database\Seeders;

use App\Models\RealEstateCareService;
use Illuminate\Database\Seeder;

class RealEstateCareServicesSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
            [
                'title' => 'Property Protection',
                'description' => 'Comprehensive risk prevention for your Indian real estate. We monitor for encroachment risks, unauthorized access, and property condition deterioration.',
                'bullets' => [
                    'Regular perimeter checks',
                    'Boundary verification',
                    'Unauthorized construction monitoring',
                    'Access control verification',
                    'Risk assessment reports',
                ],
                'show_bullets' => true,
                'sort_order' => 0,
                'is_published' => true,
            ],
            [
                'title' => 'Risk Monitoring',
                'description' => '24/7 alert system for threats to your property. From tenant payment defaults to suspicious activity in your neighborhood.',
                'bullets' => [
                    'Real-time alerts',
                    'Neighborhood monitoring',
                    'Market risk updates',
                    'Regulatory change notifications',
                    'Early warning systems',
                ],
                'show_bullets' => true,
                'sort_order' => 1,
                'is_published' => true,
            ],
            [
                'title' => 'Document Management',
                'description' => 'Secure, organized, accessible. Your property documents in a bank-grade encrypted vault with intelligent organization.',
                'bullets' => [
                    'Document upload and storage',
                    'Title deed verification',
                    'Encumbrance certificate tracking',
                    'Tax receipt organization',
                    'Secure sharing',
                ],
                'show_bullets' => true,
                'sort_order' => 2,
                'is_published' => true,
            ],
            [
                'title' => 'Property Inspections',
                'description' => 'Professional physical inspections on your schedule. Trained agents visit, document conditions with photos, and provide detailed reports.',
                'bullets' => [
                    'Scheduled inspections',
                    'On-demand visits',
                    'Condition documentation',
                    'Maintenance assessments',
                    'Photo/video reports',
                ],
                'show_bullets' => true,
                'sort_order' => 3,
                'is_published' => true,
            ],
            [
                'title' => 'Tenant/Caretaker Coordination',
                'description' => 'Professional oversight of occupants and property managers. We verify identities, monitor compliance, and coordinate communication.',
                'bullets' => [
                    'Identity verification',
                    'Rent payment tracking',
                    'Agreement compliance',
                    'Move-in/move-out documentation',
                    'Dispute coordination',
                ],
                'show_bullets' => true,
                'sort_order' => 4,
                'is_published' => true,
            ],
            [
                'title' => 'Compliance Reminders',
                'description' => 'Never miss a deadline. Automated tracking for property tax payments, society maintenance, insurance renewals, and regulatory filings.',
                'bullets' => [
                    'Tax deadline alerts',
                    'Maintenance payment tracking',
                    'Renewal reminders',
                    'Filing assistance',
                    'Penalty avoidance',
                ],
                'show_bullets' => true,
                'sort_order' => 5,
                'is_published' => true,
            ],
            [
                'title' => 'Local Response Support',
                'description' => 'When urgent issues arise, our city teams respond. From leak repairs to security concerns, we coordinate immediate on-ground action.',
                'bullets' => [
                    'Urgent site visits',
                    'Vendor coordination',
                    'Emergency repairs',
                    'Security incident response',
                    'Society liaison',
                ],
                'show_bullets' => true,
                'sort_order' => 6,
                'is_published' => true,
            ],
            [
                'title' => 'Emergency Site Visit',
                'description' => 'Urgent physical inspection within 24 hours for crisis situations.',
                'bullets' => null,
                'show_bullets' => false,
                'sort_order' => 7,
                'is_published' => true,
            ],
        ];

        foreach ($rows as $data) {
            RealEstateCareService::query()->updateOrCreate(
                ['title' => $data['title']],
                $data,
            );
        }
    }
}
