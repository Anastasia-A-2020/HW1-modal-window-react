import styled from "styled-components";

const Container = styled.div`
  position: relative;
  border: 2px solid teal;
  border-radius: 4px;
  padding: 15px;

  background-color: teal;
  color: white;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  & Button {
    position: absolute;
    margin: 0;
    top: 10px;
    right: 10px;
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
