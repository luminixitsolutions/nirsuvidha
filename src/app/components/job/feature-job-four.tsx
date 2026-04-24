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

export default function FeatureJobFour() {
  return (
        <div className="row justify-content-center gx-xl-3 gx-3 gy-4">
            {serviceData.slice(0,8).map((item:ServiceListing,index:number)=>( 
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
                    <div className="jbs-grid-layout border">
                        <div className="right-tags-capt">
                            {item.tag.map((el,index)=>( 
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
  )
}
