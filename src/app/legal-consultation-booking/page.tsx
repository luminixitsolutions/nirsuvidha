import type { Metadata } from 'next'
import ServicePageShell from '../components/services/service-page-shell'
import LegalConsultationBookingView from '../components/services/legal-consultation-booking-view'

export const metadata: Metadata = {
  title: 'Book Legal Consultation – NRI SUVIDHA',
  description:
    'Choose a verified lawyer, pick a slot, and brief your India legal matter — video or phone consultations.',
}

export default function LegalConsultationBookingPage() {
  return (
    <ServicePageShell>
      <LegalConsultationBookingView />
    </ServicePageShell>
  )
}
