'use client'

import { useMemo, useState } from 'react'
import styles from '../legal/legal-services-content.module.css'
import {
  fdHighlights,
  fdOffers,
  financePage,
  loanDocumentsChecklist,
  loanProducts,
  nriBankAccounts,
  panNewDocs,
  panUpdateItems,
} from '../../data/finance-services-data'
import ServiceCta from './service-cta'
import {
  ServiceFeatureList,
  ServicePageHeader,
  ServiceSectionHead,
  SvcLink,
  serviceDense,
} from './service-primitives'

type Tab = 'banking' | 'loans' | 'calculator' | 'pan'

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: 'banking', label: 'Banking & FD', icon: 'fa-solid fa-landmark' },
  { id: 'loans', label: 'Loans', icon: 'fa-solid fa-hand-holding-dollar' },
  { id: 'calculator', label: 'EMI', icon: 'fa-solid fa-calculator' },
  { id: 'pan', label: 'PAN', icon: 'fa-solid fa-id-card' },
]

export default function FinanceServicesView() {
  const [tab, setTab] = useState<Tab>('banking')
  const [loanAmount, setLoanAmount] = useState('')
  const [rate, setRate] = useState('12')
  const [years, setYears] = useState('5')
  const [emiResult, setEmiResult] = useState<number | null>(null)
  const d = serviceDense

  const emi = useMemo(() => {
    const p = parseFloat(loanAmount)
    const rAnnual = parseFloat(rate)
    const y = parseFloat(years)
    if (!p || !rAnnual || !y || p <= 0) return null
    const monthlyRate = rAnnual / 12 / 100
    const n = y * 12
    const x = Math.pow(1 + monthlyRate, n)
    return (p * monthlyRate * x) / (x - 1)
  }, [loanAmount, rate, years])

  return (
    <>
      <ServicePageHeader
        title={financePage.title}
        subtitle={financePage.subtitle}
        iconClass="fa-solid fa-indian-rupee-sign"
      />

      <div className={d.tabBar}>
        <ul
          className={`nav nav-pills flex-column flex-sm-row flex-sm-nowrap gap-1 overflow-auto ${d.tabNav}`}
          role="tablist"
        >
          {tabs.map((t) => (
            <li className="nav-item flex-shrink-0" key={t.id}>
              <button
                type="button"
                className={`nav-link ${tab === t.id ? 'active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                <i className={`${t.icon} me-1`} aria-hidden />
                {t.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {tab === 'banking' && (
        <div className={`row ${d.rowDense}`}>
          <div className="col-12">
            <div className={`card border-0 shadow-sm ${d.hubPanel}`}>
              <div className={`card-body ${d.cardBodyMd}`}>
                <ServiceSectionHead
                  kicker="Fixed deposits"
                  title="Indicative FD rates"
                  sub="Rates change with issuer policy — we confirm live quotes on request."
                  iconClass="fa-solid fa-chart-line"
                />
                <div className={`row ${d.rowDense} mb-1`}>
                  {fdHighlights.map((h) => (
                    <div className="col-6 col-md-3" key={h.label}>
                      <div className={d.statTile}>
                        <div className={d.statValue}>{h.value}</div>
                        <div className={d.statLabel}>{h.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`row ${d.rowDense}`}>
                  {fdOffers.map((o) => (
                    <div className="col-md-4" key={o.name}>
                      <div className={`${d.fdIssuer} shadow-sm`}>
                        <div className={`card-body ${d.cardBody} d-flex flex-column`}>
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <div className="d-flex align-items-center gap-2 min-w-0">
                              <span className={d.fdInitial}>{o.initial}</span>
                              <span className="fw-semibold small text-truncate">{o.name}</span>
                            </div>
                            <span className="badge rounded-pill bg-success-subtle text-success-emphasis small">{o.rate}</span>
                          </div>
                          <div className="small text-muted d-flex justify-content-between mb-3" style={{ fontSize: '0.8rem' }}>
                            <span>Min {o.min}</span>
                            <span>{o.tenure}</span>
                          </div>
                          <div className="mt-auto d-flex justify-content-end">
                            <SvcLink href="/contact" size="sm">
                              Get quote
                            </SvcLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className={`card border-0 shadow-sm ${d.hubPanel}`}>
              <div className={`card-body ${d.cardBodyMd}`}>
                <ServiceSectionHead
                  kicker="Accounts"
                  title="NRE / NRO / FCNR onboarding"
                  sub="We coordinate documentation and bank introductions."
                  iconClass="fa-solid fa-building-columns"
                />
                <div className={`row ${d.rowDense}`}>
                  {nriBankAccounts.map((b) => (
                    <div className="col-md-6 col-xl-3" key={b.bank}>
                      <div className={`${d.bankTile} shadow-sm`}>
                        <div className={`card-body text-center ${d.cardBody}`}>
                          <div className={d.bankIcon}>
                            <i className="fa-solid fa-building-columns" aria-hidden />
                          </div>
                          <h3 className="fw-bold mt-2 mb-1" style={{ fontSize: '0.95rem' }}>
                            {b.bank}
                          </h3>
                          <p className="text-muted mb-2" style={{ fontSize: '0.8rem' }}>
                            {b.note}
                          </p>
                          <span className="badge rounded-pill bg-white border text-secondary-emphasis mb-3" style={{ fontSize: '0.7rem' }}>
                            {b.badge}
                          </span>
                          <div>
                            <SvcLink href="/contact" variant="outline" size="sm">
                              Apply
                            </SvcLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={d.formInset}>
                  <div className={d.formInsetTitle}>
                    <i className="fa-solid fa-paper-plane text-main" aria-hidden />
                    Quick account request
                  </div>
                  <div className={`row ${d.rowDense}`}>
                    <div className="col-md-6">
                      <label className="form-label small fw-medium text-muted">Account type</label>
                      <select className={`form-select ${styles.formControlRounded}`} defaultValue="">
                        <option value="" disabled>
                          Select
                        </option>
                        <option>NRE</option>
                        <option>NRO</option>
                        <option>FCNR</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-medium text-muted">Preferred bank</label>
                      <select className={`form-select ${styles.formControlRounded}`} defaultValue="">
                        <option value="" disabled>
                          Select
                        </option>
                        <option>ICICI Bank</option>
                        <option>HDFC Bank</option>
                        <option>SBI</option>
                        <option>Axis Bank</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-medium text-muted">Country of residence</label>
                      <select className={`form-select ${styles.formControlRounded}`} defaultValue="">
                        <option value="" disabled>
                          Select
                        </option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Canada</option>
                        <option>Australia</option>
                        <option>Singapore</option>
                        <option>UAE</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-medium text-muted">Monthly income (USD)</label>
                      <select className={`form-select ${styles.formControlRounded}`} defaultValue="">
                        <option value="" disabled>
                          Range
                        </option>
                        <option>Under $3,000</option>
                        <option>$3,000 – $5,000</option>
                        <option>$5,000 – $10,000</option>
                        <option>Above $10,000</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <div className="form-check mt-1">
                        <input className="form-check-input" type="checkbox" id="no-pan" />
                        <label className="form-check-label small" htmlFor="no-pan">
                          I need help applying for PAN
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-end gap-2 mt-3 pt-2 border-top border-light">
                    <SvcLink href="/contact" size="sm">
                      Submit request
                    </SvcLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 'loans' && (
        <div className={`row ${d.rowDense}`}>
          <div className="col-lg-8">
            <div className={`row ${d.rowDense}`}>
              {loanProducts.map((loan) => (
                <div className="col-md-6" key={loan.id}>
                  <div className={`card h-100 border-0 shadow-sm ${d.hubPanel}`}>
                    <div className={`card-body ${d.cardBody} d-flex flex-column`}>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h3 className="fw-bold mb-0 d-flex align-items-center gap-2" style={{ fontSize: '0.95rem' }}>
                          <i className="fa-solid fa-file-contract text-main" aria-hidden />
                          {loan.title}
                        </h3>
                        <span className="badge rounded-pill bg-secondary-subtle text-secondary-emphasis" style={{ fontSize: '0.65rem' }}>
                          Popular
                        </span>
                      </div>
                      <p className="text-muted flex-grow-1 mb-2" style={{ fontSize: '0.875rem' }}>
                        {loan.description}
                      </p>
                      <ul className="list-unstyled small mb-3" style={{ fontSize: '0.8rem' }}>
                        <li className="d-flex justify-content-between py-1 border-bottom border-light">
                          <span className="text-muted">Rate</span>
                          <span className="fw-medium">{loan.interestRate}</span>
                        </li>
                        <li className="d-flex justify-content-between py-1 border-bottom border-light">
                          <span className="text-muted">Max amount</span>
                          <span className="fw-medium">{loan.maxAmount}</span>
                        </li>
                        <li className="d-flex justify-content-between py-1 border-bottom border-light">
                          <span className="text-muted">Tenure</span>
                          <span className="fw-medium">{loan.tenure}</span>
                        </li>
                        <li className="d-flex justify-content-between py-1">
                          <span className="text-muted">Processing</span>
                          <span className="fw-medium">{loan.processing}</span>
                        </li>
                      </ul>
                      <div className="mb-2">
                        <span className="text-muted d-block mb-1 small">Partner banks</span>
                        <div className="d-flex flex-wrap gap-1">
                          {loan.banks.map((bk) => (
                            <span key={bk} className="badge rounded-pill bg-light text-dark border" style={{ fontSize: '0.65rem' }}>
                              {bk}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ServiceFeatureList items={loan.features} />
                      <div className="mt-3 pt-2 border-top border-light">
                        <SvcLink href="/contact" size="sm">
                          Apply via NRI Suvidha
                        </SvcLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className={`card border-0 shadow-sm ${d.hubPanel}`}>
              <div className={`${styles.submitHeader} ${d.submitHeaderDense}`}>
                <h3 className="fw-bold mb-0 d-flex align-items-center gap-2" style={{ fontSize: '0.95rem' }}>
                  <i className="fa-solid fa-list-check text-main" aria-hidden />
                  Documents checklist
                </h3>
                <p className="text-muted mb-0 mt-1 small">Typical requirements — your bank may ask for more.</p>
              </div>
              <div className={`card-body ${d.cardBody}`}>
                <ServiceFeatureList items={loanDocumentsChecklist} />
                <div className="mt-3">
                  <SvcLink href="/contact" variant="outline" fullWidth size="sm">
                    Eligibility review
                  </SvcLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 'calculator' && (
        <div className={`row ${d.rowDense}`}>
          <div className="col-lg-6">
            <div className={`card border-0 shadow-sm ${d.hubPanel}`}>
              <div className={`card-body ${d.cardBodyMd}`}>
                <h3 className="fw-bold mb-3 d-flex align-items-center gap-2" style={{ fontSize: '1rem' }}>
                  <i className="fa-solid fa-calculator text-main" aria-hidden />
                  EMI calculator
                </h3>
                <div className="mb-3">
                  <label className="form-label small fw-medium text-muted">Loan amount (₹)</label>
                  <input
                    type="number"
                    className={`form-control ${styles.formControlRounded}`}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    min={0}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-medium text-muted">Interest (% p.a.)</label>
                  <input
                    type="number"
                    className={`form-control ${styles.formControlRounded}`}
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-medium text-muted">Tenure (years)</label>
                  <input
                    type="number"
                    className={`form-control ${styles.formControlRounded}`}
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-wrap gap-2 align-items-center">
                  <button
                    type="button"
                    className={`btn btn-main rounded-pill px-4 ${styles.submitBtn}`}
                    onClick={() => setEmiResult(emi)}
                  >
                    Calculate EMI
                  </button>
                  {emiResult != null && !Number.isNaN(emiResult) && (
                    <span className="fw-semibold text-main">≈ ₹{Math.round(emiResult).toLocaleString('en-IN')}/mo</span>
                  )}
                </div>
                <p className="text-muted mt-3 mb-0 small">Illustrative estimate — not a bank offer. Taxes and fees extra.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={`card border-0 shadow-sm ${d.hubPanel}`}>
              <div className={`card-body ${d.cardBodyMd}`}>
                <h3 className="fw-bold mb-2 d-flex align-items-center gap-2" style={{ fontSize: '1rem' }}>
                  <i className="fa-solid fa-user-check text-main" aria-hidden />
                  Eligibility snapshot
                </h3>
                <p className="text-muted mb-3" style={{ fontSize: '0.875rem' }}>
                  Share salary or business income and existing EMIs — we model what lenders may offer before you apply.
                </p>
                <SvcLink href="/contact" variant="outline" size="sm">
                  Request eligibility review
                </SvcLink>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 'pan' && (
        <div className={`row ${d.rowDense}`}>
          <div className="col-md-6">
            <div className={`card h-100 border-0 shadow-sm ${d.hubPanel}`}>
              <div className={`card-body ${d.cardBodyMd}`}>
                <h3 className="fw-bold mb-2 d-flex align-items-center gap-2" style={{ fontSize: '1rem' }}>
                  <i className="fa-solid fa-plus text-main" aria-hidden />
                  New PAN (NRI)
                </h3>
                <ServiceFeatureList items={panNewDocs} />
                <p className="text-muted mt-2 mb-3 small">Typically 15–20 business days after complete documents.</p>
                <SvcLink href="/contact" size="sm">
                  Start PAN application
                </SvcLink>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`card h-100 border-0 shadow-sm ${d.hubPanel}`}>
              <div className={`card-body ${d.cardBodyMd}`}>
                <h3 className="fw-bold mb-2 d-flex align-items-center gap-2" style={{ fontSize: '1rem' }}>
                  <i className="fa-solid fa-pen-to-square text-main" aria-hidden />
                  Update existing PAN
                </h3>
                <ServiceFeatureList items={panUpdateItems} />
                <p className="text-muted mt-2 mb-3 small">Many updates clear in 7–10 business days.</p>
                <SvcLink href="/contact" variant="outline" size="sm">
                  Request update
                </SvcLink>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className={`alert alert-warning border-0 rounded-4 mb-0 shadow-sm ${d.alertCompact}`}>
              <i className="fa-solid fa-headset me-2 text-main" aria-hidden />
              <strong>NRI PAN desk</strong> — we coordinate forms, attestations, and tracking until dispatch.
            </div>
          </div>
        </div>
      )}

      <ServiceCta />
    </>
  )
}
