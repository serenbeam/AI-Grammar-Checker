import { Text, View } from "react-native";
import { styles } from "./ResultCard.styles";

interface ResultCardProps {
  result: string;
};

export function ResultCard({
  result,
}: ResultCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Corrected Text
      </Text>

      <Text style={styles.content}>
        {result}
      </Text>
    </View>
  );
}