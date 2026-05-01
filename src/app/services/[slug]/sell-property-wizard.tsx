'use client'

import { useCallback, useEffect, useId, useMemo, useState } from 'react'
import { toast } from 'sonner'
import { apiFetchAlwaysJson } from '@/lib/api'
import type { RealEstatePublicBundle } from '@/lib/real-estate-public'
import { REAL_ESTATE_SEARCH_FIELDS } from './real-estate-detail-data'
import styles from './service-detail.module.css'

const STEP_LABELS = ['Property', 'Pricing', 'Photos & Docs', 'Contact'] as const

type Props = {
  /** When `inline`, the wizard renders inside the curated feed card (no overlay). */
  variant?: 'modal' | 'inline'
  open: boolean
  onClose: () => void
  bundle: RealEstatePublicBundle | null
}

type ContactMode = 'email' | 'whatsapp' | 'team'

function pickStaticField(key: string) {
  return REAL_ESTATE_SEARCH_FIELDS.find((f) => f.key === key)
}

export default function SellPropertyWizard({
  variant = 'modal',
  open,
  onClose,
  bundle,
}: Props) {
  const titleId = useId()
  const isInline = variant === 'inline'
  const [step, setStep] = useState(1)
  const [stateId, setStateId] = useState('')
  const [cityId, setCityId] = useState('')
  const [locality, setLocality] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [bhk, setBhk] = useState('')
  const [builtUpSqft, setBuiltUpSqft] = useState('')
  const [carpetSqft, setCarpetSqft] = useState('')

  const [expectedPrice, setExpectedPrice] = useState('')
  const [priceNegotiable, setPriceNegotiable] = useState<'yes' | 'fixed'>('yes')

  const [photoFiles, setPhotoFiles] = useState<File[]>([])
  const [docFiles, setDocFiles] = useState<File[]>([])

  const [contactMode, setContactMode] = useState<ContactMode>('email')
  const [whatsappNumber, setWhatsappNumber] = useState('')
  const [bestTimeIst, setBestTimeIst] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const hasApiGeo =
    Boolean(bundle?.states?.length) && Boolean(bundle?.cities?.length)
  const hasApiPtype = Boolean(bundle?.property_types?.length)
  const hasApiBhk = Boolean(bundle?.bhk_types?.length)

  const staticStateOpts = pickStaticField('state')?.options ?? []
  const staticCityOpts = pickStaticField('city')?.options ?? []
  const staticPtypeOpts = pickStaticField('property-type')?.options ?? []
  const staticBhkOpts = pickStaticField('bhk-type')?.options ?? []

  const cityOptionsApi = useMemo(() => {
    if (!bundle || !stateId) return []
    return bundle.cities.filter((c) => String(c.state_id) === stateId)
  }, [bundle, stateId])

  const resetAll = useCallback(() => {
    setStep(1)
    setStateId('')
    setCityId('')
    setLocality('')
    setPropertyType('')
    setBhk('')
    setBuiltUpSqft('')
    setCarpetSqft('')
    setExpectedPrice('')
    setPriceNegotiable('yes')
    setPhotoFiles([])
    setDocFiles([])
    setContactMode('email')
    setWhatsappNumber('')
    setBestTimeIst('')
  }, [])

  useEffect(() => {
    if (isInline) return
    if (!open) {
      resetAll()
    }
  }, [open, isInline, resetAll])

  useEffect(() => {
    if (!open || isInline) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open, isInline])

  useEffect(() => {
    if (!open || isInline) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, isInline, onClose])

  const validateStep = (s: number): boolean => {
    if (s === 1) {
      if (!stateId || !cityId || !locality.trim() || !propertyType) {
        toast.error('Please fill state, city, locality, and property type.')
        return false
      }
      return true
    }
    if (s === 2) {
      if (!expectedPrice.trim()) {
        toast.error('Please enter your expected price.')
        return false
      }
      return true
    }
    if (s === 3) return true
    if (s === 4) {
      if (contactMode === 'whatsapp' && !whatsappNumber.trim()) {
        toast.error('Please enter your WhatsApp number.')
        return false
      }
      if (!bestTimeIst.trim()) {
        toast.error('Please add a preferred time to contact (IST).')
        return false
      }
      return true
    }
    return true
  }

  const goNext = () => {
    if (!validateStep(step)) return
    if (step < 4) setStep((x) => x + 1)
  }

  const goBack = () => {
    if (step <= 1) return
    setStep((x) => x - 1)
  }

  const onSubmit = async () => {
    if (!validateStep(4)) {
      return
    }
    setIsSubmitting(true)
    try {
      const fd = new FormData()
      fd.append('has_api_geo', hasApiGeo ? '1' : '0')
      if (hasApiGeo) {
        fd.append('state_id', stateId)
        fd.append('city_id', cityId)
      } else {
        fd.append('state_slug', stateId)
        fd.append('city_slug', cityId)
      }
      fd.append('locality', locality.trim())
      fd.append('property_type_slug', propertyType)
      if (bhk.trim()) {
        fd.append('bhk_slug', bhk)
      }
      if (builtUpSqft.trim()) {
        fd.append('built_up_sqft', builtUpSqft.trim())
      }
      if (carpetSqft.trim()) {
        fd.append('carpet_sqft', carpetSqft.trim())
      }
      fd.append('expected_price', expectedPrice.trim())
      fd.append('price_negotiable', priceNegotiable)
      fd.append('contact_mode', contactMode)
      if (whatsappNumber.trim()) {
        fd.append('whatsapp_number', whatsappNumber.trim())
      }
      fd.append('best_time_ist', bestTimeIst.trim())
      photoFiles.forEach((file) => {
        fd.append('photos[]', file)
      })
      docFiles.forEach((file) => {
        fd.append('documents[]', file)
      })

      const { ok, data } = await apiFetchAlwaysJson<{
        message?: string
        errors?: Record<string, string[]>
      }>('/api/public/sell-property-submissions', {
        method: 'POST',
        body: fd,
      })

      if (!ok) {
        const msg =
          (data &&
            typeof data === 'object' &&
            'message' in data &&
            typeof data.message === 'string' &&
            data.message) ||
          (data &&
            typeof data === 'object' &&
            'errors' in data &&
            data.errors &&
            Object.values(data.errors).flat()[0]) ||
          'Could not submit. Please check your connection and try again.'
        toast.error(String(msg))
        return
      }

      toast.success(
        (data &&
          typeof data === 'object' &&
          'message' in data &&
          typeof data.message === 'string' &&
          data.message) ||
          'Submitted. Our team will review and publish your listing after approval.',
      )
      resetAll()
      onClose()
    } finally {
      setIsSubmitting(false)
    }
  }

  const negotiableName = isInline ? 'sp-negotiable-inline' : 'sp-negotiable-modal'

  const onPickPhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = Array.from(e.target.files ?? [])
    if (next.length) setPhotoFiles((p) => [...p, ...next])
    e.target.value = ''
  }

  const onPickDocs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = Array.from(e.target.files ?? [])
    if (next.length) setDocFiles((p) => [...p, ...next])
    e.target.value = ''
  }

  if (!isInline && !open) return null

  const inner = (
    <div
      className={isInline ? styles.sellWizEmbedded : styles.sellWizModal}
      role={isInline ? undefined : 'dialog'}
      aria-modal={isInline ? undefined : true}
      aria-labelledby={titleId}
      onClick={isInline ? undefined : (e) => e.stopPropagation()}
    >
      <button
        type="button"
        className={styles.sellWizClose}
        aria-label={isInline ? 'Back to property listings' : 'Close'}
        onClick={onClose}
      >
        ×
      </button>
        <p className={styles.sellWizKicker}>
          Reach verified NRI buyers globally. Your listing goes live after admin
          approval.
        </p>

        <div className={styles.sellWizStepper}>
          {STEP_LABELS.map((label, idx) => {
            const n = idx + 1
            const done = step > n
            const active = step === n
            return (
              <div
                key={label}
                className={`${styles.sellWizStep} ${active ? styles.sellWizStepActive : ''} ${done ? styles.sellWizStepDone : ''}`}
              >
                <span className={styles.sellWizStepCircle} aria-hidden>
                  {done ? <i className="fa-solid fa-check" /> : n}
                </span>
                <span className={styles.sellWizStepLabel}>{label}</span>
              </div>
            )
          })}
        </div>

        <div className={styles.sellWizBody}>
          {step === 1 ? (
            <>
              <h2 id={titleId} className={styles.sellWizTitle}>
                Tell us about your property
              </h2>
              <div className={styles.sellWizGrid}>
                {hasApiGeo && bundle ? (
                  <>
                    <div className={styles.sellWizField}>
                      <label htmlFor="sp-state">
                        State <span className={styles.sellWizReq}>*</span>
                      </label>
                      <select
                        id="sp-state"
                        value={stateId}
                        onChange={(e) => {
                          setStateId(e.target.value)
                          setCityId('')
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
                    <div className={styles.sellWizField}>
                      <label htmlFor="sp-city">
                        City <span className={styles.sellWizReq}>*</span>
                      </label>
                      <select
                        id="sp-city"
                        value={cityId}
                        onChange={(e) => setCityId(e.target.value)}
                        disabled={!stateId}
                      >
                        <option value="">
                          {stateId ? 'Select city' : 'Select state first'}
                        </option>
                        {cityOptionsApi.map((c) => (
                          <option key={c.id} value={String(c.id)}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.sellWizField}>
                      <label htmlFor="sp-state-st">
                        State <span className={styles.sellWizReq}>*</span>
                      </label>
                      <select
                        id="sp-state-st"
                        value={stateId}
                        onChange={(e) => {
                          setStateId(e.target.value)
                          setCityId('')
                        }}
                      >
                        <option value="">Select state</option>
                        {staticStateOpts.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.sellWizField}>
                      <label htmlFor="sp-city-st">
                        City <span className={styles.sellWizReq}>*</span>
                      </label>
                      <select
                        id="sp-city-st"
                        value={cityId}
                        onChange={(e) => setCityId(e.target.value)}
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
                <div
                  className={`${styles.sellWizField} ${styles.sellWizFieldFull}`}
                >
                  <label htmlFor="sp-locality">
                    Locality / Area{' '}
                    <span className={styles.sellWizReq}>*</span>
                  </label>
                  <input
                    id="sp-locality"
                    type="text"
                    autoComplete="address-line2"
                    placeholder="e.g. Bandra West"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                  />
                </div>
                <div className={styles.sellWizField}>
                  <label htmlFor="sp-ptype">
                    Property Type <span className={styles.sellWizReq}>*</span>
                  </label>
                  <select
                    id="sp-ptype"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    <option value="">Select</option>
                    {hasApiPtype && bundle
                      ? bundle.property_types.map((p) => (
                          <option key={p.id} value={p.slug}>
                            {p.name}
                          </option>
                        ))
                      : staticPtypeOpts.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                  </select>
                </div>
                <div className={styles.sellWizField}>
                  <label htmlFor="sp-bhk">Configuration</label>
                  <select
                    id="sp-bhk"
                    value={bhk}
                    onChange={(e) => setBhk(e.target.value)}
                  >
                    <option value="">BHK</option>
                    {hasApiBhk && bundle
                      ? bundle.bhk_types.map((b) => (
                          <option key={b.id} value={b.slug}>
                            {b.label}
                          </option>
                        ))
                      : staticBhkOpts.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                  </select>
                </div>
                <div className={styles.sellWizField}>
                  <label htmlFor="sp-built">Built-up Area (sq ft)</label>
                  <input
                    id="sp-built"
                    type="text"
                    inputMode="numeric"
                    placeholder="e.g. 1450"
                    value={builtUpSqft}
                    onChange={(e) => setBuiltUpSqft(e.target.value)}
                  />
                </div>
                <div className={styles.sellWizField}>
                  <label htmlFor="sp-carpet">Carpet Area (sq ft)</label>
                  <input
                    id="sp-carpet"
                    type="text"
                    inputMode="numeric"
                    placeholder="e.g. 1200"
                    value={carpetSqft}
                    onChange={(e) => setCarpetSqft(e.target.value)}
                  />
                </div>
              </div>
            </>
          ) : null}

          {step === 2 ? (
            <>
              <h2 id={titleId} className={styles.sellWizTitle}>
                Set your expected price
              </h2>
              <div className={styles.sellWizStack}>
                <div className={styles.sellWizField}>
                  <label htmlFor="sp-price">
                    Expected Price (₹){' '}
                    <span className={styles.sellWizReq}>*</span>
                  </label>
                  <input
                    id="sp-price"
                    type="text"
                    placeholder="e.g. 1.2 Cr or 12000000"
                    value={expectedPrice}
                    onChange={(e) => setExpectedPrice(e.target.value)}
                  />
                  <p className={styles.sellWizHint}>
                    Our team will share comparable deals in your area.
                  </p>
                </div>
                <fieldset className={styles.sellWizFieldset}>
                  <legend>Is the price negotiable?</legend>
                  <label className={styles.sellWizRadio}>
                    <input
                      type="radio"
                      name={negotiableName}
                      checked={priceNegotiable === 'yes'}
                      onChange={() => setPriceNegotiable('yes')}
                    />
                    Yes, negotiable
                  </label>
                  <label className={styles.sellWizRadio}>
                    <input
                      type="radio"
                      name={negotiableName}
                      checked={priceNegotiable === 'fixed'}
                      onChange={() => setPriceNegotiable('fixed')}
                    />
                    Fixed price
                  </label>
                </fieldset>
                <div className={styles.sellWizTip}>
                  <i className="fa-regular fa-lightbulb" aria-hidden />
                  <span>
                    NRI Tip: Properties priced within 5% of locality average
                    sell 3× faster.
                  </span>
                </div>
              </div>
            </>
          ) : null}

          {step === 3 ? (
            <>
              <h2 id={titleId} className={styles.sellWizTitle}>
                Upload photos &amp; documents
              </h2>
              <div className={styles.sellWizUploadRow}>
                <label className={styles.sellWizDrop}>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className={styles.sellWizFileInput}
                    onChange={onPickPhotos}
                  />
                  <i className="fa-solid fa-camera" aria-hidden />
                  <strong>Property Photos</strong>
                  <span>
                    {photoFiles.length} uploaded — Click to add
                  </span>
                </label>
                <label className={styles.sellWizDrop}>
                  <input
                    type="file"
                    multiple
                    className={styles.sellWizFileInput}
                    onChange={onPickDocs}
                  />
                  <i className="fa-solid fa-upload" aria-hidden />
                  <strong>Legal Documents</strong>
                  <span>
                    {docFiles.length} uploaded — Title deed, tax receipts, etc.
                  </span>
                </label>
              </div>
              <p className={styles.sellWizFootNote}>
                All documents are encrypted and only shared with verified
                interested buyers.
              </p>
            </>
          ) : null}

          {step === 4 ? (
            <>
              <h2 id={titleId} className={styles.sellWizTitle}>
                How should buyers reach you?
              </h2>
              <div className={styles.sellWizContactModes}>
                {(
                  [
                    ['email', 'Email Only'],
                    ['whatsapp', 'WhatsApp'],
                    ['team', 'Via Our Team'],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    className={`${styles.sellWizModeCard} ${contactMode === value ? styles.sellWizModeCardOn : ''}`}
                    onClick={() => setContactMode(value)}
                  >
                    <span
                      className={`${styles.sellWizMiniRadio} ${contactMode === value ? styles.sellWizMiniRadioOn : ''}`}
                      aria-hidden
                    />
                    {label}
                  </button>
                ))}
              </div>
              <div className={styles.sellWizStack}>
                <div className={styles.sellWizField}>
                  <label htmlFor="sp-wa">WhatsApp Number (with country code)</label>
                  <input
                    id="sp-wa"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                  />
                </div>
                <div className={styles.sellWizField}>
                  <label htmlFor="sp-time">
                    Best Time to Contact (IST){' '}
                    <span className={styles.sellWizReq}>*</span>
                  </label>
                  <input
                    id="sp-time"
                    type="text"
                    placeholder="e.g. 7–10 PM"
                    value={bestTimeIst}
                    onChange={(e) => setBestTimeIst(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.sellWizSuccess}>
                <i className="fa-solid fa-circle-check" aria-hidden />
                <span>
                  After you submit, our team reviews your listing in the admin
                  panel. It appears on the website only after approval.
                </span>
              </div>
            </>
          ) : null}
        </div>

        <div className={styles.sellWizNav}>
          <button
            type="button"
            className={styles.sellWizBack}
            onClick={goBack}
            disabled={step <= 1}
          >
            <i className="fa-solid fa-arrow-left me-2" aria-hidden />
            Back
          </button>
          {step < 4 ? (
            <button type="button" className={styles.sellWizNext} onClick={goNext}>
              Next
              <i className="fa-solid fa-arrow-right ms-2" aria-hidden />
            </button>
          ) : (
            <button
              type="button"
              className={styles.sellWizNext}
              onClick={() => void onSubmit()}
              disabled={isSubmitting}
            >
              <i className="fa-solid fa-check me-2" aria-hidden />
              {isSubmitting ? 'Submitting…' : 'Submit Listing'}
            </button>
          )}
        </div>
    </div>
  )

  if (isInline) {
    return <div className={styles.sellWizEmbeddedWrap}>{inner}</div>
  }

  return (
    <div
      className={styles.sellWizOverlay}
      role="presentation"
      onClick={onClose}
    >
      {inner}
    </div>
  )
}
