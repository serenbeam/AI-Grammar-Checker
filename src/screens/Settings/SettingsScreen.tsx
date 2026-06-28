import { View } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './SettingsScreen.styles';
import { ThemeSection } from './components/ThemeSection/ThemeSection';
import { AboutSection } from './components/AboutSection/AboutSection';

const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.section}>
        <ThemeSection/>
      </View>

      <View style={styles.section}>
        <AboutSection/>
      </View>
    </SafeAreaView>
  )
};

export default SettingsScreen;