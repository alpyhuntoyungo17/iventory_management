import { createAction } from '@reduxjs/toolkit';

// Define action types
export const setItems = createAction('items/setItems');
export const addItem = createAction('items/addItem');
export const removeItem = createAction('items/removeItem');
export const updateItem = createAction('items/updateItem');

// Thunk actions for asynchronous operations
export const fetchItems = () => async dispatch => {
  try {
    const response = await fetch('/api/items');
    const data = await response.json();
    dispatch(setItems(data));
  } catch (error) {
    console.error('Failed to fetch items', error);
  }
};

export const createItem = itemData => async dispatch => {
  try {
    const response = await fetch('/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(itemData),
    });
    const newItem = await response.json();
    dispatch(addItem(newItem));
  } catch (error) {
    console.error('Failed to create item', error);
  }
};

export const deleteItem = id => async dispatch => {
  try {
    await fetch(`/api/items/${id}`, { method: 'DELETE' });
    dispatch(removeItem(id));
  } catch (error) {
    console.error('Failed to delete item', error);
  }
};

export const editItem = (id, itemData) => async dispatch => {
  try {
    const response = await fetch(`/api/items/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(itemData),
    });
    const updatedItem = await response.json();
    dispatch(updateItem({ id, data: updatedItem }));
  } catch (error) {
    console.error('Failed to update item', error);
  }
};

