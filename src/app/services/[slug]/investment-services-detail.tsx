'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './service-detail.module.css'
import type { InvestmentRiskLevel } from '@/app/data/investment-services-data'
import {
  availableInvestments,
  availableSection,
  investmentPage,
  investmentRecommendedIntro,
  investmentTransactions,
  quickInvestCopy,
  quickInvestFundOptions,
  recommendationPicks,
  transactionSection,
} from '@/app/data/investment-services-data'

function riskBadgeClass(risk: InvestmentRiskLevel): string {
  switch (risk) {
    case 'Low':
      return styles.invRiskLow
    case 'Moderate':
      return styles.invRiskModerate
    case 'High':
      return styles.invRiskHigh
    case 'Very High':
      return styles.invRiskVeryHigh
    default:
      return styles.invRiskModerate
  }
}

/**
 * Mirrors https://preview-nri-suvidha-v1.lovable.app/investment-services
 */
export default function InvestmentServicesDetail() {
  const [investType, setInvestType] = useState<'onetime' | 'sip'>('onetime')

  return (
    <main className={styles.page}>
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className={styles.invPageHero}>
              <span className={styles.invPageHeroIcon} aria-hidden>
                <i className="fa-solid fa-chart-line" />
              </span>
              <div>
                <h1 className={styles.sectionTitle}>{investmentPage.title}</h1>
                <p className={`${styles.sectionSub} mb-0`}>{investmentPage.subtitle}</p>
              </div>
            </div>

            <section className={styles.stackSection}>
              <h2 className={styles.blockTitle}>Recommended for You</h2>
              <p className={styles.blockSub}>{investmentRecommendedIntro}</p>
              <div className={styles.invRecGrid}>
                {recommendationPicks.map((pick) => (
                  <article key={pick.name} className={styles.invRecCard}>
                    <div className={styles.invRecTier}>{pick.tier}</div>
                    <h3 className={styles.invRecName}>{pick.name}</h3>
                    <div>
                      <div className={styles.invRecReturnLbl}>Expected Return</div>
                      <div className={styles.invRecReturnVal}>{pick.expectedReturn}</div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className={`${styles.stackSection} mt-4`}>
              <h2 className={styles.blockTitle}>{availableSection.title}</h2>
              <p className={styles.blockSub}>{availableSection.subtitle}</p>
              <div className={styles.invAvailGrid}>
                {availableInvestments.map((fund) => (
                  <article key={fund.name} className={styles.invFundCard}>
                    <h3 className={styles.invFundName}>{fund.name}</h3>
                    <p className={styles.invFundCat}>{fund.category}</p>
                    <div className={styles.invFundNavRow}>
                      <span className={styles.invFundNav}>{fund.navLabel}</span>
                      <span className={styles.invFundRet}>{fund.retLabel}</span>
                    </div>
                    <span className={`${styles.invRiskBadge} ${riskBadgeClass(fund.risk)}`}>
                      {fund.risk}
                    </span>
                    <Link href="/contact" className={styles.invInvestBtn}>
                      Invest
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            <section className={`${styles.stackSection} mt-4`}>
              <h2 className={styles.blockTitle}>{transactionSection.title}</h2>
              <p className={styles.blockSub}>{transactionSection.subtitle}</p>
              <div className={styles.invTxnCard}>
                {investmentTransactions.map((txn) => (
                  <div key={`${txn.kind}-${txn.date}-${txn.name}`} className={styles.invTxnRow}>
                    <div>
                      <div className={styles.invTxnKind}>{txn.kind}</div>
                      <p className={styles.invTxnName}>{txn.name}</p>
                    </div>
                    <div className={styles.invTxnMeta}>
                      <p className={styles.invTxnAmount}>{txn.amount}</p>
                      <p className={styles.invTxnDate}>{txn.date}</p>
                      <span
                        className={`${styles.invTxnStatus} ${
                          txn.status === 'Completed' ? styles.invTxnDone : styles.invTxnPending
                        }`}
                      >
                        {txn.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="col-lg-4">
            <div className={styles.invStickyRail}>
              <div className={styles.invQuickCard}>
                <h2 className={styles.formTitle}>{quickInvestCopy.title}</h2>
                <p className={`${styles.sectionSub} mb-3 mt-2`}>{quickInvestCopy.subtitle}</p>
                <div className={styles.invQuickField}>
                  <label htmlFor="inv-quick-fund">{quickInvestCopy.fundLabel}</label>
                  <select id="inv-quick-fund" defaultValue={quickInvestFundOptions[0].id}>
                    {quickInvestFundOptions.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.invQuickField}>
                  <label htmlFor="inv-quick-amt">{quickInvestCopy.amountLabel}</label>
                  <input id="inv-quick-amt" type="number" min={500} step={100} placeholder="5000" />
                </div>
                <div className={styles.invQuickField}>
                  <span
                    id="inv-type-label"
                    className="d-block mb-2"
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      color: '#64748b',
                      textTransform: 'uppercase',
                    }}
                  >
                    {quickInvestCopy.typeLabel}
                  </span>
                  <div className={styles.invRadioRow} role="group" aria-labelledby="inv-type-label">
                    <label className={styles.invRadio}>
                      <input
                        type="radio"
                        name="inv-type"
                        checked={investType === 'onetime'}
                        onChange={() => setInvestType('onetime')}
                      />
                      {quickInvestCopy.oneTime}
                    </label>
                    <label className={styles.invRadio}>
                      <input
                        type="radio"
                        name="inv-type"
                        checked={investType === 'sip'}
                        onChange={() => setInvestType('sip')}
                      />
                      {quickInvestCopy.sip}
                    </label>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className={styles.submitBtn}
                  style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
                >
                  {quickInvestCopy.proceedCta}
                </Link>
                <p className={styles.invQuickFoot}>
                  {quickInvestCopy.paymentFooter}
                  <br />
                  <strong>{quickInvestCopy.minNote}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
