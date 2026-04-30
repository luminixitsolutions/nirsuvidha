import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navlight from '@/app/components/navbar/navlight'
import FooterOne from '@/app/components/footer/footer-one'
import ScrollToTop from '@/app/components/scroll-to-top'
import { Toaster } from 'sonner'
import { getPublicServiceDetail, getPublicServices } from '@/lib/public-services'
import SubmitCaseForm from './submit-case-form'
import BankingServiceDetail from './banking-service-detail'
import styles from './service-detail.module.css'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const detail = await getPublicServiceDetail(slug)
  if (!detail) {
    return { title: 'Service — NRI Suvidha' }
  }
  return {
    title: `${detail.service.title} — NRI Suvidha`,
    description: detail.service.short_details,
  }
}

const WHY_DEFAULT = [
  'Verified professionals aligned with NRI & OCI needs',
  'Encrypted uploads and structured case intake',
  'Coordination across time zones with clear timelines',
  'Transparent pricing and documentation support',
]

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const [detail, serviceItems] = await Promise.all([
    getPublicServiceDetail(slug),
    getPublicServices(),
  ])

  if (!detail) {
    notFound()
  }

  const { service, sub_services: subServices } = detail
  const sectionLabel = `${service.title.replace(/\s+$/u, '')} Categories`

  if (slug === 'banking') {
    return (
      <>
        <Toaster richColors position="top-center" />
        <Navlight serviceItems={serviceItems} />
        <BankingServiceDetail
          serviceId={service.id}
          serviceTitle={service.title}
        />
        <FooterOne />
        <ScrollToTop />
      </>
    )
  }

  return (
    <>
      <Toaster richColors position="top-center" />
      <Navlight serviceItems={serviceItems} />
      <main className={styles.page}>
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-8">
              <header className={styles.sectionHead}>
                <h1 className={styles.sectionTitle}>{sectionLabel}</h1>
                <p className={styles.sectionSub}>Choose your area of need</p>
              </header>

              {subServices.length === 0 ? (
                <p className="text-muted mb-0">
                  Sub-categories for this service will appear here once added in the admin.
                </p>
              ) : (
                <div className={styles.grid}>
                  {subServices.map((sub) => (
                    <article key={sub.id} className={styles.card}>
                      {sub.photo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          className={styles.cardThumb}
                          src={sub.photo}
                          alt=""
                          loading="lazy"
                        />
                      ) : (
                        <div className={styles.cardIcon} aria-hidden>
                          <i className={sub.icon} />
                        </div>
                      )}
                      <h2 className={styles.cardTitle}>{sub.name}</h2>
                      <p className={styles.cardDesc}>{sub.short_details}</p>
                      {sub.cases_handled != null && sub.cases_handled > 0 ? (
                        <span className={styles.badge}>
                          {sub.cases_handled.toLocaleString()} cases handled
                        </span>
                      ) : null}
                    </article>
                  ))}
                </div>
              )}
            </div>

            <div className="col-lg-4">
              <div className={styles.sidebarStack}>
                <SubmitCaseForm serviceId={service.id} />
                <aside className={styles.whyCard}>
                  <h2 className={styles.whyTitle}>
                    Why Choose Our {service.title} Service
                  </h2>
                  <ul className={styles.whyList}>
                    {WHY_DEFAULT.map((line) => (
                      <li key={line}>
                        <i className={`fa-solid fa-circle-check ${styles.checkIco}`} aria-hidden />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterOne />
      <ScrollToTop />
    </>
  )
}
