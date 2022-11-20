import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  list-style-type: none;
  font-size: 20px;
  
  
  font-weight: 500;
  :hover {
    color: #1c8591;
  }
`

export const StyledLi = styled.li`

margin: 10px 0;
`
