import { colors } from "@/theme";
import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <ActivityIndicator
        size={'large'}
        color={colors.primary}
      />
    </View>
  )
}