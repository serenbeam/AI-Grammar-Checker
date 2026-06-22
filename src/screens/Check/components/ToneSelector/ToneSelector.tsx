import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './ToneSelector.styles';
import { SectionHeader } from '@/components';
import { GrammarTone } from '@/types';
import { ToneSelectorProps } from '../../CheckScreen.types';

const tones: GrammarTone[] = [
  'formal',
  'casual',
  'professional',
  'friendly'
];

export function ToneSelector({
  selectedTone,
  onSelectedTone
}: ToneSelectorProps) {
  return (
    <View style={styles.container}>
      <SectionHeader title='Tone' />

      <View style={styles.optionContainer}>
        {tones.map(tone => {
          const isSelected = selectedTone === tone;
          return (
            <TouchableOpacity
              key={tone}
              style={[
                isSelected ? styles.selectedOption : styles.option,
              ]}
              onPress={() => onSelectedTone(tone)}
            >
              <Text
                style={[
                  styles.optionText,
                  isSelected && styles.selectedOptionText,
                ]}
              >
                {tone}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}