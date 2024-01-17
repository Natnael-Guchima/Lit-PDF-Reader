import React from 'react';
import {Linking} from 'react-native';

import Screen from '../../components/Screen';
import BookGrid from '../../layouts/BookGrid';
import BookThumbnail from '../../components/BookThumbnail';
import {CONST} from '../../config/CONST';

const getInitialURL = async navigation => {
  const url = await Linking.getInitialURL();
  console.log(url, 'from url one kas');
  Linking.addEventListener('url', event => {
    console.log(event, 'url');
    console.log(navigation.getState(), 'naviagtion state');
    const currentPageIndex = navigation.getState().index;
    console.log(currentPageIndex, typeof currentPageIndex);
    event.url &&
      navigation.push(CONST.ROUTES.PDF_READER_PAGE, {
        uri: 'https://thepfengineerdotcom.files.wordpress.com/2016/05/notes-the-practicing-mind.pdf',
      });
  });
};

function HomePage({navigation}) {
  getInitialURL(navigation);
  return (
    <Screen>
      <BookGrid navigation={navigation} RenderItem={BookThumbnail} />
    </Screen>
  );
}

export default HomePage;
