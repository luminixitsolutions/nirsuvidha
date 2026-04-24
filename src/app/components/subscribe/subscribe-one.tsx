import React from 'react'

export default function SubscribeOne() {
  return (
    <section className="bg-cover call-action-container dark bg-second" style={{backgroundImage:`url('/img/footer-bg-dark.png')`, backgroundRepeat:'no-repeat', backgroundColor:'#016551'}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12">
                    
                    <div className="call-action-wrap">
                        <div className="call-action-caption">
                            <h2 className="text-light">Are You Already Working With Us?</h2>
                            <p className="fs-6 text-light">Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias</p>
                        </div>
                        <div className="call-action-form">
                            <form>
                                <div className="newsltr-form">
                                    <input type="text" className="form-control" placeholder="Enter Your email"/>
                                    <button type="button" className="btn btn-subscribe">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}
