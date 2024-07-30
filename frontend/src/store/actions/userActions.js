
import { createAction } from '@reduxjs/toolkit';

// Define action types
export const setUsers = createAction('users/setUsers');
export const addUser = createAction('users/addUser');
export const removeUser = createAction('users/removeUser');
export const updateUser = createAction('users/updateUser');

// Thunk actions for asynchronous operations
export const fetchUsers = () => async dispatch => {
  try {
    const response = await fetch('/api/users');
    const data = await response.json();
    dispatch(setUsers(data));
  } catch (error) {
    console.error('Failed to fetch users', error);
  }
};

export const createUser = userData => async dispatch => {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    const newUser = await response.json();
    dispatch(addUser(newUser));
  } catch (error) {
    console.error('Failed to create user', error);
  }
};

export const deleteUser = id => async dispatch => {
  try {
    await fetch(`/api/users/${id}`, { method: 'DELETE' });
    dispatch(removeUser(id));
  } catch (error) {
    console.error('Failed to delete user', error);
  }
};

export const editUser = (id, userData) => async dispatch => {
  try {
    const response = await fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    const updatedUser = await response.json();
    dispatch(updateUser({ id, data: updatedUser }));
  } catch (error) {
    console.error('Failed to update user', error);
  }
};
