import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { HistoryItem } from '@/types'
import { HistoryCard } from '../HistoryCard';

interface HistoryListProps {
  histories: HistoryItem[];
}

export function HistoryList({
  histories
}: HistoryListProps) {
  return (
    <FlatList
      data={histories}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <HistoryCard item={item}/>
      )}
      showsVerticalScrollIndicator={false}
    />
  )
}