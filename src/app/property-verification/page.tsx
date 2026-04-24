import type { Metadata } from 'next'
import ServicePageShell from '../components/services/service-page-shell'
import PropertyVerificationView from '../components/services/property-verification-view'

export const metadata: Metadata = {
  title: 'Property Verification – NRI SUVIDHA',
  description:
    'Title, encumbrance, and municipal checks for property in India — upload documents and track milestones.',
}

export default function PropertyVerificationPage() {
  return (
    <ServicePageShell>
      <PropertyVerificationView />
    </ServicePageShell>
  )
}
