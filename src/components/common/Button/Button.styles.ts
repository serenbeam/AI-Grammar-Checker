import { colors, radius, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        minHeight: 48,
        paddingHorizontal: spacing.md,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: radius.lg,
    },
    disabled: {
        opacity: 0.5
    },
    title: {
        ...typography.body,
        fontWeight: '600',
        color: colors.white
    }
})