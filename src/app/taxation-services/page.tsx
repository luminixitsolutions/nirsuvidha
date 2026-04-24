import type { Metadata } from 'next'
import ServicePageShell from '../components/services/service-page-shell'
import TaxationServicesContent from '../components/services/taxation-services-content'

export const metadata: Metadata = {
  title: 'Taxation Services – NRI SUVIDHA',
  description:
    'ITR filing, GST, TDS, advance tax, and DTAA advisory for NRIs and OCIs with cross-border income.',
}

export default function TaxationServicesPage() {
  return (
    <ServicePageShell>
      <TaxationServicesContent />
    </ServicePageShell>
  )
}
