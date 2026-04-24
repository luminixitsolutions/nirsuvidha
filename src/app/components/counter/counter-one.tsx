'use client'
import React from 'react'
import CountUp from 'react-countup'

let data = [
    {
        value:97,
        Symbol:'%',
        desc:`Success in finding jobs on NRI Suvidha Platform`
    },
    {
        value:68,
        Symbol:'X',
        desc:`Potential increase traffice rather than NRI Suvidha website.`
    },
    {
        value:25,
        Symbol:'K',
        desc:`Thousands of companies work with us with partnership`
    },
    {
        value:25,
        Symbol:'K',
        desc:`Happy customers in all over world with our services`
    },
]

interface Data{
    value: number;
    Symbol: string;
    desc: string;
}

export default function CounterOne() {
  return (
    <>
        <section className="py-4">
            <div className="container">
                <div className="row align-items-center justify-content-center gx-3 gy-3">
                    {data.map((item:Data,index:number)=>( 
                        <div className="col-xl-3 col-lg-3 col-md-6 col-12" key={index}>
                            <div className="d-flex align-items-center justify-content-start">
                                <div className="tryui-pos"><h2 className="display-4 fw-medium text-main m-0"><span className="text-dark ctr"><CountUp end={item.value}/></span>{item.Symbol}</h2></div>
                                <div className="exploi ps-3">
                                    <p className="m-0 lh-base">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <div className="clearfix"></div>
    </>
  )
}
