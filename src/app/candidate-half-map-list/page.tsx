import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import JobFilterThree from '../components/filter/job-filter-three'
import NavBgBlackTwo from '../components/navbar/nav-bg-black-two';
import HomeMap from '../components/home-map';
import Shorting from '../components/shorting';
import FilterModalOne from '../components/filter/filter-modal-one';

import { candidateData } from '../data/data';

interface Candidate{
    id: number;
    image: string;
    name: string;
    position: string;
    review: string;
    rate: string[];
    amount: string;
    exp: string;
    loction: string;
}


export default function CandidateHalfMapList() {
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
                        {candidateData.map((item:Candidate,index:number)=>( 
                            <div className="col-xl-12 col-lg-12 col-md-12 col-12" key={index}>
                                <div className="jbs-list-box border">
                                    <div className="jbs-list-head m-0">
                                        <div className="jbs-list-head-thunner center">
                                            <div className="jbs-list-usrs-thumb jbs-verified"><Link href={`/candidate-detail/${item.id}`}><figure><Image src={item.image} width={80} height={80} className="img-fluid circle" alt=""/></figure></Link></div>
                                            <div className="jbs-list-job-caption">
                                                <div className="jbs-job-title-wrap"><h4><Link href={`/candidate-detail/${item.id}`} className="jbs-job-title">{item.name}</Link></h4></div>
                                                <div className="jbs-job-mrch-lists">
                                                    <div className="single-mrch-lists">
                                                        <span>{item.position}</span>.<span><i className="fa-solid fa-location-dot me-1"></i>{item.loction}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="jbs-list-head-middle">
                                            <div className="elsocrio-jbs sm"><div className="ilop-tr"><i className="fa-solid fa-coins"></i></div><h5 className="jbs-list-pack">{item.exp}</h5></div>
                                        </div>
                                        <div className="jbs-list-head-last">
                                            <Link href="#" className="btn btn-md btn-main px-3">View Detail</Link>
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

        <FilterModalOne/>
    </>
  )
}
