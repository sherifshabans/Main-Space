import React from 'react';

const ItemList = ({ items, onEdit, onDelete }) => {
  if (!items || items.length === 0) {
    return <p>No items available.</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Original Price</th>
            <th scope="col">Price</th>
            <th scope="col">Discount</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
              </td>
              <td>{item.name}</td>
              <td>${item.originalPrice}</td>
              <td>${item.price}</td>
              <td>{item.discount}</td>
              <td>
                <button className="btn btn-primary me-2" onClick={() => onEdit(item)}>Edit</button>
                <button className="btn btn-danger" onClick={() => onDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
