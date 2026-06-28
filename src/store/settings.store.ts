import { ThemeMode } from '@/types';
import { create } from 'zustand';

interface SettingsState {
  theme: ThemeMode;

  setTheme: (theme: ThemeMode) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  theme: 'system',

  setTheme(theme) {
    set({
      theme,
    })
  },
}))