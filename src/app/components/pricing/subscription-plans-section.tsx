import Link from 'next/link'
import type { ReactNode } from 'react'
import styles from './subscription-plans.module.css'

const starterFeatures = [
  'Basic consultation (2 per month)',
  'Document upload & storage',
  'Email support',
  'Basic tax guidance',
  'NRI banking info',
]

const professionalFeaturesMonthly = [
  'Unlimited consultations',
  'Priority advisor matching',
  'Video & voice calls',
  '24/7 support',
  'Tax filing assistance',
  'Investment advisory',
  'Legal document review',
  'Quarterly portfolio review',
  'Repatriation & remittance guidance',
]

const enterpriseFeatures = [
  'Dedicated relationship manager',
  'Custom investment strategies',
  'Priority service execution',
  'Unlimited service requests',
  'Real estate advisory',
  'Business setup assistance',
  'Family office services',
  'White-label solutions',
]

const individualServices = [
  {
    title: 'Tax Filing Service',
    price: '5,000',
    desc: 'Complete income tax filing with DTAA benefits',
  },
  {
    title: 'Company Registration',
    price: '15,000',
    desc: 'Complete business setup and registration',
  },
  {
    title: 'Investment Setup',
    price: '8,000',
    desc: 'Portfolio setup and advisory',
  },
  {
    title: 'Legal Documentation',
    price: '12,000',
    desc: 'Property and legal document services',
  },
  {
    title: 'Banking Services',
    price: '3,000',
    desc: 'NRE/NRO account opening assistance',
  },
  {
    title: 'Real Estate Advisory',
    price: '10,000',
    desc: 'Property buying/selling consultation',
  },
]

const faqItems = [
  {
    id: 'pf1',
    q: 'Can I switch plans later?',
    a: 'Yes. You can upgrade or downgrade from your dashboard. Changes take effect on your next billing cycle, and we prorate upgrades where applicable.',
  },
  {
    id: 'pf2',
    q: 'What payment methods do you accept?',
    a: 'We support major cards, UPI, and net banking for India-based billing. International cards are accepted for select plans — our team confirms options at checkout.',
  },
  {
    id: 'pf3',
    q: 'Is there a free trial for paid plans?',
    a: 'The Professional plan includes a limited free trial on first signup so you can experience priority support and advisory workflows before you are charged.',
  },
  {
    id: 'pf4',
    q: 'Do annual plans include a discount?',
    a: 'Yes. Annual billing is priced lower than twelve monthly payments — use the Monthly / Annual toggle above the plans to compare.',
  },
  {
    id: 'pf5',
    q: 'What if I only need one-off services?',
    a: 'Use the Individual Services section below to book standalone offerings, or stay on the Starter (free) plan and add services as you need them.',
  },
]

function FeatureRow({ children }: { children: ReactNode }) {
  return (
    <li>
      <span className={styles.checkIcon}>
        <i className="fa-solid fa-check" aria-hidden />
      </span>
      <span>{children}</span>
    </li>
  )
}

