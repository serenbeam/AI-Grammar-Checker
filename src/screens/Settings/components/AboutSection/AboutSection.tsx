import React from 'react';
import { SectionHeader } from '@/components';
import { SettingItem } from '../SettingItem';
import { StyleSheet, View } from 'react-native';
import { colors, radius, shadows } from '@/theme';

export function AboutSection() {
  return (
    <>
      <SectionHeader title='About'/>

      <View style={styles.card}>
        <SettingItem
          type='navigation'
          title='About App'
          onPress={() => {
            console.log('About App screen coming soon')
          }}
        />

        <SettingItem
          type='navigation'
          title='Privacy Policy'
          onPress={() => {
            console.log('About App screen coming soon')
          }}
        />

        <SettingItem
          type='navigation'
          title='Terms of Service'
          onPress={() => {
            console.log('Terms of service screen coming soon')
          }}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    overflow: 'hidden',
    ...shadows.small
  }
});