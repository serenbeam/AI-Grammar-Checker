import { colors, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    minHeight: 56,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderBottomColor: colors.border
  },

  title: {
    color: colors.textPrimary,
    ...typography.body
  },

  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm
  },

  value: {
    color: colors.textSecondary,
    ...typography.bodySmall
  }
});