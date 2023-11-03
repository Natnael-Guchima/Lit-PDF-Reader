import React from 'react';

import Screen from '../../components/Screen';
import BookGrid from '../../layouts/BookGrid';
import BookThumbnail from '../../components/BookThumbnail';

function HomePage({navigation}) {
  return (
    <Screen>
      <BookGrid navigation={navigation} RenderItem={BookThumbnail} />
    </Screen>
  );
}

export default HomePage;
