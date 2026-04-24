import Image from 'next/image'
import React from 'react'
let images  = [
    '/img/brand/layar-white.svg',
    '/img/brand/mailchimp-white.svg',
    '/img/brand/forbes-white.svg',
    '/img/brand/fitbit-white.svg',
    '/img/brand/vidados-white.svg',
]

export default function PartnerTwo() {
  return (
        <section className="bg-second min">
            <div className="container">
                <div className="row justify-content-center mb-2">
                    <div className="col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center mb-4">
                            <h5 className="text-light opacity-75 fw-medium">The fastedt-growing companies use NRI Suvidha</h5>
                        </div>
                    </div>
                </div>
                
                <div className="row align-items-center justify-content-center row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-3 gx-3 gy-3">
                    {images.map((item:string,index:number)=>( 
                        <div className="col" key={index}>
                            <figure className="single-brand thumb-figure">
                                <Image src={item} width={0} height={0} sizes='100vw' style={{width:'auto', height:'47px'}} className="img-fluid" alt=""/>
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
  )
}
