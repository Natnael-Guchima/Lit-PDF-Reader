import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../config/colors';

export default function NoRecentBooks() {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Start Your Reading Journey!</Text>
      <Text style={styles.subHeader}>
        Recently Opened books will be listed here.
      </Text>
      <MaterialCommunityIcons
        name="file-document-outline"
        size={40}
        color={colors.black}
        style={{marginTop: 10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 20,
  },
  subHeader: {
    color: '#6d736f',
  },
});
