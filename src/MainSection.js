import React from 'react';

function MainSection() {
    return (
        <section className="row  m-0 p-0 my-1">
            <div className="left col-md-6 m-0 p-0 pb-1 pb-md-0 pe-md-1">
                <img 
                    className="img-fluid" 
                    src="img/Link → banner-41.jpg.png" 
                    alt="T-shirt printing made easy"
                />
                <div className="content">
                    <h2 className="fw-bold">
                        T-shirt printing <br />
                        made easy.
                    </h2>
                    <p>
                        Create your design for your <br />
                        online business
                    </p>
                    <button className="btn btn-success border-0 ps-3 pe-3">
                        Create a T-shirt
                    </button>
                </div>
            </div>
            <div className="right col-md-6 m-0 p-0 pb-1 pb-md-0 ps-md-1">
                <img 
                    className="img-fluid" 
                    src="img/Link → banner-42.jpg.png" 
                    alt="Bring your ideas to life in minutes"
                />
                <div className="content">
                    <h2 className="fw-bold">
                        Bring your ideas <br />
                        to life in minutes
                    </h2>
                    <p>
                        Print shirts for yourself or your <br />
                        creative works
                    </p>
                    <button className="btn btn-success border-0 ps-3 pe-3">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    );
}

export default MainSection;
