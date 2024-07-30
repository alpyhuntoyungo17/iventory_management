
import { createReducer } from '@reduxjs/toolkit';
import { setUsers, addUser, removeUser, updateUser } from '../actions/userAction';

const initialState = [];

const userReducer = createReducer(initialState, {
  [setUsers]: (state, action) => action.payload,
  [addUser]: (state, action) => {
    state.push(action.payload);
  },
  [removeUser]: (state, action) => {
    return state.filter(user => user.id !== action.payload);
  },
  [updateUser]: (state, action) => {
    const { id, data } = action.payload;
    const index = state.findIndex(user => user.id === id);
    if (index !== -1) {
      state[index] = { ...state[index], ...data };
    }
  },
});

export default userReducer;
