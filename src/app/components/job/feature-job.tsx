import React from 'react'
import Link from 'next/link'

import { serviceData } from '../../data/data'
import { serviceEngagementLabel } from '@/lib/service-display'
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

export default function FeatureJob() {
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
                        {item.jobtype === 'Enternship' && <span className="enternship">{serviceEngagementLabel(item.jobtype)}</span>}
                        {item.jobtype === 'Freelancer' && <span className="freelanc">{serviceEngagementLabel(item.jobtype)}</span>}
                        {item.jobtype === 'Part Time' && <span className="part-time">{serviceEngagementLabel(item.jobtype)}</span>}
                        {item.jobtype === 'Full Time' && <span className="full-time">{serviceEngagementLabel(item.jobtype)}</span>}
                    </div>
                    <div className="job-instructor-thumb">
                        <Link href={`/service-detail/${item.id}`}><Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'80px', height:'80px'}} className="img-fluid" alt=""/></Link>
                    </div>
                    <div className="job-instructor-content">
                        <h4 className="instructor-title"><Link href={`/service-detail/${item.id}`}>{item.title}</Link></h4>
                        <div className="instructor-skills">{item.skills}</div>
                    </div>
                    <div className="job-instructor-footer">
                        <div className="instructor-students">
                            <h5 className="instructor-scount">{item.value}</h5>
                        </div>
                        <div className="instructor-corses">
                            <span className="c-counting">{item.open}</span>
                        </div>
                    </div>
                </div>	
            </div>
        ))}						
            
    </div>
  )
}
