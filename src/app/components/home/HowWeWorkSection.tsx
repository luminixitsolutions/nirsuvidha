import { Fragment } from "react"
import styles from "./home-extras.module.css"

const steps = [
  {
    n: 1,
    icon: "fa-user-check" as const,
    title: "Sign Up & Verify",
    body: "Create your account and complete secure KYC verification.",
  },
  {
    n: 2,
    icon: "fa-hand-pointer" as const,
    title: "Choose Your Service",
    body: "Select from banking, tax, legal, investment, or property services.",
  },
  {
    n: 3,
    icon: "fa-user-tie" as const,
    title: "Get Expert Assigned",
    body: "A dedicated expert is assigned to manage your request.",
  },
  {
    n: 4,
    icon: "fa-chart-line" as const,
    title: "Track Progress",
    body: "Monitor status, upload documents, and get real-time updates.",
  },
  {
    n: 5,
    icon: "fa-circle-check" as const,
    title: "Task Completed",
    body: "We handle everything end-to-end with full transparency.",
  },
]

export default function HowWeWorkSection() {
  return (
    <section
      className={styles.howSection}
      id="how-we-work"
      aria-labelledby="how-title"
    >
      <div className="container">
        <div className={styles.howHead}>
          <h2 className={styles.howTitle} id="how-title">
            Simple. Transparent. Fully Managed.
          </h2>
          <p className={styles.howSub}>
            Five clear steps from signup to completion — the same care we
            bring to every NRI and OCI.
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
                  <i className="fa-solid fa-chevron-right" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
