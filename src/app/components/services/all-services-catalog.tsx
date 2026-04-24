'use client'

import { useState } from 'react'
import { allServicesPage, catalogStats, serviceCatalog } from '../../data/all-services-catalog-data'
import ServiceCta from './service-cta'
import { ServicePageHeader, SvcLink, serviceDense } from './service-primitives'

export default function AllServicesCatalog() {
  const [open, setOpen] = useState<string[]>(['legal', 'finance'])
  const d = serviceDense

  const toggle = (id: string) => {
    setOpen((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  return (
    <>
      <ServicePageHeader
        title={allServicesPage.title}
        subtitle={allServicesPage.subtitle}
        iconClass="fa-solid fa-layer-group"
      />

      <div className={`row ${d.rowDense} mb-3`}>
        {catalogStats.map((s) => (
          <div className="col-6 col-md-3" key={s.label}>
            <div className={`card text-center border-0 shadow-sm h-100 ${d.hubPanel}`}>
              <div className={`card-body ${d.cardBody}`}>
                <div className="fs-6 fw-bold text-main">{s.value}</div>
                <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                  {s.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="accordion" id="svcCatalog">
        {serviceCatalog.map((cat) => {
          const isOpen = open.includes(cat.id)
          return (
            <div className="accordion-item border-0 shadow-sm mb-2 rounded-3 overflow-hidden" key={cat.id}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${d.accordionBtn} ${isOpen ? '' : 'collapsed'}`}
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(cat.id)}
                >
                  <span className="d-flex align-items-center gap-2 gap-md-3 w-100">
                    <span className={d.iconBubbleSm}>
                      <i className={cat.icon} aria-hidden />
                    </span>
                    <span className="text-start flex-grow-1 min-w-0">
                      <span className="d-block fw-bold small">{cat.title}</span>
                      <span className="text-muted fw-normal" style={{ fontSize: '0.75rem' }}>
                        {cat.description}
                      </span>
                    </span>
                    <span className="badge bg-secondary-subtle text-secondary-emphasis" style={{ fontSize: '0.65rem' }}>
                      {cat.services.length}
                    </span>
                  </span>
                </button>
              </h2>
              {isOpen && (
                <div className="accordion-collapse">
                  <div className="accordion-body bg-white pt-0 px-2 px-md-3 pb-2">
                    <div className={`row ${d.rowDense}`}>
                      {cat.services.map((svc) => (
                        <div className="col-md-6" key={svc.name}>
                          <div className={`card h-100 border-0 shadow-sm ${d.hubPanel}`}>
                            <div className={`card-body ${d.cardBody} d-flex flex-column`}>
                              <div className="d-flex justify-content-between align-items-start gap-2 mb-1">
                                <h3 className="small fw-bold mb-0">{svc.name}</h3>
                                <span className="text-main fw-bold text-nowrap" style={{ fontSize: '0.8rem' }}>
                                  {svc.price}
                                </span>
                              </div>
                              <p className="text-muted mb-2" style={{ fontSize: '0.75rem' }}>
                                {svc.description}
                              </p>
                              <ul className="text-muted ps-3 mb-2" style={{ fontSize: '0.75rem' }}>
                                {svc.features.map((f) => (
                                  <li key={f}>{f}</li>
                                ))}
                              </ul>
                              <div className="d-flex flex-wrap gap-2 mt-auto justify-content-end">
                                <SvcLink href="/contact" size="sm">
                                  Book
                                </SvcLink>
                                <SvcLink href="/contact" variant="outline" size="sm">
                                  Question
                                </SvcLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <ServiceCta />
    </>
  )
}
