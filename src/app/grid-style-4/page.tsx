import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { serviceData } from '../data/data'

import NavBgBlack from '../components/navbar/nav-bg-black'
import JobFilterOne from '../components/filter/job-filter-one'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'
import FooterTopTwo from '../components/footer/footer-top-two'
import Shorting from '../components/shorting';

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


export default function GridStyleFour() {
  return (
    <>
        <NavBgBlack/>   

        <div className="page-title bg-main" style={{backgroundImage:`url('/img/bg2.png')`, backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2 className="ipt-title">Grid style 04</h2>
                        <div className="breadcrumbs light">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link href="#">Home</Link></li>
                                    <li className="breadcrumb-item"><Link href="#">NRI Client</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Service grid 04</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="gray-simple">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <JobFilterOne/>
                    </div>
                    
                    <div className="col-xxl-9 col-xl-8 col-lg-8 col-md-12 col-sm-12">
                    
                        <div className="row justify-content-center mb-4">
                            <div className="col-lg-12 col-md-12">
                                <div className="item-shorting-box">
                                    <div className="item-shorting clearfix">
                                        <div className="left-column"><h4 className="m-sm-0 mb-2">Showing 1 - 10 of 20 Results</h4></div>
                                    </div>
                                    <Shorting/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row justify-content-center gx-xl-3 gx-3 gy-4">
                            {serviceData.slice(0,8).map((item:ServiceListing,index:number)=>( 
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
                                    <div className="jbs-grid-layout border">
                                        <div className="right-tags-capt">
                                            {item.tag.map((el:string,index:number)=>( 
                                                <span className={` ${el === 'Featured' ? 'featured-text' : 'urgent'}`} key={index}>{el}</span>
                                            ))}
                                        </div>
                                        <div className="jbs-grid-emp-head">
                                            <div className="jbs-grid-emp-content">
                                                <div className="jbs-grid-emp-thumb"><Link href={`/service-detail/${item.id}`}><figure><Image src={item.image} width={40} height={40} className="img-fluid" alt=""/></figure></Link></div>
                                                <div className="jbs-grid-job-caption">
                                                    <div className="jbs-job-employer-wrap"><span>{item.name}</span></div>
                                                    <div className="jbs-job-title-wrap"><h4><Link href={`/service-detail/${item.id}`} className="jbs-job-title">{item.title}</Link></h4></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="jbs-grid-job-description">
                                            <p>Consistently create well-designed, tested code using best practices for website development, including mobile...</p>
                                        </div>
                                        <div className="jbs-grid-job-edrs">
                                            <div className="jbs-grid-job-edrs-group">
                                                <span><i className="fa-solid fa-location-dot me-1"></i>{item.location}</span>
                                                <span><i className="fa-regular fa-clock me-1"></i>{item.jobtype}</span>
                                                <span><i className="fa-solid fa-calendar-days me-1"></i>1 Hours ago</span>
                                            </div>
                                        </div>
                                        <div className="jbs-grid-job-apply-btns">
                                            <div className="jbs-btn-groups">
                                                <div className="jbs-sng-blux"><div className="jbs-grid-package-title smalls"><h5>{item.value}<span>\Year</span></h5></div></div>
                                                <div className="jbs-sng-blux"><Link href="#" className="btn btn-md btn-main px-4">Get Started</Link></div>
                                            </div>
                                        </div>
                                    </div>	
                                </div>
                            ))}
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                        <li className="page-item">
                                            <Link className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                        <li className="page-item active"><Link className="page-link" href="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">5</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">6</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </Link>
                                        </li>
                                        </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>		
        </section>

        <FooterTopTwo/>

        <FooterLightTwo/>

        <ScrollToTop/>
    </>
  )
}
