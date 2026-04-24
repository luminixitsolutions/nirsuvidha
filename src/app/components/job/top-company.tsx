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

export default function TopCompany({border}:{border:boolean}) {
  return (
        <div className="row justify-content-center gx-xl-3 gx-3 gy-4">
            {serviceData.slice(0,8).map((item:ServiceListing,index:number)=>( 
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
                    <div className={`emp-grid-blocs ${border ? 'border' : ''}`}>
                        
                        <div className="emp-grid-thumbs">
                            <Link href="/employer-detail"><figure><Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/></figure></Link>	
                        </div>
                        
                        <div className="emp-grid-captions">
                            <div className="emplors-job-types-wrap"><span className="text-sm-muted">{item.title}</span></div>
                            <div className="emplors-job-title-wrap mb-1">
                                <h4><Link href="/employer-detail" className="emplors-job-title">{item.name}</Link></h4>
                            </div>
                            <div className="emplors-job-mrch-lists">
                                <div className="single-mrch-lists">
                                    <span><i className="fa-solid fa-location-dot me-1"></i>{item.location}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="emp-grid-footrs">
                            <div className="emp-flexio"><span className="label px-4 py-2 text-main bg-light-main">{item.open} position</span></div>
                        </div>
                    </div>	
                </div>
            ))}				
        </div>
  )
}
