import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

export const Wrapper = styled.form`
  display: inline-flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
  margin-right: 10px;
`;

export const Icon = styled(HiSearch)`
  width: 18px;
  height: 18px;
  position: absolute;
  // margin-right: 5px;
  left: 5px;
`;

export const Button = styled.button`
 position: relative;
background-color: #edf0f1;
  color: black;
  border: none;
  border-radius: 6px;
  height: 34px;
  width: 90px;
  padding: 0 15px;
  text-align: right;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  :hover:focus {
        color: white;
    background-color: #1c8591;
    height: 38px;
  }
`
