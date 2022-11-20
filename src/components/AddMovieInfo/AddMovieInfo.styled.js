import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledDiv = styled.div`
  border-bottom: 1px solid #053a4c;
  // display: inline-flex;
  padding: 0 16px;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  :hover {
    color: #1c8591;
  }
`;

export const StyledUl = styled.ul`
 display: inline-flex;
 gap: 15px;
`