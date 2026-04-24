import { taxationPage, taxationServices } from '../../data/taxation-services-data'
import ServiceCta from './service-cta'
import { ServiceFeatureList, ServicePageHeader, SvcLink, serviceDense } from './service-primitives'

const icons = [
  'fa-solid fa-file-invoice',
  'fa-solid fa-receipt',
  'fa-solid fa-coins',
  'fa-solid fa-scale-balanced',
] as const

export default function TaxationServicesContent() {
  const d = serviceDense
  return (
    <>
      <ServicePageHeader
        title={taxationPage.title}
        subtitle={taxationPage.subtitle}
        iconClass="fa-solid fa-file-invoice-dollar"
      />

      <div className={`row ${d.rowDense}`}>
        {taxationServices.map((s, i) => (
          <div className="col-md-6" key={s.title}>
            <div className={`card h-100 border-0 shadow-sm ${d.hubPanel}`}>
              <div className={`card-body ${d.cardBodyMd} d-flex flex-column`}>
                <h2 className="small fw-bold mb-1 d-flex align-items-center gap-2">
                  <span className={d.iconBubbleSm} aria-hidden>
                    <i className={icons[i] ?? 'fa-solid fa-check'} />
                  </span>
                  {s.title}
                </h2>
                <p className="text-muted flex-grow-1 mb-2" style={{ fontSize: '0.8125rem' }}>
                  {s.desc}
                </p>
                <ServiceFeatureList items={s.bullets} />
                <div className="mt-2">
                  <SvcLink href="/contact">{s.cta}</SvcLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ServiceCta />
    </>
  )
}
