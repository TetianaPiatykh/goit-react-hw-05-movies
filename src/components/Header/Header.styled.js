import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
//   display: flex;
  align-items: center;
//   justify-content: space-between;
  gap: 22px;
  padding: 8px 0;
  margin-bottom: 16px;
  

  > nav {
    display: flex;
    border-bottom: 1px solid #053a4c;
    
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin: 10px 15px;
 

  :hover {
    color: white;
    background-color: #1c8591;
  }

  &.active {
    color: white;
    background-color: #1c8591;
  }
`;
