import Image from "next/image"
import { Fragment } from "react"
import styles from "./home-extras.module.css"

const featureItems = [
  {
    icon: "fa-shield-halved" as const,
    title: "Secure & Compliant",
    desc: "Bank-grade security",
  },
  {
    icon: "fa-headset" as const,
    title: "Expert Support",
    desc: "Verified professionals",
  },
  {
    icon: "fa-globe" as const,
    title: "Anywhere, Anytime",
    desc: "Access from any device",
  },
  {
    icon: "fa-bolt" as const,
    title: "Fast & Efficient",
    desc: "Save time, stay ahead",
  },
] as const

export default function AboutStackSection() {
  return (
    <section
      className={styles.aboutSection}
      id="about-india-stack"
      aria-labelledby="about-india-title"
    >
      <div className={`container position-relative ${styles.aboutContainer}`}>
        <div className="row align-items-start align-items-lg-center gy-5 gy-lg-0 g-xl-4">
          <div className="col-12 col-lg-5 col-xl-5">
            <div className={styles.aboutImgWrap}>
              <Image
                src="/img/about1.png"
                width={715}
                height={715}
                className={styles.aboutImg}
                alt="NRI Suvidha – unified platform for India-related financial and legal services"
                sizes="(min-width: 992px) 40vw, 100vw"
                priority={false}
              />
            </div>
          </div>

          <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
            <div className={styles.aboutContent}>
              <span className={styles.abBadge}>About us</span>
              <h2 className={styles.abTitle} id="about-india-title">
                Your India Stack.{" "}
                <span className={styles.abTitleGold}>Simplified.</span>
              </h2>
              <p className={styles.abLead}>
                A Financial Super-App built exclusively for NRIs &amp; OCIs
              </p>
              <div className={styles.abRule} aria-hidden />

              <div className={styles.abProse}>
                <p>
                  NRI Suvidha is your trusted partner for managing financial,
                  legal, and investment needs in India from anywhere in the
                  world.
                </p>
                <p>
                  From banking and taxation to real estate and compliance, we
                  bring everything into one unified platform — eliminating the
                  need to coordinate with multiple agents or travel.
                </p>
              </div>

              <div className={styles.goalCard}>
                <div className={styles.goalIconWrap} aria-hidden>
                  <i className={`fa-solid fa-bullseye ${styles.goalIcon}`} />
                </div>
                <div className={styles.goalCopy}>
                  <p className={styles.goalKicker}>Our goal is simple:</p>
                  <p className={styles.goalStatement}>
                    Make India-related tasks effortless for global Indians.
                  </p>
                </div>
              </div>

              <p className={styles.abFoot}>
                With verified experts, secure digital processes, and
                end-to-end assistance, you stay in control while we handle the
                complexity.
              </p>

              <div className={styles.abFeatureCard}>
                {featureItems.map((f, i) => (
                  <Fragment key={f.title}>
                    {i > 0 && (
                      <div className={styles.abFeatureVsep} aria-hidden />
                    )}
                    <div className={styles.abFeatureCol}>
                      <div className={styles.abFeatureIcon}>
                        <i className={`fa-solid ${f.icon}`} aria-hidden />
                      </div>
                      <h3 className={styles.abFeatureTitle}>{f.title}</h3>
                      <p className={styles.abFeatureDesc}>{f.desc}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
