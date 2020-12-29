import React, { useContext } from 'react'
import styled from 'styled-components';

import { GlobalContext } from '../context/GlobalState';

import SmallHeader from './shared/SmallHeader';

const BigHeader = styled.h1`
  letter-spacing: 1px;
  margin: 0;
`;

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const reducer = (accumulator, { amount }) => accumulator + amount;
  const balance = transactions.reduce(reducer, 0).toFixed(2);

  return (
    <>
      <SmallHeader>Your Balance</SmallHeader>
      <BigHeader>${balance}</BigHeader>
    </>
  )
};

export default Balance;