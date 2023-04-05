import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function MobileMenu() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/">Projects</Link>
      <Link to="/">Stack</Link>
    </Container>
  );
}