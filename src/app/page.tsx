
import Image from "next/image";
import Link from "next/link";
import HomeBannerCounter from "./components/counter/home-banner-counter";
import counterStyles from "./components/counter/home-banner-counter.module.css";
import Navlight from "./components/navbar/navlight";
import HeroVideoModal from "./components/hero/hero-video-modal";
import HeroBadgeAnimated from "./components/hero/hero-badge-animated";
import heroBadgeStyles from "./components/hero/hero-badge-animated.module.css";
import PartnerTrustAnimated from "./components/partner/partner-trust-animated";
import CategoryTwo from "./components/category/category-two";
import CtaOne from "./components/cta/cta-one";
import ClientOne from "./components/client/client-one";
import SubscribeTwo from "./components/subscribe/subscribe-two";
import FooterOne from "./components/footer/footer-one";
import ScrollToTop from "./components/scroll-to-top";
import { getHomeCms } from "@/lib/home-cms";
import goldHero from "./hero-light-gold.module.css";
import homeServices from "./home-services-section.module.css";
import AboutStackSection from "./components/home/AboutStackSection";
import HowWeWorkSection from "./components/home/HowWeWorkSection";
import WhyChooseStrip from "./components/home/WhyChooseStrip";

export default async function Home() {
  const h = await getHomeCms();
  return (
      <>
        <Navlight/>

        <div
          id="home-hero"
          className={`hero-header position-relative ${goldHero.heroLightGold} ${goldHero.heroTight}`}
        >
            <div
              className={`position-absolute bottom-0 start-0 end-0 ${goldHero.wave}`}
              aria-hidden="true"
            >
                <Image
                  src="/img/banner-curve.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="img-fluid"
                  alt=""
                />
            </div>
            <div className={`container ${goldHero.content}`}>

                <div className="row justify-content-between align-items-start g-lg-0">
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 pe-lg-3">
                        <div className={`${heroBadgeStyles.eyebrowPillLight} mb-3`}>
                          <span className={heroBadgeStyles.eyebrowDash} aria-hidden="true" />
                          <HeroBadgeAnimated />
                        </div>
                        <h1 className={`mb-3 ${goldHero.heroTitle}`}>
                          {h.heroTitleBeforeGold}
                          <span className={goldHero.heroTitleGold}>
                            {h.heroTitleGoldPart}
                          </span>
                        </h1>
                        <p className={`mb-4 ${goldHero.heroSub}`}>{h.heroSubtitle}</p>
                        <div className="d-flex flex-wrap align-items-center gap-3 gap-md-5 mb-4">
                            <Link href="/#services" className="btn btn-main px-4">{h.heroPrimaryCta}</Link>
                            <HeroVideoModal variant="inline" />
                        </div>
                        <div className={counterStyles.heroStatsWrap}>
                            <HomeBannerCounter variant="light" items={h.homeStats} />
                        </div>
                    </div>
                    
                        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 mt-4 mt-lg-0 d-flex align-items-start ps-lg-1">
                        {/*
                        <div
                          className={`hero-search-wrap ${heroAssistantStyles.heroAssistantCard}`}
                        >
                            <div className="hero-search mb-3">
                                <h2 className={heroAssistantStyles.cardTitle}>
                                    Your India Stack With{" "}
                                    <span className={heroAssistantStyles.cardTitleGold}>
                                        {h.siteNameShort}
                                    </span>
                                </h2>
                                <p className={heroAssistantStyles.cardSubtitle}>
                                    A guided assistant finds the right India services — no generic
                                    filters.
                                </p>
                            </div>
                            <HeroSmartAssistant />
                        </div>
                        */}
                        <figure className={`w-100 mb-0 ${goldHero.stackImageWrap}`}>
                            <img
                                src="/img/back1.png"
                                className={`w-100 ${goldHero.stackImage} rounded`}
                                alt=""
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </div>

        <section id="partners" className={goldHero.partnersStrip}>
            <div className="container">
                <PartnerTrustAnimated/>
            </div>
        </section>
        <div className="clearfix"></div>

        <section
          className={`gray-simple ${homeServices.servicesBand}`}
          id="services"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div
                      className={`col-xl-7 col-lg-8 col-md-10 text-center ${homeServices.head}`}
                    >
                        <div className="sec-heading center">
                            <h2>{h.sectionServicesTitle}</h2>
                            <p>{h.sectionServicesSubtitle}</p>
                        </div>
                    </div>
                </div>
                <div
                  className={`row align-items-center gy-0 gx-4 gx-lg-3 gx-xl-4 ${homeServices.servicesLayout}`}
                >
                    <div
                      className={`col-12 col-lg-7 col-xl-8 order-1 ${homeServices.servicesCol}`}
                    >
                        <CategoryTwo border={false} />
                    </div>
                    <div
                      className={`col-12 col-lg-5 col-xl-4 order-2 d-none d-lg-flex ${homeServices.servicesImageCol}`}
                    >
                        <div className={homeServices.servicesImageWrap}>
                            <Image
                                src="/img/girl5.png"
                                width={880}
                                height={1022}
                                className={homeServices.servicesImage}
                                sizes="(min-width: 1200px) 33vw, (min-width: 992px) 40vw, 60vw"
                                alt="Service guide highlighting NRI service categories"
                                priority={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        

       

        {/*
        <section className="pb-4">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                        <div className="side-thumber-wrap mb-md-0 mb-4">
                            <div className="side-effect"></div>
                            <div className="side-thumber-img pe-4 pb-4 position-relative">
                                <div className="bg-dot yellow w-25 h-25 position-absolute start-0 top-0"></div>
                                <div className="bg-dot success w-25 h-25 position-absolute end-0 bottom-0"></div>
                                <figure><img src='/img/slice-1.png' className="img-fluid rounded-top-pill rounded-bottom-4 z-1 position-relative" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                        <div className="choose-us-head">
                            <div className="choose-us-wriops mb-2"><span className="fw-medium label-light-warning px-3 py-2 rounded">Advanced Features</span></div>
                            <div className="choose-title">
                                <h2 className="lh-base">Trusted NRI<br/>service platform</h2>
                                <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                            </div>
                            <div className="jobstock-icon-box-list mt-4">
                                <ul>
                                    {aboutData.map((item, index) => ( 
                                        <li key={index}>
                                            <div className="vib-list-wrap21">
                                                <div className="vib-list-icon">
                                                    <i className="fa-solid fa-check"></i>
                                                </div>
                                                <div className="vib-list-caption">
                                                    <h5>{item.title}</h5>
                                                    <p>{item.desc}</p>
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
        </section>
        */}

        <AboutStackSection />
        <HowWeWorkSection />
        <WhyChooseStrip />
        <div className="clearfix"></div>

        {/*
        <section className="pt-0">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                        <div className="p-lg-5 p-md-0 pt-md-5">
                            <div className="mb-4 mb-sm-7">
                                <span className="fw-medium label-light-success px-3 py-2 rounded">Our Showcase</span>
                                <h2 className="mt-2 lh-base">From inquiry to closure</h2>
                                <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                            </div>
                        
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <Link className="btn btn-main fw-medium px-4" href="#">Explore Services</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                        <div className="side-thumber-wrap mt-md-0 mt-4">
                            <div className="side-effect"></div>
                            <div className="side-thumber-img position-relative">
                                <div className="square--80 circle bg-white shadow position-absolute start-0 top-0 mt-5 ms-5 animate-bounce"><Image src='/img/l-4.png' className="img-fluid" width={40} height={40} alt=""/></div>
                                <div className="square--80 circle bg-white shadow position-absolute end-0 top-0 mt-5 me-5 animate-bounce"><Image src='/img/l-7.png' className="img-fluid" width={40} height={40} alt=""/></div>
                                <div className="square--80 circle bg-white shadow position-absolute start-50 bottom-0 mb-4 animate-bounce"><Image src='/img/l-10.png' className="img-fluid" width={40} height={40} alt=""/></div>
                                <figure><img src='/img/pay-2.png' className="img-fluid rounded" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        */}

        <CtaOne/>

        
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>{h.testimonialsHeading}</h2>
                            <p>{h.testimonialsSubtitle}</p>
                        </div>
                    </div>
                </div>
              <ClientOne/>
            </div>	
        </section>

        <SubscribeTwo/>

        <FooterOne/>

        <ScrollToTop/>
      </>
  );
}
