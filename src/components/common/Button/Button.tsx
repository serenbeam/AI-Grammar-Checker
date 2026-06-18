import { ActivityIndicator, TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "./Button.types";
import { styles } from "./Button.styles";

export function Button({
  title,
  onPress,
  disabled= false,
  loading = false
}: ButtonProps) {

  const isDIsabled = disabled || loading;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.container,
        disabled && styles.disabled
      ]}
      onPress={onPress}
      disabled={isDIsabled}
    >
      {loading ? (
        <ActivityIndicator/>
      ): (
        <Text style={styles.title}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}