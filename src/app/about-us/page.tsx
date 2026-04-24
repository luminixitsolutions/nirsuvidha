import type { Metadata } from 'next'
import NavBgWhite from '../components/navbar/nav-bg-white'
import AboutUsContent from '../components/about/about-us-content'
import FooterTopTwo from '../components/footer/footer-top-two'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'

export const metadata: Metadata = {
  title: 'About Us – NRI SUVIDHA',
  description:
    'Learn about NRI Suvidha — our mission, values, story, and team dedicated to simplifying financial and legal services for Global Indians.',
}

export default function AboutUs() {
  return (
    <>
      <NavBgWhite />
      <AboutUsContent />
      <FooterTopTwo />
      <FooterLightTwo />
      <ScrollToTop />
    </>
  )
}
