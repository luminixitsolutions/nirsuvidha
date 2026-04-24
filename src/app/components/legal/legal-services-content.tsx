import Link from 'next/link'
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
} from '../../data/legal-services-data'
import styles from './legal-services-content.module.css'
import { ServicePageHeader, serviceDense } from '../services/service-primitives'

export default function LegalServicesContent() {
  const d = serviceDense
  return (
    <section className="gray-simple py-3 py-lg-4">
      <div className="container">
        <div className="row g-3 g-lg-4">
          <div className="col-lg-8">
            <ServicePageHeader title={legalPage.title} subtitle={legalPage.subtitle} iconClass="fa-solid fa-scale-balanced" />

            <div className="mb-3">
              <label className="form-label text-muted small fw-medium d-none d-md-block mb-2">Search</label>
              <div className={styles.searchPanel}>
                <div className="position-relative">
                  <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted">
                    <i className="fa-solid fa-magnifying-glass" aria-hidden />
                  </span>
                  <input
                    type="search"
                    className={`form-control form-control-lg ps-5 ${styles.searchInput}`}
                    placeholder={legalPage.searchPlaceholder}
                    aria-label="Search legal services"
                  />
                </div>
              </div>
            </div>

            <div className={styles.sectionHead}>
              <span className={styles.sectionKicker}>Browse</span>
              <h2 className={styles.sectionTitle}>{legalPage.categoriesHeading}</h2>
              <p className={styles.sectionSub}>{legalPage.categoriesSub}</p>
            </div>
            <div className="row g-3 g-md-3 mb-3">
              {legalCategories.map((c) => (
                <div className="col-md-6" key={c.title}>
                  <div className={`card h-100 shadow-sm ${styles.categoryCard}`}>
                    <div className="card-body p-3 d-flex flex-column">
                      <div className="d-flex align-items-start gap-3">
                        <span className={styles.iconBubble} aria-hidden>
                          <i className={c.icon} />
                        </span>
                        <div className="flex-grow-1">
                          <h3 className="fs-6 fw-bold mb-2">{c.title}</h3>
                          <p className="text-muted small mb-0">{c.desc}</p>
                        </div>
                      </div>
                      <span className={`${styles.caseBadge} mt-3 align-self-start`}>{c.cases} cases handled</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.sectionHead}>
              <span className={styles.sectionKicker}>Actions</span>
              <h2 className={styles.sectionTitle}>{legalPage.quickHeading}</h2>
              <p className={styles.sectionSub}>{legalPage.quickSub}</p>
            </div>
            <div className="row g-3 mb-3">
              {quickLegalActions.map((a) => (
                <div className="col-md-6" key={a.title}>
                  <div className={`card h-100 border-0 shadow-sm ${d.hubPanel}`}>
                    <div className="card-body p-3 d-flex flex-column">
                      <div className="mb-3">
                        <i className={`${a.icon} text-main fs-2`} aria-hidden />
                      </div>
                      <h3 className="fs-6 fw-bold mb-2">{a.title}</h3>
                      <p className="text-muted small flex-grow-1">{a.desc}</p>
                      <Link href={a.href} className="btn btn-main rounded-pill mt-3 align-self-start">
                        {a.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.sectionHead}>
              <span className={styles.sectionKicker}>Services</span>
              <h2 className={styles.sectionTitle}>{legalPage.additionalHeading}</h2>
              <p className={styles.sectionSub}>{legalPage.additionalSub}</p>
            </div>

            <div className="row g-3 mb-3">
              {additionalLegalCards.slice(0, 4).map((item) => (
                <div className="col-md-6" key={item.title}>
                  <div className={`card h-100 border-0 shadow-sm ${d.hubPanel}`}>
                    <div className="card-body p-3">
                      <h3 className="fs-6 fw-bold mb-2">{item.title}</h3>
                      <p className="text-muted small mb-0">{item.desc}</p>
                      {'bullets' in item && item.bullets && (
                        <ul className="text-muted small mt-3 mb-0 ps-3">
                          {item.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`card border-0 shadow-sm mb-3 ${d.hubPanel}`}>
              <div className="card-body p-3">
                <h3 className="fs-5 fw-bold mb-1">{additionalLegalCards[4].title}</h3>
                <p className="text-muted small mb-0">{additionalLegalCards[4].desc}</p>
              </div>
            </div>

            <div className={`card border-0 shadow-sm mb-3 ${d.hubPanel}`}>
              <div className="card-body p-3 p-md-4">
                <h2 className="fs-4 fw-bold mb-1">{additionalLegalCards[5].sectionTitle}</h2>
                <p className="text-muted small mb-3">{additionalLegalCards[5].sectionSub}</p>
                <div className="card border rounded-4 bg-light">
                  <div className="card-body p-3">
                    <h3 className="fs-6 fw-bold mb-2">{additionalLegalCards[5].title}</h3>
                    <p className="text-muted small mb-0">{additionalLegalCards[5].desc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.sectionHead}>
              <span className={styles.sectionKicker}>Planning</span>
              <h2 className={styles.sectionTitle}>{legalPage.estateHeading}</h2>
              <p className={styles.sectionSub}>{legalPage.estateSub}</p>
            </div>
            <div className="row g-3 mb-3">
              {estatePlanningCards.map((e) => (
                <div className="col-md-6" key={e.title}>
                  <div className={`card h-100 border-0 shadow-sm ${d.hubPanel}`}>
                    <div className="card-body p-3">
                      <h3 className="fs-6 fw-bold mb-2">{e.title}</h3>
                      <p className="text-muted small mb-0">{e.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.sectionHead}>
              <span className={styles.sectionKicker}>Transfers</span>
              <h2 className={styles.sectionTitle}>{legalPage.transferHeading}</h2>
              <p className={styles.sectionSub}>{legalPage.transferSub}</p>
            </div>
            <div className="row g-3 mb-3">
              {propertyTransferCards.map((p) => (
                <div className="col-md-6" key={p.title}>
                  <div className={`card h-100 border-0 shadow-sm ${d.hubPanel}`}>
                    <div className="card-body p-3">
                      <h3 className="fs-6 fw-bold mb-2">{p.title}</h3>
                      <p className="text-muted small mb-0">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.sectionHead}>
              <span className={styles.sectionKicker}>Experts</span>
              <h2 className={styles.sectionTitle}>{legalPage.featuredHeading}</h2>
              <p className={styles.sectionSub}>{legalPage.featuredSub}</p>
            </div>
            <div className="d-flex flex-column gap-3">
              {featuredLawyers.map((lawyer) => (
                <div className={`card border-0 shadow-sm ${d.hubPanel}`} key={lawyer.name}>
                  <div className="card-body p-3">
                    <div className="row align-items-center g-3">
                      <div className="col-md-5">
                        <div className="d-flex align-items-center gap-2 flex-wrap mb-1">
                          <h3 className="fs-6 fw-bold mb-0">{lawyer.name}</h3>
                          {lawyer.verified && (
                            <span className="badge label-light-warning rounded-pill small">
                              <i className="fa-solid fa-check me-1" aria-hidden />
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="text-muted small mb-1">{lawyer.specialization}</p>
                        <p className="text-muted small mb-1">Experience: {lawyer.experience} years</p>
                        <p className="text-muted small mb-0">
                          <i className="fa-solid fa-location-dot me-1" aria-hidden />
                          {lawyer.location}
                        </p>
                      </div>
                      <div className="col-md-4">
                        <p className="small mb-1">
                          <i className="fa-solid fa-star text-warning me-1" aria-hidden />
                          {lawyer.rating} ({lawyer.reviews} reviews)
                        </p>
                        <p className="small mb-1 fw-medium">{lawyer.fee}/consultation</p>
                        <p className="text-muted small mb-0">Languages: {lawyer.languages}</p>
                      </div>
                      <div className="col-md-3 d-flex flex-column gap-2">
                        <Link href="/contact" className="btn btn-main btn-sm rounded-pill">
                          <i className="fa-solid fa-video me-1" aria-hidden />
                          Book Video Call
                        </Link>
                        <Link href="/contact" className="btn btn-outline-main btn-sm rounded-pill">
                          <i className="fa-regular fa-comment-dots me-1" aria-hidden />
                          Chat Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className={`sticky-lg-top ${styles.stickyRail}`}>
              <div className={`card mb-3 ${styles.sidebarCard}`}>
                <div className={styles.submitHeader}>
                  <div className="d-flex align-items-center gap-3">
                    <span className={styles.submitHeaderIcon} aria-hidden>
                      <i className="fa-solid fa-file-signature" />
                    </span>
                    <div>
                      <h2 className="fs-6 fw-bold mb-0">Submit Your Case</h2>
                      <p className="text-muted small mb-0">Get matched with the right lawyer</p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-3">
                  <form>
                    <div className="mb-3">
                      <label className="form-label small fw-medium">Case Title</label>
                      <input
                        type="text"
                        className={`form-control ${styles.formControlRounded}`}
                        placeholder="Brief title for your case"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label small fw-medium">Case Description</label>
                      <textarea
                        className={`form-control ${styles.formControlRounded}`}
                        rows={4}
                        placeholder="Describe your legal issue in detail..."
                      />
                    </div>
                    <div className={`mb-3 p-3 text-center ${styles.uploadZone}`}>
                      <i className="fa-solid fa-cloud-arrow-up text-main fs-3 mb-2 d-block" aria-hidden />
                      <p className="small text-muted mb-0">
                        Click to upload or drag and drop.
                        <br />
                        PDF, DOC, JPG up to 10MB
                      </p>
                    </div>
                    <div className="mb-3">
                      <label className="form-label small fw-medium">Preferred Consultation Time</label>
                      <input
                        type="datetime-local"
                        className={`form-control ${styles.formControlRounded}`}
                      />
                    </div>
                    <button type="button" className={`btn btn-main w-100 rounded-pill py-2 fw-bold ${styles.submitBtn}`}>
                      Submit Case
                    </button>
                  </form>
                </div>
              </div>

              <div className={`card mb-3 ${styles.sidebarCard}`}>
                <div className="card-body p-3">
                  <h2 className="fs-6 fw-bold mb-3">Why Choose Our Legal Services?</h2>
                  <ul className="list-unstyled mb-0">
                    {whyChooseLegal.map((w) => (
                      <li key={w.title} className="d-flex gap-3 mb-3">
                        <span className="text-main mt-1 flex-shrink-0">
                          <i className={w.icon} aria-hidden />
                        </span>
                        <div>
                          <strong className="d-block small">{w.title}</strong>
                          <span className="text-muted small">{w.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`card ${styles.sidebarCard}`}>
                <div className="card-body p-3">
                  <h2 className="fs-6 fw-bold mb-3">Your Recent Cases</h2>
                  {recentCasesDisplay.map((c) => (
                    <div
                      key={c.title}
                      className={`border-start border-4 ps-3 mb-3 ${
                        c.variant === 'primary' ? 'border-primary' : 'border-success'
                      }`}
                    >
                      <strong className="d-block small">{c.title}</strong>
                      <span className="text-muted small">Status: {c.status}</span>
                    </div>
                  ))}
                  <Link href="/candidate-dashboard" className="btn btn-outline-main w-100 rounded-pill mt-2">
                    View All Cases
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
