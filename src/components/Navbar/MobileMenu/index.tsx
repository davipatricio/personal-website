import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function MobileMenu() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/stack">Stack</Link>
    </Container>
  );
}