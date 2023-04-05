export default function getSystemTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)');

  if (prefersDark.matches) return 'dark';
  if (prefersLight.matches) return 'light';

  return 'dark';
}
