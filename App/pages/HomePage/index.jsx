import React, {useEffect, useRef, useState} from 'react';
import {
  AppState,
  Button,
  Linking,
  StyleSheet,
  TouchableOpacity,
  Modal,
  View,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screen from '../../components/Screen';
import BookGrid from '../../layouts/BookGrid';
import BookThumbnail from '../../components/BookThumbnail';
import {CONST} from '../../config/CONST';
import colors from '../../config/colors';

const getURL = async navigation => {
  const URL = await Linking.getInitialURL();
  URL &&
    navigation.navigate(CONST.ROUTES.PDF_READER_PAGE, {
      uri: 'https://thepfengineerdotcom.files.wordpress.com/2016/05/notes-the-practicing-mind.pdf',
    });
};

function HomePage({navigation}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    Linking.addEventListener('url', event => {
      event.url &&
        navigation.navigate(CONST.ROUTES.PDF_READER_PAGE, {
          uri: 'https://thepfengineerdotcom.files.wordpress.com/2016/05/notes-the-practicing-mind.pdf',
        });
    });
    getURL(navigation);
  }, []);

  return (
    <Screen>
      <BookGrid navigation={navigation} RenderItem={BookThumbnail} />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setVisible(!visible)}>
        <MaterialCommunityIcons name="plus" color={colors.white} size={30} />
      </TouchableOpacity>
      <Modal
        visible={visible}
        onRequestClose={() => setVisible(!visible)}
        transparent={true}
        animationType="slide">
        <View style={styles.centeredView}>
          <View style={styles.modal} />
        </View>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    bottom: 20,
    right: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: 200,
    width: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default HomePage;
