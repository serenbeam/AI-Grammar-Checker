import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>AI Grammar Checker</Text>
      <Text style={styles.subTitle}>Project setup completed succesfully</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC'
  },
  title: {
    fontSize: 30,
    fontWeight: '700'
  },
  subTitle: {
    marginTop: 12,
    fontSize: 16,
    color: '#64748B'
  }
})

export default App;