// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './redux/currencySlice';

const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
});

export default store;
