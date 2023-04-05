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

  /* Set background to 1% white */
  background: rgba(255, 255, 255, 0.01);

  /* Make background opaque blur */
  backdrop-filter: blur(10px);

  height: calc(100vh - 70px);
  width: 100vw;

  > a {
    color: ${({ theme }) => theme.text.primary};
    text-decoration: none;
    font-family: 'JetBrains Mono', monospace, sans-serif;
    font-size: 2rem;
  }
`;