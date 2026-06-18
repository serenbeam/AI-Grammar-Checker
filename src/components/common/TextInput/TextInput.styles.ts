import { colors, radius, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    minHeight: 120,
    
    padding: spacing.md,
    
    backgroundColor: colors.surface,

    borderWidth: 1,
    borderColor: colors.border,

    borderRadius: radius.md,

    textAlignVertical: 'top',

    color: colors.textPrimary,

    ...typography.body
  },
});