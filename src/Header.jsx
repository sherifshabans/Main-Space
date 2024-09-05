import React from 'react';

function Header() {
    return (
        <header>
            <section>
                <div className="container p-1">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <a href="#" className="text-decoration-none text-secondary me-3">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="#" className="text-decoration-none text-secondary me-3">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="text-decoration-none text-secondary me-3">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" className="text-decoration-none text-secondary me-3">
                                <i className="bi bi-youtube"></i>
                            </a>
                        </div>
                        <div className="d-none d-md-block">
                            <p className="fw-bold p-1">
                                <img src="img/div.elementor-element (1).png" alt="fire" />
                            </p>
                        </div>
                        <div>
                            <button className="btn btn-light rounded-1">Login</button>
                            <button className="btn btn-dark rounded-1">Sign Up</button>
                            <a className="btn btn-success border-0 ps-3 pe-3 m-2 "
                            href="/dashboard"
                            >Dashboard</a>

                        </div>
                    </div>
                </div>
            </section>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="h3 text-decoration-none text-black fw-bold d-block d-lg-none" href="#">
                        <img className="titleLogo" src="img/eee 1.png" alt="" />
                    </a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavDropdown" 
                        aria-controls="navbarNavDropdown" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse justify-content-between collapse show" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a 
                                    className="nav-link  text-active-mainColor fw-bold" 
                                    href="/" 
                                    id="navbarDropdownMenuLink" 
                                  //  role="button" 
                                //    data-bs-toggle="dropdown" 
                              //      aria-expanded="false"
                                >
                                    Home
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {/* Dropdown items can be added here */}
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a 
                                    className="nav-link dropdown-toggle text-black fw-bold" 
                                    href="#" 
                                    id="navbarDropdownMenuLink" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                    MinaSpace
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {/* Dropdown items can be added here */}
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a 
                                    className="nav-link dropdown-toggle text-black fw-bold" 
                                    href="#" 
                                    id="navbarDropdownMenuLink" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                    Shop
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {/* Dropdown items can be added here */}
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a 
                                    className="nav-link dropdown-toggle text-black fw-bold" 
                                    href="#" 
                                    id="navbarDropdownMenuLink" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                    Blog
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {/* Dropdown items can be added here */}
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a 
                                    className="nav-link dropdown-toggle text-black fw-bold" 
                                    href="#" 
                                    id="navbarDropdownMenuLink" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                    Pages
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {/* Dropdown items can be added here */}
                                </ul>
                            </li>
                        </ul>
                        <h3 className="fw-bold d-none d-lg-block">
                            <img className="titleLogo" src="img/eee 1.png" alt="" />
                        </h3>
                        <div className="d-flex align-items-center justify-content-center">
                            <form className="d-flex">
                                <div className="input-group">
                                    <span className="input-group-text border-end-0 bg-body" id="basic-addon1">
                                        <i className="bi bi-search"></i>
                                    </span>
                                    <input 
                                        className="form-control border-start-0 shadow-none me-2" 
                                        type="search" 
                                        placeholder="Search" 
                                        aria-label="Search" 
                                    />
                                </div>
                            </form>
                            <div className="star me-3">
                                <span>0</span>
                                <i className="bi bi-star"></i>
                            </div>
                            <div className="bag me-3">
                                <span>0</span>
                                <i className="bi bi-bag"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
