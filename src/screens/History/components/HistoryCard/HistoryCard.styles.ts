import {
  colors,
  radius,
  shadows,
  spacing,
  typography,
} from '@/theme';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.small,
  },

  header: {
    alignItems: 'flex-end',
    marginBottom: spacing.md,
  },

  content: {
    flex: 1,
  },

  label: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  originalText: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },

  correctedText: {
    ...typography.body,
    color: colors.success,
  },

  dateText: {
    ...typography.caption,
    color: colors.textMuted,
  },
});