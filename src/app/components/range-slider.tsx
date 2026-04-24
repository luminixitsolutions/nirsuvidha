// @ts-nocheck 
'use client'

import React, { useState } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'

export default function RangeSlider() {
     const [value, setValue] = useState([20, 80]);
     
  return (
    <>
        <div className="rg-slider">
            <Slider 
                range 
                min={0}
                max={100}
                defaultValue={[20, 80]}
                value={value}
                onChange={setValue}
                step={5}
                allowCross={false}
                pushable
                
            />
            <div className="mt-2 text-gray-700 font-semibold">
                Selected Range: {value[0]} - {value[1]}
            </div>
        </div>
    </>
  )
}