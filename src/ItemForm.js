import React, { useState, useEffect } from 'react';

const ItemForm = ({ item, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    originalPrice: '',
    price: '',
    discount: '',
  });

  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name || '',
        image: item.image || '',
        originalPrice: item.originalPrice || '',
        price: item.price || '',
        discount: item.discount || '',
      });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...item, ...formData });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Image URL</label>
        <input
          type="text"
          className="form-control"
          id="image"
          name="image"
          value={formData.image}
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
      <button type="submit" className="btn btn-primary">Save</button>
      <button type="button" className="btn btn-secondary ms-2" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default ItemForm;
