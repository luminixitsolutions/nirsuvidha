'use client'

import { ServiceForm, type ServiceRecord } from '@/components/admin/ServiceForm'

const empty: ServiceRecord = {
  title: '',
  slug: null,
  description: null,
  short_description: null,
  full_description: null,
  icon: null,
  status: 'active',
  banner_image: null,
  gallery: null,
  features: [],
  benefits: [],
  steps: [],
  faqs: [],
}

export default function NewServicePage() {
  return (
    <div>
      <h1 className="text-lg font-semibold text-slate-900">New service</h1>
      <p className="mt-1 text-sm text-slate-500">Add catalog details, then publish when ready.</p>
      <div className="mt-6">
        <ServiceForm initial={empty} mode="create" />
      </div>
    </div>
  )
}
