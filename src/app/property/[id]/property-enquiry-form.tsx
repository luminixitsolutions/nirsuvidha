'use client'

import { useCallback, useState } from 'react'
import { toast } from 'sonner'
import { API_BASE_URL } from '@/lib/api'
import styles from './property-detail-page.module.css'

type Props = {
  propertyId: string
}

export default function PropertyEnquiryForm({ propertyId }: Props) {
  const apiConfigured = Boolean(API_BASE_URL?.trim())
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!name.trim() || !email.trim() || !phone.trim()) {
        toast.error('Please enter your name, email, and phone.')
        return
      }
      if (!/^\d+$/.test(propertyId)) {
        toast.error('Invalid property reference.')
        return
      }
      if (!apiConfigured) {
        toast.error('NEXT_PUBLIC_API_URL is not configured.')
        return
      }
      setSubmitting(true)
      try {
        const fd = new FormData()
        fd.append('property_listing_id', propertyId)
        fd.append('full_name', name.trim())
        fd.append('email', email.trim())
        fd.append('phone', phone.trim())
        if (message.trim()) {
          fd.append('message', message.trim())
        }
        const res = await fetch('/api/proxy/property-listing-inquiries', {
          method: 'POST',
          body: fd,
        })
        const json = (await res.json().catch(() => null)) as {
          message?: string
        } | null
        if (!res.ok) {
          toast.error(
            json?.message ||
              (res.status ? `Could not submit (HTTP ${res.status}).` : 'Network error.'),
          )
          return
        }
        toast.success(json?.message || 'Thank you — we will contact you shortly.')
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
      } catch {
        toast.error('Network error. Please try again.')
      } finally {
        setSubmitting(false)
      }
    },
    [apiConfigured, email, message, name, phone, propertyId],
  )

  return (
    <div className={styles.enquiryCard} id="enquiry">
      <h2 className={styles.enquiryTitle}>Express interest</h2>
      <p className={styles.enquirySub}>
        Share your details and our team will reach out about this property. Response
        typically within one business day.
      </p>
      {!apiConfigured ? (
        <p className="text-muted small mb-0">
          Connect via the <a href="/contact">Contact</a> page if this form is unavailable.
        </p>
      ) : (
        <form onSubmit={onSubmit}>
          <div className={styles.field}>
            <label htmlFor="enq-name">Full name *</label>
            <input
              id="enq-name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="enq-email">Email *</label>
            <input
              id="enq-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="enq-phone">Phone *</label>
            <input
              id="enq-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="With country code"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="enq-msg">Message (optional)</label>
            <textarea
              id="enq-msg"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Preferred time to call, budget, or questions…"
            />
          </div>
          <button className={styles.submitBtn} type="submit" disabled={submitting}>
            {submitting ? 'Sending…' : 'Submit enquiry'}
          </button>
          <p className={styles.formHint}>
            By submitting, you agree to be contacted by NRI Suvidha regarding this
            listing.
          </p>
        </form>
      )}
    </div>
  )
}
