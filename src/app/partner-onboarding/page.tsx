import Navlight from '@/app/components/navbar/navlight'
import FooterOne from '@/app/components/footer/footer-one'
import ScrollToTop from '@/app/components/scroll-to-top'
import PartnerOnboardingForm from './partner-onboarding-form'
import { getPublicServices } from '@/lib/public-services'

export const metadata = {
  title: 'Partner Registration — NRI Suvidha',
  description:
    'Join our network of professional service providers. Complete the partner onboarding application.',
}

export default async function PartnerOnboardingPage() {
  const serviceItems = await getPublicServices()

  return (
    <>
      <Navlight serviceItems={serviceItems} />
      <PartnerOnboardingForm />
      <FooterOne />
      <ScrollToTop />
    </>
  )
}
