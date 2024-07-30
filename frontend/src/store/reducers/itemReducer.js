import { createReducer } from '@reduxjs/toolkit';
import { setItems, addItem, removeItem, updateItem } from '../actions/itemAction';

const initialState = [];

const itemReducer = createReducer(initialState, {
  [setItems]: (state, action) => action.payload,
  [addItem]: (state, action) => {
    state.push(action.payload);
  },
  [removeItem]: (state, action) => {
    return state.filter(item => item.id !== action.payload);
  },
  [updateItem]: (state, action) => {
    const { id, data } = action.payload;
    const index = state.findIndex(item => item.id === id);
    if (index !== -1) {
      state[index] = { ...state[index], ...data };
    }
  },
});

export default itemReducer;

