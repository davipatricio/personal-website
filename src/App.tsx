import { ThemeProvider } from '@emotion/react';
import { useTheme } from './context/theme';
import { darkTheme } from './styles/theme/dark';
import { lightTheme } from './styles/theme/light';
import { GlobalStyles } from './styles/GlobalStyles';

function App({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />

      {children}
    </ThemeProvider>
  );
}

export default App;
