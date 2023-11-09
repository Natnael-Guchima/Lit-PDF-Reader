import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import PDFReader from '../../pages/PDFReader';
import DrawerHeader from '../../components/DrawerHeader';
import TableOfContents from '../../components/TableOfContents';

const Drawer = createDrawerNavigator();
function PDFReaderRoute(props) {
  return (
    <Drawer.Navigator drawerContent={() => <TableOfContents />}>
      <Drawer.Screen
        name="pdf"
        component={PDFReader}
        options={{
          drawerPosition: 'right',
          header: ({navigation}) => <DrawerHeader navigation={navigation} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default PDFReaderRoute;
