import { StyleSheet, View } from 'react-native'
import React from 'react'
import { spacing } from '@/theme'
import { ActionButtonsProps } from '../../CheckScreen.types';
import { Button } from '@/components';

export function ActionButtons({
  loading,
  onCheck,
  onClear
}: ActionButtonsProps) {
  return (
    <View >
      <Button
        title='Check Grammar'
        style={styles.button}
        onPress={onCheck}
        loading={loading}
      />

      <Button
        title='Clear'
        variant='secondary'
        style={styles.button}
        onPress={onClear}
        disabled={loading}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing.md
  },
  button: {
    marginBottom: 12
  }
});
