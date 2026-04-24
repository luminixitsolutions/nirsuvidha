'use client'
import React from 'react'

import Select from 'react-select';
import { category } from '../../data/select-option';

export default function FormFour() {
  return (
    <div className="hero-search-content">
        <div className="row classic-search-box m-0 gx-2">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <div className="form-group briod">
                    <div className="input-with-icon">
                        <input type="text" className="form-control" placeholder="Search services (tax, property, banking...)"/>
                        <i className="fa-solid fa-magnifying-glass text-main"></i>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div className="form-group">
                    <div className="input-with-icon">
                        <Select options={category}  className="form-control" placeholder="Service Category"/>
                        <i className="fa-solid fa-layer-group text-main"></i>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                <div className="fliox-search-wiop">
                    <div className="form-group">
                        <button type="submit" className="btn btn-main full-width">Explore Services</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
