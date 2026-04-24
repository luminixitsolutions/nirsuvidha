import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutOne() {
  return (
        <div className="container">
            <div className="row justify-content-end align-items-md-center">
            
                <div className="d-none d-lg-block col-lg-6 position-absolute top-0 start-0 bg-cover h-100 rounded-end" style={{backgroundImage:`url('/img/banner-1.jpg')`, backgroundRepeat:'no-repeat'}}></div>
                <div className="d-lg-none mb-5 mb-md-0">
                    <Image className="img-fluid rounded" src='/img/banner-1.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt="Image Description"/>
                </div>

                <div className="col-lg-6 align-self-center">
                    <div className="p-lg-5 p-md-0 pt-md-5">
                        <div className="mb-4 mb-sm-4">
                            <span className="font--bold label-light-success px-3 py-2 rounded mb-2">Our Showcase</span>
                            <h2 className="lh-base mt-2">All-in-One NRI Services Platform</h2>
                            <p className="fw-light fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <div className="row mb-sm-4">
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <ul className="colored-list">
                                    <li>Corporate & business services</li>
                                    <li>Creative Services</li>
                                    <li>New Business Innovation</li>
                                    <li>Online E-commerce</li>
                                    <li>Residential Services</li>
                                </ul>
                            </div>

                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <ul className="colored-list">
                                    <li>Company Showcase</li>
                                    <li>News & Updates</li>
                                    <li>Online Bookings</li>
                                    <li>and much more...</li>
                                </ul>
                            </div>
                        </div>
                    
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <Link href="#" className="btn btn-main fw-medium px-4">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
