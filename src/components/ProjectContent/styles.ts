import styled from '@emotion/styled';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  margin-top: 50px;
  padding-bottom: 50px;
  
  /* Navbar & footer have 70px of height */
  min-height: calc(100vh - 70px - 70px);

  @media (max-width: 768px) {
    padding: 20px 20px;
  }

  > h1,
  h3 {
    font-family: 'JetBrains Mono', monospace, sans-serif;
    text-align: center;
  }

  > h1 {
    font-size: 2.2rem;
    font-weight: bold;
  }
`;

export const ProjectContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  align-items: flex-start;
  justify-content: center;

  margin-top: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
