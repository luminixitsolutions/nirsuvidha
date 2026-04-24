import type { Metadata } from 'next'
import ServicePageShell from '../components/services/service-page-shell'
import InvestmentServicesContent from '../components/services/investment-services-content'

export const metadata: Metadata = {
  title: 'Investment Services – NRI SUVIDHA',
  description:
    'Mutual funds, equities, and portfolio guidance for global Indians investing in India — suitability-first onboarding.',
}

export default function InvestmentServicesPage() {
  return (
    <ServicePageShell>
      <InvestmentServicesContent />
    </ServicePageShell>
  )
}
