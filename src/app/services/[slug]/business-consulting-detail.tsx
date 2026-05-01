import Link from 'next/link'
import SubmitCaseForm from './submit-case-form'
import styles from './service-detail.module.css'
import {
  advisoryHubSection,
  advisoryOffers,
  businessPage,
  businessWhyChoose,
  incorporationOptions,
  incorporationSection,
} from '@/app/data/business-consulting-data'

type Props = {
  serviceId: number
}

/**
 * Mirrors https://preview-nri-suvidha-v1.lovable.app/business-consulting
 */
export default function BusinessConsultingDetail({ serviceId }: Props) {
  return (
    <main className={styles.page}>
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className={styles.invPageHero}>
              <span className={styles.invPageHeroIcon} aria-hidden>
                <i className="fa-solid fa-briefcase" />
              </span>
              <div>
                <h1 className={styles.sectionTitle}>{businessPage.title}</h1>
                <p className={`${styles.sectionSub} mb-0`}>{businessPage.subtitle}</p>
              </div>
            </div>

            <section className={styles.stackSection}>
              <h2 className={styles.blockTitle}>{incorporationSection.title}</h2>
              <p className={`${styles.blockSub} mb-0`}>{incorporationSection.subtitle}</p>
              <div className={`${styles.bizRegGrid} mt-3`}>
                {incorporationOptions.map((o) => (
                  <article
                    key={o.title}
                    className={`${styles.invFundCard} ${styles.taxServiceCard}`}
                  >
                    <span className={styles.taxCardIcon} aria-hidden>
                      <i className={o.icon} />
                    </span>
                    <h3 className={styles.invFundName}>{o.title}</h3>
                    <p className={styles.taxCardTagline}>{o.desc}</p>
                    <ul className={`${styles.bulletList} ${styles.taxCardBulletList}`}>
                      {o.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <Link href="/contact" className={styles.invInvestBtn}>
                      {o.cta}
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            <section className={`${styles.stackSection} mt-4`}>
              <h2 className={styles.blockTitle}>{advisoryHubSection.title}</h2>
              <p className={`${styles.blockSub} mb-0`}>{advisoryHubSection.subtitle}</p>
              <div className={`${styles.bizAdvisoryGrid} mt-3`}>
                {advisoryOffers.map((b) => (
                  <article key={b.title} className={`${styles.outlineCard} ${styles.bizAdvisoryCard}`}>
                    <span className={styles.taxCardIcon} aria-hidden>
                      <i className={b.icon} />
                    </span>
                    <h3 className={styles.nestedTitle}>{b.title}</h3>
                    <p className={styles.taxCardDesc}>{b.desc}</p>
                    <ul className={`${styles.bulletList} ${styles.taxCardBulletList}`}>
                      {b.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className={styles.bizDualCtas}>
                      <Link href="/contact" className={styles.invInvestBtn}>
                        {b.primaryCta}
                      </Link>
                      <Link
                        href="/contact"
                        className={`${styles.btnOutlineSm} ${styles.bizCtaStretch} text-decoration-none text-center`}
                      >
                        {b.secondaryCta}
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <div className="col-lg-4">
            <div className={styles.invStickyRail}>
              <div className={styles.sidebarStack}>
                <SubmitCaseForm
                  serviceId={serviceId}
                  heading="Start your setup"
                  subheading="Tell us your structure—we'll propose the right registration path"
                />
                <aside className={styles.whyCard}>
                  <h2 className={styles.whyTitle}>Why NRI Suvidha Business?</h2>
                  <ul className={styles.whyIconList}>
                    {businessWhyChoose.map((w) => (
                      <li key={w.title}>
                        <span className={styles.whyIconWrap} aria-hidden>
                          <i className={w.icon} />
                        </span>
                        <span>
                          <strong className={styles.whyLead}>{w.title}</strong>
                          <span className={styles.whySub}>{w.sub}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
