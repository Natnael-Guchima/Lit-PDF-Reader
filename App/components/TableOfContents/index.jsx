import React from 'react';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import HeaderText from '../HeaderText';
import colors from '../../config/colors';

function TableOfContents(props) {
  return (
    <DrawerContentScrollView {...props}>
      <HeaderText style={{color: colors.black, marginLeft: 10}}>
        Table of Contents
      </HeaderText>
      <DrawerItem label={'teest'} onPress={() => console.log('link pressed')} />
    </DrawerContentScrollView>
  );
}

export default TableOfContents;