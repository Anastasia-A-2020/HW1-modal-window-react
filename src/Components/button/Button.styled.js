import styled from "styled-components";

const Btn = styled.button`
  margin: 15px;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export { Btn };
