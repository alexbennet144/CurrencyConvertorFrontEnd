// src/redux/currencySlice.js
import { createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    fromCurrency: 'USD',
    toCurrency: 'INR',
    amount: 1,
    result: null,
    errorMessage:''
  },
  reducers: {
    setFromCurrency: (state, action) => {
      state.fromCurrency = action.payload;
    },
    setToCurrency: (state, action) => {
      state.toCurrency = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setError: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  setFromCurrency,
  setToCurrency,
  setAmount,
  setResult,
  setError
} = currencySlice.actions;

export default currencySlice.reducer;
