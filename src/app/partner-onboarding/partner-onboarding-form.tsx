'use client'

import React, { useCallback, useState } from 'react'
import { toast, Toaster } from 'sonner'
import {
  Briefcase,
  MapPin,
  IndianRupee,
  FolderOpen,
  Sparkles,
  Scale,
  Building2,
  Send,
} from 'lucide-react'
import {
  ADDITIONAL_CERTS,
  AVAILABILITY_TYPE,
  CA_SPECIALIZATIONS,
  CLIENT_CATEGORIES_LAW,
  CLIENT_SIZE_PREF,
  COURT_LEVELS,
  INDIAN_STATES,
  INDUSTRIES,
  LANGUAGES,
  PARTNER_TYPES,
  PRICE_RANGE,
  PRACTICE_AREAS,
  PROPERTY_TYPES,
  RESPONSE_TIME,
  SERVICE_RADIUS,
  SOFTWARE_EXPERTISE,
  TEAM_SIZE,
  TRANSACTION_TYPES,
  type PartnerType,
} from '@/lib/partner-onboarding-data'
import {
  emptyPartnerForm,
  partnerFormToFormData,
  validatePartnerForm,
  type PartnerFormState,
} from '@/lib/partner-onboarding-validate'
import styles from './partner-onboarding.module.css'

function toggleIn(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((x) => x !== value) : [...list, value]
}

function FieldErr({ msg }: { msg?: string }) {
  return msg ? <p className={styles.err}>{msg}</p> : null
}

