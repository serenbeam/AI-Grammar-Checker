import { create } from 'zustand';

interface SettingsState {
  darkMode: boolean;

  setDarkMode: (value: boolean) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  darkMode: false,

  setDarkMode(value) {
    set({
      darkMode: value
    })
  },
}))