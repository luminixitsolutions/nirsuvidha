import { advisoryBlocks, businessPage, incorporationOptions } from '../../data/business-consulting-data'
import ServiceCta from './service-cta'
import { ServiceFeatureList, ServicePageHeader, ServiceSectionHead, SvcLink, serviceDense } from './service-primitives'

const incIcons = ['fa-solid fa-building', 'fa-solid fa-users', 'fa-solid fa-handshake'] as const

export default function BusinessConsultingContent() {
  const d = serviceDense
  return (
    <>
      <ServicePageHeader
        title={businessPage.title}
        subtitle={businessPage.subtitle}
        iconClass="fa-solid fa-briefcase"
      />

      <ServiceSectionHead
        kicker="Incorporation"
        title="Choose a structure"
        sub="We file, you operate — clear compliance calendars."
        iconClass="fa-solid fa-diagram-project"
        className={d.mbSection}
      />

      <div className={`row ${d.rowDense} mb-3`}>
        {incorporationOptions.map((o, i) => (
          <div className="col-lg-4" key={o.title}>
            <div className={`card h-100 border-0 shadow-sm ${d.hubPanel}`}>
              <div className={`card-body ${d.cardBodyMd} d-flex flex-column`}>
                <h3 className="small fw-bold text-main mb-1 d-flex align-items-center gap-2">
                  <i className={incIcons[i] ?? 'fa-solid fa-circle'} aria-hidden />
                  {o.title}
                </h3>
                <p className="text-muted mb-2" style={{ fontSize: '0.8125rem' }}>
                  {o.desc}
                </p>
                <ServiceFeatureList items={o.points} />
                <div className="mt-2">
                  <SvcLink href="/contact">{o.cta}</SvcLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ServiceSectionHead
        kicker="Advisory"
        title="Compliance & strategy"
        sub="Retainers or one-off — scoped after discovery."
        iconClass="fa-solid fa-clipboard-list"
        className={d.mbSection}
      />

      <div className={`row ${d.rowDense}`}>
        {advisoryBlocks.map((b) => (
          <div className="col-md-6" key={b.title}>
            <div className={`card h-100 border-0 shadow-sm ${d.hubPanel}`}>
              <div className={`card-body ${d.cardBodyMd}`}>
                <h3 className="small fw-bold mb-1">{b.title}</h3>
                <p className="text-muted mb-2" style={{ fontSize: '0.8125rem' }}>
                  {b.desc}
                </p>
                <ServiceFeatureList items={b.bullets} />
                <div className="d-flex flex-wrap gap-2 mt-2">
                  <SvcLink href="/contact" size="sm">
                    {b.primary}
                  </SvcLink>
                  <SvcLink href="/contact" variant="outline" size="sm">
                    {b.secondary}
                  </SvcLink>
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
