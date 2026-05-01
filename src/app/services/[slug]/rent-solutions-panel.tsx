'use client'

import Link from 'next/link'
import { useId, useMemo, useState } from 'react'
import type {
  RealEstatePublicBundle,
  RealEstatePublicCity,
  RealEstatePublicCuratedListing,
} from '@/lib/real-estate-public'
import { toast } from 'sonner'
import { REAL_ESTATE_SEARCH_FIELDS } from './real-estate-detail-data'
import styles from './service-detail.module.css'

export type NriRentalListing = {
  id: string
  title: string
  city: string
  rent: string
  furnishing: string
  deposit: string
  tenant: string
  /** Present for live Laravel listings — links Schedule / Inquire to the public detail page */
  detailPath?: string
}

export const NRI_RENTAL_LISTINGS: NriRentalListing[] = [
  {
    id: '1',
    title: '2 BHK Furnished - Powai',
    city: 'Mumbai',
    rent: '₹85,000/mo',
    furnishing: 'Fully Furnished',
    deposit: '2 months',
    tenant: 'Family / Bachelor',
  },
  {
    id: '2',
    title: '3 BHK Semi-Furnished - HSR Layout',
    city: 'Bangalore',
    rent: '₹55,000/mo',
    furnishing: 'Semi-Furnished',
    deposit: '3 months',
    tenant: 'Family',
  },
  {
    id: '3',
    title: '1 BHK Studio - Koregaon Park',
    city: 'Pune',
    rent: '₹25,000/mo',
    furnishing: 'Fully Furnished',
    deposit: '2 months',
    tenant: 'Bachelor',
  },
  {
    id: '4',
    title: '4 BHK Villa - Jubilee Hills',
    city: 'Hyderabad',
    rent: '₹1,20,000/mo',
    furnishing: 'Fully Furnished',
    deposit: '4 months',
    tenant: 'Family',
  },
]

type Props = {
  bundle?: RealEstatePublicBundle | null
}

type RentIntent = 'looking' | 'rent_out'

const LANDLORD_FEATURE_CARDS = [
  {
    icon: 'fa-solid fa-users',
    title: 'Tenant Sourcing',
    desc: 'Background-verified tenants matched to your property profile.',
  },
  {
    icon: 'fa-regular fa-file-lines',
    title: 'Agreement & Registration',
    desc: 'Drafting, e-stamping, and sub-registrar coordination.',
  },
  {
    icon: 'fa-solid fa-wallet',
    title: 'Rent Collection',
    desc: 'Monthly collection with direct remittance to your NRE/NRO account.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Property Inspection',
    desc: 'Quarterly visits with photo reports shared on your dashboard.',
  },
  {
    icon: 'fa-solid fa-screwdriver-wrench',
    title: 'Maintenance',
    desc: 'Vetted vendors handle repairs — you approve estimates remotely.',
  },
  {
    icon: 'fa-solid fa-calculator',
    title: 'TDS & Tax Support',
    desc: 'TDS filing on rent and Form 26AS reconciliation.',
  },
] as const

const LANDLORD_LOCALITY_OPTIONS = [
  { value: '', label: 'Select locality' },
  { value: 'powai-mumbai', label: 'Powai, Mumbai' },
  { value: 'hsr-blr', label: 'HSR Layout, Bangalore' },
  { value: 'jubilee-hyd', label: 'Jubilee Hills, Hyderabad' },
  { value: 'golf-course-gurgaon', label: 'Golf Course Road, Gurgaon' },
  { value: 'baner-pune', label: 'Baner, Pune' },
  { value: 'saltlake-ccu', label: 'Salt Lake, Kolkata' },
  { value: 'other', label: 'Other (discuss with RM)' },
] as const

const LANDLORD_RENT_OPTIONS = [
  { value: '', label: 'Expected monthly rent' },
  { value: 'under-25k', label: 'Under ₹25,000' },
  { value: '25k-50k', label: '₹25,000 – ₹50,000' },
  { value: '50k-1l', label: '₹50,000 – ₹1,00,000' },
  { value: '1l-2l', label: '₹1,00,000 – ₹2,00,000' },
  { value: '2l-plus', label: 'Above ₹2,00,000' },
] as const

