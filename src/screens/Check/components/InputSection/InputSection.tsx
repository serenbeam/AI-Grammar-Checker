import { View, Text } from 'react-native'
import React from 'react'
import { SectionHeader, TextInput } from '@/components';
import { InputSectionProps } from '../../CheckScreen.types';

export const InputSection = ({
  value,
  onChangeText
}: InputSectionProps) => {
  
  return (
    <View>
      <SectionHeader title='Your Sentence'/>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder='Type your sentence here...'
      />
    </View>
  )
};