import Link from 'next/link'
import SubmitCaseForm from './submit-case-form'
import styles from './service-detail.module.css'
import {
  additionalLegalCards,
  estatePlanningCards,
  featuredLawyers,
  legalCategories,
  legalPage,
  propertyTransferCards,
  quickLegalActions,
  recentCasesDisplay,
  whyChooseLegal,
} from '@/app/data/legal-services-data'

type Props = {
  serviceId: number
}

/** Full legal hub — layout matches Lovable preview & banking service-detail styles */
export default function LegalServicesDetail({ serviceId }: Props) {
  const willsBlock = additionalLegalCards[5]
  const poaCard = additionalLegalCards[4]
  const serviceGrid = additionalLegalCards.slice(0, 4)

  return (
    <main className={`${styles.page} ${styles.bankingTight}`}>
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-lg-8">
            <header className={styles.sectionHead}>
              <h1 className={styles.sectionTitle}>{legalPage.categoriesHeading}</h1>
              <p className={styles.sectionSub}>{legalPage.categoriesSub}</p>
            </header>

            <div className={`${styles.grid} ${styles.bankingAfterCategories}`}>
              {legalCategories.map((c) => (
                <article
                  key={c.title}
                  className={`${styles.card} ${styles.legalCategoryCard}`}
                >
                  <div
                    className={`${styles.cardIcon} ${styles.legalCategoryIcon}`}
                    aria-hidden
                  >
                    <i className={c.icon} />
                  </div>
                  <div className={styles.legalCategoryBody}>
                    <h2 className={styles.cardTitle}>{c.title}</h2>
                    <p className={styles.cardDesc}>{c.desc}</p>
                    <span className={styles.badge}>{c.cases} cases handled</span>
                  </div>
                </article>
              ))}
            </div>

            <section className={styles.stackSection}>
              <h2 className={styles.blockTitle}>{legalPage.quickHeading}</h2>
              <p className={styles.blockSub}>{legalPage.quickSub}</p>
              <div className={styles.quickRow}>
                {quickLegalActions.map((a) => (
                  <div key={a.title} className={styles.quickCard}>
                    <div className={styles.quickIcon} aria-hidden>
                      <i className={a.icon} />
                    </div>
                    <h3 className={styles.quickTitle}>{a.title}</h3>
                    <p className={styles.quickDesc}>{a.desc}</p>
                    <Link href={a.href} className={styles.quickCta}>
                      {a.cta}
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.stackSection}>
              <h2 className={styles.blockTitle}>{legalPage.additionalHeading}</h2>
              <p className={styles.blockSub}>{legalPage.additionalSub}</p>
              <div className={styles.grid}>
                {serviceGrid.map((item) => (
                  <article key={item.title} className={styles.outlineCard}>
                    <h3 className={styles.nestedTitle}>{item.title}</h3>
                    <p className={styles.nestedDesc}>{item.desc}</p>
                    {'bullets' in item && item.bullets && item.bullets.length > 0 ? (
                      <ul className={styles.bulletList}>
                        {item.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                ))}
                <article className={`${styles.outlineCard} ${styles.spanFull}`}>
                  <h3 className={styles.nestedTitle}>{poaCard.title}</h3>
                  <p className={styles.nestedDesc}>{poaCard.desc}</p>
                </article>
              </div>
              <div className={`${styles.stackSection} mt-4`}>
                <div className={styles.megaCard}>
                  <h2 className={styles.megaTitle}>{willsBlock.sectionTitle}</h2>
                  <p className={styles.megaSub}>{willsBlock.sectionSub}</p>
                  <div className={styles.megaInnerSingle}>
                    <article className={styles.outlineCard}>
                      <h3 className={styles.nestedTitle}>{willsBlock.title}</h3>
                      <p className={styles.nestedDesc}>{willsBlock.desc}</p>
                    </article>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.stackSection}>
              <div className={styles.megaCard}>
                <h2 className={styles.megaTitle}>{legalPage.estateHeading}</h2>
                <p className={styles.megaSub}>{legalPage.estateSub}</p>
                <div className={styles.megaInnerGrid}>
                  {estatePlanningCards.map((e) => (
                    <article key={e.title} className={styles.outlineCard}>
                      <h3 className={styles.nestedTitle}>{e.title}</h3>
                      <p className={styles.nestedDesc}>{e.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className={styles.stackSection}>
              <div className={styles.megaCard}>
                <h2 className={styles.megaTitle}>{legalPage.transferHeading}</h2>
                <p className={styles.megaSub}>{legalPage.transferSub}</p>
                <div className={styles.megaInnerGrid}>
                  {propertyTransferCards.map((p) => (
                    <article key={p.title} className={styles.outlineCard}>
                      <h3 className={styles.nestedTitle}>{p.title}</h3>
                      <p className={styles.nestedDesc}>{p.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className={styles.stackSection}>
              <h2 className={styles.blockTitle}>{legalPage.featuredHeading}</h2>
              <p className={styles.blockSub}>{legalPage.featuredSub}</p>
              <div className={styles.expertList}>
                {featuredLawyers.map((lawyer) => (
                  <article key={lawyer.name} className={styles.expertCard}>
                    <div className={styles.expertMain}>
                      <div>
                        <p className={styles.expertName}>
                          {lawyer.name}
                          {lawyer.verified ? (
                            <span className={styles.verifiedBadge}>
                              <i className="fa-solid fa-circle-check" aria-hidden /> Verified
                            </span>
                          ) : null}
                        </p>
                        <p className={styles.expertSpec}>{lawyer.specialization}</p>
                        <p className={styles.expertMeta}>Experience: {lawyer.experience} years</p>
                        <p className={styles.expertMeta}>
                          <i className="fa-solid fa-location-dot me-1" aria-hidden />
                          {lawyer.location}
                        </p>
                      </div>
                      <div>
                        <p className={styles.expertRating}>
                          <i className="fa-solid fa-star text-warning me-1" aria-hidden />
                          {lawyer.rating.toFixed(1)}{' '}
                          <span className="text-muted">({lawyer.reviews} reviews)</span>
                        </p>
                        <p className={styles.expertFee}>{lawyer.fee}/consultation</p>
                        <p className={styles.expertMeta}>Languages: {lawyer.languages}</p>
                      </div>
                      <div className={styles.expertActions}>
                        <Link
                          href="/contact"
                          className={`${styles.btnPrimarySm} text-decoration-none d-block text-center`}
                        >
                          <i className="fa-solid fa-video me-1" aria-hidden />
                          Book Video Call
                        </Link>
                        <Link
                          href="/contact"
                          className={`${styles.btnOutlineSm} text-decoration-none d-block text-center`}
                        >
                          <i className="fa-regular fa-comment-dots me-1" aria-hidden />
                          Chat Now
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <div className="col-lg-4">
            <div className={styles.sidebarStack}>
              <SubmitCaseForm
                serviceId={serviceId}
                heading="Submit Your Case"
                subheading="Get matched with the right lawyer"
              />
              <aside className={styles.whyCard}>
                <h2 className={styles.whyTitle}>Why Choose Our Legal Services?</h2>
                <ul className={styles.whyIconList}>
                  {whyChooseLegal.map((w) => (
                    <li key={w.title}>
                      <span className={styles.whyIconWrap} aria-hidden>
                        <i className={w.icon} />
                      </span>
                      <span>
                        <strong className={styles.whyLead}>{w.title}</strong>
                        <span className={styles.whySub}>{w.desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </aside>
              <aside className={styles.recentCard}>
                <h2 className={styles.recentTitle}>Your Recent Cases</h2>
                <ul className={styles.recentList}>
                  {recentCasesDisplay.map((c) => (
                    <li
                      key={c.title}
                      className={`${styles.recentRow} ${
                        c.variant === 'success' ? styles.recentDone : styles.recentProgress
                      }`}
                    >
                      <div>
                        <p className={styles.recentItemTitle}>{c.title}</p>
                        <p className={styles.recentStatus}>Status: {c.status}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href="/candidate-dashboard" className={styles.viewAllBtn}>
                  View All Cases
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
