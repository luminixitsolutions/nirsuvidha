import styles from "./home-extras.module.css"

type Props = { points: string[] }

export default function WhyChooseStrip({ points }: Props) {
  if (points.length === 0) {
    return null
  }
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
