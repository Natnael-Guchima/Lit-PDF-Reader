import React from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../config/colors';

function NavigationBar(props) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: colors.primary,
  },
});

export default NavigationBar;
