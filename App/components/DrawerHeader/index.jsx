import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import colors from '../../config/colors';
import MenuIon from '../MenuIcon';
import HeaderText from '../HeaderText';

function DrawerHeader(props) {
  return (
    <View style={styles.container}>
      <MenuIon name="arrow-left" size={20} color={colors.white} />
      <HeaderText style={styles.headerText}>pdf reader title</HeaderText>
      <MenuIon name="table-of-contents" size={20} color={colors.white} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerText: {
    flex: 1,
    marginLeft: 20,
  },
});
export default DrawerHeader;
