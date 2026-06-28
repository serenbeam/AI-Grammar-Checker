import { View, Text } from 'react-native';
import React from 'react';

import { styles } from './HistoryCard.styles';
import { HistoryItem } from '@/types';

interface HistoryCardProps {
  item: HistoryItem;
}

export function HistoryCard({
  item,
}: HistoryCardProps) {
  const formattedDate = new Date(
    item.createdAt,
  ).toLocaleString(
    'en-US',
    {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    },
  );

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.dateText}>
          {formattedDate}
        </Text>
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
          style={styles.correctedText}
          numberOfLines={2}
        >
          {item.correctedText}
        </Text>
      </View>
    </View>
  );
}