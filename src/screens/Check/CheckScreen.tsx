import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SectionHeader } from '@/components';
import { ScreenContainer } from '@/components/navigation/SreenContainer';

const CheckScreen = () => {
  return (
    <ScreenContainer>
      <SafeAreaView>
        <SectionHeader title="Recent Results" />
        <Text>CheckScreen</Text>
      </SafeAreaView>
    </ScreenContainer>
  )
};

export default CheckScreen;