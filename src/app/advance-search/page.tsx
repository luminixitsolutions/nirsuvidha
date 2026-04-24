import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import NavBgBlackTwo from '../components/navbar/nav-bg-black-two';
import JobFilterThree from '../components/filter/job-filter-three';
import HomeMap from '../components/home-map';
import FilterModalOne from '../components/filter/filter-modal-one';

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

export default function AdvanceSearch() {
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
                            
                            <div className="types-job-matches mb-4">
                                <ul className="nav nav-pills nav-fill gap-3 p-2 whites gray-simple rounded-2 light-nav" id="pillNav2" role="tablist">
                                    <li className="nav-item">
                                        <button className="nav-link active rounded-2" id="bestmatches-tab" data-bs-toggle="pill" data-bs-target="#bestmatches" type="button" role="tab" aria-controls="bestmatches" aria-selected="true">Best Matches</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link rounded-2" id="featured-tab" data-bs-toggle="pill" data-bs-target="#featured" type="button" role="tab" aria-controls="featured" aria-selected="false">Featured</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link rounded-2" id="mostrecent-tab" data-bs-toggle="pill" data-bs-target="#mostrecent" type="button" role="tab" aria-controls="mostrecent" aria-selected="false">Most Recent</button>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
                <div className="map-content-list">
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="bestmatches" role="tabpanel" aria-labelledby="bestmatches-tab" tabIndex={0}>
                            <div className="row justify-content-start gx-3 gy-4">
                                {serviceData.slice(0,12).map((item:ServiceListing,index:number)=>( 
                                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12" key={index}>
                                        <div className="zob-list-bloxks border">
                                            <div className="zoblist-uppr-module">
                                                <div className="zoblist-uppr-module-left">
                                                    <div className="zoblist-uppr-module-thumb">
                                                        <div className="jbs-list-emp-thumb jbs-verified"><Link href={`/service-detail/${item.id}`}> <figure><Image src={item.image} width={50} height={50} className="img-fluid" alt=""/></figure></Link></div>
                                                    </div>
                                                    <div className="zoblist-uppr-module-caption">
                                                        <div className="jbs-job-title-wrap"><h4><Link href={`/service-detail/${item.id}`} className="jbs-job-title">{item.title}</Link></h4></div>
                                                        <div className="single-mrch-lists mb-2">
                                                            <span>{item.name}</span>.<span><i className="fa-solid fa-location-dot me-1"></i>{item.location}</span>.
                                                            {item.jobtype === 'Full Time' && 
                                                                <span className="text-success">{item.jobtype}</span>
                                                            }
                                                            {item.jobtype === 'Enternship' && 
                                                                <span className="text-danger">{item.jobtype}</span>
                                                            }
                                                            {item.jobtype === 'Part Time' && 
                                                                <span className="text-warning">{item.jobtype}</span>
                                                            }
                                                            {item.jobtype === 'Freelancer' && 
                                                                <span className="text-info">{item.jobtype}</span>
                                                            }
                                                        </div>
                                                        <div className="jbs-grid-job-edrs-group">
                                                            <span>HTML</span>
                                                            <span>CSS3</span>
                                                            <span>Bootstrap</span>
                                                            <span>Redux</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="zoblist-uppr-module-right">
                                                    <div className="jbs-grid-jbs-saved"><Link href="#" className="bkrs"><i className="fa-regular fa-bookmark"></i></Link></div>
                                                </div>
                                            </div>
                                            <div className="zoblist-bott-module">
                                                <div className="zoblist-leio-field">
                                                    <div className="zoblist-package-wraps">
                                                        <div className="jbs-grid-package-title"><h5>$370<span>\Year</span></h5></div>
                                                    </div>
                                                </div>
                                                <div className="zoblist-leio-button">
                                                    <div className="zoblist-leio-button-left me-2">
                                                        <div className="jbs-grid-posted"><span>07 Days ago</span></div>
                                                    </div>
                                                    <div className="zoblist-leio-button-right">
                                                        <Link href="#" className="btn btn-sm btn-main px-3">Get Started</Link>	
                                                    </div>
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
                                            <li className="page-item active" aria-current="page"><Link className="page-link" href="#">3</Link></li>
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
                        
                        <div className="tab-pane fade" id="featured" role="tabpanel" aria-labelledby="featured-tab" tabIndex={0}>
                            <div className="row justify-content-start gx-3 gy-4">
                                {serviceData.slice(1,13).map((item:ServiceListing,index:number)=>( 
                                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12" key={index}>
                                        <div className="zob-list-bloxks border">
                                            <div className="zoblist-uppr-module">
                                                <div className="zoblist-uppr-module-left">
                                                    <div className="zoblist-uppr-module-thumb">
                                                        <div className="jbs-list-emp-thumb jbs-verified"><Link href={`/service-detail/${item.id}`}> <figure><Image src={item.image} width={50} height={50} className="img-fluid" alt=""/></figure></Link></div>
                                                    </div>
                                                    <div className="zoblist-uppr-module-caption">
                                                        <div className="jbs-job-title-wrap"><h4><Link href={`/service-detail/${item.id}`} className="jbs-job-title">{item.title}</Link></h4></div>
                                                        <div className="single-mrch-lists mb-2">
                                                            <span>{item.name}</span>.<span><i className="fa-solid fa-location-dot me-1"></i>{item.location}</span>.
                                                            {item.jobtype === 'Full Time' && 
                                                                <span className="text-success">{item.jobtype}</span>
                                                            }
                                                            {item.jobtype === 'Enternship' && 
                                                                <span className="text-danger">{item.jobtype}</span>
                                                            }
                                                            {item.jobtype === 'Part Time' && 
                                                                <span className="text-warning">{item.jobtype}</span>
                                                            }
                                                            {item.jobtype === 'Freelancer' && 
                                                                <span className="text-info">{item.jobtype}</span>
                                                            }
                                                        </div>
                                                        <div className="jbs-grid-job-edrs-group">
                                                            <span>HTML</span>
                                                            <span>CSS3</span>
                                                            <span>Bootstrap</span>
                                                            <span>Redux</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="zoblist-uppr-module-right">
                                                    <div className="jbs-grid-jbs-saved"><Link href="#" className="bkrs"><i className="fa-regular fa-bookmark"></i></Link></div>
                                                </div>
                                            </div>
                                            <div className="zoblist-bott-module">
                                                <div className="zoblist-leio-field">
                                                    <div className="zoblist-package-wraps">
                                                        <div className="jbs-grid-package-title"><h5>$370<span>\Year</span></h5></div>
                                                    </div>
                                                </div>
                                                <div className="zoblist-leio-button">
                                                    <div className="zoblist-leio-button-left me-2">
                                                        <div className="jbs-grid-posted"><span>07 Days ago</span></div>
                                                    </div>
                                                    <div className="zoblist-leio-button-right">
                                                        <Link href="#" className="btn btn-sm btn-main px-3">Get Started</Link>	
                                                    </div>
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
                                            <li className="page-item active" aria-current="page"><Link className="page-link" href="#">3</Link></li>
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
                        
                        <div className="tab-pane fade" id="mostrecent" role="tabpanel" aria-labelledby="mostrecent-tab" tabIndex={0}>
                            <div className="row justify-content-start gx-3 gy-4">
                                {serviceData.slice(2,14).map((item:ServiceListing,index:number)=>( 
                                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12" key={index}>
                                        <div className="zob-list-bloxks border">
                                            <div className="zoblist-uppr-module">
                                                <div className="zoblist-uppr-module-left">
                                                    <div className="zoblist-uppr-module-thumb">
                                                        <div className="jbs-list-emp-thumb jbs-verified"><Link href={`/service-detail/${item.id}`}> <figure><Image src={item.image} width={50} height={50} className="img-fluid" alt=""/></figure></Link></div>
                                                    </div>
                                                   <div className="zoblist-uppr-module-caption">
                                                        <div className="jbs-job-title-wrap"><h4><Link href={`/service-detail/${item.id}`} className="jbs-job-title">{item.title}</Link></h4></div>
                                                        <div className="single-mrch-lists mb-2">
                                                            <span>{item.name}</span>.<span><i className="fa-solid fa-location-dot me-1"></i>{item.location}</span>.
                                                            {item.jobtype === 'Full Time' && 
                                                                <span className="text-success">{item.jobtype}</span>
                                                            }
                                                            {item.jobtype === 'Enternship' && 
                                                                <span className="text-danger">{item.jobtype}</span>
                                                            }
                                                            {item.jobtype === 'Part Time' && 
                                                                <span className="text-warning">{item.jobtype}</span>
                                                            }
                                                            {item.jobtype === 'Freelancer' && 
                                                                <span className="text-info">{item.jobtype}</span>
                                                            }
                                                        </div>
                                                        <div className="jbs-grid-job-edrs-group">
                                                            <span>HTML</span>
                                                            <span>CSS3</span>
                                                            <span>Bootstrap</span>
                                                            <span>Redux</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="zoblist-uppr-module-right">
                                                    <div className="jbs-grid-jbs-saved"><Link href="#" className="bkrs"><i className="fa-regular fa-bookmark"></i></Link></div>
                                                </div>
                                            </div>
                                            <div className="zoblist-bott-module">
                                                <div className="zoblist-leio-field">
                                                    <div className="zoblist-package-wraps">
                                                        <div className="jbs-grid-package-title"><h5>$370<span>\Year</span></h5></div>
                                                    </div>
                                                </div>
                                                <div className="zoblist-leio-button">
                                                    <div className="zoblist-leio-button-left me-2">
                                                        <div className="jbs-grid-posted"><span>07 Days ago</span></div>
                                                    </div>
                                                    <div className="zoblist-leio-button-right">
                                                        <Link href="#" className="btn btn-sm btn-main px-3">Get Started</Link>	
                                                    </div>
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
                                            <li className="page-item active" aria-current="page"><Link className="page-link" href="#">3</Link></li>
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
            </div>
        </div>
        <div className="clearfix"></div> 

        <FilterModalOne/>
    </>
  )
}
