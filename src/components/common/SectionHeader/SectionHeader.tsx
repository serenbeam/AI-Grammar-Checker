import { colors, spacing, typography } from "@/theme";
import { Text, View } from "react-native";

interface SectionHeaderProps {
    title: string;
}

export function SectionHeader({
  title,
}: SectionHeaderProps) {
  return (
    <View
      style={{
        marginBottom: spacing.md
      }}
    >
      <Text
        style={{
          ...typography.h3,
          color: colors.textPrimary
        }}
      >
        {title}
      </Text>
    </View>
  );
}