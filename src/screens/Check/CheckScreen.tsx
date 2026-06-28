import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScreenContainer } from '@/components/navigation/SreenContainer';
import { styles } from './CheckScreen.styles';
import { InputSection } from './components/InputSection';
import { ToneSelector } from './components/ToneSelector';
import { ActionButtons } from './components/ActionButtons';
import { ResultSection } from './components/ResultSection';
import { useGrammar } from '@/hooks';

const CheckScreen = () => {

  const {
    inputText,
    tone,
    result,
    loading,

    setInputText,
    setTone,
    checkGrammar,
    reset
  } = useGrammar();

  return (
    <ScreenContainer>
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}><View style={styles.header}>
          <View style={styles.wrapperTitle}>
            <Text style={styles.colorTitle}>O'</Text>
          <Text style={styles.title}>
            Grammar Checker
          </Text>
          </View>

          <Text style={styles.subtitle}>
            Improve your English writing with AI ✨
          </Text>
        </View>

          <InputSection
            value={inputText}
            onChangeText={setInputText}
          />

          {/* <ToneSelector
            selectedTone={tone}
            onSelectedTone={setTone}
          /> */}

          <ActionButtons
            loading={loading}
            onCheck={checkGrammar}
            onClear={reset}
          />

          <ResultSection
            loading={loading}
            result={result}
          />
        </View>
      </SafeAreaView>
    </ScreenContainer>
  )
};

export default CheckScreen;