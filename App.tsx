import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import PDFExample from './PDFExample';
import Icontest from './Testfiles/Icontest';

const App = () => {
  return (
    <SafeAreaView>
      <Icontest />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
