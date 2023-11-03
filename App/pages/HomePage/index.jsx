import React from 'react';

import Screen from '../../components/Screen';
import NavigationBar from '../../components/NavigationBar';
import BookGrid from '../../layouts/BookGrid';

function HomePage({navigation}) {
  return (
    <Screen>
      <BookGrid navigation={navigation} />
    </Screen>
  );
}

export default HomePage;
