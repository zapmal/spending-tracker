import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  body {
    background-color: #f7f7f7f7;
    font-family: 'Rubik', 'Segoe UI', Helvetica;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin: 0;
  }
`; 