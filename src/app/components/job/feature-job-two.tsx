import React from 'react'
import { serviceData } from '../../data/data'
import Link from 'next/link'
import Image from 'next/image'

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

export default function FeatureJobTwo() {
  return (
        <div className="row justify-content-center gx-xl-3 gx-3 gy-4">
            {serviceData.slice(0,8).map((item:ServiceListing,index:number)=>( 
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
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
  )
}
