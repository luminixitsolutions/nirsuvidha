'use client'
import React, { use, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'

import NavBgWhite from '../../components/navbar/nav-bg-white'
import FooterTopTwo from '../../components/footer/footer-top-two'
import FooterLightTwo from '../../components/footer/footer-light-two'
import ScrollToTop from '../../components/scroll-to-top'

import { serviceData, requirements, responsibilities } from '../../data/data'
import { serviceEngagementLabel } from '@/lib/service-display'
import Image from 'next/image'

type ApiService = {
  title: string
  short_description: string | null
  description: string | null
  full_description: string | null
  features: unknown
  benefits: unknown
  steps: unknown
  faqs: { question: string; answer: string }[] | null
  banner_image_url: string | null
}

function parseLines(v: unknown): string[] {
  if (Array.isArray(v)) {
    return v
      .map((x) => (typeof x === 'string' ? x : (x as { text?: string })?.text))
      .filter((x): x is string => Boolean(x && typeof x === 'string'))
  }
  return []
}

interface ServiceListing{
    id: number;
    image: string;
    name: string;
    tag: string[];
    jobtype: string;
    title: string;
    skills: string;
    value: string;
    open: string;
    location: string;
    name2: string;
    rate: string[];
    review: string;
}

export default function ServiceDetail({params}:{params:any}) {
    const { id }:any = use(params)
    const [ov, setOv] = useState<ApiService | null>(null)

    useEffect(() => {
        const idStr = String(id)
        const base = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api').replace(/\/$/, '')
        fetch(`${base}/public/services/${idStr}`)
            .then((r) => (r.ok ? r.json() : null))
            .then((j) => (j && j.data ? (setOv(j.data as ApiService) as void) : null))
            .catch(() => setOv(null))
    }, [id])

    const staticService =
        serviceData.find((item) => item.id === parseInt(String(id), 10)) ?? serviceData[0]
    const service: ServiceListing = useMemo(
        () =>
        ({
            ...staticService,
            title: ov?.title || staticService.title,
            skills:
                (ov && (ov.short_description || ov.description)) ||
                staticService.skills,
            image: (ov && ov.banner_image_url) || staticService.image,
        } as ServiceListing),
        [staticService, ov]
    )
  return (
    <>
        <NavBgWhite/>

        <section className="bg-cover bg-second position-relative py-4">
            <div className="position-absolute end-0 top-0 bottom-0 d-lg-block d-none"><img src='/img/banner-1.jpg' className="img-fluid rounded-start-pill h-100" alt=""/></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-9 col-md-12">
                        <div className="bread-wraps breadcrumbs light">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link href="/grid-style-1">Services</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{service.title}</li>
                                </ol>
                            </nav>
                        </div>
                        
                        <div className="jbs-head-bodys-top my-5">
                            <div className="jbs-roots-y1 flex-column justify-content-start align-items-start">
                                <div className="jbs-roots-y1-last">
                                    <div className="jbs-urt mb-2"><span className="label text-secondcolor bg-white rounded-pill">{serviceEngagementLabel(service.jobtype)}</span></div>
                                    <div className="jbs-title-iop mb-1"><h2 className="m-0 fs-2 text-light">{service.title}</h2></div>
                                    <div className="jbs-locat-oiu text-sm-muted text-light d-flex align-items-center">
                                        <span><i className="fa-solid fa-location-dot opacity-75 me-1"></i>{service.location}</span>
                                        <div className="jbs-kioyer-groups ms-3">
                                            {service.rate.map((star: string, i: number) => (
                                              <span key={i} className={star}></span>
                                            ))}
                                            <span className="aal-reveis text-light opacity-75">{service.review}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="jbs-roots-y6 py-3">
                                    <p className="text-light">{service.skills}</p>
                                </div>
                                <div className="jbs-roots-y6 py-3">
                                    <button className="btn btn-main fw-medium px-lg-5 px-4 me-3" type="button" data-bs-toggle="modal" data-bs-target="#applyService">Get Started</button>
                                    <button className="btn btn-whites fw-medium px-lg-5 px-4" type="button">Save for later</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="explot-info-details d-inline-flex flex-wrap">
                            <div className="single-explot d-flex align-items-center me-md-5 me-3 my-2">
                                <div className="single-explot-first">
                                    <i className="fa-solid fa-business-time text-main fs-1"></i>
                                </div>
                                <div className="single-explot-last ps-2">
                                    <span className="text-light opacity-75">Service line</span>
                                    <p className="text-light fw-bold fs-6 m-0">{service.name2}</p>
                                </div>
                            </div>
                            <div className="single-explot d-flex align-items-center me-md-5 me-3 my-2">
                                <div className="single-explot-first">
                                    <i className="fa-solid fa-location-dot text-main fs-1"></i>
                                </div>
                                <div className="single-explot-last ps-2">
                                    <span className="text-light opacity-75">Primary hub</span>
                                    <p className="text-light fw-bold fs-6 m-0">{service.location}</p>
                                </div>
                            </div>
                            <div className="single-explot d-flex align-items-center">
                                <div className="single-explot-first">
                                    <i className="fa-solid fa-sack-dollar text-main fs-1"></i>
                                </div>
                                <div className="single-explot-last ps-2">
                                    <span className="text-light opacity-75">Est. fee</span>
                                    <p className="text-light fw-bold fs-6 m-0">{service.value}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>   

        <section className="gray-simple">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        
                        <div className="jbs-blocs style_03 b-0 mb-md-4 mb-sm-4">
                            <div className="jbs-blocs-body px-4 py-4">
                                <div className="jbs-content mb-4">
                                    <h5>Service description</h5>
                                    <p>NRI Suvidha coordinates this offering end-to-end for NRIs and OCIs: intake, document checks, specialist assignment, and delivery with clear milestones. You stay informed across time zones with a single point of contact.</p>
                                    <p>{service.skills} We align timelines with India working days, regulatory cut-offs, and any partner banks or authorities involved.</p>
                                    {ov?.full_description && (
                                        <div
                                            className="mt-3"
                                            style={{ whiteSpace: 'pre-wrap' }}
                                        >
                                            {ov.full_description}
                                        </div>
                                    )}
                                    {ov && parseLines(ov.features).length > 0 && (
                                        <div className="mt-3">
                                            <h6>Features</h6>
                                            <ul className="simple-list">
                                                {parseLines(ov.features).map((x, i) => (
                                                    <li key={i}>{x}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {ov && parseLines(ov.benefits).length > 0 && (
                                        <div className="mt-3">
                                            <h6>Benefits</h6>
                                            <ul className="simple-list">
                                                {parseLines(ov.benefits).map((x, i) => (
                                                    <li key={i}>{x}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {ov && Array.isArray(ov.faqs) && ov.faqs.length > 0 && (
                                        <div className="mt-3">
                                            <h6>FAQs</h6>
                                            {ov.faqs.map((f, i) => (
                                                <div key={i} className="mb-2">
                                                    <p className="m-0 fw-bold">{f.question}</p>
                                                    <p className="m-0 text-sm-muted">{f.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <p className="m-0">Engagement is structured around your goals—whether one-off filings, ongoing compliance, or a multi-step property or inheritance matter—with transparent pricing before work begins.</p>
                                </div>
                                <div className="jbs-content-body mb-4">
                                    <h5 className="mb-3">Requirements</h5>
                                    <div className="jbs-content mb-3">
                                        <h6>Requirements:</h6>
                                        <ul className="simple-list">
                                            {requirements.map((item:string,index:number)=>( 
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="jbs-content mb-4">
                                        <h6>Responsibilities:</h6>
                                        <ul className="simple-list">
                                            {responsibilities.map((item:string,index:number)=>( 
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="jbs-content">
                                        <h6>Typical documents</h6>
                                        <ul className="colored-list">
                                            <li>Government-issued ID and proof of address (country of residence)</li>
                                            <li>PAN or overseas tax identifiers, where applicable</li>
                                            <li>Prior India-related paperwork (if any) for continuity</li>
                                            <li>Authorization or POA drafts when someone acts on your behalf</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="jbs-blox-footer">
                                <div className="blox-first-footer">
                                    <div className="ftr-share-block">
                                        <ul>
                                            <li><strong>Share this service:</strong></li>
                                            <li><Link href="#"><i className="fa-brands fa-facebook"></i></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-google-plus"></i></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="col-lg-4 col-md-12">
                        <div className="detail-side-block bg-white mb-4">
                            <div className="detail-side-heads mb-2">
                                <h3>Ready to get started?</h3>
                                <p>Share a few details so we can confirm scope and assign the right specialist.</p>
                            </div>
                            <div className="detail-side-middle">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" placeholder=""/>
                                    <label>Name:</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" placeholder=""/>
                                    <label>Email:</label>
                                </div>
                                <div className="form-group">
                                    <div className="upload-btn-wrapper full-width">
                                        <button className="btn full-width">Upload documents</button>
                                        <input type="file" name="myfile"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="elsoci"><label>Are you an NRI or OCI seeking India-related support?</label></div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="nrioci" id="id-wyes" value="option1"/>
                                        <label className="form-check-label" htmlFor="id-wyes">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="nrioci" id="id-wno" value="option1"/>
                                        <label className="form-check-label" htmlFor="id-wno">No</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="elsoci"><label>Do you need a representative to act in India on your behalf?</label></div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="repindia" id="id-dyed" value="option1"/>
                                        <label className="form-check-label" htmlFor="id-dyed">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="repindia" id="id-dno" value="option1"/>
                                        <label className="form-check-label" htmlFor="id-dno">No</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="service-alert-side-id" value="option1"/>
                                        <label className="form-check-label" htmlFor="service-alert-side-id">Notify me about related services</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-main full-width fw-medium font-sm">Submit request</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="side-jbs-info-blox bg-white mb-4">
                            <div className="side-jbs-info-header">
                                <div className="side-jbs-info-thumbs">
                                    <figure><Image src={service.image} width={70} height={70} className="img-fluid" alt=""/></figure>
                                </div>
                                <div className="side-jbs-info-captionyo ps-3">
                                    <div className="sld-info-title">
                                        <h5 className="rtls-title mb-1">NRI Suvidha</h5>
                                        <div className="jbs-locat-oiu text-sm-muted">
                                            <span className="me-1"><i className="fa-solid fa-location-dot me-1"></i>Mumbai, India</span><span className="ms-1">NRI services platform</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="side-jbs-info-middle">
                                <div className="side-full-info-groups">
                                    <div className="single-side-info">
                                        <span className="text-sm-muted sld-subtitle">Focus:</span>
                                        <h6 className="sld-title">Legal, tax, banking & property</h6>
                                    </div>
                                    <div className="single-side-info">
                                        <span className="text-sm-muted sld-subtitle">Serving:</span>
                                        <h6 className="sld-title">NRIs & OCIs globally</h6>
                                    </div>
                                    <div className="single-side-info">
                                        <span className="text-sm-muted sld-subtitle">Support hours:</span>
                                        <h6 className="sld-title">India + follow-the-sun</h6>
                                    </div>
                                    <div className="single-side-info">
                                        <span className="text-sm-muted sld-subtitle">Hub:</span>
                                        <h6 className="sld-title">India operations centre</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="side-rtl-jbs-block bg-white ">
                            <div className="side-rtl-jbs-head">
                                <h5 className="side-jbs-titles">Related Services</h5>
                            </div>
                            <div className="side-rtl-jbs-body">
                                <div className="side-rtl-jbs-groups">

                                    {serviceData.slice(0,5).map((item:ServiceListing,index:number)=>( 
                                        <div className="single-side-rtl-jbs" key={index}>
                                            <div className="single-fliox">
                                                <div className="single-rtl-jbs-thumb">
                                                    <Link href={`/service-detail/${item.id}`}><figure><Image src={item.image} width={70} height={70} className="img-fluid" alt=""/></figure></Link>
                                                </div>
                                                <div className="single-rtl-jbs-caption ms-2">
                                                    <div className="hjs-rtls-titles">
                                                        <div className="jbs-types mb-1">
                                                            <span className="label text-success bg-success bg-opacity-05">{serviceEngagementLabel(item.jobtype)}</span>
                                                        </div>
                                                        <h5 className="rtls-title py-2"><Link href={`/service-detail/${item.id}`}>{item.title}</Link></h5>
                                                        <div className="jbs-locat-oiu text-sm-muted">
                                                            <span><i className="fa-solid fa-location-dot me-1"></i>{item.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-rtl-jbs-hot">
                                                <div className="single-tag-rtls"><span className="label text-warning bg-warning bg-opacity-05"><i className="fa-brands fa-hotjar me-1"></i>New</span></div>
                                                <div className="single-tag-rtls"><span className="label text-success bg-success bg-opacity-05"><i className="fa-solid fa-star me-1"></i>Featured</span></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterTopTwo/>

        <FooterLightTwo/>

        <ScrollToTop/>

        <div className="modal fade" id="applyService" tabIndex={-1} role="dialog" aria-labelledby="applyServiceHeadingId" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered apply-service-pop-form" role="document">
                <div className="modal-content" id="applyServiceContentId">
                    <span className="mod-close" data-bs-dismiss="modal" aria-hidden="true"><i className="fas fa-close"></i></span>
                    <div className="modal-body">
                        <div className="detail-side-heads mb-4 mt-4">
                            <h3 id="applyServiceHeadingId">Ready to get started?</h3>
                            <p>Share a few details so we can confirm scope and assign the right specialist.</p>
                        </div>
                        <div className="detail-side-middle">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder=""/>
                                <label>Name:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder=""/>
                                <label>Email:</label>
                            </div>
                            <div className="form-group">
                                <div className="upload-btn-wrapper full-width">
                                    <button className="btn full-width">Upload documents</button>
                                    <input type="file" name="myfile"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="elsoci"><label>Are you an NRI or OCI seeking India-related support?</label></div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="nrioci-modal-id" id="id-mwyes" value="option1"/>
                                    <label className="form-check-label" htmlFor="id-mwyes">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="nrioci-modal-id" id="id-mwno" value="option1"/>
                                    <label className="form-check-label" htmlFor="id-mwno">No</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="elsoci"><label>Do you need a representative to act in India on your behalf?</label></div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="repindia-modal-id" id="id-mdyed" value="option1"/>
                                    <label className="form-check-label" htmlFor="id-mdyed">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="repindia-modal-id" id="id-mdno" value="option1"/>
                                    <label className="form-check-label" htmlFor="id-mdno">No</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="service-alert-modal-id" value="option1"/>
                                    <label className="form-check-label" htmlFor="service-alert-modal-id">Notify me about related services</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-main full-width fw-medium font-sm">Submit request</button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <p>New to NRI Suvidha?<Link href="/signup" className="text-main font--bold ms-1">Get Started</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
