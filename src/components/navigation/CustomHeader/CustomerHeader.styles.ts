import { colors, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: spacing.md,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  side: {
    width: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    flex: 1,
    textAlign: 'center',
    color: colors.textPrimary,
    ...typography.body
  }
})