/* eslint-disable react/prop-types */
const ItemList = ({ items, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Items</h2>
      {items.length === 0 ? (
        <p>No items available.</p>
      ) : (
        <ul className="list-group">
          {items.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </div>
              <div>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => onEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
