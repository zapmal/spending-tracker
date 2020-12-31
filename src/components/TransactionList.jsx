import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { GlobalContext } from '../context/GlobalState';

import MidHeader from './shared/MidHeader';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
`;

const ListItem = styled.li`
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12) 0 1px 2px rgba(0,0,0,0.24);
  color: ${props => props.color};
  border-right: 5px solid ${props => props.color}; 
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;

  &:hover button {
    opacity: 1;
  }
`;

const DeleteButton = styled.button`
  cursor: pointer;
  background-color: #e74c3c;
  border: 0;
  border-radius: 15px;
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  padding: 5px 9px;
  position: absolute;
  top: 50%;
  left: -2%;
  transform: translate(-100%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;

  &:focus {
    outline: none;
  }
`;

const TransactionList = () => {
  const { 
    transactions, 
    getTransactions, 
    loading, 
    error 
  } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);

  if (error) return <MidHeader>There was an error.</MidHeader>

  return (
    <>
    {loading ? (
      <MidHeader>Loading...</MidHeader>
    ) : (
      <>
        <MidHeader>History</MidHeader>
        <List>
          {transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </List>
      </>
    )
    }
    </>
  )
};

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const color = transaction.amount < 0 ? '#c0392b' : '#2ecc71';
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <ListItem color={color}>
      {transaction.name} <span>{sign}{Math.abs(transaction.amount)}</span>
      <DeleteButton onClick={() => deleteTransaction(transaction.id)}>x</DeleteButton>
    </ListItem>
  );
};

export default TransactionList;
