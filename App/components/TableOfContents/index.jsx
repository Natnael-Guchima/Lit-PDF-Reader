import React from 'react';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';

import HeaderText from '../HeaderText';
import colors from '../../config/colors';
import {updatePageNumber} from '../../services/slices/pdfSlice';

function TableOfContents({tableOfContents, navigation, ...props}) {
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView {...props}>
      <HeaderText style={{color: colors.black, marginLeft: 10}}>
        Table of Contents
      </HeaderText>
      {tableOfContents.map(({title, pageIdx}) => (
        <DrawerItem
          key={`${pageIdx}${title}`}
          label={title}
          onPress={() => {
            dispatch(updatePageNumber({pageNumber: pageIdx}));
            navigation.closeDrawer();
          }}
        />
      ))}
      <DrawerItem label={'teest'} onPress={() => console.log('link pressed')} />
    </DrawerContentScrollView>
  );
}

export default TableOfContents;
