'use client'

import { useState } from 'react'
import styles from '../legal/legal-services-content.module.css'
import { bookingLawyers, bookingTimeSlots, consultationPage } from '../../data/legal-flow-tools-data'
import ServiceCta from './service-cta'
import { ServicePageHeader, SvcLink, serviceDense } from './service-primitives'

export default function LegalConsultationBookingView() {
  const [lawyerId, setLawyerId] = useState<string>(bookingLawyers[0]?.id ?? '')
  const [slot, setSlot] = useState<string>(bookingTimeSlots[0] ?? '')
  const [date, setDate] = useState('')
  const d = serviceDense

  const lawyer = bookingLawyers.find((l) => l.id === lawyerId)

  return (
    <>
      <ServicePageHeader
        title={consultationPage.title}
        subtitle={consultationPage.subtitle}
        iconClass="fa-solid fa-video"
      />

      <div className={`row ${d.rowDense}`}>
        <div className="col-lg-7">
          <div className={`row ${d.rowDense}`}>
            {bookingLawyers.map((l) => (
              <div className="col-12" key={l.id}>
                <button
                  type="button"
                  onClick={() => setLawyerId(l.id)}
                  className={`card w-100 text-start border-0 shadow-sm ${d.cardBody} ${d.hubPanel} ${
                    lawyerId === l.id ? 'border-main border-2' : ''
                  }`}
                >
                  <div className="d-flex justify-content-between flex-wrap gap-2 align-items-start">
                    <div className="d-flex gap-2 min-w-0">
                      <span className={d.iconBubbleSm} aria-hidden>
                        <i className="fa-solid fa-user-tie" />
                      </span>
                      <div className="min-w-0">
                        <div className="fw-bold small">{l.name}</div>
                        <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                          {l.specialization} · {l.experience}
                        </div>
                        <div style={{ fontSize: '0.75rem' }}>
                          <i className="fa-solid fa-star text-warning me-1" aria-hidden />
                          {l.rating}
                          <span className="text-muted ms-2">{l.availability}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-end flex-shrink-0">
                      <div className="text-main fw-bold small">{l.fee}</div>
                      <div className="text-muted" style={{ fontSize: '0.65rem' }}>
                        / session
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-5">
          <div className={`card shadow-sm ${styles.sidebarCard}`}>
            <div className={`${styles.submitHeader} ${d.submitHeaderDense}`}>
              <h2 className="small fw-bold mb-0 d-flex align-items-center gap-2">
                <i className="fa-regular fa-calendar text-main" aria-hidden />
                Schedule
              </h2>
              <p className="text-muted mb-0 mt-1" style={{ fontSize: '0.75rem' }}>
                {lawyer ? (
                  <>
                    <strong>{lawyer.name}</strong>
                  </>
                ) : (
                  'Select a lawyer'
                )}
              </p>
            </div>
            <div className={`card-body ${d.cardBody}`}>
              <div className="mb-2">
                <label className="form-label mb-1" style={{ fontSize: '0.75rem' }} htmlFor="consult-date">
                  Date
                </label>
                <input
                  id="consult-date"
                  type="date"
                  className={`form-control form-control-sm ${styles.formControlRounded}`}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <span className="form-label d-block mb-1" style={{ fontSize: '0.75rem' }}>
                  IST slots
                </span>
                <div className="d-flex flex-wrap gap-1">
                  {bookingTimeSlots.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`btn btn-sm rounded-pill px-2 ${slot === t ? 'btn-main' : 'btn-outline-secondary'}`}
                      style={{ fontSize: '0.7rem' }}
                      onClick={() => setSlot(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                className={`form-control form-control-sm ${styles.formControlRounded} mb-2`}
                rows={2}
                placeholder="Brief context (optional)"
              />
              <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between">
                <SvcLink href="/contact" size="sm">
                  Concierge
                </SvcLink>
                <span className="text-muted" style={{ fontSize: '0.65rem' }}>
                  Calendar confirmed by team
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceCta />
    </>
  )
}
