import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  border-radius: 6px;
  background-color: #edf0f1;
  gap: 4px;
  padding: 8px 16px;
  color: black;
  text-decoration: none;
  // border-bottom: 1px solid black;
  font-weight: 500;
  text-transform: uppercase;
  margin: 15px 15px;

  :hover {
    color: white;
    background-color: #1c8591;
  }
`;
