import styled, { css } from "styled-components";

interface HeadlineStylesProps {
  fontSize?: "big" | "medium" | "small";
  fontWeight?: "high" | "med" | "low";
}

const headlineStyles = (props: HeadlineStylesProps) => css`
  font-family: var(--Font-Primary);
  font-size: ${props.fontSize === "big" ? "2rem" : "1.375rem"};
  font-weight: 700;
  color: var(--color-gray-800);

  ${props.fontSize === "big" &&
  css`
    font-size: clamp(1.5rem, 80%, 2.5rem);
  `}

  ${props.fontSize === "medium" &&
  css`
    font-size: clamp(1.25rem, 80%, 2rem);
  `}

  ${props.fontSize === "small" &&
  css`
    font-size: clamp(1rem, 80%, 1.75rem);
  `}

  ${props.fontWeight === "high" &&
  css`
    font-weight: 700;
  `}

  ${props.fontWeight === "med" &&
  css`
    font-weight: 500;
  `}

  ${props.fontWeight === "low" &&
  css`
    font-weight: 50;
  `}
`;

export const StyledHeadline1 = styled.h1<HeadlineStylesProps>`
  ${(props) => headlineStyles(props)};
`;

export const StyledHeadline2 = styled.h2<HeadlineStylesProps>`
  ${(props) => headlineStyles(props)};
`;

export const StyledHeadline3 = styled.h3<HeadlineStylesProps>`
  ${(props) => headlineStyles(props)};
`;
