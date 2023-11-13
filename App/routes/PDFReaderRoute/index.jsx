import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import PDFReader from '../../pages/PDFReader';
import DrawerHeader from '../../components/DrawerHeader';
import TableOfContents from '../../components/TableOfContents';

const Drawer = createDrawerNavigator();
function PDFReaderRoute({route}) {
  console.log(route.params.tableOfContents);
  return (
    <Drawer.Navigator
      initialRouteName="pdf"
      drawerContent={() => (
        <TableOfContents tableOfContents={route.params.tableOfContents} />
      )}>
      <Drawer.Screen
        name="pdf"
        component={PDFReader}
        initialParams={{uri: route.params.uri}}
        options={{
          drawerPosition: 'right',
          header: ({navigation}) => <DrawerHeader navigation={navigation} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default PDFReaderRoute;
