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

export default function FeatureJobThree() {
  return (
        <div className="row justify-content-center gx-xl-3 gx-3 gy-4">
            {serviceData.slice(0,8).map((item:ServiceListing,index:number)=>( 
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
                    <div className="jbs-grid-layout style_2 border">
                        <div className="jbs-grid-emp-head">
                            <div className="jbs-grid-emp-content">
                                <div className="jbs-grid-emp-thumb jbs-verified"><Link href={`/service-detail/${item.id}`}><figure><Image src={item.image} width={40} height={40} className="img-fluid" alt=""/></figure></Link></div>
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
                                <Link href={`/service-detail/${item.id}`} className="btn btn-md btn-gray px-4">View Detail</Link>
                                <Link href="#" className="btn btn-md btn-main px-4">Get Started</Link>
                            </div>
                        </div>
                    </div>	
                </div>
            ))}
        </div>
  )
}
