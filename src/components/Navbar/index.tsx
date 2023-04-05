import { useTheme } from '../../context/theme';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import {
  MdOutlineWbSunny,
  MdDarkMode,
  MdMenuOpen,
  MdMenu,
} from 'react-icons/md';
import { useCallback, useState } from 'react';
import MobileMenu from './MobileMenu';
import { Global } from '@emotion/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const ThemeSwitcher = theme === 'light' ? MdOutlineWbSunny : MdDarkMode;
  const MenuIcon = isMenuOpen ? MdMenuOpen : MdMenu;

  const handleThemeSwitch = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <Container>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/stack">Stack</Link>
        <MenuIcon onClick={handleMenuToggle} />
      </nav>

      <ThemeSwitcher
        onClick={handleThemeSwitch}
        onKeyDown={(e) => e.key === 'Enter' && handleThemeSwitch()}
        tabIndex={0}
        role="button"
      />

      {isMenuOpen && (
        <>
          <MobileMenu />
          <Global styles={{ body: { overflow: 'hidden' } }} />
        </>
      )}
    </Container>
  );
}
