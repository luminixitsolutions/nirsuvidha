import React from 'react'
import NavBgWhite from '../components/navbar/nav-bg-white'
import FooterTopTwo from '../components/footer/footer-top-two'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'

export default function Faq() {
  return (
    <>
        <NavBgWhite/>

        <section className="bg-cover bg-second" style={{backgroundImage:`url('/img/bg2.png')`,backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2 className="ipt-title text-light">FAQ's</h2>
                        <span className="ipn-subtitle text-light opacity-75">get your all queries here</span>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-md-12 col-sm-12">
                        <div className="single-faqs mb-5">
                            <div className="faqs-title mb-3"><h5>Account Activation</h5></div>
                            <div className="accordion" id="accountActivation">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="account1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accountOne" aria-expanded="true" aria-controls="accountOne">
                                        I had submitted the form long back.
                                        </button>
                                    </h2>
                                    <div id="accountOne" className="accordion-collapse collapse show" aria-labelledby="account1" data-bs-parent="#accountActivation">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="account2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accountTwo" aria-expanded="false" aria-controls="accountTwo">
                                        When will my account get activated?
                                        </button>
                                    </h2>
                                    <div id="accountTwo" className="accordion-collapse collapse" aria-labelledby="account2" data-bs-parent="#accountActivation">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="account3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accountThree" aria-expanded="false" aria-controls="accountThree">
                                        How do I complete my activation form?
                                        </button>
                                    </h2>
                                    <div id="accountThree" className="accordion-collapse collapse" aria-labelledby="account3" data-bs-parent="#accountActivation">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="account4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accountFour" aria-expanded="false" aria-controls="accountFour">
                                        Where do I find the templates for website policies?
                                        </button>
                                    </h2>
                                    <div id="accountFour" className="accordion-collapse collapse" aria-labelledby="account4" data-bs-parent="#accountActivation">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="single-faqs mb-5">
                            <div className="faqs-title mb-3"><h5>Transactions</h5></div>
                            <div className="accordion" id="transaction">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="transaction1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#transactionOne" aria-expanded="true" aria-controls="transactionOne">
                                        How do I capture a payment?
                                        </button>
                                    </h2>
                                    <div id="transactionOne" className="accordion-collapse collapse show" aria-labelledby="transaction1" data-bs-parent="#transaction">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="transaction2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#transactionTwo" aria-expanded="false" aria-controls="transactionTwo">
                                        Do you charge for refund?
                                        </button>
                                    </h2>
                                    <div id="transactionTwo" className="accordion-collapse collapse" aria-labelledby="transaction2" data-bs-parent="#transaction">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="transaction3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#transactionThree" aria-expanded="false" aria-controls="transactionThree">
                                        What does the transaction section cover?
                                        </button>
                                    </h2>
                                    <div id="transactionThree" className="accordion-collapse collapse" aria-labelledby="transaction3" data-bs-parent="#transaction">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="transaction4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#transactionFour" aria-expanded="false" aria-controls="transactionFour">
                                        How do I initiate a refund?
                                        </button>
                                    </h2>
                                    <div id="transactionFour" className="accordion-collapse collapse" aria-labelledby="transaction4" data-bs-parent="#transaction">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="single-faqs mb-5">
                            <div className="faqs-title mb-3"><h5>Dashboard Overview</h5></div>
                            <div className="accordion" id="dashboardOverview">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="dashboard1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardOne" aria-expanded="true" aria-controls="dashboardOne">
                                        What is NRI Suvidha Property dashboard?
                                        </button>
                                    </h2>
                                    <div id="dashboardOne" className="accordion-collapse collapse show" aria-labelledby="dashboard1" data-bs-parent="#dashboardOverview">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="dashboard2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardTwo" aria-expanded="false" aria-controls="dashboardTwo">
                                        Navigating your way around the Dashboard
                                        </button>
                                    </h2>
                                    <div id="dashboardTwo" className="accordion-collapse collapse" aria-labelledby="dashboard2" data-bs-parent="#dashboardOverview">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="dashboard3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardThree" aria-expanded="false" aria-controls="dashboardThree">
                                        since I got any update, what do I do?
                                        </button>
                                    </h2>
                                    <div id="dashboardThree" className="accordion-collapse collapse" aria-labelledby="dashboard3" data-bs-parent="#dashboardOverview">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="dashboard4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardFour" aria-expanded="false" aria-controls="dashboardFour">
                                        Where can I view your PCI Certification?
                                        </button>
                                    </h2>
                                    <div id="dashboardFour" className="accordion-collapse collapse" aria-labelledby="dashboard4" data-bs-parent="#dashboardOverview">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="single-faqs mb-5">
                            <div className="faqs-title mb-3"><h5>Settlements</h5></div>
                            <div className="accordion" id="Settlements">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="settlements1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#settlementsOne" aria-expanded="true" aria-controls="settlementsOne">
                                        How to reconcile settlements along with the transactions made?
                                        </button>
                                    </h2>
                                    <div id="settlementsOne" className="accordion-collapse collapse show" aria-labelledby="settlements1" data-bs-parent="#Settlements">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="settlements2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#settlementsTwo" aria-expanded="false" aria-controls="settlementsTwo">
                                        The status of my settlement shows as failed
                                        </button>
                                    </h2>
                                    <div id="settlementsTwo" className="accordion-collapse collapse" aria-labelledby="settlements2" data-bs-parent="#Settlements">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="settlements3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#settlementsThree" aria-expanded="false" aria-controls="settlementsThree">
                                        How to check settlements in my bank account?
                                        </button>
                                    </h2>
                                    <div id="settlementsThree" className="accordion-collapse collapse" aria-labelledby="settlements3" data-bs-parent="#Settlements">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="settlements4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#settlementsFour" aria-expanded="false" aria-controls="settlementsFour">
                                        What are settlements?
                                        </button>
                                    </h2>
                                    <div id="settlementsFour" className="accordion-collapse collapse" aria-labelledby="settlements4" data-bs-parent="#Settlements">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="single-faqs mb-5">
                            <div className="faqs-title mb-3"><h5>Account Configuration</h5></div>
                            <div className="accordion" id="accountConfiguration">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="configuration1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#configurationOne" aria-expanded="true" aria-controls="configurationOne">
                                        What do Webhooks do?
                                        </button>
                                    </h2>
                                    <div id="configurationOne" className="accordion-collapse collapse show" aria-labelledby="configuration1" data-bs-parent="#accountConfiguration">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="configuration2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#configurationTwo" aria-expanded="false" aria-controls="configurationTwo">
                                        How do I customize my checkout?
                                        </button>
                                    </h2>
                                    <div id="configurationTwo" className="accordion-collapse collapse" aria-labelledby="configuration2" data-bs-parent="#accountConfiguration">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="configuration3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#configurationThree" aria-expanded="false" aria-controls="configurationThree">
                                        How do I generate the API keys?
                                        </button>
                                    </h2>
                                    <div id="configurationThree" className="accordion-collapse collapse" aria-labelledby="configuration3" data-bs-parent="#accountConfiguration">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="configuration4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#configurationFour" aria-expanded="false" aria-controls="configurationFour">
                                        How do I capture payments automatically?
                                        </button>
                                    </h2>
                                    <div id="configurationFour" className="accordion-collapse collapse" aria-labelledby="configuration4" data-bs-parent="#accountConfiguration">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="single-faqs">
                            <div className="faqs-title mb-3"><h5>International Payments</h5></div>
                            <div className="accordion" id="internationalPayment">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="payment1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#paymentOne" aria-expanded="true" aria-controls="paymentOne">
                                        How do I change my GSTIN?
                                        </button>
                                    </h2>
                                    <div id="paymentOne" className="accordion-collapse collapse show" aria-labelledby="payment1" data-bs-parent="#internationalPayment">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="payment2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#paymentTwo" aria-expanded="false" aria-controls="paymentTwo">
                                        Can I have the GSTIN of Razorpay?
                                        </button>
                                    </h2>
                                    <div id="paymentTwo" className="accordion-collapse collapse" aria-labelledby="payment2" data-bs-parent="#internationalPayment">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="payment3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#paymentThree" aria-expanded="false" aria-controls="paymentThree">
                                        Am I eligible for instant Settlements ?
                                        </button>
                                    </h2>
                                    <div id="paymentThree" className="accordion-collapse collapse" aria-labelledby="payment3" data-bs-parent="#internationalPayment">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="payment4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#paymentFour" aria-expanded="false" aria-controls="paymentFour">
                                        How do I sign up for Instant Settlements ?
                                        </button>
                                    </h2>
                                    <div id="paymentFour" className="accordion-collapse collapse" aria-labelledby="payment4" data-bs-parent="#internationalPayment">
                                        <div className="accordion-body">
                                        Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterTopTwo/>

        <FooterLightTwo/>

        <ScrollToTop/>
    </>
  )
}
