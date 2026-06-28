import React from 'react';
import { SectionHeader } from '@/components';
import { SettingItem } from '../SettingItem';

export function AboutSection() {
  return (
    <>
      <SectionHeader title='About'/>

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
    </>
  )
}