'use client'

import React, { useCallback, useId, useState } from 'react'
import { toast } from 'sonner'
import { apiFetchAlwaysJson, API_BASE_URL } from '@/lib/api'
import styles from './service-detail.module.css'

type Props = {
  serviceId: number
}

export default function SubmitCaseForm({ serviceId }: Props) {
  const apiConfigured = Boolean(API_BASE_URL?.trim())
  const fileId = useId()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [when, setWhen] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const onPickFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    setFile(f ?? null)
  }, [])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) {
      toast.error('Please enter a case title and description.')
      return
    }
    if (!apiConfigured) {
      toast.error('NEXT_PUBLIC_API_URL is not configured.')
      return
    }
    setSubmitting(true)
    try {
      const fd = new FormData()
      fd.append('service_id', String(serviceId))
      fd.append('case_title', title.trim())
      fd.append('case_description', description.trim())
      if (when) {
        fd.append('preferred_consultation_at', new Date(when).toISOString())
      }
      if (file) {
        fd.append('document', file)
      }
      const { ok, data: json } = await apiFetchAlwaysJson<{
        message?: string
      }>('/api/public/service-case-submissions', {
        method: 'POST',
        body: fd,
      })
      if (!ok) {
        toast.error(json?.message || 'Could not submit. Try again.')
        return
      }
      toast.success(json?.message || 'Case submitted.')
      setTitle('')
      setDescription('')
      setWhen('')
      setFile(null)
    } catch {
      toast.error('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className={styles.formCard}>
      <h2 className={styles.formTitle}>Submit Case</h2>
      <form onSubmit={onSubmit}>
        <div className={styles.field}>
          <label htmlFor="case_title">Case Title</label>
          <input
            id="case_title"
            name="case_title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Brief title for your case"
            autoComplete="off"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="case_description">Case Description</label>
          <textarea
            id="case_description"
            name="case_description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your issue in detail..."
          />
        </div>
        <div className={styles.field}>
          <label htmlFor={fileId}>Upload Documents</label>
          <label className={styles.dropzone} htmlFor={fileId}>
            <div className={styles.dropIcon} aria-hidden>
              <i className="fa-solid fa-cloud-arrow-up" />
            </div>
            <p className={styles.dropHint}>
              Click to upload or drag and drop.
              <br />
              PDF, DOC, DOCX, JPG up to 10MB.
            </p>
          </label>
          <input
            id={fileId}
            className={styles.fileInput}
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp,application/pdf"
            onChange={onPickFile}
          />
          {file ? (
            <p className="small text-muted mt-2 mb-0">{file.name}</p>
          ) : null}
        </div>
        <div className={styles.field}>
          <label htmlFor="preferred_consultation_at">Preferred Consultation Time</label>
          <input
            id="preferred_consultation_at"
            name="preferred_consultation_at"
            type="datetime-local"
            value={when}
            onChange={(e) => setWhen(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.submitBtn} disabled={submitting}>
          {submitting ? 'Submitting…' : 'Submit Case'}
        </button>
      </form>
    </div>
  )
}
