import { colors, radius, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        minHeight: 48,
        paddingHorizontal: spacing.md,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: radius.lg,
    },

    primaryContainer: {
        backgroundColor: colors.primary
    },

    secondaryContainer: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border
    },

    disabled: {
        opacity: 0.5
    },

    title: {
        ...typography.body,
        fontWeight: '600',
    },

    primaryTitle: {
        color: colors.white,
    },

    secondaryTitle: {
        color: colors.textPrimary
    }

})