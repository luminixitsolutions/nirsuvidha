import Link from 'next/link'
import SubmitCaseForm from './submit-case-form'
import styles from './service-detail.module.css'
import {
  taxationHubSection,
  taxationPage,
  taxationServices,
  taxationWhyChoose,
} from '@/app/data/taxation-services-data'

type Props = {
  serviceId: number
}

/**
 * Mirrors https://preview-nri-suvidha-v1.lovable.app/taxation-services
 */
export default function TaxationServicesDetail({ serviceId }: Props) {
  return (
    <main className={styles.page}>
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className={styles.invPageHero}>
              <span className={styles.invPageHeroIcon} aria-hidden>
                <i className="fa-solid fa-file-invoice-dollar" />
              </span>
              <div>
                <h1 className={styles.sectionTitle}>{taxationPage.title}</h1>
                <p className={`${styles.sectionSub} mb-0`}>{taxationPage.subtitle}</p>
              </div>
            </div>

            <section className={styles.stackSection}>
              <h2 className={styles.blockTitle}>{taxationHubSection.title}</h2>
              <p className={`${styles.blockSub} mb-0`}>{taxationHubSection.subtitle}</p>
              <div className={`${styles.invAvailGrid} mt-3`}>
                {taxationServices.map((s) => (
                  <article
                    key={s.title}
                    className={`${styles.invFundCard} ${styles.taxServiceCard}`}
                  >
                    <span className={styles.taxCardIcon} aria-hidden>
                      <i className={s.icon} />
                    </span>
                    <h3 className={styles.invFundName}>{s.title}</h3>
                    <p className={styles.taxCardTagline}>{s.tagline}</p>
                    <p className={styles.taxCardDesc}>{s.desc}</p>
                    <ul className={`${styles.bulletList} ${styles.taxCardBulletList}`}>
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <Link href={s.href} className={styles.invInvestBtn}>
                      {s.cta}
                    </Link>
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
                  heading="Get tax help"
                  subheading="We'll route you to the right specialist based on your query"
                />
                <aside className={styles.whyCard}>
                  <h2 className={styles.whyTitle}>Why NRI Suvidha Tax?</h2>
                  <ul className={styles.whyIconList}>
                    {taxationWhyChoose.map((w) => (
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
