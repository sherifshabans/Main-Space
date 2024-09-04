import React from 'react';

function Logos() {
    return (
        <section className="mg">
            <div className="container">
                <div className="logos row justify-content-center mg">
                    <div className="left col-lg-4 d-flex flex-lg-column justify-content-center mt-4">
                        <div className="d-flex justify-content-lg-end">
                            <img className="img-fluid" src="img/logo (3).png" alt="Logo 1" />
                        </div>
                        <div className="d-flex justify-content-lg-start">
                            <img className="img-fluid" src="img/logo (1).png" alt="Amazon Logo" />
                        </div>
                        <div className="d-flex justify-content-lg-evenly">
                            <img className="img-fluid" src="img/logo (7).png" alt="Logo 2" />
                        </div>
                    </div>
                    <div className="center col-lg-4 d-flex flex-column justify-content-start">
                        <div className="d-flex justify-content-center">
                            <img className="img-fluid" src="img/logo (4).png" alt="Center Logo" />
                        </div>
                        <div className="p-2 text-center">
                            <h3 className="fw-bold">Join the 7,000+ companies trusting us</h3>
                            <p className="p-color">You’ve got the ideas, we’ve got the tools</p>
                            <button className="btn btn-success border-0 ps-3 pe-3 my-2">Get Started</button>
                        </div>
                    </div>
                    <div className="right col-lg-4 d-flex flex-lg-column justify-content-center mt-4">
                        <div className="d-flex justify-content-lg-start">
                            <img className="img-fluid" src="img/logo (5).png" alt="Logo 3" />
                        </div>
                        <div className="d-flex justify-content-lg-end">
                            <img className="img-fluid" src="img/logo (6).png" alt="Logo 4" />
                        </div>
                        <div className="d-flex justify-content-lg-evenly">
                            <img className="img-fluid" src="img/logo (8).png" alt="Logo 5" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Logos;
