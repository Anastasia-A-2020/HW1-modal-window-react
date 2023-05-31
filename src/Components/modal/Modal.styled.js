import styled from "styled-components";

const Container = styled.div`
  position: relative;
  border: 2px solid brown;
  border-radius: 4px;
  padding: 80px 15px 15px;
  z-index: 100;
  background-color: brown;
  color: white;
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: #fa8072;

  & Button {
    position: absolute;
    margin: 0;
    top: 5px;
    right: 5px;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 250ms ease-in-out;

    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }
`;

export { Container, Inner };
