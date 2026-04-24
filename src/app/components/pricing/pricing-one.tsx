import React from 'react'
import Link from 'next/link'

export default function PricingOne() {
  return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Choose your Package</h2>
                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                        </div>
                    </div>
                </div>
                
                <div className="row gx-4 gy-4">

                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="pr-table">
                            <div className="pr-header bg-dark">
                                <div className="pr-plan">
                                    <h4>Basic</h4></div>
                                <div className="pr-price">
                                    <h3><sup>$</sup>29<sub>/Mon</sub></h3></div>
                            </div>
                            <div className="pr-features">
                                <ul>
                                    <li>1 GB Ram</li>
                                    <li>2 GB Memory</li>
                                    <li>1 Core Processor</li>
                                    <li>32 GB SSD Disk</li>
                                    <li>1 TB Transfer</li>
                                </ul>
                            </div>
                            <div className="pr-buy-button"><Link href="#" className="btn fw-medium btn-outline-main full-width">Get Started</Link></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="pr-table">
                            <div className="pr-header active bg-main">
                                <div className="pr-plan">
                                    <h4>Premium</h4></div>
                                <div className="pr-price">
                                    <h3><sup>$</sup>40<sub>/Mon</sub></h3></div>
                            </div>
                            <div className="pr-features">
                                <ul>
                                    <li>1 GB Ram</li>
                                    <li>2 GB Memory</li>
                                    <li>1 Core Processor</li>
                                    <li>32 GB SSD Disk</li>
                                    <li>1 TB Transfer</li>
                                </ul>
                            </div>
                            <div className="pr-buy-button"><Link href="#" className="btn fw-medium btn-dark full-width">Get Started</Link></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="pr-table">
                            <div className="pr-header bg-dark">
                                <div className="pr-plan">
                                    <h4>Ultimate</h4></div>
                                <div className="pr-price">
                                    <h3><sup>$</sup>120<sub>/Mon</sub></h3></div>
                            </div>
                            <div className="pr-features">
                                <ul>
                                    <li>1 GB Ram</li>
                                    <li>2 GB Memory</li>
                                    <li>1 Core Processor</li>
                                    <li>32 GB SSD Disk</li>
                                    <li>1 TB Transfer</li>
                                </ul>
                            </div>
                            <div className="pr-buy-button"><Link href="#" className="btn fw-medium btn-outline-main full-width">Get Started</Link></div>
                        </div>
                    </div>
                    
                </div>
            </div>
  )
}
