import Navlight from '../components/navbar/navlight'
import FooterOne from '../components/footer/footer-one'
import ScrollToTop from '../components/scroll-to-top'
import LoginPageForm from '../components/auth/login-page-form'
import { getPublicServices } from '@/lib/public-services'

export default async function LoginPage() {
  const serviceItems = await getPublicServices()
  return (
    <>
      <Navlight serviceItems={serviceItems} />

      <section className="gray-simple position-relative pt-5 pb-5">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
              <div className="bg-white rounded-4 shadow-sm border border-light p-4 p-md-5">
                <LoginPageForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterOne />
      <ScrollToTop />
    </>
  )
}
