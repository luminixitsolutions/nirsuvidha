import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { blogData } from '../data/data'

interface BlogData{
    id: number;
    image: string;
    title: string;
    desc: string;
    date: string;
}

export default function BlogOne() {
  return (
    <div className="row g-xl-3 g-lg-3 g-md-3 g-3">
        {blogData.slice(0,3).map((item:BlogData,index:number)=>( 
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12" key={index}>
                <div className="jobstock-grid-blog">
                    <div className="jobstock-grid-blog-thumb">
                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                    </div>
                    <div className="jobstock-grid-blog-body">
                        <div className="jobstock-grid-body-header">
                            <div className="jobstock-grid-posted bg-main mb-3"><span>{item.date}</span></div>
                            <div className="jobstock-grid-title"><h4><Link href="/blog-detail">{item.title}</Link></h4></div>
                        </div>
                        <div className="jobstock-grid-body-middle">
                            <p>{item.desc}</p>
                        </div>
                        <div className="jobstock-grid-body-footer">
                            <Link href="/blog-detail" className="btn btn-blog-link">Continue Reading</Link>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
