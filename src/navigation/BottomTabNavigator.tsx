import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import React from 'react';
import { BottomTabParamList } from './types';
import CheckScreen from '@/screens/Check/CheckScreen';
import HistoryScreen from '@/screens/History/HistoryScreen';
import SettingsScreen from '@/screens/Settings/SettingsScreen';
import { TabBarIcon } from '@/components/navigation';
import { History, Home, Settings } from 'lucide-react-native';
import { colors } from '@/theme';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
      }}
    >
      <Tab.Screen
        name='Check'
        component={CheckScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon
              icon={Home}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name='History'
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon
              icon={History}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon
              icon={Settings}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
};

export default BottomTabNavigator;