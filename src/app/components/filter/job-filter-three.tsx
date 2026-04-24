'use client'
import React from 'react'
import Link from 'next/link';

export default function JobFilterThree() {
  return (
    <>
        <div className="_mp-inner-content elior">
            <div className="_mp-inner-first">
                <div className="search-inline">
                    <input type="text" className="form-control" placeholder="Service title, Keywords etc."/>
                    <button type="button" className="btn btn-main">Search</button>
                </div>
            </div>
            <div className="_mp_inner-last">
                <Link href="#" className="filter-pop-link gray-simple rounded py-3 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-sliders-h mr-2"></i>Filter</Link>
            </div>
        </div>

    </>
  )
}
