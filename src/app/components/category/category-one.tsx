import React from 'react'
import Link from 'next/link'
import { categoryData } from '../../data/data'

interface Category{
    icon: string;
    title: string;
    desc?: string;
    job: string;
}

export default function CategoryOne({light}:{light:boolean}) {
  return (
        <div className="row justify-content-center gx-4 gy-4">
            {categoryData.map((item:Category,index:number)=>( 
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" key={index}>
                    <div className={`category-box ${light ? 'light' : ''}`}>
                        <div className="category-desc">
                            <div className="category-icon">
                                <i className={`text-main ${item.icon}`}></i>
                                <i className={`abs-icon ${item.icon}`}></i>
                            </div>
                            <div className="category-detail category-desc-text">
                                <h4 className="fs-5"><Link href="/advance-search">{item.title}</Link></h4>
                                <p className="block">{item.desc ?? item.job}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
  )
}
