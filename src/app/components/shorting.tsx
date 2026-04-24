'use client'
import React from 'react'
import dynamic from 'next/dynamic';

const Select = dynamic(()=>import('react-select'),{ssr:false})

import { short, page } from '../data/select-option';

export default function Shorting() {
  return (
    <>
        <div className="item-shorting-box-right">
            <div className="shorting-by me-2 small">
                <Select options={short}  className="form-control" placeholder="Short by (Default)"/>
            </div>
            <div className="shorting-by small">
                <Select options={page}  className="form-control" placeholder="10 Per Page"/>
            </div>
        </div>   
    </>
  )
}
