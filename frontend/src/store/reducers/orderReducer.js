
import { createReducer } from '@reduxjs/toolkit';
import { setOrders, addOrder, removeOrder, updateOrder } from '../actions/orderAction';

const initialState = [];

const orderReducer = createReducer(initialState, {
  [setOrders]: (state, action) => action.payload,
  [addOrder]: (state, action) => {
    state.push(action.payload);
  },
  [removeOrder]: (state, action) => {
    return state.filter(order => order.id !== action.payload);
  },
  [updateOrder]: (state, action) => {
    const { id, data } = action.payload;
    const index = state.findIndex(order => order.id === id);
    if (index !== -1) {
      state[index] = { ...state[index], ...data };
    }
  },
});

export default orderReducer;
