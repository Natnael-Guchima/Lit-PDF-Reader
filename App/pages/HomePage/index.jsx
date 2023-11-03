import React from 'react';

import Screen from '../../components/Screen';
import NavigationBar from '../../components/NavigationBar';
import BookGrid from '../../layouts/BookGrid';

function HomePage(props) {
  return (
    <Screen>
      <NavigationBar />
      <BookGrid />
    </Screen>
  );
}

export default HomePage;
