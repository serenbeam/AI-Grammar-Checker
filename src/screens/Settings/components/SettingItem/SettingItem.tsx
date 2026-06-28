import { View, Text, TouchableOpacity, Switch } from 'react-native'
import React from 'react'
import { SettingItemProps } from '../../SettingsScreen.types'
import { styles } from './SettingItem.styles';
import { ChevronRight } from 'lucide-react-native';
import { colors } from '@/theme';

export function SettingItem({
  type,
  title,
  value,
  switchValue,
  onPress,
  onSwitchChange
}: SettingItemProps) {
  const isNavigation = type === 'navigation';
  const isSwitch = type === 'switch';

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      disabled={!isNavigation}
      onPress={onPress}
    >
      <Text style={styles.title}>
        {title}
      </Text>

      <View style={styles.rightContainer}>
        {isNavigation && (
          <>
            {value && (
              <Text style={styles.value}>
                {value}
              </Text>
            )}

            <ChevronRight
              size={18}
              color={colors.textMuted}
            />
          </>
        )}

        {isSwitch && (
          <Switch
            value={switchValue}
            onValueChange={onSwitchChange}
            trackColor={{
              false: colors.disabled,
              true: colors.primary
            }}
            thumbColor={colors.white}
          />
        )}
      </View>
    </TouchableOpacity>
  )
}