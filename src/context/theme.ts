import { create } from 'zustand';
import getSystemTheme from '../utils/preferredTheme';

export interface ThemeState {
  theme: 'light' | 'dark';
  setTheme: (theme: ThemeState['theme']) => void;
}

export const useTheme = create<ThemeState>((set) => ({
  theme: getSystemTheme(),
  setTheme: (theme) => set({ theme }),
}));
