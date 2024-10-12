// store.jsx   เพื่อจัดการ store ของ Redux
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
