import {
  colors,
  radius,
  shadows,
  spacing,
  typography,
} from '@/theme';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroud,

    padding: spacing.lg,

    borderRadius: radius.lg,

    ...shadows.small,
  },

  resultHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',

    gap: spacing.md,
  },

  iconContainer: {
    width: 33,
    height: 33,

    borderRadius: radius.full,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: colors.surface,
  },

  correctedText: {
    flex: 1,

    color: colors.success,

    ...typography.h3,
  },

  divider: {
    height: 1,

    backgroundColor: colors.border,

    marginVertical: spacing.lg,
  },

  explanationTitle: {
    color: colors.textPrimary,

    marginBottom: spacing.sm,

    ...typography.h4,
  },

  explanationText: {
    color: colors.textSecondary,

    lineHeight: 24,

    ...typography.body,
  },
});