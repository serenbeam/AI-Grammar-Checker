import { View, Text } from 'react-native';
import React from 'react';
import { SectionHeader } from '@/components';
import { useTheme } from '@/hooks';
import { SettingItem } from '../SettingItem';

const THEME_LABEL = {
  system: 'System',
  light: 'Light',
  dark: 'Dark',
};

export function ThemeSection() {
  const { theme } = useTheme();
  return (
    <>
      <SectionHeader title='General'/>

      <SettingItem
        type='navigation'
        title='Language'
        value='English (US)'
        onPress={() => console.log('language screen coming soon')}
      />

      <SettingItem
        type='navigation'
        title='Theme'
        value={THEME_LABEL[theme]}
        onPress={() => console.log('theme screen coming soon')}
      />

      <SettingItem
        type='switch'
        title='Notifications'
        switchValue={true}
        onSwitchChange={() => console.log('NOtifications settings coming soon')}
      />
    </>
  )
}