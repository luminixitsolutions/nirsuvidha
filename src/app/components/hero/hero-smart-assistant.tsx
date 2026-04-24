'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import {
  buildRecommendations,
  LEVEL_OPTIONS,
  NEED_OPTIONS,
  type LevelId,
  type NeedId,
  type RegionId,
  type UrgentId,
  REGION_OPTIONS,
  URGENT_OPTIONS,
} from './hero-assistant-data'
import styles from './hero-smart-assistant.module.css'

const STEP_TITLES = [
  'What you need',
  'Where you are',
  'How soon',
  'Service level',
  'Your plan',
]

export default function HeroSmartAssistant() {
  const [step, setStep] = useState(1)
  const [need, setNeed] = useState<NeedId | null>(null)
  const [region, setRegion] = useState<RegionId | null>(null)
  const [urgent, setUrgent] = useState<UrgentId | null>(null)
  const [level, setLevel] = useState<LevelId | null>(null)

  const result = useMemo(() => {
    if (!need || !region || !urgent || !level) return null
    return buildRecommendations(need, region, urgent, level)
  }, [need, region, urgent, level])

  const goBack = () => {
    if (step <= 1) return
    setStep((s) => s - 1)
  }

  const reset = () => {
    setStep(1)
    setNeed(null)
    setRegion(null)
    setUrgent(null)
    setLevel(null)
  }

  const pickNeed = (id: NeedId) => {
    setNeed(id)
    setStep(2)
  }

  const pickRegion = (id: RegionId) => {
    setRegion(id)
    setStep(3)
  }

  const pickUrgent = (id: UrgentId) => {
    setUrgent(id)
    setStep(4)
  }

  const pickLevel = (id: LevelId) => {
    setLevel(id)
    setStep(5)
  }

  const needLabel = NEED_OPTIONS.find((o) => o.id === need)?.label
  const regionLabel = REGION_OPTIONS.find((o) => o.id === region)?.label
  const urgentLabel = URGENT_OPTIONS.find((o) => o.id === urgent)?.label
  const levelLabel = LEVEL_OPTIONS.find((o) => o.id === level)?.label

  return (
    <div className={`hero-search-content ${styles.wizard}`}>
      <div className={styles.kicker}>Smart NRI Assistant</div>

      <div className={styles.progressRow} aria-hidden>
        <div className={styles.progressTrack}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`${styles.progressSeg} ${i <= step ? styles.progressSegFill : ''}`}
            />
          ))}
        </div>
        <span className={styles.stepMeta}>
          Step {step} of 5 – {STEP_TITLES[step - 1]}
        </span>
      </div>

      {step > 1 && (
        <div className={styles.topBar}>
          <button type="button" className={styles.backBtn} onClick={goBack}>
            <i className="fa-solid fa-arrow-left" aria-hidden />
            Back
          </button>
        </div>
      )}

      <div className={styles.minBody}>
        {step === 1 && (
          <div key="s1" className={styles.panel}>
            <h3 className={styles.question} id="assist-q1">
              What do you need help with?
            </h3>
            <div
              className={`${styles.grid} ${styles.gridNeed}`}
              role="group"
              aria-labelledby="assist-q1"
            >
              {NEED_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={`${styles.optionCard} ${styles.optionCardRow}`}
                  aria-label={`${opt.label}. ${opt.desc}`}
                  onClick={() => pickNeed(opt.id)}
                >
                  <span className={styles.iconWrapRow}>
                    <i className={opt.icon} aria-hidden />
                  </span>
                  <span className={styles.optionLabel}>{opt.label}</span>
                  <i
                    className={`fa-solid fa-chevron-right ${styles.chevron}`}
                    aria-hidden
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div key="s2" className={styles.panel}>
            <h3 className={styles.question} id="assist-q2">
              Where are you based?
            </h3>
            <div className={styles.grid} role="group" aria-labelledby="assist-q2">
              {REGION_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={styles.optionCard}
                  onClick={() => pickRegion(opt.id)}
                >
                  <span className={styles.iconWrap}>
                    <i className={`fa-solid ${opt.icon}`} aria-hidden />
                  </span>
                  <span className={styles.optionLabel}>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div key="s3" className={styles.panel}>
            <h3 className={styles.question} id="assist-q3">
              How urgent is your request?
            </h3>
            <div
              className={`${styles.grid} ${styles.gridSingle}`}
              role="group"
              aria-labelledby="assist-q3"
            >
              {URGENT_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={styles.optionCard}
                  onClick={() => pickUrgent(opt.id)}
                >
                  <span className={styles.iconWrap}>
                    <i className={`fa-solid ${opt.icon}`} aria-hidden />
                  </span>
                  <span className={styles.optionLabel}>{opt.label}</span>
                  <span className={styles.optionSub}>{opt.sub}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div key="s4" className={styles.panel}>
            <h3 className={styles.question} id="assist-q4">
              What level of service do you need?
            </h3>
            <div
              className={`${styles.grid} ${styles.gridSingle}`}
              role="group"
              aria-labelledby="assist-q4"
            >
              {LEVEL_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={styles.optionCard}
                  onClick={() => pickLevel(opt.id)}
                >
                  <span className={styles.iconWrap}>
                    <i className={`fa-solid ${opt.icon}`} aria-hidden />
                  </span>
                  <span className={styles.optionLabel}>{opt.label}</span>
                  <span className={styles.optionSub}>{opt.sub}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 5 && result && (
          <div key="s5" className={styles.panel}>
            <div className={styles.successBadge}>
              <i className="fa-solid fa-circle-check" aria-hidden />
              Recommended for you
            </div>
            <p className={styles.resultIntro}>{result.summaryLine}</p>

            <div className={styles.chips}>
              {needLabel && <span className={styles.chip}>{needLabel}</span>}
              {regionLabel && <span className={styles.chip}>{regionLabel}</span>}
              {urgentLabel && <span className={styles.chip}>{urgentLabel}</span>}
              {levelLabel && <span className={styles.chip}>{levelLabel}</span>}
            </div>

            <div className={styles.recList}>
              {result.services.map((svc) => (
                <div key={svc.title} className={styles.recCard}>
                  <div className={styles.recIcon}>
                    <i className={`fa-solid ${svc.icon}`} aria-hidden />
                  </div>
                  <div>
                    <div className={styles.recTitle}>{svc.title}</div>
                    <p className={styles.recBlurb}>{svc.blurb}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className={styles.planHint}>{result.planHint}</p>

            <div className={styles.actions}>
              <Link
                href="/signup"
                className="btn btn-main full-width fw-semibold py-2"
              >
                Get expert recommendation
              </Link>
              <Link href="/contact" className={styles.secondaryBtn}>
                Talk to an advisor
              </Link>
            </div>

            <div className={styles.restart}>
              <button type="button" className={styles.restartBtn} onClick={reset}>
                Start over
              </button>
            </div>
          </div>
        )}
      </div>

      <footer
        className={styles.trustBar}
        aria-label="Security and data protection"
      >
        <div className={styles.trustItem}>
          <i className="fa-solid fa-shield-halved" aria-hidden />
          <span>Bank-level Security</span>
        </div>
        <div className={styles.trustItem}>
          <i className="fa-solid fa-lock" aria-hidden />
          <span>Data Protection</span>
        </div>
        <div className={styles.trustItem}>
          <i className="fa-solid fa-user-shield" aria-hidden />
          <span>100% Confidential</span>
        </div>
      </footer>
    </div>
  )
}