export default function PartnerOnboardingForm() {
  const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') ?? ''
  const [partnerType, setPartnerType] = useState<PartnerType>('')
  const [f, setF] = useState<PartnerFormState>(() => emptyPartnerForm())
  const [fieldErr, setFieldErr] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)

  const setPartnerTypeH = useCallback((v: PartnerType) => {
    setPartnerType(v)
    setF(emptyPartnerForm())
  }, [])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFieldErr({})
    const errs = validatePartnerForm(partnerType, f)
    if (Object.keys(errs).length > 0) {
      setFieldErr(errs)
      toast.error('Please fix the highlighted fields.')
      return
    }
    if (!apiBase) {
      toast.error('NEXT_PUBLIC_API_URL is not configured.')
      return
    }
    setSubmitting(true)
    try {
      const fd = partnerFormToFormData(partnerType, f)
      const res = await fetch(`${apiBase}/public/partner-onboarding`, {
        method: 'POST',
        body: fd,
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        const msg =
          (data?.message as string) ||
          (data?.errors && Object.values(data.errors).flat().join(' ')) ||
          'Submission failed.'
        toast.error(msg)
        if (data?.errors && typeof data.errors === 'object') {
          const flat: Record<string, string> = {}
          const camel = (s: string) =>
            s.replace(/_([a-z])/g, (_: string, c: string) => c.toUpperCase())
          Object.entries(data.errors).forEach(([k, v]) => {
            const key = camel(k)
            flat[key] = Array.isArray(v) ? String(v[0]) : String(v)
          })
          setFieldErr(flat)
        }
        return
      }
      toast.success(data?.message ?? 'Application Submitted Successfully!', {
        description:
          data?.description ??
          'Thank you for joining our partner network. Our team will review your application and get back to you within 2-3 business days.',
      })
      setPartnerType('')
      setF(emptyPartnerForm())
    } catch {
      toast.error('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const ptLawyer = partnerType === 'lawyer'
  const ptAcc = partnerType === 'accountant'
  const ptBroker = partnerType === 'property-broker'

  return (
    <div className={styles.pageWrap}>
      <Toaster richColors position="top-center" />
      <div className={styles.inner}>
        <h1 className={styles.heroTitle}>Partner Registration</h1>
        <p className={styles.heroSubtitle}>
          Join our network of professional service providers
        </p>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Professional Partner Application</h2>
            <p className={styles.cardDesc}>
              Please complete all required information to join our partner network
            </p>
          </div>

          <div className={styles.cardBody}>
            <form onSubmit={onSubmit} noValidate>
              <div className={styles.typeBand}>
                <div className={styles.sectionTitle}>
                  <Briefcase size={18} aria-hidden /> Partner Type *
                </div>
                <select
                  className={styles.select}
                  style={{ minHeight: '2.75rem', fontSize: '1rem' }}
                  value={partnerType}
                  onChange={(e) =>
                    setPartnerTypeH(e.target.value as PartnerType)
                  }
                  required
                >
                  <option value="">Select your professional category</option>
                  {PARTNER_TYPES.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <FieldErr msg={fieldErr.partnerType} />
              </div>

              <div className={styles.sectionTitle}>Basic Information</div>
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.label}>Full Name *</label>
                  <input
                    className={styles.input}
                    value={f.fullName}
                    onChange={(e) => setF({ ...f, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    autoComplete="name"
                  />
                  <FieldErr msg={fieldErr.fullName} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Email Address *</label>
                  <input
                    className={styles.input}
                    type="email"
                    value={f.email}
                    onChange={(e) => setF({ ...f, email: e.target.value })}
                    placeholder="Enter your email"
                    autoComplete="email"
                  />
                  <FieldErr msg={fieldErr.email} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Mobile Number *</label>
                  <input
                    className={styles.input}
                    inputMode="numeric"
                    maxLength={10}
                    value={f.phoneNumber}
                    onChange={(e) =>
                      setF({
                        ...f,
                        phoneNumber: e.target.value.replace(/\D/g, '').slice(0, 10),
                      })
                    }
                    placeholder="Enter 10-digit mobile number"
                  />
                  <p className={styles.hint}>
                    Indian mobile number starting with 6-9
                  </p>
                  <FieldErr msg={fieldErr.phoneNumber} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Business / Firm Name *</label>
                  <input
                    className={styles.input}
                    value={f.businessName}
                    onChange={(e) =>
                      setF({ ...f, businessName: e.target.value })
                    }
                    placeholder="Enter business name"
                  />
                  <FieldErr msg={fieldErr.businessName} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Years of Experience *</label>
                  <input
                    className={styles.input}
                    type="number"
                    min={0}
                    value={f.yearsExperience}
                    onChange={(e) =>
                      setF({ ...f, yearsExperience: e.target.value })
                    }
                    placeholder="Years of experience"
                  />
                  <FieldErr msg={fieldErr.yearsExperience} />
                </div>
              </div>

              <div className={`${styles.sectionSpacer} ${styles.sectionTitle}`}>
                <MapPin size={18} aria-hidden /> Service Area &amp; Location
              </div>
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.label}>Primary City *</label>
                  <input
                    className={styles.input}
                    value={f.primaryCity}
                    onChange={(e) =>
                      setF({ ...f, primaryCity: e.target.value })
                    }
                    placeholder="e.g., Mumbai, Delhi, Bangalore"
                  />
                  <FieldErr msg={fieldErr.primaryCity} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Service Radius *</label>
                  <select
                    className={styles.select}
                    value={f.serviceRadius}
                    onChange={(e) =>
                      setF({ ...f, serviceRadius: e.target.value })
                    }
                  >
                    <option value="">Select service radius</option>
                    {SERVICE_RADIUS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  <FieldErr msg={fieldErr.serviceRadius} />
                </div>
              </div>
              <div className={styles.field} style={{ marginTop: '1rem' }}>
                <label className={styles.label}>Operating States *</label>
                <p className={styles.hint}>
                  Select all states where you provide services
                </p>
                <div className={styles.checkGrid}>
                  {INDIAN_STATES.map((s) => (
                    <label key={s} className={styles.checkLabel}>
                      <input
                        type="checkbox"
                        checked={f.operatingStates.includes(s)}
                        onChange={() =>
                          setF({
                            ...f,
                            operatingStates: toggleIn(f.operatingStates, s),
                          })
                        }
                      />
                      <span>{s}</span>
                    </label>
                  ))}
                </div>
                <FieldErr msg={fieldErr.operatingStates} />
              </div>
              <div className={styles.field} style={{ marginTop: '1rem' }}>
                <label className={styles.label}>Languages Spoken *</label>
                <p className={styles.hint}>
                  Select all languages you can communicate in
                </p>
                <div className={`${styles.checkGrid} ${styles.checkGridLoose}`}>
                  {LANGUAGES.map((s) => (
                    <label key={s} className={styles.checkLabel}>
                      <input
                        type="checkbox"
                        checked={f.languagesSpoken.includes(s)}
                        onChange={() =>
                          setF({
                            ...f,
                            languagesSpoken: toggleIn(f.languagesSpoken, s),
                          })
                        }
                      />
                      <span>{s}</span>
                    </label>
                  ))}
                </div>
                <FieldErr msg={fieldErr.languagesSpoken} />
              </div>

              <div className={`${styles.sectionSpacer} ${styles.sectionTitle}`}>
                <IndianRupee size={18} aria-hidden /> Pricing &amp; Availability
              </div>
              <div className={styles.row3}>
                <div className={styles.field}>
                  <label className={styles.label}>Consultation Fee (₹) *</label>
                  <input
                    className={styles.input}
                    value={f.consultationFee}
                    onChange={(e) =>
                      setF({ ...f, consultationFee: e.target.value })
                    }
                    placeholder="e.g., 1000"
                  />
                  <p className={styles.hint}>Per hour consultation fee</p>
                  <FieldErr msg={fieldErr.consultationFee} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Availability Type *</label>
                  <select
                    className={styles.select}
                    value={f.availabilityType}
                    onChange={(e) =>
                      setF({ ...f, availabilityType: e.target.value })
                    }
                  >
                    <option value="">Select availability</option>
                    {AVAILABILITY_TYPE.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  <FieldErr msg={fieldErr.availabilityType} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Response Time *</label>
                  <select
                    className={styles.select}
                    value={f.responseTime}
                    onChange={(e) =>
                      setF({ ...f, responseTime: e.target.value })
                    }
                  >
                    <option value="">Expected response time</option>
                    {RESPONSE_TIME.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  <FieldErr msg={fieldErr.responseTime} />
                </div>
              </div>

              <div className={`${styles.sectionSpacer} ${styles.sectionTitle}`}>
                <FolderOpen size={18} aria-hidden /> Professional Documents
              </div>
              <div className={styles.row3}>
                <div className={styles.field}>
                  <label className={styles.label}>Profile Photo</label>
                  <input
                    className={styles.input}
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) =>
                      setF({
                        ...f,
                        profilePhoto: e.target.files?.[0] ?? null,
                      })
                    }
                  />
                  <p className={styles.hint}>Professional headshot (optional)</p>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Professional License *</label>
                  <input
                    className={styles.input}
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) =>
                      setF({ ...f, license: e.target.files?.[0] ?? null })
                    }
                  />
                  <p className={styles.hint}>Bar/ICAI/RERA certificate</p>
                  <FieldErr msg={fieldErr.license} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Partner Agreement *</label>
                  <input
                    className={styles.input}
                    type="file"
                    accept=".pdf"
                    onChange={(e) =>
                      setF({
                        ...f,
                        partnerAgreement: e.target.files?.[0] ?? null,
                      })
                    }
                  />
                  <p className={styles.hint}>Signed partner agreement</p>
                  <FieldErr msg={fieldErr.partnerAgreement} />
                </div>
              </div>

              <div className={`${styles.sectionSpacer} ${styles.sectionTitle}`}>
                <Sparkles size={18} aria-hidden /> Your Value Proposition
              </div>
              <div className={styles.field}>
                <label className={styles.label}>What makes you unique? *</label>
                <textarea
                  className={styles.textarea}
                  value={f.uniqueSellingPoint}
                  onChange={(e) =>
                    setF({ ...f, uniqueSellingPoint: e.target.value })
                  }
                  placeholder="Describe your unique expertise, approach, or specializations that set you apart from other professionals"
                />
                <p className={styles.hint}>
                  This will be displayed on your profile to attract clients
                </p>
                <FieldErr msg={fieldErr.uniqueSellingPoint} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>
                  Success Stories (Optional)
                </label>
                <textarea
                  className={`${styles.textarea} ${styles.textareaSm}`}
                  value={f.successStories}
                  onChange={(e) =>
                    setF({ ...f, successStories: e.target.value })
                  }
                  placeholder="Share a brief success story or notable achievement that demonstrates your expertise"
                />
                <p className={styles.hint}>
                  Help clients understand your track record
                </p>
              </div>

              {ptLawyer && (
                <div className={styles.borderTop}>
                  <div className={styles.sectionTitle}>
                    <Scale size={18} aria-hidden /> Legal Practice Information
                  </div>
                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label className={styles.label}>
                        Bar Council State Registration *
                      </label>
                      <select
                        className={styles.select}
                        value={f.barCouncilState}
                        onChange={(e) =>
                          setF({ ...f, barCouncilState: e.target.value })
                        }
                      >
                        <option value="">Select Bar Council state</option>
                        {INDIAN_STATES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <FieldErr msg={fieldErr.barCouncilState} />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>
                        Bar Registration Number *
                      </label>
                      <input
                        className={styles.input}
                        value={f.barRegistrationNumber}
                        onChange={(e) =>
                          setF({
                            ...f,
                            barRegistrationNumber: e.target.value,
                          })
                        }
                        placeholder="Enter bar registration number"
                      />
                      <FieldErr msg={fieldErr.barRegistrationNumber} />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>
                        Law School/University *
                      </label>
                      <input
                        className={styles.input}
                        value={f.lawSchool}
                        onChange={(e) =>
                          setF({ ...f, lawSchool: e.target.value })
                        }
                        placeholder="e.g., National Law School, Government Law College"
                      />
                      <FieldErr msg={fieldErr.lawSchool} />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Practice Areas *</label>
                    <p className={styles.hint}>
                      Select your areas of legal expertise
                    </p>
                    <div className={`${styles.checkGrid} ${styles.checkGridLoose}`}>
                      {PRACTICE_AREAS.map((s) => (
                        <label key={s} className={styles.checkLabel}>
                          <input
                            type="checkbox"
                            checked={f.practiceAreas.includes(s)}
                            onChange={() =>
                              setF({
                                ...f,
                                practiceAreas: toggleIn(f.practiceAreas, s),
                              })
                            }
                          />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                    <FieldErr msg={fieldErr.practiceAreas} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Court Levels *</label>
                    <p className={styles.hint}>Select courts where you practice</p>
                    <div className={`${styles.checkGrid} ${styles.checkGridLoose}`}>
                      {COURT_LEVELS.map((s) => (
                        <label key={s} className={styles.checkLabel}>
                          <input
                            type="checkbox"
                            checked={f.courtLevels.includes(s)}
                            onChange={() =>
                              setF({
                                ...f,
                                courtLevels: toggleIn(f.courtLevels, s),
                              })
                            }
                          />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                    <FieldErr msg={fieldErr.courtLevels} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Client Categories *</label>
                    <p className={styles.hint}>
                      Types of clients you typically serve
                    </p>
                    <div className={`${styles.checkGrid} ${styles.checkGridLoose}`}>
                      {CLIENT_CATEGORIES_LAW.map((s) => (
                        <label key={s} className={styles.checkLabel}>
                          <input
                            type="checkbox"
                            checked={f.clientCategories.includes(s)}
                            onChange={() =>
                              setF({
                                ...f,
                                clientCategories: toggleIn(
                                  f.clientCategories,
                                  s,
                                ),
                              })
                            }
                          />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                    <FieldErr msg={fieldErr.clientCategories} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>
                      Notable Case Types (Optional)
                    </label>
                    <textarea
                      className={`${styles.textarea} ${styles.textareaSm}`}
                      value={f.notableCaseTypes}
                      onChange={(e) =>
                        setF({ ...f, notableCaseTypes: e.target.value })
                      }
                      placeholder="Describe notable case types you've handled or specialized in"
                    />
                  </div>
                </div>
              )}

              {ptAcc && (
                <div className={styles.borderTop}>
                  <div className={styles.sectionTitle}>
                    <Scale size={18} aria-hidden /> Chartered Accountant
                    Information
                  </div>
                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label className={styles.label}>
                        ICAI Membership Number *
                      </label>
                      <input
                        className={styles.input}
                        value={f.icaiMembershipNumber}
                        onChange={(e) =>
                          setF({
                            ...f,
                            icaiMembershipNumber: e.target.value,
                          })
                        }
                        placeholder="Enter ICAI membership number"
                      />
                      <FieldErr msg={fieldErr.icaiMembershipNumber} />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>
                        CA Final Completion Year *
                      </label>
                      <input
                        className={styles.input}
                        value={f.caFinalYear}
                        onChange={(e) =>
                          setF({ ...f, caFinalYear: e.target.value })
                        }
                        placeholder="e.g., 2015"
                      />
                      <FieldErr msg={fieldErr.caFinalYear} />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Specializations *</label>
                    <p className={styles.hint}>Select your areas of expertise</p>
                    <div className={`${styles.checkGrid} ${styles.checkGridLoose}`}>
                      {CA_SPECIALIZATIONS.map((s) => (
                        <label key={s} className={styles.checkLabel}>
                          <input
                            type="checkbox"
                            checked={f.specializations.includes(s)}
                            onChange={() =>
                              setF({
                                ...f,
                                specializations: toggleIn(f.specializations, s),
                              })
                            }
                          />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                    <FieldErr msg={fieldErr.specializations} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Industry Expertise *</label>
                    <p className={styles.hint}>
                      Industries you have experience working with
                    </p>
                    <div className={`${styles.checkGrid} ${styles.checkGridLoose}`}>
                      {INDUSTRIES.map((s) => (
                        <label key={s} className={styles.checkLabel}>
                          <input
                            type="checkbox"
                            checked={f.industryExpertise.includes(s)}
                            onChange={() =>
                              setF({
                                ...f,
                                industryExpertise: toggleIn(
                                  f.industryExpertise,
                                  s,
                                ),
                              })
                            }
                          />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                    <FieldErr msg={fieldErr.industryExpertise} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>
                      Client Size Preference *
                    </label>
                    <p className={styles.hint}>
                      Types of clients you prefer to work with
                    </p>
                    <div className={`${styles.checkGrid} ${styles.checkGridLoose}`}>
                      {CLIENT_SIZE_PREF.map((s) => (
                        <label key={s} className={styles.checkLabel}>
                          <input
                            type="checkbox"
                            checked={f.clientSizePreference.includes(s)}
                            onChange={() =>
                              setF({
                                ...f,
                                clientSizePreference: toggleIn(
                                  f.clientSizePreference,
                                  s,
                                ),
                              })
                            }
                          />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                    <FieldErr msg={fieldErr.clientSizePreference} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Software Expertise *</label>
                    <p className={styles.hint}>
                      Software and tools you are proficient in
                    </p>
                    <div className={`${styles.checkGrid} ${styles.checkGridLoose}`}>
                      {SOFTWARE_EXPERTISE.map((s) => (
                        <label key={s} className={styles.checkLabel}>
                          <input
                            type="checkbox"
                            checked={f.softwareExpertise.includes(s)}
                            onChange={() =>
                              setF({
                                ...f,
                                softwareExpertise: toggleIn(
                                  f.softwareExpertise,
                                  s,
                                ),
                              })
                            }
                          />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                    <FieldErr msg={fieldErr.softwareExpertise} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>
                      Additional Certifications (Optional)
                    </label>
                    <p className={styles.hint}>
                      Other professional certifications you hold
                    </p>
                    <div className={`${styles.checkGrid} ${styles.checkGridLoose}`}>
                      {ADDITIONAL_CERTS.map((s) => (
                        <label key={s} className={styles.checkLabel}>
                          <input
                            type="checkbox"
                            checked={f.additionalCertifications.includes(s)}
                            onChange={() =>
                              setF({
                                ...f,
                                additionalCertifications: toggleIn(
                                  f.additionalCertifications,
                                  s,
                                ),
                              })
                            }
                          />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {ptBroker && (
                <div className={styles.borderTop}>
                  <div className={styles.sectionTitle}>
                    <Building2 size={18} aria-hidden /> Property Broker
                    Information
                  </div>
                  <div className={styles.row3}>
                    <div className={styles.field}>
                      <label className={styles.label}>
                        RERA Registration Number *
                      </label>
                      <input
                        className={styles.input}
                        value={f.reraRegistrationNumber}
                        onChange={(e) =>
                          setF({
                            ...f,
                            reraRegistrationNumber: e.target.value,
                          })
                        }
                        placeholder="Enter RERA registration number"
                      />
                      <FieldErr msg={fieldErr.reraRegistrationNumber} />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>
                        RERA Registration State *
                      </label>
                      <select
                        className={styles.select}
                        value={f.reraState}
                        onChange={(e) =>
                          setF({ ...f, reraState: e.target.value })
                        }
                      >
                        <option value="">Select RERA state</option>
                        {INDIAN_STATES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <FieldErr msg={fieldErr.reraState} />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Team Size *</label>
                      <select
                        className={styles.select}
                        value={f.teamSize}
                        onChange={(e) =>
                          setF({ ...f, teamSize: e.target.value })
                        }
                      >
                        <option value="">Select team size</option>
                        {TEAM_SIZE.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                      <FieldErr msg={fieldErr.teamSize} />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Property Types *</label>
                    <p className={styles.hint}>
                      Types of properties you deal with
                    </p>
                    <div className={`${styles.checkGrid} ${styles.checkGridLoose}`}>
                      {PROPERTY_TYPES.map((s) => (
                        <label key={s} className={styles.checkLabel}>
                          <input
                            type="checkbox"
                            checked={f.propertyTypes.includes(s)}
                            onChange={() =>
                              setF({
                                ...f,
                                propertyTypes: toggleIn(f.propertyTypes, s),
                              })
                            }
                          />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                    <FieldErr msg={fieldErr.propertyTypes} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Transaction Types *</label>
                    <p className={styles.hint}>
                      Types of transactions you handle
                    </p>
                    <div className={`${styles.checkGrid} ${styles.checkGridLoose}`}>
                      {TRANSACTION_TYPES.map((s) => (
                        <label key={s} className={styles.checkLabel}>
                          <input
                            type="checkbox"
                            checked={f.transactionTypes.includes(s)}
                            onChange={() =>
                              setF({
                                ...f,
                                transactionTypes: toggleIn(
                                  f.transactionTypes,
                                  s,
                                ),
                              })
                            }
                          />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                    <FieldErr msg={fieldErr.transactionTypes} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>
                      Price Range Expertise *
                    </label>
                    <p className={styles.hint}>
                      Property value ranges you specialize in
                    </p>
                    <div className={`${styles.checkGrid} ${styles.checkGridLoose}`}>
                      {PRICE_RANGE.map((s) => (
                        <label key={s} className={styles.checkLabel}>
                          <input
                            type="checkbox"
                            checked={f.priceRangeExpertise.includes(s)}
                            onChange={() =>
                              setF({
                                ...f,
                                priceRangeExpertise: toggleIn(
                                  f.priceRangeExpertise,
                                  s,
                                ),
                              })
                            }
                          />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                    <FieldErr msg={fieldErr.priceRangeExpertise} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Locality Expertise *</label>
                    <textarea
                      className={styles.textarea}
                      value={f.localityExpertise}
                      onChange={(e) =>
                        setF({ ...f, localityExpertise: e.target.value })
                      }
                      placeholder="Describe specific localities, areas, or neighborhoods where you have deep knowledge and experience"
                    />
                    <p className={styles.hint}>
                      This helps clients find you for specific areas
                    </p>
                    <FieldErr msg={fieldErr.localityExpertise} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>
                      Notable Projects (Optional)
                    </label>
                    <textarea
                      className={`${styles.textarea} ${styles.textareaSm}`}
                      value={f.notableProjects}
                      onChange={(e) =>
                        setF({ ...f, notableProjects: e.target.value })
                      }
                      placeholder="Describe notable projects, developments, or transactions you've been involved with"
                    />
                  </div>
                </div>
              )}

              <div className={styles.termsRow}>
                <input
                  type="checkbox"
                  checked={f.agreeTerms}
                  onChange={(e) =>
                    setF({ ...f, agreeTerms: e.target.checked })
                  }
                  id="agree_terms"
                />
                <label htmlFor="agree_terms" style={{ cursor: 'pointer' }}>
                  <span className={styles.label} style={{ marginBottom: 0 }}>
                    I agree to the Partner Terms &amp; Conditions, Code of
                    Conduct, and Data Privacy Policy *
                  </span>
                  <span className={styles.hint} style={{ display: 'block' }}>
                    By checking this box, you confirm that all information
                    provided is accurate and you agree to maintain professional
                    standards.
                  </span>
                  <FieldErr msg={fieldErr.agreeTerms} />
                </label>
              </div>

              <div className={styles.submitWrap}>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={submitting}
                >
                  <Send size={18} />
                  {submitting ? 'Submitting…' : 'Submit Partner Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