function pickStaticField(key: string) {
  return REAL_ESTATE_SEARCH_FIELDS.find((f) => f.key === key)
}

function resolveRentCityLabel(
  row: RealEstatePublicCuratedListing,
  cities: RealEstatePublicCity[],
): string {
  if (row.city_id != null) {
    const c = cities.find((x) => x.id === row.city_id)
    if (c?.name) return c.name
  }
  const loc = row.location?.trim()
  if (!loc) return 'India'
  const parts = loc.split(',').map((s) => s.trim()).filter(Boolean)
  return parts.length > 0 ? parts[parts.length - 1]! : loc
}

function formatRentDisplayPrice(price: string | null | undefined): string {
  const p = String(price ?? '').trim()
  if (!p) return '—'
  if (/\/mo(?:nth)?\b/i.test(p) || /per\s*month/i.test(p)) return p
  return `${p}/mo`
}

function inferFurnishing(
  status: string | null | undefined,
  bhk: string | null | undefined,
): string {
  const s = String(status ?? '').toLowerCase()
  if (s.includes('furnish')) return String(status).trim()
  const b = String(bhk ?? '').toLowerCase()
  if (b.includes('furnish')) return String(bhk).trim()
  return 'Details on enquiry'
}

export function mapCuratedListingToRentCard(
  row: RealEstatePublicCuratedListing,
  cities: RealEstatePublicCity[],
): NriRentalListing {
  const id = String(row.id)
  const detailPath = /^\d+$/.test(id) ? `/property/${id}` : undefined

  return {
    id,
    title: row.title,
    city: resolveRentCityLabel(row, cities),
    rent: formatRentDisplayPrice(row.price),
    furnishing: inferFurnishing(row.status, row.bhk),
    deposit: 'On request',
    tenant:
      [row.listed_by, row.seller_label]
        .map((x) => (typeof x === 'string' ? x.trim() : ''))
        .find((x) => x.length > 0) || 'Open to discussion',
    detailPath,
  }
}

export function rentListingsFromBundle(
  bundle: RealEstatePublicBundle | null | undefined,
): NriRentalListing[] {
  if (!bundle?.curated_listings?.length) return []
  return bundle.curated_listings
    .filter((row) => (row.transaction_type || 'buy').toLowerCase() === 'rent')
    .map((row) => mapCuratedListingToRentCard(row, bundle.cities))
}

