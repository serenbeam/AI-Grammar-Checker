import { colors, spacing, typography } from "@/theme";
import { Text, View } from "react-native";

interface EmptyStateProps {
  message: string;
}

export function EmptyState({
  message,
}: EmptyStateProps) {
  return (
    <View
      style={{
        paddingVertical: spacing.xl,
        alignItems: 'center'
      }}
    >
      <Text
        style={{
          ...typography.body,
          color: colors.textSecondary,
          textAlign: 'center'
        }}
      >
        {message}
      </Text>
    </View>
  );
}