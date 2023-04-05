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
  width: 100%;

  svg {
    color: #fff;
    background-color: #232340;
    padding: 10px;
    font-size: 1.5rem;
    border-radius: 10px;
    height: 50px;
    width: 50px;
  }

  span {
    font-size: 1.2rem;

    &.experience {
      color: ${({ theme }) => theme.text.secondary};
      margin-left: auto;
    }
  }
`;

export const CardContent = styled.article`
  > p {
    color: ${({ theme }) => theme.text.secondary};
    font-weight: bold;
    margin-bottom: 5px;
  }

  > span {
    color: ${({ theme }) => theme.text.primary};
    font-size: 17px;
    word-break: break-word;
  }
`;
