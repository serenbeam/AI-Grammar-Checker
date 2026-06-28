import { colors, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
      ...typography.h2,
      color: colors.textPrimary,
      textAlign: 'center',
      marginTop: spacing.xl
    },
  section: {
    marginBottom: spacing.xl
  }
})