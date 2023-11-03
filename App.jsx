import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from './App/pages/HomePage';
import PDFReader from './App/pages/PDFReader';
import NavigationBar from './App/components/NavigationBar';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          // options={{header: () => <NavigationBar />}}
        />
        <Stack.Screen name="PdfReader" component={PDFReader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
