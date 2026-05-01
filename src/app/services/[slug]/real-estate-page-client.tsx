'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import type {
  RealEstatePublicBundle,
  RealEstatePublicCareService,
  RealEstatePublicHomeLoanPartner,
  RealEstatePublicPreConstructionProject,
} from '@/lib/real-estate-public'
import { resolvePublicMediaUrl } from '@/lib/api'
import { careServiceDescriptionToSafeHtml } from '@/lib/property-details-html'
import styles from './service-detail.module.css'
import SellPropertyWizard from './sell-property-wizard'
import RentSolutionsPanel from './rent-solutions-panel'
import {
  REAL_ESTATE_MAIN_TABS,
  type RealEstateMainTabId,
  REAL_ESTATE_CATEGORY_TILES,
  type RealEstateFeedTabId,
  type RealEstateCuratedListingCard,
  REAL_ESTATE_CURATED_LISTINGS,
  REAL_ESTATE_FEED_FILTERS,
  REAL_ESTATE_SEARCH_MODE_TABS,
  REAL_ESTATE_SEARCH_FIELDS,
  REAL_ESTATE_FEATURED,
  HOME_LOAN_SECTION,
  HOME_LOAN_PARTNERS,
  type HomeLoanPartner,
  NRI_HOME_LOAN_BENEFITS,
  PROPERTY_LEGAL_VERIFICATION,
  VERIFICATION_SERVICE_CARDS,
  VERIFICATION_TYPE_OPTIONS,
  PRECONSTRUCTION_HEADING,
  PRECONSTRUCTION_PROJECTS,
  type PreconstructionProject,
  REAL_ESTATE_NRI_SIDEBAR,
  REAL_ESTATE_CARE_SERVICES,
  type RealEstateCareCard,
  type RealEstateTransactionType,
} from './real-estate-detail-data'

type FeaturedCard = (typeof REAL_ESTATE_FEATURED)[number]

function normalizeTransactionType(
  raw: string | null | undefined,
): RealEstateTransactionType {
  if (raw === 'rent' || raw === 'sell' || raw === 'buy') {
    return raw
  }
  return 'buy'
}

function pickStr(v: string | null | undefined): string | undefined {
  if (v == null) return undefined
  const t = String(v).trim()
  return t === '' ? undefined : t
}

function mapBundleCurated(
  bundle: RealEstatePublicBundle | null,
): RealEstateCuratedListingCard[] | null {
  if (!bundle?.curated_listings?.length) {
    return null
  }
  return bundle.curated_listings.map((row) => ({
    id: row.id,
    feed: 'all',
    title: row.title,
    price: row.price,
    sellerLabel: row.seller_label,
    sellerVariant: row.seller_variant,
    gradient: row.gradient,
    imageUrl: pickStr(row.image_url),
    location: pickStr(row.location),
    bhk: pickStr(row.bhk),
    sqft: pickStr(row.sqft),
    status: pickStr(row.status),
    listedBy: pickStr(row.listed_by),
    isVerified: row.is_verified !== false,
    stateId: row.state_id ?? undefined,
    cityId: row.city_id ?? undefined,
    propertyTypeId: row.property_type_id ?? undefined,
    budgetRangeId: row.budget_range_id ?? undefined,
    transactionType: normalizeTransactionType(row.transaction_type),
  }))
}

function mapBundleFeatured(bundle: RealEstatePublicBundle | null): FeaturedCard[] | null {
  if (!bundle?.featured_listings?.length) {
    return null
  }
  return bundle.featured_listings.map((row) => ({
    id: row.id,
    transactionType: normalizeTransactionType(row.transaction_type),
    title: row.title,
    location: row.location,
    status: row.status,
    bhk: row.bhk,
    sqft: row.sqft,
    rera: row.rera,
    amenities: row.amenities,
    price: row.price,
    builder: row.builder,
  }))
}

function mapApiCareService(row: RealEstatePublicCareService): RealEstateCareCard {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    bullets: Array.isArray(row.bullets) ? row.bullets : [],
    showBullets: row.show_bullets !== false,
  }
}

function mapApiHomeLoanPartner(row: RealEstatePublicHomeLoanPartner): HomeLoanPartner {
  const icon =
    row.icon != null && String(row.icon).trim() !== ''
      ? String(row.icon).trim()
      : 'fa-solid fa-building-columns'
  return {
    id: row.id,
    icon,
    bank: row.bank,
    interestRate: row.interest_rate,
    processingFee: row.processing_fee,
    maxTenure: row.max_tenure,
  }
}

function mapApiPreConstruction(row: RealEstatePublicPreConstructionProject): PreconstructionProject {
  const variant =
    row.badge_variant === 'accent' || row.badge_variant === 'muted'
      ? row.badge_variant
      : 'muted'
  return {
    id: row.id,
    title: row.title,
    badge: row.status_badge,
    badgeVariant: variant,
    description: row.description,
    stats: [
      { label: 'Starting Price', value: row.starting_price },
      { label: 'Possession', value: row.possession },
      { label: 'Payment Plan', value: row.payment_plan },
    ],
    benefitsHeading: row.benefits_heading,
    benefits: Array.isArray(row.benefits) ? row.benefits : [],
    cta: row.cta_button_text,
  }
}

type Props = {
  serviceTitle: string
  bundle: RealEstatePublicBundle | null
}

function isLiveListingId(id: string): boolean {
  return /^\d+$/.test(id)
}

