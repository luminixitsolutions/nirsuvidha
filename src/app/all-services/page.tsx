import type { Metadata } from 'next'
import ServicePageShell from '../components/services/service-page-shell'
import AllServicesCatalog from '../components/services/all-services-catalog'

export const metadata: Metadata = {
  title: 'All Services & Pricing – NRI SUVIDHA',
  description:
    'Browse every NRI Suvidha service category with indicative pricing — legal, finance, investments, tax, business, and property.',
}

export default function AllServicesPage() {
  return (
    <ServicePageShell>
      <AllServicesCatalog />
    </ServicePageShell>
  )
}
