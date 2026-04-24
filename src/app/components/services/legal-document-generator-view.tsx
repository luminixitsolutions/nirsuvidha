'use client'

import { useState } from 'react'
import styles from '../legal/legal-services-content.module.css'
import { documentGeneratorPage, documentTypes } from '../../data/legal-flow-tools-data'
import ServiceCta from './service-cta'
import { ServicePageHeader, SvcLink, serviceDense } from './service-primitives'

const steps = ['Choose', 'Details', 'Review', 'Next'] as const

export default function LegalDocumentGeneratorView() {
  const [step, setStep] = useState(1)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const d = serviceDense

  const selected = documentTypes.find((doc) => doc.id === selectedId)

  return (
    <>
      <ServicePageHeader
        title={documentGeneratorPage.title}
        subtitle={documentGeneratorPage.subtitle}
        iconClass="fa-solid fa-file-signature"
      />

      <div className="mb-3">
        <div className={`progress rounded-pill ${d.stepBar}`}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${(step / 4) * 100}%`, backgroundColor: 'var(--maincolor)' }}
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={4}
          />
        </div>
        <div className="d-flex justify-content-between text-muted mt-1" style={{ fontSize: '0.65rem' }}>
          {steps.map((s, i) => (
            <span key={s} className={i + 1 <= step ? 'text-main fw-semibold' : ''}>
              {i + 1}. {s}
            </span>
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className={`row ${d.rowDense}`}>
          {documentTypes.map((doc) => (
            <div className="col-md-6" key={doc.id}>
              <button
                type="button"
                onClick={() => setSelectedId(doc.id)}
                className={`card h-100 text-start w-100 border-0 shadow-sm ${d.cardBody} ${d.hubPanel} ${
                  selectedId === doc.id ? 'border-main border-2' : ''
                }`}
              >
                <div className="d-flex justify-content-between gap-2 mb-1">
                  <span className="fw-bold small d-flex align-items-center gap-2">
                    <i className="fa-regular fa-file-lines text-main" aria-hidden />
                    {doc.name}
                  </span>
                  <span className="text-main fw-bold" style={{ fontSize: '0.75rem' }}>
                    {doc.fee}
                  </span>
                </div>
                <p className="text-muted mb-0" style={{ fontSize: '0.75rem' }}>
                  {doc.description}
                </p>
              </button>
            </div>
          ))}
        </div>
      )}

      {step === 2 && (
        <div className={`card border-0 shadow-sm ${d.hubPanel}`}>
          <div className={`card-body ${d.cardBodyMd}`}>
            <h2 className="small fw-bold mb-2 d-flex align-items-center gap-2">
              <i className="fa-solid fa-pen text-main" aria-hidden />
              Your details
            </h2>
            <p className="text-muted mb-2" style={{ fontSize: '0.75rem' }}>
              {selected ? (
                <>
                  Selected: <strong>{selected.name}</strong>
                </>
              ) : (
                'Select a document type in step 1.'
              )}
            </p>
            <div className={`row ${d.rowDense}`}>
              <div className="col-md-6">
                <label className="form-label mb-1" style={{ fontSize: '0.75rem' }}>
                  Full name
                </label>
                <input type="text" className={`form-control form-control-sm ${styles.formControlRounded}`} autoComplete="name" />
              </div>
              <div className="col-md-6">
                <label className="form-label mb-1" style={{ fontSize: '0.75rem' }}>
                  Email
                </label>
                <input type="email" className={`form-control form-control-sm ${styles.formControlRounded}`} autoComplete="email" />
              </div>
              <div className="col-md-6">
                <label className="form-label mb-1" style={{ fontSize: '0.75rem' }}>
                  Phone
                </label>
                <input type="tel" className={`form-control form-control-sm ${styles.formControlRounded}`} autoComplete="tel" />
              </div>
              <div className="col-md-6">
                <label className="form-label mb-1" style={{ fontSize: '0.75rem' }}>
                  City (India)
                </label>
                <input type="text" className={`form-control form-control-sm ${styles.formControlRounded}`} />
              </div>
              {selectedId === 'power-of-attorney' && (
                <>
                  <div className="col-12">
                    <label className="form-label mb-1" style={{ fontSize: '0.75rem' }}>
                      Attorney name
                    </label>
                    <input type="text" className={`form-control form-control-sm ${styles.formControlRounded}`} />
                  </div>
                  <div className="col-12">
                    <label className="form-label mb-1" style={{ fontSize: '0.75rem' }}>
                      Powers
                    </label>
                    <textarea className={`form-control form-control-sm ${styles.formControlRounded}`} rows={3} />
                  </div>
                </>
              )}
              {selectedId === 'property-agreement' && (
                <>
                  <div className="col-12">
                    <label className="form-label mb-1" style={{ fontSize: '0.75rem' }}>
                      Property address
                    </label>
                    <textarea className={`form-control form-control-sm ${styles.formControlRounded}`} rows={2} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label mb-1" style={{ fontSize: '0.75rem' }}>
                      Consideration (₹)
                    </label>
                    <input type="text" className={`form-control form-control-sm ${styles.formControlRounded}`} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label mb-1" style={{ fontSize: '0.75rem' }}>
                      Counterparty
                    </label>
                    <input type="text" className={`form-control form-control-sm ${styles.formControlRounded}`} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className={`card border-0 shadow-sm ${d.hubPanel}`}>
          <div className={`card-body ${d.cardBodyMd}`}>
            <h2 className="small fw-bold mb-1 d-flex align-items-center gap-2">
              <i className="fa-solid fa-eye text-main" aria-hidden />
              Review
            </h2>
            <p className="text-muted mb-0" style={{ fontSize: '0.8125rem' }}>
              A lawyer validates facts before drafting. You’ll get a secure preview link — demo ends at desk hand-off.
            </p>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className={`card border-0 shadow-sm ${d.hubPanel}`}>
          <div className={`card-body ${d.cardBodyMd}`}>
            <h2 className="small fw-bold mb-2 d-flex align-items-center gap-2">
              <i className="fa-solid fa-route text-main" aria-hidden />
              Next steps
            </h2>
            <ol className="text-muted ps-3 mb-2" style={{ fontSize: '0.8125rem' }}>
              <li>Compliance & conflict checks.</li>
              <li>Draft shared for comments.</li>
              <li>E-sign or wet-sign for India.</li>
            </ol>
            <SvcLink href="/contact" size="sm">
              Escalate to review
            </SvcLink>
          </div>
        </div>
      )}

      <div className="d-flex flex-wrap justify-content-between gap-2 mt-3">
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary rounded-pill"
          disabled={step <= 1}
          onClick={() => setStep((s) => Math.max(1, s - 1))}
        >
          <i className="fa-solid fa-arrow-left me-1" aria-hidden />
          Back
        </button>
        <button
          type="button"
          className="btn btn-sm btn-main rounded-pill px-3"
          disabled={step === 1 && !selectedId}
          onClick={() => {
            if (step < 4) setStep((s) => s + 1)
          }}
        >
          {step >= 4 ? 'Done' : 'Continue'}
          {step < 4 ? <i className="fa-solid fa-arrow-right ms-1" aria-hidden /> : null}
        </button>
      </div>

      <ServiceCta />
    </>
  )
}
