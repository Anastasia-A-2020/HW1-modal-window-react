import styled from "styled-components";

const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { BackdropWrapper };
