import React from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';

function Screen({props}) {
  return <SafeAreaView style={styles.screen}></SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;
