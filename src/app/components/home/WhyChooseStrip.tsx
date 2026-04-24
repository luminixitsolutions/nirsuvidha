import styles from "./home-extras.module.css"

const points = [
  "One Platform for All India Needs",
  "Verified Experts & Compliance",
  "Secure Document Handling",
  "Transparent Pricing",
] as const

export default function WhyChooseStrip() {
  return (
    <section
      className={styles.whySection}
      aria-label="Why choose NRI Suvidha"
    >
      <div className="container">
        <div className="row g-2 g-md-3">
          {points.map((t) => (
            <div className="col-12 col-6 col-md-3" key={t}>
              <div className={styles.whyItem}>
                <div className={styles.whyCheck} aria-hidden>
                  <i className="fa-solid fa-check" />
                </div>
                <span className={styles.whyText}>{t}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
