import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SectionHeader } from '@/components';

const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <SectionHeader title="Settings" />
      <Text>SettingsScreen</Text>
    </SafeAreaView>
  )
};

export default SettingsScreen;