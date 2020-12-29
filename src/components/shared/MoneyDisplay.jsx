import styled from 'styled-components';

const MoneyDisplay = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
  color: ${props => props.color};
`;

export default MoneyDisplay;