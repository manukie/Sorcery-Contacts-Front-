import styled from "styled-components";

export const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   padding: 30px;
   border: 2px solid var(--Color-Gray-2);
   width: 100%;
   max-width: 550px;
   margin: 0 auto; 
   margin-top: 100px;

   h3 {
      margin-bottom: 10px;
      font-weight: 500;
   }

   button {
      height: 48px;
   }
`;
