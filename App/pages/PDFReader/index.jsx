import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Pdf from 'react-native-pdf';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MenuIon from '../../components/MenuIcon';
import colors from '../../config/colors';

const Drawer = createDrawerNavigator();

function PDFReader({route, navigation}) {
  const [isHeaderShown, setIsHeaderShown] = useState(true);

  const toggleHeader = () => {
    setIsHeaderShown(isHeaderShown => !isHeaderShown);
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: isHeaderShown,
      // headerRight: () => (
      //   <MenuIon name="table-of-contents" size={25} color={colors.primary} />
      // ),
    });
  }, [isHeaderShown]);

  const uri = route.params
    ? route.params.uri
    : 'https://cdn.ttgtmedia.com/rms/pdf/pragmatic_programmer_ch4.pdf';
  const source = {uri: uri, cache: true};

  return (
    <View>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath, style, tableOfContents) => {
          // console.log(tableOfContents);
        }}
        onError={error => console.log(error)}
        onPageSingleTap={toggleHeader}
        style={styles.pdf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
  },
  pdf: {
    height: '100%',
    width: '100%',
  },
});

export default PDFReader;
