'use client'
import React from 'react'
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Select = dynamic(()=>import('react-select'),{ssr:false})

import { category, jobType, lavel, experience, sallary} from '../../data/select-option';

export default function FormOne() {
    return (
        <div className="hero-search-content verticle-space">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                        <div className="input-with-icon">
                            <input type="text" className="form-control border" placeholder="Search services — legal, tax, NRE/NRO, investments…"/>
                            <Image src='/img/pin.svg' width={18} height={18} alt=""/>
                        </div>
                    </div>
                </div>
            
                <div className="col-xl-6 col-lg-12 col-md-6 col-sm-6">
                    <div className="form-group">
                        <label className='mb-2'>Service Category</label>
                        <Select options={category}  className="form-control" placeholder="Legal, Banking, Tax…"/>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6 col-sm-6">
                    <div className="form-group">
                        <label className='mb-2'>Service Type</label>
                        <Select options={jobType}  className="form-control" placeholder="All types"/>
                    </div>
                </div>
                
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                        <label className='mb-2'>Priority</label>
                        <Select options={lavel}  className="form-control" placeholder="Standard"/>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                        <label className='mb-2'>Timeline</label>
                        <Select options={experience}  className="form-control" placeholder="This quarter"/>
                    </div>
                </div>
                
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                        <label className='mb-2'>Budget Range</label>
                        <Select options={sallary}  className="form-control" placeholder="Select range"/>
                    </div>
                </div>
                
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" className="btn btn-main full-width">Explore Services</button>
                </div>
            </div>
        </div>
  )
}
