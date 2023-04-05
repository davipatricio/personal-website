import { useTheme } from '../../context/theme';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { MdOutlineWbSunny, MdDarkMode } from 'react-icons/md';
import { useCallback } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const ThemeSwitcher = theme === 'light' ? MdOutlineWbSunny : MdDarkMode;

  const handleThemeSwitch = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  return (
    <Container>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Stack</Link>
      </nav>

      <ThemeSwitcher onClick={handleThemeSwitch} onKeyDown={(e) => e.key === 'Enter' && handleThemeSwitch()} tabIndex={0} role="button" />
    </Container>
  );
}