import SubmitCaseForm from './submit-case-form'
import styles from './service-detail.module.css'
import {
  BANKING_CATEGORY_TILES,
  BANKING_QUICK_ACTIONS,
  BANKING_SERVICE_CARDS,
  BANKING_CATEGORY_SECTIONS,
  BANKING_FEATURED_EXPERTS,
  BANKING_RECENT_APPLICATIONS,
  WHY_BANKING_ICONS,
} from './banking-detail-data'
import Link from 'next/link'

type Props = {
  serviceId: number
  serviceTitle: string
}

export default function BankingServiceDetail({
  serviceId,
  serviceTitle,
}: Props) {
  return (
    <main className={`${styles.page} ${styles.bankingTight}`}>
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-lg-8">
            <header className={styles.sectionHead}>
              <h1 className={styles.sectionTitle}>
                {serviceTitle.replace(/\s+$/u, '')} Service Categories
              </h1>
              <p className={styles.sectionSub}>Choose your area of need</p>
            </header>

            <div className={`${styles.grid} ${styles.bankingAfterCategories}`}>
              {BANKING_CATEGORY_TILES.map((tile) => (
                <article key={tile.title} className={styles.card}>
                  <div className={styles.cardIcon} aria-hidden>
                    <i className={tile.icon} />
                  </div>
                  <h2 className={styles.cardTitle}>{tile.title}</h2>
                  <p className={styles.cardDesc}>{tile.description}</p>
                  <span className={styles.badge}>
                    {tile.casesHandled.toLocaleString()} applications handled
                  </span>
                </article>
              ))}
            </div>

            <section className={styles.stackSection}>
              <h2 className={styles.blockTitle}>Quick Banking Actions</h2>
              <p className={styles.blockSub}>
                Fast-track your core banking requests
              </p>
              <div className={styles.quickRow}>
                {BANKING_QUICK_ACTIONS.map((q) => (
                  <div key={q.title} className={styles.quickCard}>
                    <div className={styles.quickIcon} aria-hidden>
                      <i className={q.icon} />
                    </div>
                    <h3 className={styles.quickTitle}>{q.title}</h3>
                    <p className={styles.quickDesc}>{q.description}</p>
                    <Link href={q.href} className={styles.quickCta}>
                      {q.cta}
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.stackSection}>
              <h2 className={styles.blockTitle}>Banking Services</h2>
              <p className={styles.blockSub}>
                Additional banking support for NRI &amp; OCI clients
              </p>
              <div className={styles.grid}>
                {BANKING_SERVICE_CARDS.map((c) => (
                  <article
                    key={c.title}
                    className={`${styles.outlineCard}${c.fullWidth ? ` ${styles.spanFull}` : ''}`}
                  >
                    <h3 className={styles.nestedTitle}>{c.title}</h3>
                    <p className={styles.nestedDesc}>{c.description}</p>
                    {c.bullets && c.bullets.length > 0 ? (
                      <ul className={styles.bulletList}>
                        {c.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>

            {BANKING_CATEGORY_SECTIONS.map((block) => (
              <section key={block.title} className={styles.stackSection}>
                <div className={styles.megaCard}>
                  <h2 className={styles.megaTitle}>{block.title}</h2>
                  <p className={styles.megaSub}>{block.subtitle}</p>
                  <div
                    className={
                      block.items.some((i) => i.fullWidth)
                        ? styles.megaInnerSingle
                        : styles.megaInnerGrid
                    }
                  >
                    {block.items.map((it) => (
                      <article
                        key={it.title}
                        className={`${styles.outlineCard} ${
                          it.fullWidth ? styles.spanFull : ''
                        }`}
                      >
                        <h3 className={styles.nestedTitle}>{it.title}</h3>
                        <p className={styles.nestedDesc}>{it.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            ))}

            <section className={styles.stackSection}>
              <h2 className={styles.blockTitle}>Featured Banking Experts</h2>
              <p className={styles.blockSub}>
                Specialists ready to assist with your India banking journey
              </p>
              <div className={styles.expertList}>
                {BANKING_FEATURED_EXPERTS.map((ex) => (
                  <article key={ex.name} className={styles.expertCard}>
                    <div className={styles.expertMain}>
                      <div className={styles.expertLeft}>
                        <p className={styles.expertName}>
                          {ex.name}
                          <span className={styles.verifiedBadge}>
                            <i className="fa-solid fa-circle-check" aria-hidden />{' '}
                            {ex.badge}
                          </span>
                        </p>
                        <p className={styles.expertSpec}>{ex.specialty}</p>
                        <p className={styles.expertMeta}>
                          Experience: {ex.experience}
                        </p>
                        <p className={styles.expertMeta}>
                          <i className="fa-solid fa-location-dot me-1" aria-hidden />
                          {ex.location}
                        </p>
                      </div>
                      <div className={styles.expertMid}>
                        <p className={styles.expertRating}>
                          <i className="fa-solid fa-star text-warning me-1" aria-hidden />
                          {ex.rating.toFixed(1)}{' '}
                          <span className="text-muted">
                            ({ex.reviews} reviews)
                          </span>
                        </p>
                        <p className={styles.expertFee}>{ex.fee}</p>
                        <p className={styles.expertMeta}>
                          Languages: {ex.languages}
                        </p>
                      </div>
                      <div className={styles.expertActions}>
                        <button type="button" className={styles.btnPrimarySm}>
                          <i className="fa-solid fa-video me-2" aria-hidden />
                          Book Video Call
                        </button>
                        <button type="button" className={styles.btnOutlineSm}>
                          <i className="fa-solid fa-message me-2" aria-hidden />
                          Chat Now
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <div className="col-lg-4">
            <div className={styles.sidebarStack}>
              <SubmitCaseForm serviceId={serviceId} />
              <aside className={styles.whyCard}>
                <h2 className={styles.whyTitle}>
                  Why Choose Our {serviceTitle} Services?
                </h2>
                <ul className={styles.whyIconList}>
                  {WHY_BANKING_ICONS.map((row) => (
                    <li key={row.title}>
                      <span className={styles.whyIconWrap} aria-hidden>
                        <i className={row.icon} />
                      </span>
                      <span>
                        <strong className={styles.whyLead}>{row.title}</strong>
                        <span className={styles.whySub}>{row.sub}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </aside>
              <aside className={styles.recentCard}>
                <h2 className={styles.recentTitle}>Your Recent Applications</h2>
                <ul className={styles.recentList}>
                  {BANKING_RECENT_APPLICATIONS.map((r) => (
                    <li
                      key={r.title}
                      className={`${styles.recentRow} ${
                        r.status === 'completed'
                          ? styles.recentDone
                          : styles.recentProgress
                      }`}
                    >
                      <div>
                        <p className={styles.recentItemTitle}>{r.title}</p>
                        <p className={styles.recentStatus}>{r.statusLabel}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href="/#contact" className={styles.viewAllBtn}>
                  View All Applications
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
