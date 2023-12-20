import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  form {
    width: 100%;
    max-width: 400px;

    h3,
    label {
      margin-bottom: 10px;
    }

    input,
    button {
      margin-bottom: 15px;
      width: 100%; 
    }

    button {
      margin-bottom: 0; 
    }

    h3 {
      color: var(--color-gray-400)
    }
  }
`;
