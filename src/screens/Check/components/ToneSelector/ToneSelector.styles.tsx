import { colors, radius, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: spacing.xs
  },

  optionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },

  option: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.full
  },

  selectedOption: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
    borderColor: colors.border,
    borderWidth: 1,
  },

  optionText: {
    ...typography.bodySmall,
    color: colors.textPrimary,
    textTransform: 'capitalize',
  },

  selectedOptionText: {
    ...typography.bodySmall,
    color: colors.white
  },
});