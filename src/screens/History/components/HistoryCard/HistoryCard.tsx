import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './HistoryCard.styles';
import { CircleCheck } from 'lucide-react-native';
import { colors } from '@/theme';
import { HistoryItem } from '@/types';
interface HistoryCardProps {
  item: HistoryItem;
}

export function HistoryCard({
  item
}: HistoryCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <CircleCheck
          size={20}
          color={colors.success}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>
          Original
        </Text>

        <Text 
          style={styles.originalText}
          numberOfLines={2}
        >
          {item.originalText}
        </Text>

        <Text style={styles.label}>
          Corrected
        </Text>

        <Text 
          style={styles.originalText}
          numberOfLines={2}
        >
          {item.correctedText}
        </Text>

        <Text style={styles.dateText}>
          {item?.createdAt}
        </Text>
      </View>
    </View>
  );
};