import Navlight from '@/app/components/navbar/navlight'
import FooterOne from '@/app/components/footer/footer-one'
import ScrollToTop from '@/app/components/scroll-to-top'
import SubscriptionPlansSection from '@/app/components/pricing/subscription-plans-section'
import { getPublicServices } from '@/lib/public-services'
import shell from './pricing-page.module.css'

export const metadata = {
  title: 'Membership Plans & Pricing — NRI Suvidha',
  description:
    'Choose Starter, Professional, or Enterprise membership—or book individual NRI services à la carte.',
}

export default async function PricingPage() {
  const serviceItems = await getPublicServices()

  return (
    <div className={shell.shell}>
      <Navlight serviceItems={serviceItems} solidBar />
      <main className={shell.main}>
        <div className="container">
          <SubscriptionPlansSection />
        </div>
      </main>
      <FooterOne />
      <ScrollToTop />
    </div>
  )
}
