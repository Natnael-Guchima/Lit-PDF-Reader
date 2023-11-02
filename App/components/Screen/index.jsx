import React from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';

import colors from '../../config/colors';
import NavigationBar from '../NavigationBar';
import BookThumbnail from '../BookThumbnail';

function Screen({props}) {
  return (
    <SafeAreaView style={styles.screen}>
      <NavigationBar />
      <BookThumbnail />
      <BookThumbnail
        uri={
          'https://kolegite.com/EE_library/books_and_lectures/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8%D1%80%D0%B0%D0%BD%D0%B5/Clean%20Code%20-%20%20A%20Handbook%20of%20Agile%20Software%20Craftsmanship.pdf'
        }
      />
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
