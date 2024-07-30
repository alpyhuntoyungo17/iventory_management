import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import itemReducer from './slices/itemSlice';
import orderReducer from './slices/orderSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    users: userReducer,
    items: itemReducer,
    orders: orderReducer,
  },
});

export default store;

