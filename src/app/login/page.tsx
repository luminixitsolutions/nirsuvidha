import type { Metadata } from 'next'
import NavBgWhite from '../components/navbar/nav-bg-white'
import LoginPageForm from '../components/auth/login-page-form'
import FooterTopTwo from '../components/footer/footer-top-two'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'

export const metadata: Metadata = {
  title: 'Login – NRI SUVIDHA',
  description: 'Sign in to your NRI Suvidha account.',
}

export default function LoginPage() {
  return (
    <>
      <NavBgWhite />

      <section className="gray-simple min">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="card rounded-4 shadow-sm border-0">
                <div className="card-body p-4 p-md-5">
                  <LoginPageForm />
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
