import axios from 'axios';

const API_URL = 'https://66d4ed765b34bcb9ab3fbe63.mockapi.io/api/products/prodcuts';

// Fetch all items
export const fetchItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch items:', error);
    throw error;
  }
};

// Create a new item
export const createItem = async (item) => {
  try {
    const response = await axios.post(API_URL, item);
    return response.data;
  } catch (error) {
    console.error('Failed to create item:', error);
    throw error;
  }
};

// Update an existing item
export const updateItem = async (id, item) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, item);
    return response.data;
  } catch (error) {
    console.error(`Failed to update item with id ${id}:`, error);
    throw error;
  }
};

// Delete an item
export const deleteItem = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Failed to delete item with id ${id}:`, error);
    throw error;
  }
};
