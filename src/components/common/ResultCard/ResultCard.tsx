import { View, Text } from 'react-native';
import { CheckCircle2 } from 'lucide-react-native';

import { colors } from '@/theme';
import { GrammarCheckReslut } from '@/types';

import { styles } from './ResultCard.styles';

interface ResultCardProps {
  result: GrammarCheckReslut;
}

export function ResultCard({
  result,
}: ResultCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.resultHeader}>
        <View style={styles.iconContainer}>
          <CheckCircle2
            size={20}
            color={colors.success}
          />
        </View>

        <Text style={styles.correctedText}>
          {result.correctedText}
        </Text>
      </View>

      {!!result.explanation && (
        <>
          <View style={styles.divider} />

          <Text style={styles.explanationTitle}>
            Explanation
          </Text>

          <Text style={styles.explanationText}>
            {result.explanation}
          </Text>
        </>
      )}
    </View>
  );
}