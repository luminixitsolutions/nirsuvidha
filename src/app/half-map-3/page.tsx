import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { serviceData } from '../data/data';

import JobFilterThree from '../components/filter/job-filter-three'
import NavBgBlackTwo from '../components/navbar/nav-bg-black-two';
import ScrollToTop from '../components/scroll-to-top';
import HomeMap from '../components/home-map';
import Shorting from '../components/shorting';
import FilterModalOne from '../components/filter/filter-modal-one';

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

export default function HalfMapThree() {
  return (
    <>
        <NavBgBlackTwo/>

        <div className="map-banner-wrap half-map" style={{top:'0'}}>
            <div className="map-left-box">
                <div className="map-home flt-wrap">
                    <HomeMap/>
                </div>
            </div>
            
            <div className="map-content-wrap">
                <div className="map-content-bxo">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <JobFilterThree/>
                            <div className="_mp-inner-content elior">
                                <div className="item-shorting clearfix">
                                    <div className="left-column"><h4 className="m-sm-0 mb-2">Showing 1 - 10 of 20 Results</h4></div>
                                </div>
                                <Shorting/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="map-content-list">
                    <div className="row justify-content-center gx-xl-3 gx-3 gy-4">
                        {serviceData.map((item:ServiceListing,index:number)=>( 
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
                                <div className="jbs-grid-layout style_2 border">
                                    <div className="jbs-grid-emp-head">
                                        <div className="jbs-grid-emp-content">
                                            <div className="jbs-grid-emp-thumb"><Link href={`/service-detail/${item.id}`}><figure><Image src={item.image} width={40} height={40} className="img-fluid" alt=""/></figure></Link></div>
                                            <div className="jbs-grid-job-caption">
                                                <div className="jbs-job-employer-wrap"><span>{item.name}</span></div>
                                                <div className="jbs-job-title-wrap"><h4><Link href={`/service-detail/${item.id}`} className="jbs-job-title">{item.title}</Link></h4></div>
                                            </div>
                                        </div>
                                        <div className="jbs-grid-jbs-saved"><Link href="#" className="bkrs"><i className="fa-regular fa-bookmark"></i></Link></div>
                                    </div>
                                    <div className="jbs-grid-job-edrs mt-3">
                                        <div className="jbs-info-ico-style">
                                            <div className="jbs-single-y1 style-1"><span><i className="fa-solid fa-location-dot"></i></span>{item.location}</div>
                                            <div className="jbs-single-y1 style-2"><span><i className="fa-solid fa-clock"></i></span>{item.jobtype}</div>
                                            <div className="jbs-single-y1 style-3"><span><i className="fa-solid fa-coins"></i></span>5 Years exp.</div>
                                        </div>
                                    </div>
                                    <div className="jbs-grid-job-package-info">
                                        <div className="jbs-grid-package-title"><h5>{item.value}<span>\Year</span></h5></div>
                                        <div className="jbs-grid-posted"><span>26 March 2023</span></div>									
                                    </div>
                                    <div className="jbs-grid-job-apply-btns">
                                        <div className="jbs-btn-groups">
                                            <Link href="/service-detail" className="btn btn-md btn-light-main px-4">View Detail</Link>
                                            <Link href="#" className="btn btn-md btn-main px-4">Get Started</Link>
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
        <div className="clearfix"></div>   

        <ScrollToTop/>

        <FilterModalOne/>
    </>
  )
}
