import React from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';

import colors from '../../config/colors';
import NavigationBar from '../NavigationBar';

function Screen({props}) {
  return (
    <SafeAreaView style={styles.screen}>
      <NavigationBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.gray,
  },
});

export default Screen;
