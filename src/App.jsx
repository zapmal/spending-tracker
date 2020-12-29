import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import GlobalStyle from './components/GlobalStyle';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

const Wrapper = styled.div`
  border: 2px solid #ccc;
  border-radius: 15px;
  padding: 30px 50px;
  margin: 30px auto;
  width: 350px;
  
  @media (max-width: 320px) {
    .container {
      width: 300px;
    }
  }
`;

function App() {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </Wrapper>
    </GlobalProvider>
  );
}

export default App;
