import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;

  & Button {
    transition: transform 250ms ease-in-out;

    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }
`;

export { Container };
