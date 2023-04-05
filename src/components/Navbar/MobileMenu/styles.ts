import styled from '@emotion/styled';

export const Container = styled.nav`
  position: fixed;
  top: 70px;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 15px;
  padding: 30px 30px;

  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(10px);

  height: calc(100vh - 120px);
  width: 100vw;

  > a {
    color: ${({ theme }) => theme.text.primary};
    text-decoration: none;
    font-family: 'JetBrains Mono', monospace, sans-serif;
    font-size: 2rem;
  }
`;