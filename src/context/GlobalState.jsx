import React, { createContext, useReducer } from 'react';
import apiClient from '../services/api';

import AppReducer from './AppReducer';

const initialState = { 
  transactions: [],
  error: null,
  loading: true, 
};

const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getTransactions = async () => {
    try {
      apiClient.get('/expense')
        .then(response => {
          dispatch({
            type: 'GET_TRANSACTIONS',
            payload: response.data
          });
        });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error
      });
    }
  };

  const addTransaction = async (transaction) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await apiClient.post('expense', transaction, config);

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await apiClient.delete(`/expense/${id}`);

      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      }); 
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error
      });
    }
  };

  return (
    <GlobalContext.Provider value={{ 
      transactions: state.transactions,
      deleteTransaction,
      addTransaction,
      getTransactions,
      loading: state.loading,
      error: state.error
    }}>
      {children}
    </GlobalContext.Provider>
  )
};

export {
  GlobalContext,
  GlobalProvider,
};