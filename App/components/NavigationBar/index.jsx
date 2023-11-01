import React from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../config/colors';
import MenuIon from '../MenuIcon';
import HeaderText from '../HeaderText';

function NavigationBar(props) {
  return (
    <View style={styles.container}>
      <MenuIon color={colors.white} size={20} name="menu" />
      <HeaderText>My books</HeaderText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    height: 40,
    paddingHorizontal: 10,
  },
});

export default NavigationBar;
