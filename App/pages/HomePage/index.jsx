import React, {useEffect, useRef, useState} from 'react';
import {AppState, Linking} from 'react-native';

import Screen from '../../components/Screen';
import BookGrid from '../../layouts/BookGrid';
import BookThumbnail from '../../components/BookThumbnail';
import {CONST} from '../../config/CONST';

const getInitialURL = async navigation => {
  //get app state first based on that chose a listener type check if the app is launched by intent first
  console.log('get initial url');
  const appLaunchURL = await Linking.getInitialURL();
  if (appLaunchURL !== null) {
    //app is launched for first time
    console.log('app was launched', appLaunchURL);
  } else {
    console.log('if not first launch');
    Linking.addEventListener('url', event => {
      //app pops up from background
      console.log('app was in backgournd', event.url);
      event.url &&
        navigation.push(CONST.ROUTES.PDF_READER_PAGE, {
          uri: 'https://thepfengineerdotcom.files.wordpress.com/2016/05/notes-the-practicing-mind.pdf',
        });
    });
  }

  // Linking.addEventListener('url', event => {
  //   console.log(event, 'event value');
  // });
};
const getURL = async () => {
  const URL = await Linking.getInitialURL();
  console.log(URL, 'on launch URL');
};

function HomePage({navigation}) {
  useEffect(() => {
    Linking.addEventListener('url', event => {
      console.log(event, 'listener');
    });
    getURL();
  }, []);

  return (
    <Screen>
      <BookGrid navigation={navigation} RenderItem={BookThumbnail} />
    </Screen>
  );
}

export default HomePage;
