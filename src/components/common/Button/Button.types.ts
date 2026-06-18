import { GestureResponderEvent } from "react-native";

export interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;

  disabled?: boolean;
  loading?: boolean;
}