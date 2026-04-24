'use client'
import React from 'react'
import dynamic from 'next/dynamic';

const Select = dynamic(()=>import('react-select'),{ssr:false})
import { category } from '../../data/select-option';

export default function FormFive() {
  return (
    <div className="hero-search-content verticle-space">
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                    <div className="input-with-icon">
                        <input type="text" className="form-control border" placeholder="Search services (tax, property, banking...)"/>
                        <i className="bi bi-search text-main fs-5"></i>
                    </div>
                </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                    <div className="input-with-icon">
                        <input type="text" className="form-control border" placeholder="Location"/>
                        <i className="bi bi-crosshair fs-5 text-main"></i>
                    </div>
                </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                    <label>Service Category</label>
                     <Select options={category}  className="form-control" placeholder="Service Category"/>
                </div>
            </div>
            
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <button type="submit" className="btn btn-main full-width">Search Result</button>
            </div>
        
        </div>
    </div>
  )
}
