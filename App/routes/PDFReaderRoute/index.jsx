import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import PDFReader from '../../pages/PDFReader';

const Drawer = createDrawerNavigator();
function PDFReaderRoute(props) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="pdf"
        component={PDFReader}
        options={{drawerPosition: 'right'}}
      />
    </Drawer.Navigator>
  );
}

export default PDFReaderRoute;
