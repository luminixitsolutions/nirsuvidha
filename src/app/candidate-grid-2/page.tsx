import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import JobFilterTwo from '../components/filter/job-filter-two'
import FooterTopTwo from '../components/footer/footer-top-two'
import NavBgBlack from '../components/navbar/nav-bg-black'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'
import Shorting from '../components/shorting';

import { candidateData } from '../data/data'

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

export default function CandidateGridTwo() {
  return (
    <>
        <NavBgBlack/>

        <div className="page-title bg-main" style={{backgroundImage:`url('/img/bg2.png')`, backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2 className="ipt-title">NRI client grid Style 02</h2>
                        <div className="breadcrumbs light">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link href="#">Home</Link></li>
                                    <li className="breadcrumb-item"><Link href="#">NRI Client</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">NRI client grid 02</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>   

        <section>
            <div className="container">
                <div className="row">
                
                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <JobFilterTwo/>							
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
                        
                        <div className="row justify-content-center gx-3 gy-4">
                            {candidateData.map((item:Candidate,index:number)=>( 
                                <div className="col-xl-4 col-lg-6 col-md-6 col-12" key={index}>
									<div className="jbs-grid-usrs-block border">
										<div className="jbs-grid-usrs-thumb">
											<div className="jbs-grid-yuo">
												<Link href={`/candidate-detail/${item.id}`}><figure><Image src={item.image} width={100} height={100} className="img-fluid circle" alt=""/></figure></Link>
											</div>
										</div>
										<div className="jbs-grid-usrs-caption mb-4">
											<div className="jbs-tiosk">
												<h4 className="jbs-tiosk-title"><Link href={`/candidate-detail/${item.id}`}>{item.name}</Link></h4>
												<div className="jbs-tiosk-subtitle"><span>{item.position}</span></div>
											</div>
										</div>
										<div className="jbs-grid-job-edrs">
											<div className="jbs-grid-job-edrs-group center">
												<span>HTML</span>
												<span>CSS3</span>
												<span>Bootstrap</span>
												<span>Redux</span>
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
												<Link href="#" className="btn btn-md btn-gray px-4">Contact</Link>
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
        </section>

        <FooterTopTwo/>
        <FooterLightTwo/>
        <ScrollToTop/>
    </>
  )
}
