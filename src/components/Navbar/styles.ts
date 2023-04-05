import styled from '@emotion/styled';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};

  padding: 15px 30px;

  height: 70px;
  width: 100%;

  > nav:first-child {
    svg {
      display: none;
    }

    @media (max-width: 768px) {
      svg {
        display: block;
      }

      > a {
        display: none;
      }
    }

    > a {
      color: ${({ theme }) => theme.text.primary};
      text-decoration: none;
      font-family: 'JetBrains Mono', monospace, sans-serif;
      font-size: 1.3rem;

      &:hover {
        color: ${({ theme }) => theme.text.secondary};
      }
    }

    /* Set margin-left to 25px to all a but not the first */
    > a + a {
      margin-left: 25px;
    }
  }

  svg {
    color: ${({ theme }) => theme.text.primary};
    cursor: pointer;
    font-size: 2rem;

    &:hover {
      color: ${({ theme }) => theme.text.secondary};
    }
  }
`;
