import React from 'react';
import {Text, StyleSheet} from 'react-native';

import colors from '../../config/colors';

function HeaderText({children}) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 18,
  },
});
export default HeaderText;
