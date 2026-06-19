import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { CustomHeaderProps } from './CustomHeader.types'
import { styles } from './CustomerHeader.styles'
import { ArrowLeft } from 'lucide-react-native'
import { colors } from '@/theme'

export function CustomHeader({
  title,
  showBackButton = false,
  onBackPress,
  leftComponent,
  rightComponent
}: CustomHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.side}>
        {leftComponent}

        {showBackButton && (

          <Pressable
            onPress={onBackPress}
            hitSlop={8}
          >
            <ArrowLeft
              size={22}
              color={colors.textPrimary}
            />
          </Pressable>
        )}
      </View>

      <Text style={styles.title}>
        {title}
      </Text>

      <View style={styles.side}>
        {rightComponent}
      </View>
    </View>
  )
}