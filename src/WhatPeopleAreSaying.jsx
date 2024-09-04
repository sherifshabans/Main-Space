import React from 'react';

function WhatPeopleAreSaying() {
    return (
        <section className="what-people-are-saying py-5">
            <div className="container">
                <div className="text-center heading mb-5 pb-3">
                    <h3>What People Are Saying</h3>
                    <p>We provide support for more than 15K+ Businesses.</p>
                </div>

                <div className="row g-4">
                    {/* Testimonial 1 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="saying p-5 d-flex flex-column">
                            <div className="d-flex align-items-center mb-4 ms-0">
                                <img src="img/avater-testi-1.png.png" alt="Dean D." className="me-3" />
                                <div>
                                    <span className="title me-2">Dean D.</span>
                                    <span>Director</span>
                                </div>
                            </div>
                            <p>
                                “Great quality products - Flags, programs for exceptional capacities, birthday, and occasion welcome are largely still mainstream on paper.”
                            </p>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="saying p-5 d-flex flex-column">
                            <div className="d-flex align-items-center mb-4 ms-0">
                                <img src="img/avater-testi-2.png.png" alt="Cristian L." className="me-3" />
                                <div>
                                    <span className="title me-2">Cristian L.</span>
                                    <span>Manager</span>
                                </div>
                            </div>
                            <p>
                                “Best services ever - Flags, programs for exceptional capacities, birthday, and are largely still mainstream on paper occasion welcome.”
                            </p>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="saying p-5 d-flex flex-column">
                            <div className="d-flex align-items-center mb-4 ms-0">
                                <img src="img/avater-testi-3.png.png" alt="Leonel R." className="me-3" />
                                <div>
                                    <span className="title me-2">Leonel R.</span>
                                    <span>Designer</span>
                                </div>
                            </div>
                            <p>
                                “Top-notch support - Flags, programs for, birthday, and occasion welcome are largely still mainstream on paper exceptional capacities.”
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center justify-content-center mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8"></circle>
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default WhatPeopleAreSaying;
