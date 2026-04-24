import Link from 'next/link'
import dense from './service-dense.module.css'

/** Bottom CTA — elevated strip with brand tint */
export default function ServiceCta() {
  return (
    <div
      className={`card border-0 shadow-sm mt-4 overflow-hidden rounded-4 ${dense.ctaStrip}`}
      style={{
        background:
          'linear-gradient(135deg, color-mix(in srgb, var(--maincolor), transparent 92%) 0%, #fff 45%, color-mix(in srgb, var(--maincolor), transparent 94%) 100%)',
        border: '1px solid color-mix(in srgb, var(--maincolor), transparent 78%)',
      }}
    >
      <div className={`card-body text-center ${dense.ctaCard}`}>
        <h3 className={`fw-bold mb-1 ${dense.ctaTitle}`} style={{ color: 'var(--headingcolor)' }}>
          <i className="fa-solid fa-comments text-main me-2" aria-hidden />
          Need help choosing?
        </h3>
        <p className="text-muted small mb-3 mx-auto" style={{ maxWidth: '28rem' }}>
          Specialists can guide you by residence, timeline, and India goals.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          <Link href="/contact" className="btn btn-main rounded-pill px-4">
            <i className="fa-solid fa-message me-2" aria-hidden />
            Talk to us
          </Link>
          <Link href="/signup" className="btn btn-outline-main rounded-pill px-4">
            <i className="fa-solid fa-user-plus me-2" aria-hidden />
            Create account
          </Link>
        </div>
      </div>
    </div>
  )
}
