import React from 'react';
import {View, StyleSheet, Text, StatusBar, SafeAreaView} from 'react-native';

import colors from '../../config/colors';
import MenuIon from '../MenuIcon';
import HeaderText from '../HeaderText';

function DrawerHeader({navigation}) {
  const onBackPress = () => {
    navigation.goBack();
  };

  const onTableOfContentsPress = () => {
    navigation.openDrawer();
  };

  console.log(StatusBar);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MenuIon
          name="arrow-left"
          size={25}
          color={colors.white}
          onPress={onBackPress}
        />
        <HeaderText style={styles.headerText}>pdf reader title</HeaderText>
        <MenuIon
          name="table-of-contents"
          size={25}
          color={colors.white}
          onPress={onTableOfContentsPress}
        />
      </View>
    </SafeAreaView>
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
