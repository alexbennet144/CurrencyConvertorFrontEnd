// src/components/CurrencyConverter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFromCurrency, setToCurrency, setAmount, setResult, setError } from '../redux/currencySlice';
import axios from 'axios';

const CurrencyConverter = () => {
  const dispatch = useDispatch();
  const { fromCurrency, toCurrency, amount, result, errorMessage } = useSelector((state) => state.currency);

  const handleConvert = () => {
    axios
      .get(`http://localhost:8082/myapp/conversion/convert`, {
        params: {
          fromCurrency,
          toCurrency,
          amount,
        },
      })
      .then((response) => {
        dispatch(setError(''));
        dispatch(setResult(response.data));
      })
      .catch((error) => {
        dispatch(setResult(''));
        console.log(error);
        dispatch(setError(error.response.data.message));
      });
  };
  

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label>From Currency:</label>
        <select
          value={fromCurrency}
          onChange={(e) => dispatch(setFromCurrency(e.target.value))}
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <div>
        <label>To Currency:</label>
        <select
          value={toCurrency}
          onChange={(e) => dispatch(setToCurrency(e.target.value))}
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => dispatch(setAmount(e.target.value))}
        />
      </div>
      <button onClick={handleConvert}>Convert</button>
      {result && <p className="result-paragraph">Result: {result}</p>}

      {errorMessage && <p className="error-paragraph">Error: {errorMessage}</p>}
    </div>
  );
};

export default CurrencyConverter;