export default function SubscriptionPlansSection() {
  const proMonthly = 1499
  const proStrike = 1999
  const proAnnual = 14990
  const entMonthly = 4999
  const entAnnual = 49990

  return (
    <>
      <div className={`row justify-content-center`}>
        <div className="col-12 px-2 px-sm-3">
          <div className={styles.pricingHero}>
            <div className={`${styles.crownWrap} ${styles.crownOutline}`} aria-hidden>
              <i className="fa-solid fa-crown" />
            </div>
            <h1 className={styles.pricingHeroTitle}>Choose Your Plan</h1>
            <p className={styles.pricingHeroLead}>Comprehensive NRI financial services with flexible pricing</p>
            <p className={styles.pricingHeroMuted}>
              Start with our free plan or unlock premium features with monthly subscriptions
            </p>
            <div className={styles.introActions}>
              <Link href="/" className="btn btn-md btn-outline-main rounded-5 px-4">
                <i className="fa-solid fa-arrow-left me-2" />
                Home
              </Link>
              <Link href="/login" className="btn btn-md btn-light-main rounded-5 px-4">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.billingCycle}>
        <input
          type="radio"
          name="billing-cycle"
          id="billing-m"
          className="visually-hidden"
          defaultChecked
          aria-label="Monthly billing"
        />
        <input type="radio" name="billing-cycle" id="billing-a" className="visually-hidden" aria-label="Annual billing" />

        <div className="row justify-content-center mb-2">
          <div className="col-xl-8 col-lg-10 text-center">
            <div className="sec-heading center mb-3">
              <h2 className={`mb-2 ${styles.membershipTitle}`}>Membership Plans</h2>
              <p className="mb-3">Choose the perfect plan for your NRI financial needs</p>
              <span className={styles.promoPill}>Limited Time: 25% OFF Professional Plan</span>
            </div>

            <div className="d-flex flex-column align-items-center gap-2 mb-4">
              <div className={styles.billingSwitch} role="radiogroup" aria-label="Billing period">
                <label htmlFor="billing-m" className={`${styles.billingBtn} ${styles.billingLabelMonthly}`}>
                  Monthly
                </label>
                <label htmlFor="billing-a" className={`${styles.billingBtn} ${styles.billingLabelAnnual}`}>
                  Annual
                  <span className={styles.saveHint}>Save more</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 align-items-stretch mb-5">
          <div className="col-xl-4 col-md-6">
            <div className={`${styles.planCard} p-4 pt-5`}>
              <h5 className={styles.planCardTitle}>Starter</h5>
              <div className={`${styles.priceDisplay} mb-2`}>Free</div>
              <p className={`${styles.planCardSubtext} text-muted small mb-4`}>Essential services for new NRIs</p>
              <ul className={styles.featureList}>
                {starterFeatures.map((line) => (
                  <FeatureRow key={line}>{line}</FeatureRow>
                ))}
              </ul>
              <div className="mt-4 pt-2">
                <Link href="/login" className="btn btn-outline-main full-width rounded-4 fw-medium py-3">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className={`${styles.planCard} ${styles.planCardFeatured} p-4 pt-5 mt-4 mt-xl-0`}>
              <span className={styles.popularBadge}>Most Popular</span>
              <h5 className={styles.planCardTitle}>Professional</h5>

              <div className={`${styles.priceBlockMonthly} mb-4`}>
                <div className={`${styles.priceDisplay} mb-1`}>
                  ₹{proMonthly.toLocaleString('en-IN')}
                  <span className="fs-6 fw-semibold text-muted">/month</span>
                </div>
                <span className={styles.strikePrice}>₹{proStrike.toLocaleString('en-IN')}</span>
              </div>

              <div className={`${styles.priceBlockAnnual} mb-4`}>
                <div className={`${styles.priceDisplay} mb-1`}>
                  ₹{proAnnual.toLocaleString('en-IN')}
                  <span className="fs-6 fw-semibold text-muted">/year</span>
                </div>
                <p className="small text-success fw-semibold mb-0">Save about 17% compared to twelve monthly payments.</p>
              </div>

              <p className={`${styles.planCardSubtext} text-muted small mb-4`}>Complete NRI financial management</p>

              <ul className={styles.featureList}>
                {professionalFeaturesMonthly.map((line) => (
                  <FeatureRow key={line}>{line}</FeatureRow>
                ))}
              </ul>
              <div className="mt-4 pt-2">
                <Link href="/login" className="btn btn-main full-width rounded-4 fw-medium py-3">
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className={`${styles.planCard} p-4 pt-5`}>
              <h5 className={styles.planCardTitle}>Enterprise</h5>
              <div className={`${styles.priceBlockMonthly} mb-4`}>
                <div className={`${styles.priceDisplay} mb-1`}>
                  ₹{entMonthly.toLocaleString('en-IN')}
                  <span className="fs-6 fw-semibold text-muted">/month</span>
                </div>
              </div>
              <div className={`${styles.priceBlockAnnual} mb-4`}>
                <div className={`${styles.priceDisplay} mb-1`}>
                  ₹{entAnnual.toLocaleString('en-IN')}
                  <span className="fs-6 fw-semibold text-muted">/year</span>
                </div>
              </div>
              <p className={`${styles.planCardSubtext} text-muted small mb-4`}>
                Premium solutions for high-value clients
              </p>

              <ul className={styles.featureList}>
                {enterpriseFeatures.map((line) => (
                  <FeatureRow key={line}>{line}</FeatureRow>
                ))}
              </ul>
              <div className="mt-4 pt-2">
                <Link href="/#contact" className="btn btn-outline-main full-width rounded-4 fw-medium py-3">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mb-3 mt-5">
        <div className="col-lg-8 text-center">
          <h3 className={`mb-2 ${styles.individualSectionTitle}`}>Need Individual Services?</h3>
          <p className={`mb-0 ${styles.individualSectionLead}`}>Prefer to pay as you go? We offer standalone services too</p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {individualServices.map((svc) => (
          <div className="col-xl-4 col-md-6" key={svc.title}>
            <div className={styles.serviceCard}>
              <h5 className={`fw-bold mb-2 ${styles.serviceCardHeading}`}>{svc.title}</h5>
              <div className={`${styles.serviceCardPrice} mb-2`}>₹ {svc.price}</div>
              <p className={`${styles.serviceCardMeta} small mb-4`}>{svc.desc}</p>
              <Link href="/#contact" className="btn btn-outline-main full-width rounded-4">
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="row justify-content-center mb-3">
        <div className="col-lg-8 text-center">
          <Link href="/#services" className={`btn btn-lg rounded-4 px-5 ${styles.viewAllServicesBtn}`}>
            View All Individual Services
          </Link>
        </div>
      </div>

      <div className={`row justify-content-center ${styles.contactStrip}`}>
        <div className="col-lg-10 col-xl-9">
          <p className={`text-center text-uppercase small fw-bold ${styles.contactKicker}`}>Get In Touch</p>
          <h2 className="text-center mb-2">Contact NRI Suvidha</h2>
          <p className="text-center text-muted mx-auto mb-4" style={{ maxWidth: '36rem' }}>
            Have questions about our NRI financial services? We&apos;re here to help you manage your Indian affairs from
            anywhere in the world.
          </p>
          <div className="row g-4 justify-content-center mb-2">
            <div className="col-md-6">
              <div className={styles.contactCard}>
                <h3 className="h6 fw-bold mb-3">General Inquiries</h3>
                <p className="mb-2">
                  <a href="mailto:hello@nrisuvidha.com" className={styles.contactLink}>
                    hello@nrisuvidha.com
                  </a>
                </p>
                <p className="mb-0">
                  <a href="tel:+9118001234567" className={styles.contactLink}>
                    +91-1800-123-4567 (Toll Free)
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.contactCard}>
                <h3 className="h6 fw-bold mb-3">Customer Support</h3>
                <p className="text-muted mb-0 small">Available 24/7 for all your queries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5 pt-4 border-top">
        <div className="col-lg-9">
          <div className="text-center mb-4">
            <h3 className="mb-2">Frequently asked questions</h3>
            <p className="text-muted mb-0">Quick answers about billing, trials, and how plans work.</p>
          </div>
          <div className="accordion" id="subscriptionPlansFaq">
            {faqItems.map((item, index) => (
              <div className="accordion-item border rounded-3 mb-2 overflow-hidden" key={item.id}>
                <h2 className="accordion-header" id={`${item.id}H`}>
                  <button
                    className={`accordion-button ${index === 0 ? '' : 'collapsed'} rounded-0`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${item.id}C`}
                    aria-expanded={index === 0}
                    aria-controls={`${item.id}C`}
                  >
                    {item.q}
                  </button>
                </h2>
                <div
                  id={`${item.id}C`}
                  className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                  aria-labelledby={`${item.id}H`}
                  data-bs-parent="#subscriptionPlansFaq"
                >
                  <div className="accordion-body text-muted">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
