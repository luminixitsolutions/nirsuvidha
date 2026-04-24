import {
  investmentPage,
  investmentProcess,
  investmentUniverse,
  recommendationStrip,
} from '../../data/investment-services-data'
import ServiceCta from './service-cta'
import { ServiceFeatureList, ServicePageHeader, ServiceSectionHead, SvcLink, serviceDense } from './service-primitives'

function riskBadge(risk: string) {
  if (risk === 'Low') return 'text-bg-success'
  if (risk === 'Moderate') return 'text-bg-warning text-dark'
  if (risk === 'High') return 'text-bg-warning text-dark'
  return 'text-bg-danger'
}

export default function InvestmentServicesContent() {
  const d = serviceDense
  return (
    <>
      <ServicePageHeader
        title={investmentPage.title}
        subtitle={investmentPage.subtitle}
        iconClass="fa-solid fa-chart-line"
      />

      <div className={`card border-0 shadow-sm mb-3 ${d.hubPanel}`}>
        <div className={`card-body ${d.cardBodyMd}`}>
          <ServiceSectionHead
            kicker="Themes"
            title="Illustrative ideas"
            sub="Not personalized advice — book a call for suitability and KYC-compliant channels."
            iconClass="fa-solid fa-lightbulb"
          />
          <div className={`row ${d.rowDense}`}>
            {recommendationStrip.map((r) => (
              <div className="col-md-4" key={r.name}>
                <div className={`p-2 p-md-3 h-100 ${d.statTile}`} style={{ textAlign: 'left' }}>
                  <div className={`small fw-bold mb-1 ${r.tagClass}`}>{r.tag}</div>
                  <div className="small fw-semibold">{r.name}</div>
                  <p className="text-muted mb-0 mt-1" style={{ fontSize: '0.75rem' }}>
                    {r.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ServiceSectionHead
        kicker="Universe"
        title="Sample instruments"
        sub="Illustrative names — onboarding only via regulated partners."
        iconClass="fa-solid fa-table"
        className={d.mbSection}
      />

      <div className={`table-responsive mb-3 rounded-3 border shadow-sm ${d.hubPanel} p-0 overflow-hidden`}>
        <table className={`table table-hover align-middle bg-white rounded-3 overflow-hidden shadow-sm table-sm mb-0 ${d.tableDense}`}>
          <thead className="table-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col" className="d-none d-md-table-cell">
                Category
              </th>
              <th scope="col">NAV</th>
              <th scope="col">Return</th>
              <th scope="col">Risk</th>
              <th scope="col" className="text-end" />
            </tr>
          </thead>
          <tbody>
            {investmentUniverse.map((row) => (
              <tr key={row.name}>
                <td className="fw-medium" style={{ fontSize: '0.8125rem' }}>
                  {row.name}
                </td>
                <td className="text-muted d-none d-md-table-cell" style={{ fontSize: '0.75rem' }}>
                  {row.category}
                </td>
                <td style={{ fontSize: '0.8125rem' }}>{row.nav}</td>
                <td className="text-success" style={{ fontSize: '0.8125rem' }}>
                  {row.ret}
                </td>
                <td>
                  <span className={`badge rounded-pill ${riskBadge(row.risk)}`} style={{ fontSize: '0.65rem' }}>
                    {row.risk}
                  </span>
                </td>
                <td className="text-end">
                  <SvcLink href="/contact">Enquire</SvcLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`row ${d.rowDense} mb-2`}>
        {investmentProcess.map((s) => (
          <div className="col-md-4" key={s.title}>
            <div className={`card h-100 border-0 shadow-sm ${d.hubPanel}`}>
              <div className={`card-body ${d.cardBody}`}>
                <h3 className="small fw-bold mb-1 d-flex align-items-center gap-2">
                  <i className="fa-solid fa-arrow-right-arrow-left text-main" style={{ fontSize: '0.75rem' }} aria-hidden />
                  {s.title}
                </h3>
                <p className="text-muted mb-0" style={{ fontSize: '0.8125rem' }}>
                  {s.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ServiceCta />
    </>
  )
}
