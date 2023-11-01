import React from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../config/colors';
import MenuIon from '../MenuIcon';

function NavigationBar(props) {
  return (
    <View style={styles.container}>
      <MenuIon color={colors.white} size={20} name="menu" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default NavigationBar;
