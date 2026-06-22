import { colors, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.backgroud
  },

  contentContainer: {
    padding: spacing.md,
    gap: spacing.xl
  },

  header: {
    gap: spacing.sm
  },

  wrapperTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5
  },

  colorTitle: {
    ...typography.h2,
    color: colors.primary
  },

  title: {
    ...typography.h2,
    color: colors.textPrimary,
  },

  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center'
  }
})