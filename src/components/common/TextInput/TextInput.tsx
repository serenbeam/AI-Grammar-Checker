import { styles } from "./TextInput.styles";
import { TextInputProps } from "./TextInput.types";
import { TextInput as RNTextInput } from "react-native";

export function TextInput(props: TextInputProps) {
  return (
    <RNTextInput
      multiline
      style={styles.input}
      {...props}
      />
  )
}