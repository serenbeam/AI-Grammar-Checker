import { useSettingsStore } from "@/store"

export const useTheme = () => {
  const darkMode = useSettingsStore(
    state => state.setDarkMode,
  );

  const setDarkMode = useSettingsStore(
    state => state.setDarkMode,
  );

  return {
    darkMode,
    setDarkMode
  }
}