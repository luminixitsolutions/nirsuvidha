import Image from "next/image"
import { Fragment } from "react"
import type { AboutFeature } from "@/lib/home-cms"
import styles from "./home-extras.module.css"

type Props = {
  aboutBadge: string
  aboutTitleBefore: string
  aboutTitleGold: string
  aboutLead: string
  aboutP1: string
  aboutP2: string
  aboutGoalKicker: string
  aboutGoalStatement: string
  aboutFoot: string
  aboutFeatures: AboutFeature[]
  /** Full URL from Laravel `about_section_image` (optional). */
  aboutSectionImage?: string
}

export default function AboutStackSection({
  aboutBadge,
  aboutTitleBefore,
  aboutTitleGold,
  aboutLead,
  aboutP1,
  aboutP2,
  aboutGoalKicker,
  aboutGoalStatement,
  aboutFoot,
  aboutFeatures,
  aboutSectionImage,
}: Props) {
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
              {aboutSectionImage ? (
                <Image
                  src={aboutSectionImage}
                  width={715}
                  height={715}
                  className={styles.aboutImg}
                  alt="NRI Suvidha – unified platform for India-related financial and legal services"
                  sizes="(min-width: 992px) 40vw, 100vw"
                  unoptimized
                  priority={false}
                />
              ) : null}
            </div>
          </div>

          <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
            <div className={styles.aboutContent}>
              <span className={styles.abBadge}>{aboutBadge}</span>
              <h2 className={styles.abTitle} id="about-india-title">
                {aboutTitleBefore}
                <span className={styles.abTitleGold}>{aboutTitleGold}</span>
              </h2>
              <p className={styles.abLead}>
                {aboutLead}
              </p>
              <div className={styles.abRule} aria-hidden />

              <div className={styles.abProse}>
                <p>{aboutP1}</p>
                <p>{aboutP2}</p>
              </div>

              <div className={styles.goalCard}>
                <div className={styles.goalIconWrap} aria-hidden>
                  <i className={`fa-solid fa-bullseye ${styles.goalIcon}`} />
                </div>
                <div className={styles.goalCopy}>
                  <p className={styles.goalKicker}>{aboutGoalKicker}</p>
                  <p className={styles.goalStatement}>
                    {aboutGoalStatement}
                  </p>
                </div>
              </div>

              <p className={styles.abFoot}>
                {aboutFoot}
              </p>

              {aboutFeatures.length > 0 ? (
              <div className={styles.abFeatureCard}>
                {aboutFeatures.map((f, i) => (
                  <Fragment key={`${f.title}-${i}`}>
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
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
