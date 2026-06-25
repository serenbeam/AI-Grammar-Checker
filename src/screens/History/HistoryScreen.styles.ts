import { colors, radius, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroud,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.lg
  },

  title: {
    ...typography.h3,
    color: colors.textPrimary,
    textAlign: 'center',
    marginVertical: spacing.xl
  }
});