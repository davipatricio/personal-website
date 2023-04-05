import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;

  padding: 35px 15px;

  min-height: 200px;
  max-width: 320px;
  /* width: 320px; */

  a,
  span,
  p {
    color: ${({ theme }) => theme.text.primary};
    font-family: 'JetBrains Mono', monospace, sans-serif;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: ${({ theme }) => theme.text.secondary};
    font-size: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.text.primary};
    font-size: 1.15rem;
    font-weight: bold;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export const CardContent = styled.p`
  font-size: 17px;
  word-break: break-word;
`;

interface CardFooterProps {
  languageColor: string;
}

export const CardFooter = styled.footer<CardFooterProps>`
  &,
  > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & {
    gap: 30px;
  }

  // Language info (color, name)
  .language span.languageColor {
    display: inline-block;

    background-color: ${({ languageColor }) => languageColor};
    border-radius: 50%;
    height: 20px;
    width: 20px;
  }

  // Stars info
  .stars svg,
  .stars span {
    color: ${({ theme }) => theme.text.secondary};
  }
`;
