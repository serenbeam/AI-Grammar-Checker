import { Text, View } from "react-native";
import { styles } from "./ResultCard.styles";
import { GrammarCheckReslut } from "@/types";

interface ResultCardProps {
  result: GrammarCheckReslut;
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
        {result.correctedText}
      </Text>

      {
        result?.explanation && (
          <>
            <Text style={styles.title}>
              Explanation
            </Text>

            <Text style={styles.content}>
              {result.explanation}
            </Text>
          </>
        )
      }
    </View>
  );
}