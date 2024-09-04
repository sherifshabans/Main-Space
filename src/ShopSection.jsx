import React from 'react';

function ShopSection() {
    return (
        <section className="py-5 bg-light p-0">
            <div className="container">
                <div className="row mg align-items-center justify-content-center">
                    <div className="col-12 col-md-3">
                        <div className="d-flex flex-row flex-md-column gap-4">
                            <div className="d-flex align-items-center justify-content-center position-relative">
                                <img 
                                    src="img/Link → banner-43.jpg.png" 
                                    alt="Shop Hoodies" 
                                    className="img-fluid"
                                />
                                <button className="btn btn-light position-absolute fw-bold centerBtn">
                                    Shop Hoodies
                                </button>
                            </div>
                            <div className="d-flex align-items-center justify-content-center position-relative">
                                <img 
                                    src="img/Link → banner-47.jpg.png" 
                                    alt="Shop Designer" 
                                    className="img-fluid"
                                />
                                <button className="btn btn-light position-absolute fw-bold centerBtn">
                                    Shop Designer
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pt-1 pb-1">
                        <div className="d-flex align-items-center justify-content-center position-relative">
                            <img 
                                src="img/Link → banner-44.jpg.png" 
                                alt="Shop T-Shirt" 
                                className="img-fluid"
                            />
                            <button className="btn btn-light position-absolute fw-bold centerBtn">
                                Shop T-Shirt
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="d-flex flex-row flex-md-column gap-4">
                            <div className="d-flex align-items-center justify-content-center position-relative">
                                <img 
                                    src="img/Link → banner-45.jpg.png" 
                                    alt="Shop Sweater" 
                                    className="img-fluid"
                                />
                                <button className="btn btn-light position-absolute fw-bold centerBtn">
                                    Shop Sweater
                                </button>
                            </div>
                            <div className="d-flex align-items-center justify-content-center position-relative">
                                <img 
                                    src="img/Link → banner-46.jpg.png" 
                                    alt="Shop Tanktop" 
                                    className="img-fluid"
                                />
                                <button className="btn btn-light position-absolute fw-bold centerBtn">
                                    Shop Tanktop
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShopSection;
