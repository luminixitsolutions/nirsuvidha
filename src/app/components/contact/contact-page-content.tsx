import { contactPage } from '../../data/site-content'
import styles from './contact-page-content.module.css'

export default function ContactPageContent() {
  const telHref = contactPage.generalPhone.replace(/\s|-/g, '')

  return (
    <section className="gray-simple py-4 py-lg-5">
      <div className="container">
        <div className="row justify-content-center text-center mb-4 mb-lg-5">
          <div className="col-lg-9 col-xl-8">
            <span className={styles.heroBadge}>{contactPage.badge}</span>
            <h1 className={styles.heroTitle}>{contactPage.title}</h1>
            <p className={`${styles.heroSubtitle} mb-0`}>{contactPage.subtitle}</p>
          </div>
        </div>

        <div className="row g-4 justify-content-center mb-4 mb-lg-5">
          <div className="col-md-6 col-lg-5">
            <div className={styles.contactCard}>
              <h2 className={styles.contactCardTitle}>{contactPage.generalTitle}</h2>
              <div className={styles.contactLine}>
                <span className={styles.iconWrap} aria-hidden>
                  <i className="fa-solid fa-envelope" />
                </span>
                <div>
                  <a href={`mailto:${contactPage.generalEmail}`}>{contactPage.generalEmail}</a>
                </div>
              </div>
              <div className={styles.contactLine}>
                <span className={styles.iconWrap} aria-hidden>
                  <i className="fa-solid fa-phone" />
                </span>
                <div>
                  <a href={`tel:${telHref}`}>{contactPage.generalPhone}</a>
                  <span className="text-muted small ms-1">({contactPage.generalPhoneNote})</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className={styles.contactCard}>
              <h2 className={styles.contactCardTitle}>{contactPage.supportTitle}</h2>
              <div className={styles.contactLine}>
                <span className={styles.iconWrap} aria-hidden>
                  <i className="fa-solid fa-envelope" />
                </span>
                <div>
                  <a href={`mailto:${contactPage.supportEmail}`}>{contactPage.supportEmail}</a>
                  <p className={styles.supportNote}>{contactPage.supportNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className={styles.formWrap}>
              <h2 className={styles.formTitle}>{contactPage.formTitle}</h2>
              <p className={styles.formSubtitle}>{contactPage.formSubtitle}</p>
              <form action="#" method="post">
                <div className="row g-3 g-md-4">
                  <div className="col-md-6">
                    <div className="form-group mb-0">
                      <label className="fw-medium small text-dark mb-1">Name</label>
                      <input type="text" className={`form-control ${styles.inputRounded}`} placeholder="Your name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-0">
                      <label className="fw-medium small text-dark mb-1">Email</label>
                      <input
                        type="email"
                        className={`form-control ${styles.inputRounded}`}
                        placeholder="your@email.com"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-0">
                      <label className="fw-medium small text-dark mb-1">Subject</label>
                      <input type="text" className={`form-control ${styles.inputRounded}`} placeholder="How can we help?" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-0">
                      <label className="fw-medium small text-dark mb-1">Phone</label>
                      <input
                        type="tel"
                        className={`form-control ${styles.inputRounded}`}
                        placeholder="Your phone number"
                        autoComplete="tel"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-0">
                      <label className="fw-medium small text-dark mb-1">Message</label>
                      <textarea
                        className={`form-control ${styles.inputRounded}`}
                        rows={5}
                        placeholder="Tell us more about your request..."
                      />
                    </div>
                  </div>
                  <div className="col-12 pt-1">
                    <button type="submit" className="btn btn-main btn-lg rounded-3 px-5 fw-bold">
                      {contactPage.submitLabel}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
