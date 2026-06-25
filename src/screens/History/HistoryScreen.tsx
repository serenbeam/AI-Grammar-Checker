import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { EmptyState } from '@/components';
import { styles } from './HistoryScreen.styles';
import { useHistory } from '@/hooks';
import { HistoryList } from './components/HistoryList';

const HistoryScreen = () => {

  const { histories } = useHistory();

  const isEmpty = histories.length === 0;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        History
      </Text>

      {isEmpty ? (
        <EmptyState
          message={
            `No history yet\nStart checking your grammar.`
          }
        />
      ) : (
        <HistoryList histories={histories} />
      )}
    </SafeAreaView>
  )
};

export default HistoryScreen;