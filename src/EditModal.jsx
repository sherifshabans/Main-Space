import React, { useState, useEffect } from 'react';

const EditModal = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    originalPrice: '',
    price: '',
    discount: '',
    image: '',
    isNew: false,
    isHot: false,
    isSale: false,
  });

  useEffect(() => {
    // Populate the form data with the product details
    setFormData({
      name: product.name,
      originalPrice: product.originalPrice,
      price: product.price,
      discount: product.discount,
      image: product.image,
      isNew: product.isNew,
      isHot: product.isHot,
      isSale: product.isSale,
    });
  }, [product]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...product,
      ...formData,
    });
  };

  return (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Product</h5>
            <button type="button" className="btn-close" onClick={onCancel}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="originalPrice" className="form-label">Original Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="originalPrice"
                  name="originalPrice"
                  value={formData.originalPrice}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="discount" className="form-label">Discount</label>
                <input
                  type="number"
                  className="form-control"
                  id="discount"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">Image URL (Base64)</label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="isNew"
                  name="isNew"
                  checked={formData.isNew}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="isNew">New</label>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="isHot"
                  name="isHot"
                  checked={formData.isHot}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="isHot">Hot</label>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="isSale"
                  name="isSale"
                  checked={formData.isSale}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="isSale">Sale</label>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onCancel}>Close</button>
              <button type="submit" className="btn btn-primary">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
