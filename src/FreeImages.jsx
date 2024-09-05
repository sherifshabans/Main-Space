import React from 'react';

function FreeImages() {
    return (
        <section className="container justify-content-center align-items-center text-center free-images bg-light mb-5">
            <div className="row">
                <div className="col-12 col-md-6 ps-0 ms-0 pe-0 me-0 position-relative">
                    <div className="gradient-image pt-5 mt-5 rounded-circle">
                        <span className="bigBall"></span>
                        <img 
                            src="img/free images and icons.png" 
                            className="img-fluid w-100" 
                            alt="Free Images and Icons"
                        />
                        <span className="smallBall"></span>
                    </div>
                    <div className="small-gradient rounded-circle ms-0 ps-0 position-absolute top-50 end-0"></div>
                </div>

                <div className="col-12 col-md-6 ms-0 ps-0 justify-content-center align-items-center text-center mt-5 pt-5">
                    <h3>10,000+ of free <br /> images, icons, and <br /> graphics</h3>
                    <p>You’ve got the ideas, we’ve got the tools</p>
                    <button className="px-5 py-2 text-light border-0 rounded mb-5">Get Started</button>
                </div>
            </div>
        </section>
    );
}

export default FreeImages;
