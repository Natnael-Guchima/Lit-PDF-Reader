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
      {tableOfContents
        ? tableOfContents.map(({title, pageIdx}) => (
            <DrawerItem
              key={`${pageIdx}${title}`}
              label={title}
              onPress={() => {
                dispatch(updatePageNumber(pageIdx));
                navigation.closeDrawer();
              }}
            />
          ))
        : null}
    </DrawerContentScrollView>
  );
}

export default TableOfContents;
