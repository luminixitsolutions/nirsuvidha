import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { candidateData } from '../data/data';

import JobFilterThree from '../components/filter/job-filter-three'
import NavBgBlackTwo from '../components/navbar/nav-bg-black-two';
import HomeMap from '../components/home-map';
import Shorting from '../components/shorting';
import FilterModalOne from '../components/filter/filter-modal-one';

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

export default function CandidateHalfMap() {
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
                            <div className="col-xl-4 col-lg-6 col-md-6 col-12" key={index}>
                                <div className="jbs-grid-usrs-block border">
                                    <div className="jbs-grid-usrs-thumb">
                                        <div className="jbs-grid-yuo jbs-verified">
                                            <Link href={`/candidate-detail/${item.id}`}><figure><Image src={item.image} width={100} height={100} className="img-fluid circle" alt=""/></figure></Link>
                                        </div>
                                    </div>
                                    <div className="jbs-grid-usrs-caption">
                                        <div className="jbs-kioyer">
                                            <div className="jbs-kioyer-groups">
                                                {item.rate.map((el,index)=>( 
                                                    <span className={el} key={index}></span>
                                                ))}
                                                <span className="aal-reveis">{item.review}</span>
                                            </div>
                                        </div>
                                        <div className="jbs-tiosk">
                                            <h4 className="jbs-tiosk-title"><Link href={`/candidate-detail/${item.id}`}>{item.name}</Link></h4>
                                            <div className="jbs-tiosk-subtitle"><span>{item.position}</span></div>
                                        </div>
                                    </div>
                                    <div className="jbs-grid-usrs-info">
                                        <div className="jbs-info-ico-style bold">
                                            <div className="jbs-single-y1 style-2"><span><i className="fa-solid fa-sack-dollar"></i></span>{item.amount}</div>
                                            <div className="jbs-single-y1 style-3"><span><i className="fa-solid fa-coins"></i></span>{item.exp}</div>
                                        </div>
                                    </div>
                                    <div className="jbs-grid-usrs-contact">
                                        <div className="jbs-btn-groups">
                                            <Link href="#" className="btn btn-md btn-gray px-4">Message</Link>
                                            <Link href={`/candidate-detail/${item.id}`} className="btn btn-md btn-main px-4">View Detail</Link>
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
