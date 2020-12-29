import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

const initialState = { transactions: [] };

const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction 
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  };

  return (
    <GlobalContext.Provider value={{ 
      transactions: state.transactions,
      deleteTransaction,
      addTransaction 
    }}>
      {children}
    </GlobalContext.Provider>
  )
};

export {
  GlobalContext,
  GlobalProvider,
};