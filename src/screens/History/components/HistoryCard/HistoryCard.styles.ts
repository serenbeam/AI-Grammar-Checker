import { colors, radius, shadows, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.small
  },

  iconContainer: {
    marginRight: spacing.md,
    marginTop: spacing.xs
  },

  label: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.xs
  },

  content: {
    flex: 1,
  },

  originalText: {
    ...typography.body,
    color: colors.textPrimary,
    marginBottom: spacing.sm
  },

  correctedText: {
    ...typography.body,
    color: colors.success,
    marginBottom: spacing.sm
  },

  dateText: {
    ...typography.caption,
    color: colors.textSecondary
  }
})