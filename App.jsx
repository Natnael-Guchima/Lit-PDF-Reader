import React from 'react';
import {StyleSheet} from 'react-native';

import Screen from './App/components/Screen';

const App = () => {
  return <Screen style={styles.screen} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default App;
