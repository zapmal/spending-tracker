import React, { useContext } from 'react';
import styled from 'styled-components';

import { GlobalContext } from '../context/GlobalState';

import SmallHeader from './shared/SmallHeader';

const IncomeExpensesWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12) 0 1px 2px rgba(0,0,0,0.24);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  & > div {
    flex: 1;
    text-align: center;
  }

  & > div:first-of-type {
    border-right: 1px solid #dedede;
  }
`;

const MoneyDisplay = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
  color: ${props => props.color};
`;

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => parseInt(transaction.amount));
  const reducer = (accumulator, amount) => accumulator + amount;

  const income = amounts 
    .filter(income => income > 0)
    .reduce(reducer, 0)
    .toFixed(2);
  
  const expense = amounts
    .filter(expense => expense < 0)
    .reduce(reducer, 0) * -1
    .toFixed(2);
  
  return (
    <IncomeExpensesWrapper>
      <div>
        <SmallHeader>Income</SmallHeader>
        <MoneyDisplay color='#2ecc71'>+${income}</MoneyDisplay>
      </div>

      <div>
        <SmallHeader>Expense</SmallHeader>
        <MoneyDisplay color='#c0392b'>-${expense}</MoneyDisplay>
      </div>
    </IncomeExpensesWrapper>
  );
}

export default IncomeExpenses;