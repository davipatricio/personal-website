import { Global, css, useTheme } from '@emotion/react';

export const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        html {
          color-scheme: dark light;
        }

        html,
        body {
          min-height: 100%;
          height: 100%;
        }

        body {
          background-color: ${theme.colors.background};
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', Helvetica, Arial, sans-serif;

          /* Add animation to all colors */
          transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
            border-color 0.2s ease-in-out;
        }
      `}
    />
  );
};
