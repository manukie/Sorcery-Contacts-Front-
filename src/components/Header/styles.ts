import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0px 15px 15px -15px rgba(0, 0, 0, 0.15);
  background-color: var(--color-blue-901);

  .flexBox {
    display: flex;
    align-items: center;
    justify-content: center; 
    height: 70px;
  }

  img {
    max-height: 100%; 
    max-width: 100%; 
  }
`;
