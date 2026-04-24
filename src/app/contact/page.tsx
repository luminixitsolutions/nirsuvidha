import type { Metadata } from 'next'

import NavBgWhite from '../components/navbar/nav-bg-white'
import ContactPageContent from '../components/contact/contact-page-content'
import FooterTopTwo from '../components/footer/footer-top-two'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'

export const metadata: Metadata = {
  title: 'Contact Us – NRI SUVIDHA',
  description:
    'Reach NRI Suvidha for general inquiries, customer support, and NRI financial services — email, phone, and message us anytime.',
}

export default function Contact() {
  return (
    <>
      <NavBgWhite />

      <ContactPageContent />

      <FooterTopTwo />

      <FooterLightTwo />

      <ScrollToTop />
    </>
  )
}