export default function RentSolutionsPanel({ bundle = null }: Props) {
  const titleId = useId()
  const formUid = useId()
  const [intent, setIntent] = useState<RentIntent>('looking')
  const [landlordStateId, setLandlordStateId] = useState('')
  const [landlordCityId, setLandlordCityId] = useState('')
  const [landlordLocality, setLandlordLocality] = useState('')
  const [landlordRentBand, setLandlordRentBand] = useState('')

  const hasApiGeo = Boolean(
    bundle?.states?.length && bundle.cities?.length,
  )

  const landlordCityOptionsApi = useMemo(() => {
    if (!bundle || !landlordStateId) return []
    return bundle.cities.filter((c) => String(c.state_id) === landlordStateId)
  }, [bundle, landlordStateId])

  const staticStateOpts = pickStaticField('state')?.options ?? []
  const staticCityOpts = pickStaticField('city')?.options ?? []

  const { rentListings, usingLiveRentals } = useMemo(() => {
    const fromApi = rentListingsFromBundle(bundle)
    const usingLive = fromApi.length > 0
    return {
      rentListings: usingLive ? fromApi : NRI_RENTAL_LISTINGS,
      usingLiveRentals: usingLive,
    }
  }, [bundle])

  return (
    <div className={styles.rentSolEmbedded}>
      <h2 id={titleId} className={styles.reCuratedHeading}>
        Rental Solutions for NRIs
      </h2>
      <p className={styles.reCuratedSub}>
        Whether you&apos;re renting out your Indian property or looking to
        lease one — we handle it end-to-end.
      </p>

      <div className={styles.rentSolIntentRow}>
        <button
          type="button"
          className={`${styles.rentSolIntentCard} ${intent === 'looking' ? styles.rentSolIntentCardOn : ''}`}
          onClick={() => setIntent('looking')}
        >
          <span className={styles.rentSolIntentIcon} aria-hidden>
            <i className="fa-solid fa-key" />
          </span>
          <span className={styles.rentSolIntentTitle}>
            I&apos;m Looking to Rent
          </span>
          <span className={styles.rentSolIntentDesc}>
            Find verified rental homes in India for self, family, or short
            stays.
          </span>
        </button>
        <button
          type="button"
          className={`${styles.rentSolIntentCard} ${intent === 'rent_out' ? styles.rentSolIntentCardOn : ''}`}
          onClick={() => setIntent('rent_out')}
        >
          <span className={styles.rentSolIntentIcon} aria-hidden>
            <i className="fa-solid fa-wallet" />
          </span>
          <span className={styles.rentSolIntentTitle}>
            I Want to Rent Out My Property
          </span>
          <span className={styles.rentSolIntentDesc}>
            End-to-end tenant sourcing, agreement, rent collection &amp;
            remittance.
          </span>
        </button>
      </div>

      {intent === 'looking' ? (
        <>
          <h3 className={styles.rentSolSectionTitle}>
            Verified rental listings curated for NRIs
          </h3>
          {!usingLiveRentals ? (
            <p className="text-muted small mb-2">
              Sample listings — add published rent properties in admin to show
              live inventory here.
            </p>
          ) : null}
          <div className={styles.rentSolGrid}>
            {rentListings.map((p) => (
              <article key={p.id} className={styles.rentSolCard}>
                <div className={styles.rentSolCardTop}>
                  <h4 className={styles.rentSolCardTitle}>{p.title}</h4>
                  <span className={styles.rentSolVerified}>
                    <i className="fa-solid fa-circle-check me-1" aria-hidden />
                    Verified
                  </span>
                </div>
                <p className={styles.rentSolLoc}>
                  <i className="fa-solid fa-location-dot me-1" aria-hidden />
                  {p.city}
                </p>
                <dl className={styles.rentSolSpecs}>
                  <div>
                    <dt>Rent</dt>
                    <dd>{p.rent}</dd>
                  </div>
                  <div>
                    <dt>Furnishing</dt>
                    <dd>{p.furnishing}</dd>
                  </div>
                  <div>
                    <dt>Deposit</dt>
                    <dd>{p.deposit}</dd>
                  </div>
                  <div>
                    <dt>Tenant</dt>
                    <dd>{p.tenant}</dd>
                  </div>
                </dl>
                <div className={styles.rentSolCardActions}>
                  {p.detailPath ? (
                    <>
                      <Link
                        href={p.detailPath}
                        className={styles.rentSolBtnOutline}
                      >
                        Schedule Visit
                      </Link>
                      <Link
                        href={p.detailPath}
                        className={styles.rentSolBtnGold}
                      >
                        Inquire
                      </Link>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        className={styles.rentSolBtnOutline}
                        onClick={() =>
                          toast.message(
                            'We will contact you to schedule a visit.',
                          )
                        }
                      >
                        Schedule Visit
                      </button>
                      <button
                        type="button"
                        className={styles.rentSolBtnGold}
                        onClick={() =>
                          toast.message('Thanks — our team will reach out.')
                        }
                      >
                        Inquire
                      </button>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.rentSolLandlord}>
          <h3 className={styles.rentSolMgmtHeading}>
            Full property management for NRI owners
          </h3>
          <div className={styles.rentSolMgmtGrid}>
            {LANDLORD_FEATURE_CARDS.map((f) => (
              <article key={f.title} className={styles.rentSolMgmtCard}>
                <span className={styles.rentSolMgmtIcon} aria-hidden>
                  <i className={f.icon} />
                </span>
                <h4 className={styles.rentSolMgmtTitle}>{f.title}</h4>
                <p className={styles.rentSolMgmtDesc}>{f.desc}</p>
              </article>
            ))}
          </div>

          <div className={styles.rentSolOnboard}>
            <h3 className={styles.rentSolOnboardTitle}>
              Quick onboarding — share your property
            </h3>
            <div className={styles.rentSolOnboardFields}>
              {hasApiGeo && bundle ? (
                <>
                  <div className={styles.rentSolOnboardField}>
                    <label htmlFor={`${formUid}-ll-state`}>State</label>
                    <select
                      id={`${formUid}-ll-state`}
                      value={landlordStateId}
                      onChange={(e) => {
                        setLandlordStateId(e.target.value)
                        setLandlordCityId('')
                      }}
                    >
                      <option value="">Select state</option>
                      {bundle.states.map((s) => (
                        <option key={s.id} value={String(s.id)}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.rentSolOnboardField}>
                    <label htmlFor={`${formUid}-ll-city`}>City</label>
                    <select
                      id={`${formUid}-ll-city`}
                      value={landlordCityId}
                      onChange={(e) => setLandlordCityId(e.target.value)}
                      disabled={!landlordStateId}
                    >
                      <option value="">
                        {landlordStateId
                          ? 'Select city'
                          : 'Select state first'}
                      </option>
                      {landlordCityOptionsApi.map((c) => (
                        <option key={c.id} value={String(c.id)}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.rentSolOnboardField}>
                    <label htmlFor={`${formUid}-ll-state-st`}>State</label>
                    <select
                      id={`${formUid}-ll-state-st`}
                      value={landlordStateId}
                      onChange={(e) => setLandlordStateId(e.target.value)}
                    >
                      <option value="">Select state</option>
                      {staticStateOpts.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.rentSolOnboardField}>
                    <label htmlFor={`${formUid}-ll-city-st`}>City</label>
                    <select
                      id={`${formUid}-ll-city-st`}
                      value={landlordCityId}
                      onChange={(e) => setLandlordCityId(e.target.value)}
                    >
                      <option value="">Select city</option>
                      {staticCityOpts.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}
              <div className={styles.rentSolOnboardField}>
                <label htmlFor={`${formUid}-ll-loc`}>Locality</label>
                <select
                  id={`${formUid}-ll-loc`}
                  value={landlordLocality}
                  onChange={(e) => setLandlordLocality(e.target.value)}
                >
                  {LANDLORD_LOCALITY_OPTIONS.map((o) => (
                    <option
                      key={o.value === '' ? 'loc-empty' : o.value}
                      value={o.value}
                    >
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.rentSolOnboardField}>
                <label htmlFor={`${formUid}-ll-rent`}>Monthly rent</label>
                <select
                  id={`${formUid}-ll-rent`}
                  value={landlordRentBand}
                  onChange={(e) => setLandlordRentBand(e.target.value)}
                >
                  {LANDLORD_RENT_OPTIONS.map((o) => (
                    <option
                      key={o.value === '' ? 'rent-empty' : o.value}
                      value={o.value}
                    >
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="button"
              className={styles.rentSolOnboardSubmit}
              onClick={() => {
                if (
                  !landlordStateId ||
                  !landlordCityId ||
                  !landlordLocality ||
                  !landlordRentBand
                ) {
                  toast.error(
                    'Please choose state, city, locality, and expected rent.',
                  )
                  return
                }
                toast.success(
                  'Thanks — our team will call you shortly to complete landlord onboarding.',
                )
              }}
            >
              Request Callback
              <i className="fa-solid fa-arrow-right ms-2" aria-hidden />
            </button>
          </div>
        </div>
      )}

      {intent === 'looking' ? (
        <div className={styles.rentSolFoot}>
          <strong>What&apos;s included:</strong> Background-verified landlords ·
          Rental agreement assistance · Deposit safekeeping guidance · Local
          on-ground support during tenancy.
        </div>
      ) : null}
    </div>
  )
}
