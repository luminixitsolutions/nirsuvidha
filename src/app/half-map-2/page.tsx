import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import JobFilterThree from '../components/filter/job-filter-three'
import NavBgBlackTwo from '../components/navbar/nav-bg-black-two';
import ScrollToTop from '../components/scroll-to-top';
import HomeMap from '../components/home-map';
import FilterModalOne from '../components/filter/filter-modal-one';
import Shorting from '../components/shorting';

import { serviceData } from '../data/data';

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

export default function HalfMapTwo() {
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
                            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                <div className="job-instructor-layout border">
                                    <div className="left-tags-capt">
                                        {item.tag.map((el:string,index:number)=>( 
                                            <span className={` ${el === 'Featured' ? 'featured-text' : 'urgent'}`} key={index}>{el}</span>
                                        ))}
                                    </div>
                                    <div className="brows-job-type">
                                        {item.jobtype === 'Enternship' && <span className="enternship">Enternship</span>}
                                        {item.jobtype === 'Freelancer' && <span className="freelanc">Freelancer</span>}
                                        {item.jobtype === 'Part Time' && <span className="part-time">Part Time</span>}
                                        {item.jobtype === 'Full Time' && <span className="full-time">Full Time</span>}
                                    </div>
                                    <div className="job-instructor-thumb">
                                        <Link href={`/service-detail/${item.id}`}><Image src={item.image} width={80} height={80} className="img-fluid" alt=""/></Link>
                                    </div>
                                    <div className="job-instructor-content">
                                        <div className="jbs-job-employer-wrap"><span>{item.name}<span></span></span></div>
                                        <h4 className="instructor-title"><Link href={`/service-detail/${item.id}`}>{item.title}</Link></h4>
                                        <div className="text-center text-sm-muted">
                                            <span><i className="fa-solid fa-location-dot me-2"></i>{item.location}</span>
                                        </div>
                                        <div className="jbs-grid-job-edrs-group center mt-2">
                                            <span>HTML</span>
                                            <span>CSS3</span>
                                            <span>Bootstrap</span>
                                            <span>Redux</span>
                                        </div>
                                    </div>
                                    <div className="jbs-grid-job-apply-btns px-3 py-3">
                                        <div className="jbs-btn-groups">
                                            <div className="jbs-sng-blux"><div className="jbs-grid-package-title smalls"><h5>{item.value}<span>\Year</span></h5></div></div>
                                            <div className="jbs-sng-blux"><Link href="#" className="btn btn-md btn-light-main px-4">Get Started</Link></div>
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
                                    <li className="page-item"><Link className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                    <li className="page-item active"><Link className="page-link" href="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">5</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">6</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></Link></li>
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
