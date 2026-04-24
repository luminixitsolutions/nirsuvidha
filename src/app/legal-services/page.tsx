import type { Metadata } from 'next'
import NavBgWhite from '../components/navbar/nav-bg-white'
import LegalServicesContent from '../components/legal/legal-services-content'
import FooterTopTwo from '../components/footer/footer-top-two'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'

export const metadata: Metadata = {
  title: 'Legal Services – NRI SUVIDHA',
  description:
    'Expert legal consultation, case submission, and vetted lawyers for NRIs — property, family, corporate, and inheritance support.',
}

export default function LegalServicesPage() {
  return (
    <>
      <NavBgWhite />

      <LegalServicesContent />

      <FooterTopTwo />
      <FooterLightTwo />
      <ScrollToTop />
    </>
  )
}
