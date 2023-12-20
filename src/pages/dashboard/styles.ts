import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const Board = styled.div`
  background-color: var(--color-blue-901);
  border-radius: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactButton = styled.button`
    font-family: var(--Font-Primary);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-gray-900);
    background: var(--color-blue-200);
    width: 120px;
    height: 40px;
    border-radius: 8px;
    margin-top: 12px;
    margin-bottom: 12px;

    &:hover {
      background: var(--color-blue-100);
      color: var(--color-gray-800);
      transition: background 0.3s ease;
    }
`

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const NoContactsMessage = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: var(--color-gray-100);
  text-align: center;
  margin-bottom: 20px; 
`;
