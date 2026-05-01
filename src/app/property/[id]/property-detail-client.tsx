'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { resolvePublicMediaUrl } from '@/lib/api'
import { propertyDetailsToSafeHtml } from '@/lib/property-details-html'
import type { RealEstatePublicListingDetail } from '@/lib/real-estate-public'
import PropertyEnquiryForm from './property-enquiry-form'
import styles from './property-detail-page.module.css'

type Props = {
  listing: RealEstatePublicListingDetail
}

function transactionLabel(raw: string | undefined): string {
  const t = raw ?? 'buy'
  if (t === 'buy' || t === 'rent' || t === 'sell') {
    return t.charAt(0).toUpperCase() + t.slice(1)
  }
  return t
}

const DEFAULT_AMENITY_ICON = 'fa-solid fa-circle-check'

export default function PropertyDetailClient({ listing }: Props) {
  const gallery = listing.gallery_urls ?? []
  const heroCandidates = useMemo(() => {
    const main = listing.image_url ? [listing.image_url] : []
    return [...main, ...gallery].filter(Boolean)
  }, [gallery, listing.image_url])

  const [activeIdx, setActiveIdx] = useState(0)
  const safeIdx =
    heroCandidates.length === 0
      ? 0
      : Math.min(activeIdx, heroCandidates.length - 1)
  const activeSrc =
    heroCandidates.length > 0 ? heroCandidates[safeIdx] : null
  const resolvedHero = activeSrc ? resolvePublicMediaUrl(activeSrc) : ''

  const sellerClass =
    listing.seller_variant === 'nri'
      ? styles.pillNri
      : listing.seller_variant === 'builder'
        ? styles.pillBuilder
        : styles.pillPrivate

  const geoLine =
    listing.location ||
    [listing.city?.name, listing.state?.name, listing.country?.name]
      .filter(Boolean)
      .join(' · ')

  const detailsHtml = useMemo(
    () => propertyDetailsToSafeHtml(listing.property_details),
    [listing.property_details],
  )

  const specs: { key: string; label: string; value: string; muted?: boolean }[] =
    []
  if (listing.bhk) specs.push({ key: 'bhk', label: 'Configuration', value: listing.bhk })
  if (listing.sqft) specs.push({ key: 'sqft', label: 'Area', value: listing.sqft })
  if (listing.status) specs.push({ key: 'st', label: 'Status', value: listing.status })
  specs.push({
    key: 'tx',
    label: 'Purpose',
    value: transactionLabel(listing.transaction_type),
  })
  if (listing.property_type?.name) {
    specs.push({
      key: 'pt',
      label: 'Property type',
      value: listing.property_type.name,
      muted: true,
    })
  }
  if (listing.budget_range?.label) {
    specs.push({
      key: 'br',
      label: 'Budget band',
      value: listing.budget_range.label,
      muted: true,
    })
  }
  if (listing.bhk_type?.label) {
    specs.push({
      key: 'bt',
      label: 'BHK type',
      value: listing.bhk_type.label,
      muted: true,
    })
  }
  if (listing.rera) {
    specs.push({
      key: 'rera',
      label: 'RERA',
      value: listing.rera,
      muted: true,
    })
  }

  return (
    <div className={`container ${styles.wrap}`}>
      <div className={styles.breadcrumbRow}>
        <Link href="/">Home</Link>
        <span className={styles.sep}>/</span>
        <Link href="/services/real-estate-services">Real estate</Link>
        <span className={styles.sep}>/</span>
        <span aria-current="page">Property #{listing.id}</span>
      </div>

      <div className={styles.grid}>
        <div>
          <div className={styles.hero}>
            <div
              className={styles.heroMain}
              style={
                resolvedHero
                  ? undefined
                  : { background: listing.gradient ?? '#e2e8f0' }
              }
            >
              {resolvedHero ? (
                // eslint-disable-next-line @next/next/no-img-element -- CMS URL
                <img
                  className={styles.heroImg}
                  src={resolvedHero}
                  alt={listing.title}
                />
              ) : null}
              <div className={styles.heroBadges}>
                <span className={`${styles.pill} ${sellerClass}`}>
                  {listing.seller_label}
                </span>
                <span className={`${styles.pill} ${styles.pillTx}`}>
                  {transactionLabel(listing.transaction_type)}
                </span>
                {listing.is_verified !== false ? (
                  <span className={`${styles.pill} ${styles.pillVerified}`}>
                    <i className="fa-solid fa-circle-check me-1" aria-hidden />
                    Verified
                  </span>
                ) : null}
              </div>
              <div className={styles.priceFloat}>{listing.price}</div>
            </div>
            {heroCandidates.length > 1 ? (
              <div className={styles.thumbRow}>
                {heroCandidates.map((src, i) => (
                  <button
                    key={`${src}-${i}`}
                    type="button"
                    className={`${styles.thumb} ${i === safeIdx ? styles.thumbActive : ''}`}
                    onClick={() => setActiveIdx(i)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={resolvePublicMediaUrl(src)} alt="" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className={styles.bodyCard}>
            <h1 className={styles.title}>{listing.title}</h1>
            {geoLine ? (
              <p className={styles.loc}>
                <i className="fa-solid fa-location-dot" aria-hidden />
                <span>{geoLine}</span>
              </p>
            ) : null}

            <div className={styles.specGrid}>
              {specs.map((s) => (
                <div
                  key={s.key}
                  className={`${styles.spec} ${s.muted ? styles.specMuted : ''}`}
                >
                  <span className={styles.specLabel}>{s.label}</span>
                  <span className={styles.specVal}>{s.value}</span>
                </div>
              ))}
            </div>

            {detailsHtml ? (
              <>
                <h2 className={styles.sectionTitle}>About this property</h2>
                <div
                  className={styles.detailBody}
                  dangerouslySetInnerHTML={{ __html: detailsHtml }}
                />
              </>
            ) : null}

            {listing.amenities.length > 0 ? (
              <>
                <h2 className={styles.sectionTitle}>Amenities</h2>
                <div className={styles.amenityRow}>
                  {listing.amenities.map((item, idx) => {
                    const iconClass =
                      item.icon_class && item.icon_class.trim() !== ''
                        ? item.icon_class.trim()
                        : DEFAULT_AMENITY_ICON
                    return (
                      <span
                        key={`${idx}-${item.label}`}
                        className={styles.amenityChip}
                      >
                        <i className={iconClass} aria-hidden />
                        {item.label}
                      </span>
                    )
                  })}
                </div>
              </>
            ) : null}

            {listing.documents && listing.documents.length > 0 ? (
              <>
                <h2 className={styles.sectionTitle}>Documents</h2>
                <div className={styles.docRow}>
                  {listing.documents.map((d) => (
                    <a
                      key={d.url}
                      className={styles.docLink}
                      href={d.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-regular fa-file-lines" aria-hidden />
                      {d.name}
                    </a>
                  ))}
                </div>
              </>
            ) : null}

            {listing.listed_by ? (
              <div className={styles.listedBy}>
                <span>Listed by</span>
                <strong>{listing.listed_by}</strong>
              </div>
            ) : null}
          </div>
        </div>

        <aside className={styles.sidebar}>
          <PropertyEnquiryForm propertyId={listing.id} />
        </aside>
      </div>
    </div>
  )
}
