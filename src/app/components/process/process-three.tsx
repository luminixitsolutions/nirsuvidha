import React from 'react'

let data = [
    {
        no:'01.',
        title:'Create your profile',
        desc:`Tell us what you need in India—tax, property, banking, or legal—and we route you to the right specialists with a clear plan.`
    },
    {
        no:'02.',
        title:'Service discovery',
        desc:`Explore verified offerings, compare scope, and see timelines and document checklists before you commit.`
    },
    {
        no:'03.',
        title:'Track & complete',
        desc:`Upload documents securely, follow milestones, and get updates until your matter is closed—wherever you are.`
    },
]
interface Data{
    no: string;
    title: string;
    desc: string;
}

export default function ProcessThree() {
  return (
    <section className="bg-second">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                    <div className="sec-heading center light">
                        <h2>Choose What You Need</h2>
                        <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                    </div>
                </div>
            </div>
            
            <div className="row align-items-center gx-4 gy-4">
                {data.map((item:Data,index:number)=>( 
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12" key={index}>
                        <div className="jobstock-posted-box-y78 colored">
                            <div className="jobstock-posted-body-y78">
                                <div className="serv-ctr-title"><h2 className="text-green">{item.no}</h2></div>
                                <div className="serv-ctr-subtitle"><h5 className="text-light">{item.title}</h5></div>
                                <div className="serv-ctr-decs"><p className="text-light opacity-75">{item.desc}</p></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
