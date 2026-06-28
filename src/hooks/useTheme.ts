import { useSettingsStore } from "@/store"

export const useTheme = () => {
  const theme = useSettingsStore(
    state => state.theme,
  );

  const setTheme = useSettingsStore(
    state => state.setTheme,
  );

  return {
    theme,
    setTheme
  }
}