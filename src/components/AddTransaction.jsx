import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { GlobalContext } from '../context/GlobalState';

import MidHeader from './shared/MidHeader';

const Label = styled.label`
  display: inline-block;
  margin: 10px 0;
`;

const Input = styled.input`
  border: 1px solid #dedede;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 100%;
`;

const AddButton = styled.button`
  cursor: pointer;
  background-color: #9c88ff; 
  box-shadow: 0 1px 3px rgba(0,0,0,0.12) 0 1px 2px rgba(0,0,0,0.24);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;

  &:focus {
    outline: 0;
  }
`;

const AddTransactions = () => {
  const [values, setValues] = useState({ text: '', amount: 0 });
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      name: values.name,
      amount: parseInt(values.amount)
    };
    addTransaction(newTransaction);
  };
  
  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <>
      <MidHeader>Add new Transaction</MidHeader>
      <form onSubmit={onSubmit}>
        <div>
          <Label htmlFor='name'>Text</Label>
          <Input type='text' id='name' name='name' onChange={onChange} />
        </div>
        <div>
          <Label htmlFor='amount'>Amount <br/> (negative - expense, positive - income)</Label>
          <Input type='number' defaultValue='0' id='amount' name='amount' onChange={onChange} />
        </div>
        <AddButton>Add transaction</AddButton>
     </form>
    </>
  );
};

export default AddTransactions;