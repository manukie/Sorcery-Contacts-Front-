import styled from "styled-components";

export const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center; 
   gap: 1rem;
   padding: 30px;
   border: 2px solid var(--color-blue-901);
   border-radius: 2rem;
   background-color: var(--color-blue-200);
   width: 100%;
   max-width: 550px;
   margin: 0 auto;
   margin-top: 100px;

   h3 {
      margin-bottom: 10px;
      font-weight: 500;
   }

   input, button {
      height: 48px;
      width: 100%; 
      max-width: 400px; 
      padding: 8px; 
   }

   button {
      margin-top: 16px; 
   }
`;
