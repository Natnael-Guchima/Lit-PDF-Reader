import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from './App/pages/HomePage';
import PDFReader from './App/pages/PDFReader';
import NavigationBar from './App/components/NavigationBar';
import {CONST} from './App/config/CONST';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={CONST.ROUTES.HOME_PAGE}>
        <Stack.Screen
          name={CONST.ROUTES.HOME_PAGE}
          component={HomePage}
          options={{header: () => <NavigationBar />}}
        />
        <Stack.Screen
          name={CONST.ROUTES.PDF_READER_PAGE}
          component={PDFReader}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
