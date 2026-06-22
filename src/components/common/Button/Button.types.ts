import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";

type ButtonVariant = 
| 'primary'
| 'secondary';

export interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
}