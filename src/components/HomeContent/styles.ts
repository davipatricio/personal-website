import styled from '@emotion/styled';
import { ThemeState } from '../../context/theme';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 300px;

  /* Navbar & footer have 70px of height */
  height: calc(100vh - 70px - 70px);
`;

interface LeftContainerProps {
  variation: ThemeState['theme'];
}

export const LeftContainer = styled.div<LeftContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > p,
  > a {
    font-family: 'JetBrains Mono', monospace, sans-serif;
  }

  > h1 {
    color: transparent;
    background-image: ${({ variation }) =>
    variation === 'dark'
      ? 'linear-gradient(90deg, #ffc300 2.01%, #fadb79 100%)'
      : 'linear-gradient(90deg, #3916C7 2.01%, #1F306D 100%)'};
    background-clip: text;
    font-weight: 800;
    user-select: none;
  }

  > h3 {
    color: ${({ theme }) => theme.text.primary};
    font-size: 2rem;
    user-select: none;
  }

  > p {
    color: ${({ theme }) => theme.text.primary};
    font-size: 1.3rem;
  }

  /* Contact me button */
  > a {
    color: ${({ theme }) => theme.text.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    padding: 10px 20px;
    border-radius: 50px;
    margin-top: 30px;

    font-size: 1.3rem;
  }
`;

export const RightContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  > svg {
    color: ${({ theme }) => theme.text.primary};
    height: 350px;
    width: 350px;
  }
`;
