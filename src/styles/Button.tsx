import styled from "styled-components"

export const StyledCreateButton = styled.button`
    font-family: var(--Font-Primary);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-gray-900);
    background: var(--color-blue-300);
    border-radius: 8px;

    &:hover {
    background: var(--color-blue-100);
    color: var(--color-gray-800);
    transition: background 0.3s ease;
  }
`

export const StyledDeleteButton = styled.button`
    font-family:var(--Font-Primary);
    font-size: 0.825rem;
    color: var(--color-gray-800);
    background: var(--color-blue-400);
`

export const StyledRegisterButton = styled.button`
    font-family: var(--Font-Primary);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-gray-900);
    background: var(--color-blue-600);
    width: 120px; 
    height: 40px; 
    border-radius: 8px;

    &:hover {
    background: var(--color-blue-100);
    color: var(--color-gray-800);
    transition: background 0.3s ease;
  }
`;
