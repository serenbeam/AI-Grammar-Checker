import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { LucideIcon } from 'lucide-react-native';
import { colors, spacing } from '@/theme';

interface HeaderButtonProps {
  icon: LucideIcon;
  onPress: () => void;
  size?: number;
}

export function HeaderButton({
  icon: Icon,
  onPress,
  size = 22
}: HeaderButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        paddingHorizontal: spacing.sm
      }}
    >
      <Icon
        size={size}
        color={colors.textPrimary}
      />
    </TouchableOpacity >
  )
}