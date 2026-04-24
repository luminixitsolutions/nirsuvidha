'use client'
import React from 'react'
import Link from 'next/link';


const Select = dynamic(()=>import('react-select'),{ssr:false})

import { category, city } from '../../data/select-option';
import dynamic from 'next/dynamic';

export default function FormThree() {
  return (
    <>
        <div className="hero-search-content search-shadow">
            <div className="row classic-search-box m-0 gx-2">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                    <div className="form-group briod">
                        <div className="input-with-icon">
                            <input type="text" className="form-control" placeholder="Skills, Designations, Keyword"/>
                            <i className="fa-solid fa-magnifying-glass text-main"></i>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                    <div className="form-group briod">
                        <div className="input-with-icon">
                            <Select options={category}  className="form-control" placeholder="Service Category"/>
                            <i className="fa-solid fa-briefcase text-main"></i>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                    <div className="form-group">
                        <div className="input-with-icon">
                            <Select options={city}  className="form-control" placeholder="Select City"/>
                            <i className="fa-solid fa-location-crosshairs text-main"></i>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                    <div className="fliox-search-wiop">
                        <div className="form-group me-2">
                            <Link href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-filter-search"><i className="fa-solid fa-filter"></i>Filter</Link>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-main full-width">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
