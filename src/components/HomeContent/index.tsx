import { MdOutlineMonitor } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, LeftContainer, RightContainer } from './styles';
import { useTheme } from '../../context/theme';

export default function HomeContent() {
  const { theme } = useTheme();

  return (
    <Container>
      <LeftContainer variation={theme}>
        <h3>John Doe</h3>
        <h1>Full-Stack Developer</h1>
        <p>Lorem impsum</p>
        <Link to="https://linkedin.com/in/davipatricio/">Contate-me</Link>
      </LeftContainer>

      <RightContainer>
        <MdOutlineMonitor />
      </RightContainer>
    </Container>
  );
}