export default function RealEstatePageClient({ serviceTitle, bundle }: Props) {
  const router = useRouter()
  const [mainTab, setMainTab] = useState<RealEstateMainTabId>('buy-sell-rent')
  const [feedTab, setFeedTab] = useState<RealEstateFeedTabId>('all')
  const [searchMode, setSearchMode] =
    useState<(typeof REAL_ESTATE_SEARCH_MODE_TABS)[number]['id']>('buy')

  const [loanAmountInput, setLoanAmountInput] = useState('')
  const [emiRatePct, setEmiRatePct] = useState('8.5')
  const [emiYears, setEmiYears] = useState('20')
  const [emiMonthly, setEmiMonthly] = useState<number | null>(null)

  const [verifyAddress, setVerifyAddress] = useState('')
  const [verifyType, setVerifyType] = useState('')

  const [geoCountryId, setGeoCountryId] = useState('')
  const [geoStateId, setGeoStateId] = useState('')
  const [geoCityId, setGeoCityId] = useState('')

  const [feedFilterStateId, setFeedFilterStateId] = useState('')
  const [feedFilterCityId, setFeedFilterCityId] = useState('')
  const [feedFilterPropertyTypeId, setFeedFilterPropertyTypeId] = useState('')
  const [feedFilterBudgetId, setFeedFilterBudgetId] = useState('')

  const [curatedJourneyMode, setCuratedJourneyMode] = useState<
    'buy' | 'sell' | 'rent'
  >('buy')

  const hasApiMasters = Boolean(
    bundle &&
      bundle.countries.length > 0 &&
      bundle.states.length > 0 &&
      bundle.cities.length > 0 &&
      bundle.property_types.length > 0 &&
      bundle.budget_ranges.length > 0 &&
      bundle.bhk_types.length > 0,
  )

  /** Feed strip: State → City + property + budget (no country — matches UI). */
  const hasFeedFilterMasters = Boolean(
    bundle &&
      bundle.states.length > 0 &&
      bundle.cities.length > 0 &&
      bundle.property_types.length > 0 &&
      bundle.budget_ranges.length > 0,
  )

  const listingsFromApi = Boolean(bundle?.curated_listings?.length)
  const applyFeedFilters = hasFeedFilterMasters && listingsFromApi

  const curatedListings = useMemo((): RealEstateCuratedListingCard[] => {
    const mapped = mapBundleCurated(bundle)
    return mapped ?? [...REAL_ESTATE_CURATED_LISTINGS]
  }, [bundle])

  const curatedForSearchMode = useMemo(() => {
    return curatedListings.filter(
      (l) => (l.transactionType ?? 'buy') === searchMode,
    )
  }, [curatedListings, searchMode])

  const featuredListings = useMemo((): FeaturedCard[] => {
    const mapped = mapBundleFeatured(bundle)
    const list: FeaturedCard[] =
      mapped ?? ([...REAL_ESTATE_FEATURED] as unknown as FeaturedCard[])
    return list.filter((row) => (row.transactionType ?? 'buy') === searchMode)
  }, [bundle, searchMode])

  const preconstructionProjects = useMemo((): PreconstructionProject[] => {
    const rows = bundle?.pre_construction_projects
    if (bundle != null && Array.isArray(rows)) {
      return rows.map(mapApiPreConstruction)
    }
    return [...PRECONSTRUCTION_PROJECTS]
  }, [bundle])

  const homeLoanPartners = useMemo((): HomeLoanPartner[] => {
    const rows = bundle?.home_loan_partners
    if (bundle != null && Array.isArray(rows)) {
      return rows.map(mapApiHomeLoanPartner)
    }
    return [...HOME_LOAN_PARTNERS]
  }, [bundle])

  const realEstateCareServices = useMemo((): RealEstateCareCard[] => {
    const rows = bundle?.real_estate_care_services
    if (bundle != null && Array.isArray(rows)) {
      return rows.map(mapApiCareService)
    }
    return [...REAL_ESTATE_CARE_SERVICES]
  }, [bundle])

  const feedTabs = useMemo(() => {
    const all = curatedForSearchMode.length
    const nri = curatedForSearchMode.filter(
      (l) => l.sellerVariant === 'nri',
    ).length
    const builder = curatedForSearchMode.filter(
      (l) => l.sellerVariant === 'builder',
    ).length
    const priv = curatedForSearchMode.filter(
      (l) => l.sellerVariant === 'private',
    ).length
    return [
      { id: 'all' as const, label: 'All Listings', count: all },
      { id: 'nri' as const, label: 'NRI Sellers', count: nri },
      { id: 'builder' as const, label: 'Builder Partners', count: builder },
      { id: 'private' as const, label: 'Private Sellers', count: priv },
    ]
  }, [curatedForSearchMode])

  const stateOptions = useMemo(() => {
    if (!bundle || !hasApiMasters) {
      return []
    }
    return bundle.states.filter(
      (s) => !geoCountryId || String(s.country_id) === geoCountryId,
    )
  }, [bundle, hasApiMasters, geoCountryId])

  const cityOptions = useMemo(() => {
    if (!bundle || !hasApiMasters) {
      return []
    }
    return bundle.cities.filter(
      (c) => !geoStateId || String(c.state_id) === geoStateId,
    )
  }, [bundle, hasApiMasters, geoStateId])

  const feedFilterCityOptions = useMemo(() => {
    if (!bundle || !hasFeedFilterMasters) {
      return []
    }
    return bundle.cities.filter(
      (c) =>
        !feedFilterStateId || String(c.state_id) === feedFilterStateId,
    )
  }, [bundle, hasFeedFilterMasters, feedFilterStateId])

  const filteredListings = useMemo(() => {
    let rows = curatedForSearchMode
    if (feedTab !== 'all') {
      rows = rows.filter((l) => l.sellerVariant === feedTab)
    }
    if (!applyFeedFilters) {
      return rows
    }
    return rows.filter((l) => {
      if (
        feedFilterStateId &&
        String(l.stateId ?? '') !== feedFilterStateId
      ) {
        return false
      }
      if (
        feedFilterCityId &&
        String(l.cityId ?? '') !== feedFilterCityId
      ) {
        return false
      }
      if (
        feedFilterPropertyTypeId &&
        String(l.propertyTypeId ?? '') !== feedFilterPropertyTypeId
      ) {
        return false
      }
      if (
        feedFilterBudgetId &&
        String(l.budgetRangeId ?? '') !== feedFilterBudgetId
      ) {
        return false
      }
      return true
    })
  }, [
    curatedForSearchMode,
    feedTab,
    applyFeedFilters,
    feedFilterStateId,
    feedFilterCityId,
    feedFilterPropertyTypeId,
    feedFilterBudgetId,
  ])

  const listingCount = filteredListings.length

  useEffect(() => {
    setFeedTab('all')
  }, [searchMode])

  function computeMonthlyEmi(
    principal: number,
    annualRatePct: number,
    years: number,
  ): number {
    const months = Math.max(1, Math.round(years * 12))
    const r = annualRatePct / 100 / 12
    if (r <= 0) {
      return principal / months
    }
    const factor = (1 + r) ** months
    return (principal * r * factor) / (factor - 1)
  }

  function handleCalculateEmi() {
    const raw = loanAmountInput.replace(/,/g, '').trim()
    const principal = Number.parseFloat(raw)
    const rate = Number.parseFloat(emiRatePct)
    const years = Number.parseFloat(emiYears)
    if (
      !Number.isFinite(principal) ||
      principal <= 0 ||
      !Number.isFinite(rate) ||
      rate < 0 ||
      !Number.isFinite(years) ||
      years <= 0
    ) {
      setEmiMonthly(null)
      return
    }
    setEmiMonthly(computeMonthlyEmi(principal, rate, years))
  }

  const formattedEmi =
    emiMonthly != null
      ? new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
          maximumFractionDigits: 0,
        }).format(emiMonthly)
      : null

  return (
    <main className={`${styles.page} ${styles.bankingTight}`}>
      <div className="container-fluid px-4 px-lg-5 py-4">
        <header className={styles.rePageHeader}>
          <div className={styles.rePageTitleRow}>
            <span className={styles.reHouseIcon} aria-hidden>
              <i className="fa-solid fa-house" />
            </span>
            <div>
              <h1 className={styles.reHeroTitle}>
                {serviceTitle.replace(/\s+$/u, '')}
              </h1>
              <p className={styles.reHeroSub}>
                Buy, sell, rent properties &amp; home loans
              </p>
            </div>
          </div>
          <div className={styles.reHeaderActions}>
            <Link href="/" className={styles.reBtnGhost}>
              <i className="fa-solid fa-arrow-left me-2" aria-hidden />
              Home
            </Link>
            <Link href="/login" className={styles.reBtnDashboard}>
              Dashboard
            </Link>
          </div>
        </header>

        <div
          className={styles.reMainTabBar}
          role="tablist"
          aria-label="Real estate sections"
        >
          {REAL_ESTATE_MAIN_TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={mainTab === t.id}
              className={
                mainTab === t.id ? styles.reMainTabActive : styles.reMainTab
              }
              onClick={() => setMainTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {mainTab === 'buy-sell-rent' ? (
          <div>
              <div className={styles.reJourneyGrid}>
                {REAL_ESTATE_CATEGORY_TILES.map((tile) =>
                  tile.variant === 'gold' ? (
                    <article
                      key={tile.title}
                      className={styles.reJourneyGold}
                    >
                      <div className={styles.reJourneyGoldIcon} aria-hidden>
                        <i className={tile.icon} />
                      </div>
                      <h2 className={styles.reJourneyGoldTitle}>{tile.title}</h2>
                      <p className={styles.reJourneyGoldDesc}>
                        {tile.description}
                      </p>
                      {'badgeLabel' in tile && tile.badgeLabel ? (
                        <span className={styles.reJourneyGoldBadge}>
                          {tile.badgeLabel}
                        </span>
                      ) : null}
                      <button type="button" className={styles.reExploreGold}>
                        {tile.cta}
                      </button>
                    </article>
                  ) : (
                    <article key={tile.title} className={styles.reJourneyLight}>
                      <div className={styles.reJourneyLightIcon} aria-hidden>
                        <i className={tile.icon} />
                      </div>
                      <h2 className={styles.reJourneyLightTitle}>{tile.title}</h2>
                      <p className={styles.reJourneyLightDesc}>
                        {tile.description}
                      </p>
                      <button
                        type="button"
                        className={styles.reExploreOutline}
                        onClick={() => {
                          if (tile.title === 'Buy Property') {
                            setCuratedJourneyMode('buy')
                          }
                          if (tile.title === 'Sell Property') {
                            setCuratedJourneyMode('sell')
                          }
                          if (tile.title === 'Rent Property') {
                            setCuratedJourneyMode('rent')
                          }
                        }}
                      >
                        {tile.cta}
                      </button>
                    </article>
                  ),
                )}
              </div>

              <section className={styles.stackSection}>
                <div className={styles.reCuratedWrap}>
                  <div className={styles.reCuratedInner}>
                    <div className={styles.reCuratedTop}>
                      <span className={styles.reCuratedBadge}>
                        {curatedJourneyMode === 'buy'
                          ? 'Buy Property'
                          : curatedJourneyMode === 'sell'
                            ? 'Sell Property'
                            : 'Rent / Lease'}
                      </span>
                      <button
                        type="button"
                        className={styles.reCuratedClose}
                        aria-label={
                          curatedJourneyMode !== 'buy'
                            ? 'Back to property listings'
                            : 'Dismiss'
                        }
                        onClick={() => setCuratedJourneyMode('buy')}
                      >
                        ×
                      </button>
                    </div>
                    {curatedJourneyMode === 'buy' ? (
                      <>
                    <h2 className={styles.reCuratedHeading}>
                      Curated Property Feed for NRI Buyers
                    </h2>
                    <p className={styles.reCuratedSub}>
                      Every listing is verified &amp; approved by our team —
                      across NRI sellers, builder partners and private owners.
                    </p>

                    <div className={styles.reFeedTabRow}>
                      {feedTabs.map((ft) => (
                        <button
                          key={ft.id}
                          type="button"
                          className={
                            feedTab === ft.id
                              ? styles.reFeedTabOn
                              : styles.reFeedTabOff
                          }
                          onClick={() => setFeedTab(ft.id)}
                        >
                          {ft.label}{' '}
                          <span className={styles.reFeedCount}>
                            ({ft.count})
                          </span>
                        </button>
                      ))}
                    </div>

                    <div className={styles.reFilterBar}>
                      <div className={styles.reFilterFields}>
                        {hasFeedFilterMasters && bundle ? (
                          <>
                            <div className={styles.reFilterCell}>
                              <label htmlFor="feed-state">State</label>
                              <select
                                id="feed-state"
                                value={feedFilterStateId}
                                onChange={(e) => {
                                  setFeedFilterStateId(e.target.value)
                                  setFeedFilterCityId('')
                                }}
                              >
                                <option value="">All States</option>
                                {bundle.states.map((s) => (
                                  <option key={s.id} value={String(s.id)}>
                                    {s.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className={styles.reFilterCell}>
                              <label htmlFor="feed-city">City</label>
                              <select
                                id="feed-city"
                                value={feedFilterCityId}
                                onChange={(e) =>
                                  setFeedFilterCityId(e.target.value)
                                }
                              >
                                <option value="">All Cities</option>
                                {feedFilterCityOptions.map((c) => (
                                  <option key={c.id} value={String(c.id)}>
                                    {c.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className={styles.reFilterCell}>
                              <label htmlFor="feed-ptype">Property Type</label>
                              <select
                                id="feed-ptype"
                                value={feedFilterPropertyTypeId}
                                onChange={(e) =>
                                  setFeedFilterPropertyTypeId(e.target.value)
                                }
                              >
                                <option value="">All Types</option>
                                {bundle.property_types.map((p) => (
                                  <option key={p.id} value={String(p.id)}>
                                    {p.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className={styles.reFilterCell}>
                              <label htmlFor="feed-budget">Budget</label>
                              <select
                                id="feed-budget"
                                value={feedFilterBudgetId}
                                onChange={(e) =>
                                  setFeedFilterBudgetId(e.target.value)
                                }
                              >
                                <option value="">Any Budget</option>
                                {bundle.budget_ranges.map((b) => (
                                  <option key={b.id} value={String(b.id)}>
                                    {b.label}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </>
                        ) : (
                          REAL_ESTATE_FEED_FILTERS.map((f, idx) => (
                            <div key={f.label} className={styles.reFilterCell}>
                              <label htmlFor={`feed-${idx}`}>{f.label}</label>
                              <select id={`feed-${idx}`} defaultValue="">
                                <option value="">{f.placeholder}</option>
                                <option value="any">Any</option>
                              </select>
                            </div>
                          ))
                        )}
                      </div>
                      <button
                        type="button"
                        className={styles.reFilterReset}
                        onClick={() => {
                          setFeedFilterStateId('')
                          setFeedFilterCityId('')
                          setFeedFilterPropertyTypeId('')
                          setFeedFilterBudgetId('')
                        }}
                      >
                        <i className="fa-solid fa-filter me-2" aria-hidden />
                        Reset
                      </button>
                    </div>

                    <p className={styles.reShowing}>
                      Showing{' '}
                      <strong>{listingCount}</strong> verified properties
                    </p>

                    <div className={styles.reListingGrid}>
                      {filteredListings.map((listing) => {
                        const heroSrc = listing.imageUrl
                          ? resolvePublicMediaUrl(listing.imageUrl)
                          : ''
                        const specParts = [
                          listing.bhk
                            ? {
                                key: 'bhk',
                                icon: 'fa-solid fa-bed',
                                text: listing.bhk,
                              }
                            : null,
                          listing.sqft
                            ? {
                                key: 'sqft',
                                icon: 'fa-solid fa-ruler-combined',
                                text: listing.sqft,
                              }
                            : null,
                          listing.status
                            ? {
                                key: 'status',
                                icon: 'fa-regular fa-calendar',
                                text: listing.status,
                              }
                            : null,
                        ].filter(
                          (
                            x,
                          ): x is {
                            key: string
                            icon: string
                            text: string
                          } => Boolean(x),
                        )
                        const showVerified = listing.isVerified !== false

                        return (
                          <article
                            key={listing.id}
                            className={styles.reListingCard}
                            role={isLiveListingId(listing.id) ? 'button' : undefined}
                            tabIndex={isLiveListingId(listing.id) ? 0 : undefined}
                            style={{
                              cursor: isLiveListingId(listing.id)
                                ? 'pointer'
                                : undefined,
                            }}
                            onClick={() => {
                              if (isLiveListingId(listing.id)) {
                                router.push(`/property/${listing.id}`)
                              }
                            }}
                            onKeyDown={(e) => {
                              if (
                                !isLiveListingId(listing.id) ||
                                (e.key !== 'Enter' && e.key !== ' ')
                              ) {
                                return
                              }
                              e.preventDefault()
                              router.push(`/property/${listing.id}`)
                            }}
                          >
                            <div
                              className={styles.reListingImg}
                              style={
                                heroSrc
                                  ? undefined
                                  : { background: listing.gradient }
                              }
                            >
                              {heroSrc ? (
                                // eslint-disable-next-line @next/next/no-img-element -- CMS URLs from Laravel
                                <img
                                  className={styles.reListingPhoto}
                                  src={heroSrc}
                                  alt=""
                                  loading="lazy"
                                />
                              ) : null}
                              <span
                                className={`${styles.reSellerPill} ${
                                  listing.sellerVariant === 'nri'
                                    ? styles.reSellerNri
                                    : listing.sellerVariant === 'builder'
                                      ? styles.reSellerBuilder
                                      : styles.reSellerPrivate
                                }`}
                              >
                                {listing.sellerLabel}
                              </span>
                              <button
                                type="button"
                                className={styles.reWish}
                                aria-label="Save listing"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <i className="fa-regular fa-heart" />
                              </button>
                              {showVerified ? (
                                <span className={styles.reVerifiedPill}>
                                  <i
                                    className="fa-solid fa-circle-check me-1"
                                    aria-hidden
                                  />
                                  Verified
                                </span>
                              ) : null}
                              <span className={styles.rePricePill}>
                                {listing.price}
                              </span>
                            </div>
                            <div className={styles.reListingBody}>
                              <h3 className={styles.reListingTitle}>
                                {listing.title}
                              </h3>
                              {listing.location ? (
                                <p className={styles.reListingLoc}>
                                  <i
                                    className="fa-solid fa-location-dot"
                                    aria-hidden
                                  />
                                  {listing.location}
                                </p>
                              ) : null}
                              {specParts.length > 0 ? (
                                <div className={styles.reListingSpecs}>
                                  {specParts.map((part, idx) => (
                                    <span
                                      key={part.key}
                                      className={styles.reListingSpecChunk}
                                    >
                                      {idx > 0 ? (
                                        <span
                                          className={styles.reListingSpecSep}
                                          aria-hidden
                                        >
                                          ·
                                        </span>
                                      ) : null}
                                      <i
                                        className={part.icon}
                                        aria-hidden
                                      />
                                      <span>{part.text}</span>
                                    </span>
                                  ))}
                                </div>
                              ) : null}
                              <div className={styles.reListingFooter}>
                                <div className={styles.reListedByWrap}>
                                  {listing.listedBy ? (
                                    <p className={styles.reListedBy}>
                                      <span className={styles.reListedByLbl}>
                                        Listed by
                                      </span>
                                      <span className={styles.reListedByName}>
                                        {listing.listedBy}
                                      </span>
                                    </p>
                                  ) : null}
                                </div>
                                <button
                                  type="button"
                                  className={styles.reListingCta}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    if (isLiveListingId(listing.id)) {
                                      router.push(`/property/${listing.id}`)
                                    }
                                  }}
                                >
                                  Express Interest
                                </button>
                              </div>
                            </div>
                          </article>
                        )
                      })}
                    </div>
                      </>
                    ) : curatedJourneyMode === 'sell' ? (
                      <SellPropertyWizard
                        variant="inline"
                        open
                        onClose={() => setCuratedJourneyMode('buy')}
                        bundle={bundle}
                      />
                    ) : (
                      <RentSolutionsPanel bundle={bundle} />
                    )}
                  </div>
                </div>
              </section>

              <section className={styles.stackSection}>
                <div className={styles.reSearchSellRow}>
                  <div className={styles.searchPanel}>
                    <div className={styles.reSearchModeTabs} role="tablist">
                      {REAL_ESTATE_SEARCH_MODE_TABS.map((st) => (
                        <button
                          key={st.id}
                          type="button"
                          role="tab"
                          aria-selected={searchMode === st.id}
                          className={
                            searchMode === st.id
                              ? styles.reSearchModeOn
                              : styles.reSearchModeOff
                          }
                          onClick={() => setSearchMode(st.id)}
                        >
                          {st.label}
                        </button>
                      ))}
                    </div>
                    <h2 className={styles.blockTitle}>
                      Find Your Perfect Property
                    </h2>
                    <p className={styles.blockSub}>
                      Search from 10,000+ verified properties across India
                    </p>
                    <div className={styles.searchGrid}>
                      {hasApiMasters && bundle ? (
                        <>
                          <div className={styles.searchField}>
                            <label htmlFor="re-country">Country</label>
                            <select
                              id="re-country"
                              value={geoCountryId}
                              onChange={(e) => {
                                setGeoCountryId(e.target.value)
                                setGeoStateId('')
                                setGeoCityId('')
                              }}
                            >
                              <option value="">Select country</option>
                              {bundle.countries.map((c) => (
                                <option key={c.id} value={String(c.id)}>
                                  {c.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className={styles.searchField}>
                            <label htmlFor="re-state-api">State</label>
                            <select
                              id="re-state-api"
                              value={geoStateId}
                              onChange={(e) => {
                                setGeoStateId(e.target.value)
                                setGeoCityId('')
                              }}
                              disabled={!geoCountryId}
                            >
                              <option value="">
                                {geoCountryId
                                  ? 'Select state'
                                  : 'Select country first'}
                              </option>
                              {stateOptions.map((s) => (
                                <option key={s.id} value={String(s.id)}>
                                  {s.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className={styles.searchField}>
                            <label htmlFor="re-city-api">City / Location</label>
                            <select
                              id="re-city-api"
                              value={geoCityId}
                              onChange={(e) => setGeoCityId(e.target.value)}
                              disabled={!geoStateId}
                            >
                              <option value="">
                                {geoStateId
                                  ? 'Select city'
                                  : 'Select state first'}
                              </option>
                              {cityOptions.map((c) => (
                                <option key={c.id} value={String(c.id)}>
                                  {c.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className={styles.searchField}>
                            <label htmlFor="re-property-type-api">
                              Property Type
                            </label>
                            <select id="re-property-type-api" defaultValue="">
                              <option value="" disabled>
                                Select property type
                              </option>
                              {bundle.property_types.map((p) => (
                                <option key={p.id} value={p.slug}>
                                  {p.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className={styles.searchField}>
                            <label htmlFor="re-bhk-api">BHK Type</label>
                            <select id="re-bhk-api" defaultValue="">
                              <option value="" disabled>
                                Select BHK
                              </option>
                              {bundle.bhk_types.map((b) => (
                                <option key={b.id} value={b.slug}>
                                  {b.label}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div
                            className={`${styles.searchField} ${styles.searchFieldFull}`}
                          >
                            <label htmlFor="re-budget-api">Budget Range</label>
                            <select id="re-budget-api" defaultValue="">
                              <option value="" disabled>
                                Select budget
                              </option>
                              {bundle.budget_ranges.map((b) => (
                                <option key={b.id} value={b.slug}>
                                  {b.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </>
                      ) : (
                        REAL_ESTATE_SEARCH_FIELDS.map((f) => (
                          <div
                            key={f.key}
                            className={
                              f.key === 'budget-range'
                                ? `${styles.searchField} ${styles.searchFieldFull}`
                                : styles.searchField
                            }
                          >
                            <label htmlFor={`re-${f.key}`}>{f.label}</label>
                            <select id={`re-${f.key}`} defaultValue="">
                              <option value="" disabled>
                                {f.placeholder}
                              </option>
                              {f.options.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                  {opt.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        ))
                      )}
                    </div>
                    <button type="button" className={styles.searchSubmit}>
                      <i className="fa-solid fa-magnifying-glass me-2" aria-hidden />
                      Search Properties
                    </button>
                  </div>

                  <div className={styles.reSearchRightCol}>
                    <div className={styles.reSellAside}>
                      <h2 className={styles.blockTitle}>Sell Your Property</h2>
                      <p className={styles.blockSub}>
                        Get best price for your property
                      </p>
                      <div className={styles.reValuationBox}>
                        <i
                          className={`fa-regular fa-building ${styles.reValIcon}`}
                          aria-hidden
                        />
                        <p className={styles.reValTitle}>Free Property Valuation</p>
                        <p className={styles.reValDesc}>
                          Get instant property valuation report
                        </p>
                        <button type="button" className={styles.btnOutlineSm}>
                          Get Valuation
                        </button>
                      </div>
                      <button type="button" className={styles.quickCta}>
                        List My Property
                      </button>
                      <p className={styles.sellFoot}>
                        No brokerage • Direct buyers • Quick sale
                      </p>
                    </div>
                    <aside className={styles.reNriCard}>
                      <h2 className={styles.whyTitle}>NRI Property Services</h2>
                      <ul className={styles.reNriList}>
                        {REAL_ESTATE_NRI_SIDEBAR.map((row) => (
                          <li key={row.text}>
                            <span className={styles.reNriIcon} aria-hidden>
                              <i className={row.icon} />
                            </span>
                            <span>{row.text}</span>
                          </li>
                        ))}
                      </ul>
                    </aside>
                  </div>
                </div>
              </section>

              <section className={styles.stackSection}>
                <h2 className={styles.blockTitle}>Featured Properties</h2>
                <p className={styles.blockSub}>
                  Handpicked properties from top developers
                </p>
                <div className={styles.propertyGrid}>
                  {featuredListings.length === 0 ? (
                    <p className="text-muted mb-0">
                      No featured properties for this tab yet. Mark listings as
                      featured in the admin or switch Buy / Rent / Sell above.
                    </p>
                  ) : (
                  featuredListings.map((p) => {
                    const openDetail = isLiveListingId(p.id)
                    return (
                    <article
                      key={p.id}
                      className={styles.featureCardLite}
                      role={openDetail ? 'button' : undefined}
                      tabIndex={openDetail ? 0 : undefined}
                      style={{ cursor: openDetail ? 'pointer' : 'default' }}
                      onClick={() => {
                        if (openDetail) router.push(`/property/${p.id}`)
                      }}
                      onKeyDown={(e) => {
                        if (!openDetail || (e.key !== 'Enter' && e.key !== ' ')) {
                          return
                        }
                        e.preventDefault()
                        router.push(`/property/${p.id}`)
                      }}
                    >
                      <div className={styles.featureCardHead}>
                        <h3 className={styles.featureCardTitle}>{p.title}</h3>
                        <span className={styles.featureStatus}>{p.status}</span>
                      </div>
                      <p className={styles.featureLoc}>
                        <i className="fa-solid fa-location-dot me-1" aria-hidden />
                        {p.location}
                      </p>
                      <div className={styles.featureSpecs}>
                        <span>
                          <i className="fa-solid fa-bed me-1" aria-hidden />
                          {p.bhk}
                        </span>
                        <span>
                          <i className="fa-solid fa-ruler-combined me-1" aria-hidden />
                          {p.sqft}
                        </span>
                        <span>
                          <i className="fa-solid fa-star me-1" aria-hidden />
                          RERA: {p.rera}
                        </span>
                      </div>
                      <p className={styles.amenityLabel}>Amenities:</p>
                      <div className={styles.amenityRow}>
                        {p.amenities.map((a) => (
                          <span key={a} className={styles.amenityChip}>
                            {a}
                          </span>
                        ))}
                      </div>
                      <div className={styles.featureFoot}>
                        <div>
                          <p className={styles.propertyPrice}>{p.price}</p>
                          <p className={styles.propertyBuilder}>
                            By {p.builder}
                          </p>
                        </div>
                        <div className={styles.featureFootBtns}>
                          <button
                            type="button"
                            className={styles.btnOutlineSm}
                            onClick={(e) => {
                              e.stopPropagation()
                              if (openDetail) router.push(`/property/${p.id}`)
                            }}
                          >
                            View Details
                          </button>
                          <button
                            type="button"
                            className={styles.btnPrimarySm}
                            onClick={(e) => {
                              e.stopPropagation()
                              if (openDetail) {
                                router.push(`/property/${p.id}#enquiry`)
                              }
                            }}
                          >
                            Contact
                          </button>
                        </div>
                      </div>
                    </article>
                    )
                  })
                  )}
                </div>
              </section>

              <section className={styles.stackSection}>
                <h2 className={styles.blockTitle}>Real Estate Services</h2>
                <p className={styles.blockSub}>
                  Additional property care and monitoring services for NRI clients
                </p>
                {realEstateCareServices.length === 0 ? (
                  <p className="text-muted mb-0">
                    Service cards will appear here once added in the admin panel.
                  </p>
                ) : (
                  <div className={styles.careGrid3}>
                    {realEstateCareServices.map((c) => {
                      const descHtml = careServiceDescriptionToSafeHtml(
                        c.description,
                      )
                      return (
                        <article
                          key={c.id ?? c.title}
                          className={styles.outlineCard}
                        >
                          <h3 className={styles.nestedTitle}>{c.title}</h3>
                          {descHtml ? (
                            <div
                              className={styles.nestedDesc}
                              dangerouslySetInnerHTML={{ __html: descHtml }}
                            />
                          ) : null}
                          {c.showBullets !== false && c.bullets.length > 0 ? (
                            <ul className={styles.bulletList}>
                              {c.bullets.slice(0, 5).map((b) => (
                                <li key={b}>{b}</li>
                              ))}
                            </ul>
                          ) : null}
                        </article>
                      )
                    })}
                  </div>
                )}
              </section>
          </div>
        ) : null}

        {mainTab === 'preconstruction' ? (
          <section className={styles.stackSection}>
            <h2 className={styles.blockTitle}>{PRECONSTRUCTION_HEADING.title}</h2>
            <p className={styles.blockSub}>{PRECONSTRUCTION_HEADING.subtitle}</p>
            {preconstructionProjects.length === 0 ? (
              <p className="text-muted mb-0">
                Pre-construction projects will appear here once added in the admin panel.
              </p>
            ) : (
              <div className={styles.preConGrid}>
                {preconstructionProjects.map((proj) => (
                  <article
                    key={proj.id ?? proj.title}
                    className={styles.preConCard}
                  >
                    <div className={styles.preConCardHead}>
                      <h3 className={styles.preConCardTitle}>{proj.title}</h3>
                      <span
                        className={
                          proj.badgeVariant === 'muted'
                            ? styles.preConBadgeMuted
                            : styles.preConBadgeAccent
                        }
                      >
                        {proj.badge}
                      </span>
                    </div>
                    <p className={styles.preConDesc}>{proj.description}</p>
                    <dl className={styles.preConStats}>
                      {proj.stats.map((row) => (
                        <div key={row.label} className={styles.preConStatRow}>
                          <dt>{row.label}</dt>
                          <dd>{row.value}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className={styles.preConBenefitsLabel}>
                      {proj.benefitsHeading}
                    </p>
                    <ul className={styles.preConBenefitsList}>
                      {proj.benefits.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <button type="button" className={styles.preConCta}>
                      {proj.cta}
                    </button>
                  </article>
                ))}
              </div>
            )}
          </section>
        ) : null}

        {mainTab === 'homeloans' ? (
          <div className="row g-4 align-items-start">
            <div className="col-lg-8">
              <section className={styles.stackSection}>
                <h2 className={styles.blockTitle}>{HOME_LOAN_SECTION.title}</h2>
                <p className={styles.blockSub}>{HOME_LOAN_SECTION.subtitle}</p>
                {homeLoanPartners.length === 0 ? (
                  <p className="text-muted mb-0">
                    Home loan partners will appear here once added in the admin panel.
                  </p>
                ) : (
                  <div className={styles.hlPartnerGrid}>
                    {homeLoanPartners.map((row) => (
                      <article
                        key={row.id ?? row.bank}
                        className={styles.hlPartnerCard}
                      >
                        <div className={styles.hlPartnerIcon} aria-hidden>
                          <i className={row.icon} />
                        </div>
                        <h3 className={styles.hlPartnerName}>{row.bank}</h3>
                        <dl className={styles.hlPartnerStats}>
                          <div className={styles.hlPartnerStatRow}>
                            <dt>Interest Rate</dt>
                            <dd>{row.interestRate}</dd>
                          </div>
                          <div className={styles.hlPartnerStatRow}>
                            <dt>Processing Fee</dt>
                            <dd>{row.processingFee}</dd>
                          </div>
                          <div className={styles.hlPartnerStatRow}>
                            <dt>Max Tenure</dt>
                            <dd>{row.maxTenure}</dd>
                          </div>
                        </dl>
                        <button type="button" className={styles.hlApplyBtn}>
                          Apply Now
                        </button>
                      </article>
                    ))}
                  </div>
                )}
              </section>
            </div>
            <div className="col-lg-4">
              <div className={styles.hlAsideStack}>
                <aside className={styles.hlEmiCard}>
                  <div className={styles.hlEmiHead}>
                    <span className={styles.hlEmiHeadIcon} aria-hidden>
                      <i className="fa-solid fa-calculator" />
                    </span>
                    <h2 className={styles.hlEmiTitle}>EMI Calculator</h2>
                  </div>
                  <div className={styles.hlEmiField}>
                    <label htmlFor="hl-loan-amt">Loan Amount (₹)</label>
                    <input
                      id="hl-loan-amt"
                      type="text"
                      inputMode="decimal"
                      placeholder="Enter loan amount"
                      value={loanAmountInput}
                      onChange={(e) => setLoanAmountInput(e.target.value)}
                      autoComplete="off"
                    />
                  </div>
                  <div className={styles.hlEmiField}>
                    <label htmlFor="hl-rate">Interest Rate (%)</label>
                    <input
                      id="hl-rate"
                      type="text"
                      inputMode="decimal"
                      value={emiRatePct}
                      onChange={(e) => setEmiRatePct(e.target.value)}
                      autoComplete="off"
                    />
                  </div>
                  <div className={styles.hlEmiField}>
                    <label htmlFor="hl-tenure">Tenure (Years)</label>
                    <input
                      id="hl-tenure"
                      type="text"
                      inputMode="decimal"
                      value={emiYears}
                      onChange={(e) => setEmiYears(e.target.value)}
                      autoComplete="off"
                    />
                  </div>
                  <button
                    type="button"
                    className={styles.hlEmiSubmit}
                    onClick={handleCalculateEmi}
                  >
                    Calculate EMI
                  </button>
                  {formattedEmi ? (
                    <p className={styles.hlEmiResult} role="status">
                      Estimated EMI: <strong>{formattedEmi}</strong> / month
                    </p>
                  ) : null}
                </aside>
                <aside className={styles.hlBenefitsCard}>
                  <h2 className={styles.hlBenefitsTitle}>
                    NRI Home Loan Benefits
                  </h2>
                  <ul className={styles.hlBenefitsList}>
                    {NRI_HOME_LOAN_BENEFITS.map((b) => (
                      <li key={b.text}>
                        <span className={styles.hlBenefitIcon} aria-hidden>
                          <i className={b.icon} />
                        </span>
                        <span>{b.text}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        ) : null}

        {mainTab === 'verification' ? (
          <section className={styles.stackSection}>
            <div className={styles.verShell}>
              <h2 className={styles.verShellTitle}>
                {PROPERTY_LEGAL_VERIFICATION.title}
              </h2>
              <p className={styles.verShellSub}>
                {PROPERTY_LEGAL_VERIFICATION.subtitle}
              </p>
              <div className="row g-4 mt-1">
                <div className="col-lg-7">
                  <div className={styles.verServicesStack}>
                    {VERIFICATION_SERVICE_CARDS.map((svc) => (
                      <article
                        key={svc.title}
                        className={styles.verSvcCard}
                      >
                        <span className={styles.verSvcIcon} aria-hidden>
                          <i className={svc.icon} />
                        </span>
                        <div className={styles.verSvcBody}>
                          <h3 className={styles.verSvcTitle}>{svc.title}</h3>
                          <p className={styles.verSvcDesc}>{svc.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className={styles.verFormPane}>
                    <h3 className={styles.verFormTitle}>Get Started</h3>
                    <div className={styles.verField}>
                      <label htmlFor="ver-address">Property Address</label>
                      <input
                        id="ver-address"
                        type="text"
                        placeholder="Enter complete property address"
                        value={verifyAddress}
                        onChange={(e) => setVerifyAddress(e.target.value)}
                        autoComplete="street-address"
                      />
                    </div>
                    <div className={styles.verField}>
                      <label htmlFor="ver-type">Verification Type</label>
                      <select
                        id="ver-type"
                        value={verifyType}
                        onChange={(e) => setVerifyType(e.target.value)}
                      >
                        {VERIFICATION_TYPE_OPTIONS.map((opt) => (
                          <option
                            key={opt.label}
                            value={opt.value}
                            disabled={opt.value === ''}
                          >
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button type="button" className={styles.verSubmitBtn}>
                      Start Verification Process
                    </button>
                    <p className={styles.verFootnote}>
                      Report delivered in 7-10 working days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </main>
  )
}
