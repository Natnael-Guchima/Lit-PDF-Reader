import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import colors from '../../config/colors';

function ModalButton({title, buttonBgColor}) {
  return (
    <TouchableOpacity
      style={[styles.openButton, {backgroundColor: buttonBgColor}]}>
      <View style={styles.btnContainer}>
        <Text style={styles.btnText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  openButton: {
    backgroundColor: colors.primary,
    height: 40,
    borderRadius: 20,
  },
  btnContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default ModalButton;
