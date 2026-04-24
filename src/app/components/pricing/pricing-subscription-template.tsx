import React from 'react'
import NavBgWhite from '../navbar/nav-bg-white'
import FooterTopTwo from '../footer/footer-top-two'
import FooterLightTwo from '../footer/footer-light-two'
import ScrollToTop from '../scroll-to-top'
import SubscriptionPlansSection from './subscription-plans-section'

export default function PricingSubscriptionTemplate() {
  return (
    <>
      <NavBgWhite />

      <section className="gray-simple py-4 py-lg-5 min">
        <div className="container">
          <SubscriptionPlansSection />
        </div>
      </section>

      <FooterTopTwo />

      <FooterLightTwo />

      <ScrollToTop />
    </>
  )
}
