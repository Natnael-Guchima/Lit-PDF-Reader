import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';

import PDFReader from '../../pages/PDFReader';
import DrawerHeader from '../../components/DrawerHeader';
import TableOfContents from '../../components/TableOfContents';
import {getTableOfContent} from '../../services/slices/pdfSlice';

const Drawer = createDrawerNavigator();
function PDFReaderRoute({route}) {
  const tableOfContents = useSelector(getTableOfContent);
  console.log(tableOfContents, 'Table OF CONTENT');
  return (
    <Drawer.Navigator
      initialRouteName="pdf"
      drawerContent={({navigation}) => (
        <TableOfContents
          navigation={navigation}
          tableOfContents={tableOfContents}
        />
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
