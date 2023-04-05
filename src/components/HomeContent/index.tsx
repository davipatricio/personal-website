import { MdOutlineMonitor } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, LeftContainer, RightContainer } from './styles';
import { useTheme } from '../../context/theme';

export default function HomeContent() {
  const { theme } = useTheme();

  return (
    <Container>
      <LeftContainer variation={theme}>
        <h3>Davi Patricio</h3>
        <h1>Full-Stack Developer</h1>
        <p>Engeheiro de Software Pleno em São Paulo, Brasil.</p>
        <Link to="https://linkedin.com/in/davipatricio/">Contate-me</Link>
      </LeftContainer>

      <RightContainer>
        <MdOutlineMonitor />
      </RightContainer>
    </Container>
  );
}
