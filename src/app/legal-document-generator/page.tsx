import type { Metadata } from 'next'
import ServicePageShell from '../components/services/service-page-shell'
import LegalDocumentGeneratorView from '../components/services/legal-document-generator-view'

export const metadata: Metadata = {
  title: 'Legal Document Generator – NRI SUVIDHA',
  description:
    'Guided flows for POA, agreements, wills, and more — with lawyer review before you sign.',
}

export default function LegalDocumentGeneratorPage() {
  return (
    <ServicePageShell>
      <LegalDocumentGeneratorView />
    </ServicePageShell>
  )
}
