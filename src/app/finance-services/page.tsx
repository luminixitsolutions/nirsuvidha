import type { Metadata } from 'next'
import ServicePageShell from '../components/services/service-page-shell'
import FinanceServicesView from '../components/services/finance-services-view'

export const metadata: Metadata = {
  title: 'Finance Services – NRI SUVIDHA',
  description:
    'NRE/NRO banking, fixed deposits, loans, EMI tools, and PAN services for NRIs and OCIs — coordinated end-to-end.',
}

export default function FinanceServicesPage() {
  return (
    <ServicePageShell>
      <FinanceServicesView />
    </ServicePageShell>
  )
}
