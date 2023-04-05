import styled from '@emotion/styled';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid ${({ theme }) => theme.colors.secondary};

  padding: 15px 30px;

  height: 70px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;

    & > span {
      text-align: center;
    }
  }

  > span {
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const LinksContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 25px;

  > a svg {
    cursor: pointer;
    color: ${({ theme }) => theme.text.primary};
    font-size: 2rem;

    &:hover {
      color: ${({ theme }) => theme.text.secondary};
    }
  }
`;
