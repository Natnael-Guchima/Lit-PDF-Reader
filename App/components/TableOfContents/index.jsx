import React from 'react';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

function TableOfContents(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label={'teest'} onPress={() => console.log('link pressed')} />
    </DrawerContentScrollView>
  );
}

export default TableOfContents;
