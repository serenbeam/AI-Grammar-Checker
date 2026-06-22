import { ActivityIndicator, TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "./Button.types";
import { styles } from "./Button.styles";

export function Button({
  title,
  onPress,
  disabled= false,
  loading = false,
  variant = 'primary',
  style,
}: ButtonProps) {

  const isDIsabled = disabled || loading;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.container,

        variant === 'primary'
        ? styles.primaryContainer
        : styles.secondaryContainer,

        disabled && styles.disabled,
        
        style,
      ]}
      onPress={onPress}
      disabled={isDIsabled}
    >
      {loading ? (
        <ActivityIndicator/>
      ): (
        <Text style={[
          styles.title,
          
          variant === 'primary'
          ? styles.primaryTitle
          : styles.secondaryTitle
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}