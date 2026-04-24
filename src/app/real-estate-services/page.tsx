import type { Metadata } from 'next'
import ServicePageShell from '../components/services/service-page-shell'
import RealEstateServicesContent from '../components/services/real-estate-services-content'

export const metadata: Metadata = {
  title: 'Real Estate Services – NRI SUVIDHA',
  description:
    'Buy, sell, rent, and finance property in India with documentation, diligence, and home-loan coordination.',
}

export default function RealEstateServicesPage() {
  return (
    <ServicePageShell>
      <RealEstateServicesContent />
    </ServicePageShell>
  )
}
