import type { Metadata } from 'next'

import NavBgWhite from '../components/navbar/nav-bg-white'
import SignupForm from '../components/auth/signup-form'
import FooterTopTwo from '../components/footer/footer-top-two'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'

export const metadata: Metadata = {
  title: 'Create Account – NRI SUVIDHA',
  description: 'Sign up for NRI Suvidha — legal, tax, banking, and property workflows for NRIs and OCIs.',
}

export default function Signup() {
  return (
    <>
      <NavBgWhite />

      <section className="gray-simple min py-4 py-lg-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="card rounded-4 shadow-sm border-0">
                <div className="card-body p-4 p-md-5">
                  <SignupForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterTopTwo />

      <FooterLightTwo />

      <ScrollToTop />
    </>
  )
}
