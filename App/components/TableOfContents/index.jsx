import React from 'react';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import HeaderText from '../HeaderText';
import colors from '../../config/colors';

function TableOfContents({tableOfContents, ...props}) {
  console.log(tableOfContents, 'from table of contents page');
  return (
    <DrawerContentScrollView {...props}>
      <HeaderText style={{color: colors.black, marginLeft: 10}}>
        Table of Contents
      </HeaderText>
      {tableOfContents.map(({title, pageIdx}) => (
        <DrawerItem
          key={`${pageIdx}${title}`}
          label={title}
          onPress={() => {}}
        />
      ))}
      <DrawerItem label={'teest'} onPress={() => console.log('link pressed')} />
    </DrawerContentScrollView>
  );
}

export default TableOfContents;
