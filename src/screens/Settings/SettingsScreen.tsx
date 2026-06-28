import { Text, View } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './SettingsScreen.styles';
import { ThemeSection } from './components/ThemeSection/ThemeSection';
import { AboutSection } from './components/AboutSection/AboutSection';
import { ScreenContainer } from '@/components/navigation';

const SettingsScreen = () => {
  return (
    <ScreenContainer>
      <Text style={styles.title}>
        Settings
      </Text>

    <SafeAreaView>
      <View style={styles.section}>
        <ThemeSection/>
      </View>

      <View style={styles.section}>
        <AboutSection/>
      </View>
    </SafeAreaView>
    </ScreenContainer>
  )
};

export default SettingsScreen;