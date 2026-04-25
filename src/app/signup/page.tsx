import Navlight from '../components/navbar/navlight'
import FooterOne from '../components/footer/footer-one'
import ScrollToTop from '../components/scroll-to-top'
import SignupForm from '../components/auth/signup-form'

export default function SignupPage() {
  return (
    <>
      <Navlight />

      <section className="gray-simple position-relative pt-5 pb-5">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-9 col-sm-11">
              <div className="bg-white rounded-4 shadow-sm border border-light p-4 p-md-5">
                <SignupForm />
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
