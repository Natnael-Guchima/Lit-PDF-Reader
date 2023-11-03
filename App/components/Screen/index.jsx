import React from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';

import colors from '../../config/colors';
import NavigationBar from '../NavigationBar';
import BookThumbnail from '../BookThumbnail';
import BookGrid from '../../layouts/BookGrid';

function Screen({children}) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.gray,
  },
});

export default Screen;
