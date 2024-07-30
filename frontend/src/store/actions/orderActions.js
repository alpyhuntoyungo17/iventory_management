
import { createAction } from '@reduxjs/toolkit';

// Define action types
export const setOrders = createAction('orders/setOrders');
export const addOrder = createAction('orders/addOrder');
export const removeOrder = createAction('orders/removeOrder');
export const updateOrder = createAction('orders/updateOrder');

// Thunk actions for asynchronous operations
export const fetchOrders = () => async dispatch => {
  try {
    const response = await fetch('/api/orders');
    const data = await response.json();
    dispatch(setOrders(data));
  } catch (error) {
    console.error('Failed to fetch orders', error);
  }
};

export const createOrder = orderData => async dispatch => {
  try {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });
    const newOrder = await response.json();
    dispatch(addOrder(newOrder));
  } catch (error) {
    console.error('Failed to create order', error);
  }
};

export const deleteOrder = id => async dispatch => {
  try {
    await fetch(`/api/orders/${id}`, { method: 'DELETE' });
    dispatch(removeOrder(id));
  } catch (error) {
    console.error('Failed to delete order', error);
  }
};

export const editOrder = (id, orderData) => async dispatch => {
  try {
    const response = await fetch(`/api/orders/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });
    const updatedOrder = await response.json();
    dispatch(updateOrder({ id,
