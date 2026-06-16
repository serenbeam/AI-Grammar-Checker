import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import React from 'react';
import { BottomTabParamList } from './types';
import CheckScreen from '@/screens/Check/CheckScreen';
import HistoryScreen from '@/screens/History/HistoryScreen';
import SettingsScreen from '@/screens/Settings/SettingsScreen';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name='Check'
        component={CheckScreen}
      />
      <Tab.Screen
        name='History'
        component={HistoryScreen}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
      />
    </Tab.Navigator>
  )
};

export default BottomTabNavigator;