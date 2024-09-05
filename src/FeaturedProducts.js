/*import React from 'react';

function FeaturedProducts() {
    return (
        <section className="mg">
            <div className="container">
                <div className="text-center mg">
                    <h1 className="fw-bold">Featured products</h1>
                    <p className="p-color">What’s more, we do it right!</p>
                </div>
                <div className="row featured">
                    <div className="col-lg-3 text-center pt-2 pb-2">
                        <img 
                            className="img-fluid rounded-3" 
                            src="img/Link → 8-330x440.jpg.png" 
                            alt="Zone Sweatshirt"
                        />
                        <p className="text-center m-0 p-0 fw-bold pt-2">Zone Sweatshirt</p>
                        <small className="price text-center m-0 p-0 fw-bold">$19.95 – $159.95</small>
                    </div>
                    <div className="col-lg-3 text-center pt-2 pb-2">
                        <img 
                            className="img-fluid rounded-3" 
                            src="img/Link → 10-2-330x440.jpg.png" 
                            alt="Zoo Men’s t-shirt"
                        />
                        <p className="text-center m-0 p-0 fw-bold pt-2">Zoo Men’s t-shirt</p>
                        <small className="price text-center m-0 p-0 fw-bold">$14.95 – $119.95</small>
                    </div>
                    <div className="col-lg-3 text-center pt-2 pb-2 position-relative">
                        <img 
                            className="img-fluid rounded-3" 
                            src="img/Link → 17-2-330x440.jpg.png" 
                            alt="Toddler T-shirt"
                        />
                        <p className="text-center m-0 p-0 fw-bold pt-2">Toddler T-shirt</p>
                        <small className="price text-center m-0 p-0 fw-bold">$26.00</small>
                        <div className="adds position-absolute">
                            <p className="hot">Hot</p>
                        </div>
                    </div>
                    <div className="col-lg-3 text-center pt-2 pb-2 position-relative">
                        <img 
                            className="img-fluid rounded-3" 
                            src="img/Link → 17-330x440.jpg.png" 
                            alt="Fine Jersey"
                        />
                        <p className="text-center m-0 p-0 fw-bold pt-2">Fine Jersey</p>
                        <small className="price text-center m-0 p-0 fw-bold">
                            <span className="text-active-mainColor">$28.00 </span>
                            <del className="p-color">$31.00</del>
                        </small>
                        <div className="adds position-absolute">
                            <p>-10%</p>
                            <p className="hot">Hot</p>
                        </div>
                    </div>
                    <div className="col-lg-3 text-center pt-2 pb-2 position-relative">
                        <img 
                            className="img-fluid rounded-3" 
                            src="img/Link → 16-2-330x440.jpg.png" 
                            alt="Kids Hoodie"
                        />
                        <p className="text-center m-0 p-0 fw-bold pt-2">Kids Hoodie</p>
                        <small className="price text-center m-0 p-0 fw-bold">$26.00 – $29.00</small>
                        <div className="adds position-absolute">
                            <p>Sale!</p>
                            <p className="new">New</p>
                        </div>
                    </div>
                    <div className="col-lg-3 text-center pt-2 pb-2 position-relative">
                        <img 
                            className="img-fluid rounded-3" 
                            src="img/Link → 14-330x440.jpg.png" 
                            alt="Youth Short Sleeve"
                        />
                        <p className="text-center m-0 p-0 fw-bold pt-2">Youth Short Sleeve</p>
                        <small className="price text-center m-0 p-0 fw-bold">$26.00 – $29.00</small>
                        <div className="adds position-absolute">
                            <p>Sale!</p>
                            <p className="new">New</p>
                        </div>
                    </div>
                    <div className="col-lg-3 text-center pt-2 pb-2 position-relative">
                        <img 
                            className="img-fluid rounded-3" 
                            src="img/Link → 10-4-330x440.jpg.png" 
                            alt="Midweight Cotton"
                        />
                        <p className="text-center m-0 p-0 fw-bold pt-2">Midweight Cotton</p>
                        <small className="price text-center m-0 p-0 fw-bold">$26.00 – $29.00</small>
                        <div className="adds position-absolute">
                            <p>Sale!</p>
                            <p className="new">New</p>
                        </div>
                    </div>
                    <div className="col-lg-3 text-center pt-2 pb-2 position-relative">
                        <img 
                            className="img-fluid rounded-3" 
                            src="img/Link → 10-330x440.jpg.png" 
                            alt="Hooded Sweatshirt"
                        />
                        <p className="text-center m-0 p-0 fw-bold pt-2">Hooded Sweatshirt</p>
                        <small className="price text-center m-0 p-0 fw-bold">$28.00</small>
                        <div className="adds position-absolute">
                            <p className="hot">Hot</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedProducts;
*/
import React, { useState, useEffect } from 'react';

function FeaturedProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Replace with your API endpoint
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://66d4ed765b34bcb9ab3fbe63.mockapi.io/api/products/prodcuts');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <section className="mg">
            <div className="container">
                <div className="text-center mg">
                    <h1 className="fw-bold">Featured products</h1>
                    <p className="p-color">What’s more, we do it right!</p>
                </div>
                <div className="row featured">
                    {products.map((product) => (
                        <div key={product.id} className="col-lg-3 text-center pt-2 pb-2 position-relative">
                            <img
                                className="img-fluid rounded-3"
                                src={product.image} // Assuming your API returns an 'image' field
                                alt={product.name}
                            />
                            <p className="text-center m-0 p-0 fw-bold pt-2">{product.name}</p>
                            <small className="price text-center m-0 p-0 fw-bold">
                                {product.discount ? (
                                    <>
                                        <span className="text-active-mainColor">${product.price}</span>
                                        <del className="p-color">${product.originalPrice}</del>
                                    </>
                                ) : (
                                    `$${product.price}`
                                )}
                            </small>
                            <div className="adds position-absolute">
                                {product.isNew && <p className="new">New</p>}
                                {product.isHot && <p className="hot">Hot</p>}
                                {product.discount && <p>-{product.discount}%</p>}
                                {product.isSale && <p>Sale!</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedProducts;
