import React from 'react';

function TShirtPrinting() {
    return (
        <section className="tshirt-printing bg-light pt-5 pb-5 mb-5">
            <div className="text-center mb-5">
                <h3>T-shirt printing made easy.</h3>
                <p>Let us show you how your product comes to life.</p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 d-flex flex-column align-items-center ms-0 mb-4 mb-md-0 position-relative">
                        {/* Dotted Line */}
                        <div className="dotted-line"></div>

                        <div className="d-flex align-items-start pe-4 pb-5 pt-0 active mb-0">
                            <span className="px-3 rounded-circle text-light text-center me-3 span1">1</span>
                            <h5 className="mb-0">Choose from 412 custom products in our catalog</h5>
                        </div>

                        <div className="d-flex align-items-start mb-4">
                            <span className="px-3 rounded-circle text-center me-3">2</span>
                            <h5 className="mb-0">Customize your design with graphics, text or your own uploaded images.</h5>
                        </div>

                        <div className="d-flex align-items-start mb-4">
                            <span className="px-3 rounded-circle text-center me-3">3</span>
                            <h5 className="mb-0">Order prints by selecting your preferred T-shirt size, style, and quantity.</h5>
                        </div>

                        <div className="d-flex align-items-start">
                            <span className="px-3 rounded-circle text-center me-3">4</span>
                            <h5 className="mb-0">Get your order sent to your door with free standard shipping.</h5>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 d-flex justify-content-center pe-0 me-0">
                        <img 
                            src="img/section5.png" 
                            alt="T-shirt printing" 
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TShirtPrinting;
