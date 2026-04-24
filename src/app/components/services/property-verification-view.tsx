'use client'

import Link from 'next/link'
import styles from '../legal/legal-services-content.module.css'
import { propertyVerificationPage, verificationChecks } from '../../data/legal-flow-tools-data'
import ServiceCta from './service-cta'
import { ServicePageHeader, SvcLink, serviceDense } from './service-primitives'

function statusClass(status: (typeof verificationChecks)[number]['status']) {
  if (status === 'completed') return 'text-success'
  if (status === 'processing') return 'text-warning'
  return 'text-muted'
}

export default function PropertyVerificationView() {
  const d = serviceDense
  return (
    <>
      <ServicePageHeader
        title={propertyVerificationPage.title}
        subtitle={propertyVerificationPage.subtitle}
        iconClass="fa-solid fa-shield-halved"
      />

      <div className={`row ${d.rowDense}`}>
        <div className="col-lg-7">
          <div className={`card border-0 shadow-sm ${d.hubPanel}`}>
            <div className={`card-body ${d.cardBodyMd}`}>
              <h2 className="small fw-bold mb-2 d-flex align-items-center gap-2">
                <i className="fa-solid fa-cloud-arrow-up text-main" aria-hidden />
                Upload
              </h2>
              <p className="text-muted mb-2" style={{ fontSize: '0.75rem' }}>
                Encrypted channels in production. PDF, JPG, PNG up to 10 MB.
              </p>
              <div className={`${styles.uploadZone} ${d.uploadZoneDense} text-center mb-2`}>
                <i className="fa-solid fa-cloud-arrow-up text-main mb-1" style={{ fontSize: '1.25rem' }} aria-hidden />
                <div className="fw-semibold small">Drop or choose files</div>
                <p className="text-muted mb-2" style={{ fontSize: '0.7rem' }}>
                  Title deed, sale deed, EC…
                </p>
                <button type="button" className="btn btn-sm btn-outline-main rounded-pill">
                  <i className="fa-solid fa-folder-open me-1" aria-hidden />
                  Browse
                </button>
              </div>
              <div className={`row ${d.rowDense} small`}>
                <div className="col-md-6">
                  <span className="fw-semibold d-block mb-1" style={{ fontSize: '0.75rem' }}>
                    Required
                  </span>
                  <ul className="text-muted ps-3 mb-0" style={{ fontSize: '0.75rem' }}>
                    <li>Title deed</li>
                    <li>Sale deed chain</li>
                    <li>Encumbrance certificate</li>
                    <li>Survey / sketch</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <span className="fw-semibold d-block mb-1" style={{ fontSize: '0.75rem' }}>
                    Optional
                  </span>
                  <ul className="text-muted ps-3 mb-0" style={{ fontSize: '0.75rem' }}>
                    <li>Property tax</li>
                    <li>Approved plans</li>
                    <li>Utility bills</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={`card border-0 shadow-sm mt-2 ${d.hubPanel}`}>
            <div className={`card-body ${d.cardBodyMd}`}>
              <h2 className="small fw-bold mb-2 d-flex align-items-center gap-2">
                <i className="fa-solid fa-location-dot text-main" aria-hidden />
                Property facts
              </h2>
              <div className={`row ${d.rowDense}`}>
                <div className="col-md-6">
                  <label className="form-label mb-1" style={{ fontSize: '0.75rem' }}>
                    Type
                  </label>
                  <select className={`form-select form-select-sm ${styles.formControlRounded}`} defaultValue="Residential">
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Agricultural</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label mb-1" style={{ fontSize: '0.75rem' }}>
                    State
                  </label>
                  <input type="text" className={`form-control form-control-sm ${styles.formControlRounded}`} />
                </div>
                <div className="col-12">
                  <label className="form-label mb-1" style={{ fontSize: '0.75rem' }}>
                    Address
                  </label>
                  <textarea className={`form-control form-control-sm ${styles.formControlRounded}`} rows={2} />
                </div>
              </div>
              <div className="d-flex justify-content-end mt-2">
                <SvcLink href="/contact" size="sm">
                  Submit
                </SvcLink>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className={`card shadow-sm ${styles.sidebarCard}`}>
            <div className={`${styles.submitHeader} ${d.submitHeaderDense}`}>
              <h2 className="small fw-bold mb-0 d-flex align-items-center gap-2">
                <i className="fa-solid fa-list-check text-main" aria-hidden />
                Checklist
              </h2>
              <p className="text-muted mb-0 mt-1" style={{ fontSize: '0.7rem' }}>
                Illustrative — final report from our desk.
              </p>
            </div>
            <div className={`card-body ${d.cardBody}`}>
              <ul className="list-unstyled mb-0">
                {verificationChecks.map((c) => (
                  <li
                    key={c.name}
                    className="d-flex justify-content-between align-items-center py-1 border-bottom"
                    style={{ fontSize: '0.75rem' }}
                  >
                    <span>{c.name}</span>
                    <span className={`fw-semibold ${statusClass(c.status)}`}>{c.result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`alert alert-info border-0 rounded-3 mt-2 mb-0 ${d.alertCompact}`}>
            <i className="fa-solid fa-house me-2" aria-hidden />
            Bundle with purchase?{' '}
            <Link href="/real-estate-services" className="alert-link">
              Real estate
            </Link>
          </div>
        </div>
      </div>

      <ServiceCta />
    </>
  )
}
