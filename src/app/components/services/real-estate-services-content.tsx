import styles from '../legal/legal-services-content.module.css'
import {
  featuredListings,
  homeLoanPartners,
  propertyJourneys,
  realEstatePage,
  verificationLink,
} from '../../data/real-estate-services-data'
import ServiceCta from './service-cta'
import { ServicePageHeader, ServiceSectionHead, SvcLink, serviceDense } from './service-primitives'

export default function RealEstateServicesContent() {
  const d = serviceDense
  return (
    <>
      <ServicePageHeader
        title={realEstatePage.title}
        subtitle={realEstatePage.subtitle}
        iconClass="fa-solid fa-house-chimney"
      />

      <div className={`row ${d.rowDense} mb-3`}>
        {propertyJourneys.map((j) => (
          <div className="col-md-6 col-xl-3" key={j.title}>
            <div className={`card h-100 border-0 shadow-sm text-center ${d.hubPanel}`}>
              <div className={`card-body ${d.cardBody}`}>
                <span className={d.iconBubbleSm} aria-hidden>
                  <i className={j.icon} />
                </span>
                <h3 className="small fw-bold mt-2 mb-1">{j.title}</h3>
                <p className="text-muted mb-2" style={{ fontSize: '0.75rem' }}>
                  {j.desc}
                </p>
                <SvcLink href="/contact" variant="outline">
                  Discuss
                </SvcLink>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`row ${d.rowDense} mb-3`}>
        <div className="col-lg-7">
          <div className={`card border-0 shadow-sm h-100 ${d.hubPanel}`}>
            <div className={`card-body ${d.cardBodyMd}`}>
              <h2 className="small fw-bold mb-2 d-flex align-items-center gap-2">
                <i className="fa-solid fa-magnifying-glass-location text-main" aria-hidden />
                Property brief
              </h2>
              <div className={`row ${d.rowDense}`}>
                <div className="col-md-6">
                  <label className="form-label mb-1" style={{ fontSize: '0.75rem' }}>
                    City / micro-market
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${styles.formControlRounded}`}
                    placeholder="e.g. Pune — Baner"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label mb-1" style={{ fontSize: '0.75rem' }}>
                    Budget (₹)
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${styles.formControlRounded}`}
                    placeholder="Range"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label mb-1" style={{ fontSize: '0.75rem' }}>
                    Configuration
                  </label>
                  <select className={`form-select form-select-sm ${styles.formControlRounded}`} defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    <option>1 BHK</option>
                    <option>2 BHK</option>
                    <option>3 BHK</option>
                    <option>4+ BHK</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label mb-1" style={{ fontSize: '0.75rem' }}>
                    Intent
                  </label>
                  <select className={`form-select form-select-sm ${styles.formControlRounded}`} defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    <option>Buy</option>
                    <option>Sell</option>
                    <option>Rent</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-2">
                <SvcLink href="/contact" size="sm">
                  Submit brief
                </SvcLink>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className={`card h-100 border-0 shadow-sm ${d.hubPanel}`}>
            <div className={`card-body ${d.cardBodyMd}`}>
              <h2 className="small fw-bold mb-1 d-flex align-items-center gap-2">
                <i className="fa-solid fa-building-circle-check text-main" aria-hidden />
                Example listings
              </h2>
              <p className="text-muted mb-2" style={{ fontSize: '0.75rem' }}>
                Illustrative — not live inventory.
              </p>
              <ul className="list-unstyled mb-0">
                {featuredListings.map((p) => (
                  <li key={p.title} className="mb-2 pb-2 border-bottom">
                    <div className="fw-semibold small">{p.title}</div>
                    <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                      {p.location}
                    </div>
                    <div className="text-main fw-bold small">{p.price}</div>
                    <div className="text-muted" style={{ fontSize: '0.7rem' }}>
                      {p.meta}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={`card border-0 shadow-sm mb-3 ${d.hubPanel}`}>
        <div className={`card-body ${d.cardBodyMd}`}>
          <ServiceSectionHead
            kicker="Home loans"
            title="Partner lenders (indicative)"
            sub="We compare offers and coordinate documentation."
            iconClass="fa-solid fa-building-columns"
          />
          <div className="table-responsive">
            <table className={`table table-sm align-middle mb-0 ${d.tableDense}`}>
              <thead>
                <tr>
                  <th>Lender</th>
                  <th>Rate</th>
                  <th>Fee</th>
                  <th className="text-end" />
                </tr>
              </thead>
              <tbody>
                {homeLoanPartners.map((h) => (
                  <tr key={h.name}>
                    <td>{h.name}</td>
                    <td>{h.rate}</td>
                    <td>{h.fee}</td>
                    <td className="text-end">
                      <SvcLink href="/contact">Enquire</SvcLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        className={`alert alert-primary border-0 rounded-3 d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2 ${d.alertCompact}`}
      >
        <div className="d-flex gap-2 align-items-start">
          <i className="fa-solid fa-shield-halved mt-1" aria-hidden />
          <div>
            <div className="fw-bold small">{verificationLink.label}</div>
            <p className="mb-0 text-muted" style={{ fontSize: '0.75rem' }}>
              {verificationLink.desc}
            </p>
          </div>
        </div>
        <SvcLink href={verificationLink.href} size="sm">
          Verification
        </SvcLink>
      </div>

      <ServiceCta />
    </>
  )
}
