import styled from 'styled-components';

const AppHeader = styled.h2`
  display: flex;
  justify-content: center;
  letter-spacing: 2px;
`;

const Header = () => {
  return <AppHeader>Spending Tracker</AppHeader>
};

export default Header;