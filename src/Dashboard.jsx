import React, { useState, useEffect } from 'react';
import AddItem from './AddItem';
import { fetchItems, createItem, updateItem, deleteItem } from './api';
import Header from './Header';
import EditModal from './EditModal'; // Import the modal component
import { Toast, ToastContainer } from 'react-bootstrap'; // Import Toast components

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [showModal, setShowModal] = useState(false); // State for controlling the modal
  const [showDeleteToast, setShowDeleteToast] = useState(false); // State for delete toast
  const [showEditToast, setShowEditToast] = useState(false); // State for edit toast

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await fetchItems();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    loadItems();
  }, []);

  const handleEdit = (item) => {
    setEditingItem(item);
    setShowModal(true); // Show the modal when editing
  };

  const handleSave = async (item) => {
    try {
      if (item.id) {
        await updateItem(item.id, item);
        setShowEditToast(true); // Show edit toast on successful save
      } else {
        await createItem(item);
      }
      setEditingItem(null);
      setShowModal(false); // Close the modal after saving
      const data = await fetchItems();
      setItems(data);
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      const data = await fetchItems();
      setItems(data);
      // Show delete toast on successful deletion
      setShowDeleteToast(true);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="col d-flex">
          <h2 className="my-4 text-success text-start ms-0">Dashboard</h2>
          <AddItem />
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="thead">
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
                  <td>{item.discount}%</td>
                  <td>
                    <button className="btn btn-success m-1" onClick={() => handleEdit(item)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for editing the item */}
      {showModal && editingItem && (
        <EditModal
          product={editingItem}
          onSave={handleSave}
          onCancel={() => setShowModal(false)} // Close modal on cancel
        />
      )}

      {/* Toast Notification for Delete */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
          show={showDeleteToast}
          onClose={() => setShowDeleteToast(false)}
          delay={3000}
          autohide
          style={{
            backgroundColor: '#dc3545',
            color: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Toast.Header
            style={{
              backgroundColor: '#c82333',
              color: '#fff',
              borderRadius: '8px 8px 0 0',
            }}
          >
            <strong className="me-auto">Deleted</strong>
          </Toast.Header>
          <Toast.Body>Item deleted successfully!</Toast.Body>
        </Toast>

        {/* Toast Notification for Edit */}
        <Toast
          show={showEditToast}
          onClose={() => setShowEditToast(false)}
          delay={3000}
          autohide
          style={{
            backgroundColor: '#28a745',
            color: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginTop: '10px', // Space between the two toasts
          }}
        >
          <Toast.Header
            style={{
              backgroundColor: '#218838',
              color: '#fff',
              borderRadius: '8px 8px 0 0',
            }}
          >
            <strong className="me-auto">Saved</strong>
          </Toast.Header>
          <Toast.Body>Item edited successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default Dashboard;
