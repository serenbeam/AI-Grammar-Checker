import { colors, radius, shadows, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,

    padding: spacing.md,

    borderRadius: radius.md,

    ...shadows.small,
  },

  title: {
    ...typography.h3,

    color: colors.textPrimary,

    marginBottom: spacing.sm
  },

  content: {
    ...typography.body,

    color: colors.textSecondary,
  },
});