import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { candidateData } from '../data/data'

import JobFilterTwo from '../components/filter/job-filter-two'
import FooterTopTwo from '../components/footer/footer-top-two'
import NavBgBlack from '../components/navbar/nav-bg-black'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'
import Shorting from '../components/shorting'

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

export default function CandidateListOne() {
  return (
    <>
        <NavBgBlack/>

        <div className="page-title bg-main" style={{backgroundImage:`url('/img/bg2.png')`, backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2 className="ipt-title">NRI client list Style 01</h2>
                        <div className="breadcrumbs light">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link href="#">Home</Link></li>
                                    <li className="breadcrumb-item"><Link href="#">NRI Client</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">NRI client list 01</li>
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
        </section>

        <FooterTopTwo/>
        <FooterLightTwo/>
        <ScrollToTop/>
    </>
  )
}
