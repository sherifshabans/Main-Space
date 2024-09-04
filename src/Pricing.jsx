import React from 'react';

function Pricing() {
    return (
        <section className="mg pricing py-4">
            <span className="pricingBall d-none d-lg-block"></span>
            <div className="container">
                <div className="text-center mg">
                    <h1 className="fw-bold">Simple pricing for everyone</h1>
                    <p className="p-color">Choose a plan and get started</p>
                </div>
                <div className="row align-items-center justify-content-center">
                    {/* Personal Plan */}
                    <div className="col-md-6 col-lg-4 col-sm-8 my-2">
                        <div className="card rounded-3 text-center">
                            <div className="card-body py-4">
                                <h4 className="card-title mg">Personal</h4>
                                <p className="p-color mg">
                                    <span className="display-5 fw-bold my-4 text-dark">$12.99</span>/user
                                </p>
                                <hr className="p-color" />
                                <ul className="list-unstyled my-4 text-start">
                                    <li className="d-flex align-items-start justify-content-start my-3">
                                        <div className="trueFlag">
                                            <img src="img/tick.png" alt="Checkmark" />
                                        </div>
                                        <span>Free licensed icons</span>
                                    </li>
                                    <li className="d-flex align-items-start justify-content-start my-3">
                                        <div className="trueFlag">
                                            <img src="img/tick.png" alt="Checkmark" />
                                        </div>
                                        <span>Fast and free standard shipping</span>
                                    </li>
                                    <li className="d-flex align-items-start justify-content-start my-3">
                                        <div className="trueFlag">
                                            <img src="img/tick.png" alt="Checkmark" />
                                        </div>
                                        <span>No credit card required</span>
                                    </li>
                                    <li className="d-flex align-items-start justify-content-start my-3">
                                        <div className="trueFlag">
                                            <img src="img/tick.png" alt="Checkmark" />
                                        </div>
                                        <span>Friendly support</span>
                                    </li>
                                </ul>
                                <a className="btn btn-info btn-lg w-75 text-dark fw-bold" href="#">Get Started</a>
                            </div>
                        </div>
                    </div>
                    {/* Professional Plan */}
                    <div className="col-md-8 col-lg-4 col-sm-8 my-2">
                        <div className="card rounded-3 text-center position-relative">
                            <span className="btn btn-dark position-absolute popular ps-4 pe-4 py-1">Popular</span>
                            <div className="card-body py-4">
                                <h4 className="card-title mg">Professional</h4>
                                <p className="p-color mg">
                                    <span className="display-5 fw-bold my-4 text-dark">$59.99</span>/team
                                </p>
                                <hr className="p-color" />
                                <ul className="list-unstyled my-4 text-start">
                                    <li className="d-flex align-items-start justify-content-start my-3">
                                        <div className="trueFlag">
                                            <img src="img/tick.png" alt="Checkmark" />
                                        </div>
                                        <span>Full access to all features</span>
                                    </li>
                                    <li className="d-flex align-items-start justify-content-start my-3">
                                        <div className="trueFlag">
                                            <img src="img/tick.png" alt="Checkmark" />
                                        </div>
                                        <span>Fast and free standard shipping</span>
                                    </li>
                                    <li className="d-flex align-items-start justify-content-start my-3">
                                        <div className="trueFlag">
                                            <img src="img/tick.png" alt="Checkmark" />
                                        </div>
                                        <span>No credit card required</span>
                                    </li>
                                    <li className="d-flex align-items-start justify-content-start my-3">
                                        <div className="trueFlag">
                                            <img src="img/tick.png" alt="Checkmark" />
                                        </div>
                                        <span>Use on unlimited projects</span>
                                    </li>
                                    <li className="d-flex align-items-start justify-content-start my-3">
                                        <div className="trueFlag">
                                            <img src="img/tick.png" alt="Checkmark" />
                                        </div>
                                        <span>Team collaboration feature</span>
                                    </li>
                                    <li className="d-flex align-items-start justify-content-start my-3">
                                        <div className="trueFlag">
                                            <img src="img/tick.png" alt="Checkmark" />
                                        </div>
                                        <span>Friendly support</span>
                                    </li>
                                </ul>
                                <a className="btn btn-info btn-lg w-75 text-dark fw-bold popularBtn" href="#">Get Started</a>
                            </div>
                        </div>
                    </div>
                    {/* Enterprise Plan */}
                    <div className="col-md-6 col-lg-4 col-sm-8 my-2">
                        <div className="card rounded-3 text-center">
                            <div className="card-body py-4">
                                <h4 className="card-title mg">Enterprise</h4>
                                <p className="p-color mg">
                                    <span className="display-5 fw-bold my-4 text-dark">$99.99</span>/team
                                </p>
                                <hr className="p-color" />
                                <ul className="list-unstyled my-4 text-start">
                                    <li className="d-flex align-items-start justify-content-start my-3">
                                        <div className="trueFlag">
                                            <img src="img/tick.png" alt="Checkmark" />
                                        </div>
                                        <span>All features in Pro Plan</span>
                                    </li>
                                    <li className="d-flex align-items-start justify-content-start my-3">
                                        <div className="trueFlag">
                                            <img src="img/tick.png" alt="Checkmark" />
                                        </div>
                                        <span>Use on unlimited projects</span>
                                    </li>
                                    <li className="d-flex align-items-start justify-content-start my-3">
                                        <div className="trueFlag">
                                            <img src="img/tick.png" alt="Checkmark" />
                                        </div>
                                        <span>Team collaboration feature</span>
                                    </li>
                                    <li className="d-flex align-items-start justify-content-start my-3">
                                        <div className="trueFlag">
                                            <img src="img/tick.png" alt="Checkmark" />
                                        </div>
                                        <span>Friendly support</span>
                                    </li>
                                </ul>
                                <a className="btn btn-info btn-lg w-75 text-dark fw-bold" href="#">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
