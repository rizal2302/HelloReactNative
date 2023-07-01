import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Student from './src/components/Student';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Student studentName={'Abu'} />
      <Student studentName={'Ali'} />
      <Student studentName={'Rose'} />
      <Student studentName={'Bob'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
