import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

let data = [
    {
        image:'/img/c-1.png',
        location:'London, UK',
        jobs:'307+ Jobs'
    },
    {
        image:'/img/c-2.png',
        location:'Tokyo, Japan',
        jobs:'102+ Jobs'
    },
    {
        image:'/img/c-3.png',
        location:'Mumbai, India',
        jobs:'200+ Jobs'
    },
    {
        image:'/img/c-4.png',
        location:'Surat, India',
        jobs:'800+ Jobs'
    },
]

interface Data{
    image: string;
    location: string;
    jobs: string;
}

export default function ExploreJob() {
  return (
        <div className="row g-xl-3 g-lg-3 g-4">
            {data.map((item:Data,index:number)=>( 
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                    <div className="jbs-location-infortment">
                        <div className="jbs-location-infortment-thumb p-3">
                            <Link href="/job-search" className="jobstock-location-figure">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                            </Link>
                        </div>
                        <div className="jbs-location-infortment-content">
                            <h4 className='mb-2'>{item.location}</h4>
                            <span className="resy-98 fw-medium text-main">{item.jobs}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
  )
}
