import Image from 'next/image'
import Link from 'next/link'
import {
  aboutIntro,
  getInTouch,
  ourMission,
  ourStory,
  ourTeam,
  ourValues,
} from '../../data/about-us-content'

export default function AboutUsContent() {
  return (
    <>
      {/* Hero — same pattern as home `page.tsx` */}
      <div
        className="image-cover hero-header position-relative py-5 p-150"
        style={{
          backgroundImage: `url('/img/about.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        data-overlay="6"
      >
        <div className="position-absolute bottom-0 start-0 end-0">
          <Image
            src="/img/banner-curve.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="container position-relative z-9">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11 text-center text-lg-start">
              <Link
                href="/"
                className="d-inline-flex align-items-center text-white text-opacity-75 text-decoration-none small mb-4"
              >
                <i className="bi bi-arrow-left me-2" aria-hidden />
                Back to Home
              </Link>
              <h1 className="mb-3 text-light">{aboutIntro.title}</h1>
              <p className="fs-5 text-light text-opacity-90 mb-0" style={{ maxWidth: '40rem' }}>
                {aboutIntro.body}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix" />

      {/* Mission + Values — home-8 style */}
      <section className="gray-simple py-5">
        <div className="container">
          <div className="row align-items-start justify-content-between g-4 g-lg-5">
            <div className="col-lg-6">
              <div className="choose-us-head pe-lg-3">
                <div className="choose-title">
                  <h2 className="lh-base mb-3">{ourMission.title}</h2>
                  {ourMission.paragraphs.map((p, i) => (
                    <p key={i} className="text-muted mb-3 mb-lg-4">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ctr-jobstock-box h-100">
                <div className="p-4 p-lg-4">
                  <h3 className="h4 text-main fw-bold mb-4">{ourValues.title}</h3>
                  <div className="jobstock-icon-box-list">
                    <ul className="list-unstyled p-0 m-0">
                      {ourValues.items.map((item) => (
                        <li key={item.title} className="mb-3 mb-lg-4">
                          <div className="vib-list-wrap21">
                            <div className="vib-list-icon">
                              <i className="fa-solid fa-check" aria-hidden />
                            </div>
                            <div className="vib-list-caption">
                              <h5>{item.title}</h5>
                              <p className="mb-0">{item.description}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story — side image + copy */}
      <section className="pb-4 pt-2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-5 col-md-12 col-12 order-lg-2 order-1">
              <div className="side-thumber-wrap mb-md-0 mb-4 mb-lg-0">
                <div className="side-effect" />
                <div className="side-thumber-img pe-lg-4 pb-lg-4 position-relative">
                  <div className="bg-dot yellow w-25 h-25 position-absolute start-0 top-0 opacity-75" />
                  <div className="bg-dot success w-25 h-25 position-absolute end-0 bottom-0 opacity-75" />
                  <figure className="mb-0">
                    <img
                      src="/img/slice-1.png"
                      className="img-fluid rounded-top-pill rounded-bottom-4 z-1 position-relative"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 order-lg-1 order-2">
              <div className="choose-us-head">
                <div className="choose-title">
                  <h2 className="lh-base mb-3">{ourStory.title}</h2>
                  {ourStory.paragraphs.map((p, i) => (
                    <p key={i} className={`text-muted ${i < ourStory.paragraphs.length - 1 ? 'mb-3' : 'mb-0'}`}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix" />

      {/* Our Team */}
      <section className="gray-simple py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10 text-center">
              <div className="sec-heading center">
                <h2>{ourTeam.title}</h2>
                <p>{ourTeam.intro}</p>
              </div>
            </div>
          </div>
          <div className="row gx-3 gy-4 justify-content-center mt-2">
            {ourTeam.members.map((m) => (
              <div key={m.name} className="col-xl-5 col-lg-6 col-md-6">
                <div className="team-grid shadow-sm">
                  <div className="teamgrid-user">
                    <Image
                      src={m.image}
                      alt={m.name}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      className="img-fluid rounded-3"
                    />
                  </div>
                  <div className="teamgrid-content text-center text-md-start">
                    <h4>{m.name}</h4>
                    <span className="text-main d-block mb-2">{m.role}</span>
                    <p className="text-muted small mb-0">{m.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5 pt-2">
            <Link href="/contact" className="btn btn-main btn-lg fw-medium px-5 rounded-pill">
              Join Our Team <i className="bi bi-arrow-right ms-2" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section className="py-5 bg-white border-top">
        <div className="container">
          <div className="row justify-content-center mb-4 mb-lg-5">
            <div className="col-xl-7 col-lg-8 col-md-10 text-center">
              <span className="fw-medium label-light-warning px-3 py-2 rounded d-inline-block mb-3">
                {getInTouch.badge}
              </span>
              <div className="sec-heading center">
                <h2>{getInTouch.title}</h2>
                <p>{getInTouch.subtitle}</p>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {getInTouch.cards.map((card) => (
              <div key={card.title} className="col-md-6 col-lg-5">
                <div className="card border-0 shadow rounded-4 h-100 overflow-hidden">
                  <div className="card-body p-4 p-lg-5">
                    <div className="d-flex align-items-start gap-3 mb-4">
                      <span className="square--60 circle bg-light-main d-inline-flex align-items-center justify-content-center flex-shrink-0">
                        <i className="fa-solid fa-headset text-main fs-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="h5 fw-bold mb-0">{card.title}</h3>
                      </div>
                    </div>
                    <p className="mb-2">
                      <i className="bi bi-envelope text-main me-2" aria-hidden />
                      <a href={`mailto:${card.email}`} className="text-decoration-none text-dark fw-medium">
                        {card.email}
                      </a>
                    </p>
                    {'phone' in card && card.showPhone && card.phone && (
                      <p className="mb-0 text-muted">
                        <i className="bi bi-telephone text-main me-2" aria-hidden />
                        {card.phone}
                      </p>
                    )}
                    {'note' in card && card.note && <p className="mb-0 text-muted small mt-3">{card.note}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
