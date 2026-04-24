import React from 'react'
import Link from 'next/link'

import Image from 'next/image'

export default function FormTwo() {
  return (
    <>
        <div className="hero-search-content">
            <div className="row">
            
                <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 pe-xl-0 pe-lg-0 pe-md-0">
                    <div className="classic-search-box">
                        <div className="form-group full">
                            <div className="input-with-icon">
                                <input type="text" className="form-control" placeholder="Search services (tax, property, banking...)"/>
                                <Image src='/img/pin.svg' width={20} height={20} alt=""/>
                            </div>
                        </div>
                        <div className="form-group">
                            <Link href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"  className="btn btn-filter-search"><i className="fa-solid fa-filter"></i>Filter</Link>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                    <div className="form-group">
                        <button type="submit" className="btn btn-main full-width">Explore Services</button>
                    </div>
                </div>
                        
            </div>
        </div>
    </>
  )
}
