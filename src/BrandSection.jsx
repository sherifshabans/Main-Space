import React from 'react';

function BrandSection() {
    return (
        <section className="container d-flex flex-column flex-lg-row flex-md-row flex-sm-column quality-shipping-sec3 pt-5 mb-5">
            <div className="d-flex col-lg-4 col-md-4 col-sm-12 mb-4 mb-md-0">
                <img 
                    src="img/Link → SVG.png" 
                    className="img-fluid" 
                    alt="Top quality"
                />
                <div>
                    <h5 className="card-title">Top quality</h5>
                    <p className="card-text">
                        Lorem ipsum det, consec tetur adipiscing elit duis nec fringi
                    </p>
                </div>
            </div>

            <div className="d-flex col-lg-4 col-md-4 col-sm-12 mb-4 mb-md-0">
                <img 
                    src="img/div.haru-icon-box__icon.png" 
                    className="img-fluid" 
                    alt="Mix and match"
                />
                <div>
                    <h5 className="card-title">Mix and match</h5>
                    <p className="card-text">
                        Lorem ipsum det, adipiscing elit duis nec fringi consectetur
                    </p>
                </div>
            </div>

            <div className="d-flex col-lg-4 col-md-4 col-sm-12">
                <img 
                    src="img/div.haru-icon-box__icon (1).png" 
                    className="img-fluid" 
                    alt="Shipping worldwide"
                />
                <div>
                    <h5 className="card-title">Shipping worldwide</h5>
                    <p className="card-text">
                        Lorem ipsum det, duis nec fringi consectetur adipiscing elit
                    </p>
                </div>
            </div>
        </section>
    );
}

export default BrandSection;
