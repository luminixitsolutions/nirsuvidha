import { Fragment } from "react"
import type { HowStep } from "@/lib/home-cms"
import styles from "./home-extras.module.css"

type Props = {
  title: string
  subtitle: string
  steps: HowStep[]
}

export default function HowWeWorkSection({ title, subtitle, steps }: Props) {
  if (steps.length === 0) {
    return null
  }
  return (
    <section
      className={styles.howSection}
      id="how-we-work"
      aria-labelledby="how-title"
    >
      <div className="container">
        <div className={styles.howHead}>
          <h2 className={styles.howTitle} id="how-title">
            {title}
          </h2>
          <p className={styles.howSub}>
            {subtitle}
          </p>
        </div>
        <div className={styles.howRow}>
          {steps.map((step, index) => (
            <Fragment key={step.n}>
              <div className={styles.howItem}>
                <div className={styles.stepCard}>
                  <p className={styles.stepNumber}>
                    Step {String(step.n).padStart(2, "0")}
                  </p>
                  <div className={styles.iconWrap}>
                    <i className={`fa-solid ${step.icon}`} aria-hidden />
                  </div>
                  <h3 className={styles.stepH}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.body}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.stepConnector} aria-hidden>
                  <i
                    className="fa-solid fa-chevron-right"
                    style={{ fontSize: '1.25rem', color: '#d4a83f' }}
                    aria-hidden
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
