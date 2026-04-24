'use client'
import React from 'react'
import dynamic from 'next/dynamic';

const Select = dynamic(()=>import('react-select'),{ssr:false})

import { base } from '../data/select-option';

export default function ShortingBase() {
  return (
    <>
        <div className="form-group m-0">
            <Select options={base}  className="form-control" placeholder="Daily Base"/>
        </div>  
    </>
  )
}
