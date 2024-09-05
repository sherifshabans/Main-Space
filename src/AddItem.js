import React, { useState } from 'react';
import { Modal, Button, Alert, Toast, ToastContainer } from 'react-bootstrap';

function AddItem() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [base64Image, setBase64Image] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [isNew, setIsNew] = useState(false);
    const [isHot, setIsHot] = useState(false);
    const [isSale, setIsSale] = useState(false);
    const [error, setError] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleClose = () => {
        setShow(false);
        setError(''); // Clear error on close
    };
    const handleShow = () => setShow(true);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                setError('File size exceeds 5MB limit.');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setBase64Image(reader.result);
            };
            reader.readAsDataURL(file);
            setImage(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        fetch("https://66d4ed765b34bcb9ab3fbe63.mockapi.io/api/products/prodcuts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                originalPrice,
                price,
                discount,
                image: base64Image,
                isNew,
                isHot,
                isSale
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            handleClose(); // Close the modal after successful submission
            setShowToast(true); // Show the toast
        })
        .catch(error => {
            console.error('Error:', error);
            setError('Failed to add item. Please try again.');
        });
    };

    return (
        <>
            <Button variant="btn btn-success border-0 ps-3 pe-3 m-2 p-2" onClick={handleShow}>
                Add New Item
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <form onSubmit={handleSubmit}>
                        {/* Existing form fields */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                value={name} 
                                onChange={e => setName(e.target.value)} 
                                placeholder="Name" 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image</label>
                            <input 
                                type="file" 
                                className="form-control" 
                                id="image" 
                                onChange={handleFileChange} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="originalPrice" className="form-label">Original Price</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="originalPrice" 
                                value={originalPrice} 
                                onChange={e => setOriginalPrice(e.target.value)} 
                                placeholder="Original Price" 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="price" 
                                value={price} 
                                onChange={e => setPrice(e.target.value)} 
                                placeholder="Price" 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="discount" className="form-label">Discount</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="discount" 
                                value={discount} 
                                onChange={e => setDiscount(e.target.value)} 
                                placeholder="Discount" 
                            />
                        </div>

                        {/* New checkboxes */}
                        <div className="form-check mb-3">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="isNew" 
                                checked={isNew} 
                                onChange={e => setIsNew(e.target.checked)} 
                            />
                            <label htmlFor="isNew" className="form-check-label">New</label>
                        </div>
                        <div className="form-check mb-3">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="isHot" 
                                checked={isHot} 
                                onChange={e => setIsHot(e.target.checked)} 
                            />
                            <label htmlFor="isHot" className="form-check-label">Hot</label>
                        </div>
                        <div className="form-check mb-3">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="isSale" 
                                checked={isSale} 
                                onChange={e => setIsSale(e.target.checked)} 
                            />
                            <label htmlFor="isSale" className="form-check-label">On Sale</label>
                        </div>

                        <Button variant="primary" type="submit">
                            Add Item
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>

            <ToastContainer position="top-end" className="p-3">
                <Toast
                    show={showToast}
                    onClose={() => setShowToast(false)}
                    delay={3000}
                    autohide
                    style={{
                        backgroundColor: '#28a745',
                        color: '#2EBB77',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Toast.Header
                        style={{
                            backgroundColor: '#218838',
                            color: '#2EBB77',
                            borderRadius: '8px 8px 0 0',
                        }}
                    >
                        <strong className="me-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>Item added successfully!</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
}

export default AddItem;
