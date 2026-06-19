import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SectionHeader } from '@/components';

const HistoryScreen = () => {
  return (
    <SafeAreaView>
      <SectionHeader title="History" />
      <Text>HistoryScreen</Text>
    </SafeAreaView>
  )
};

export default HistoryScreen;