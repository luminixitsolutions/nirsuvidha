import React from 'react'
import Image from 'next/image'
import { processData } from '../../data/data'

interface ProcessData{
    icon: string;
    title: string;
    desc: string;
}

export default function ProcessOne() {
  return (
        <div className="row justify-content-center gx-xl-4 gx-lg-4">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 order-xl-1 order-lg-1 order-md-1">
                {processData.slice(0,4).map((item,index)=>( 
                    <div className="work-process mb-5" key={index}>
                        <div className="work-process-icon"><span><i className={item.icon}></i></span></div>
                        <div className="work-process-caption">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 order-xl-2 order-lg-3 order-md-3">
                <div className="eslio-pincc mx-5">
                    <Image src='/img/wp-iphone.png' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                </div>
            </div>
            
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 order-xl-3 order-lg-2 order-md-2">
                {processData.slice(4,8).map((item:ProcessData,index:number)=>( 
                    <div className="work-process mb-5" key={index}>
                        <div className="work-process-icon"><span><i className={item.icon}></i></span></div>
                        <div className="work-process-caption">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}
