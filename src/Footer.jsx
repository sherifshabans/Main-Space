import React from 'react';

function Footer() {
    return (
        <footer className="p-5">
            <section className="container justify-content-center align-items-center">
                <div className="row">
                    {/* Contact Info */}
                    <div className="col-lg-3 col-md-6 justify-content-center align-items-center">
                        <img src="img/eee 1.png" alt="Company Logo" className="mb-4 img-fluid" />
                        <p><a href="mailto:hello@minaspace.io">hello@minaspace.io</a></p>
                        <p><a href="tel:+020360383996" className="contact-number">+02 036 038 3996</a></p>
                        <p><a href="#">3665 Paseo Place, Suite 0960<br />San Diego</a></p>
                    </div>

                    {/* Information Links */}
                    <div className="col-lg-3 col-md-6 justify-content-center align-items-center">
                        <h6 className="mb-4 fw-bold">Information</h6>
                        <p><a href="#">About us</a></p>
                        <p><a href="#">Our Blog</a></p>
                        <p><a href="#">Start a Return</a></p>
                        <p><a href="#">Contact Us</a></p>
                    </div>

                    {/* Useful Links */}
                    <div className="col-lg-3 col-md-6 justify-content-center align-items-center">
                        <h6 className="mb-4">Useful links</h6>
                        <p><a href="#">My Account</a></p>
                        <p><a href="#">Print Provider</a></p>
                        <p><a href="#">Become a Partner</a></p>
                        <p><a href="#">Custom Products</a></p>
                    </div>

                    {/* Newsletter */}
                    <div className="col-lg-3 col-md-6 justify-content-center align-items-center">
                        <h6 className="mb-4">Newsletter</h6>
                        <p><a href="#">Get the latest news, events & more delivered to your inbox.</a></p>

                        <form className="footer-item pt-1">
                            <div className="input-group position-relative">
                                <input 
                                    className="form-control border-0 py-3" 
                                    type="email" 
                                    placeholder="Your email address" 
                                    aria-label="Email address"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right position-absolute end-0 me-3" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path>
                                </svg>
                            </div>
                        </form>
                    </div>

                    {/* Copyright Section */}
                    <div className="text-center mt-5 copy-right">
                        <img src="img/div.elementor-element (4).png" alt="Footer Logo" className="img-fluid mb-4" />
                        <h6>© 2022 MinaSpace. All rights reserved.</h6>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
