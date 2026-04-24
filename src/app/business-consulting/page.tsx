import type { Metadata } from 'next'
import ServicePageShell from '../components/services/service-page-shell'
import BusinessConsultingContent from '../components/services/business-consulting-content'

export const metadata: Metadata = {
  title: 'Business Setup & Advisory – NRI SUVIDHA',
  description:
    'Pvt Ltd, LLP, partnership incorporation and ongoing compliance for your India business — from registration to payroll.',
}

export default function BusinessConsultingPage() {
  return (
    <ServicePageShell>
      <BusinessConsultingContent />
    </ServicePageShell>
  )
}
