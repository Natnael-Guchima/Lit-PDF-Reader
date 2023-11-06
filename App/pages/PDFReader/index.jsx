import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import Pdf from 'react-native-pdf';

function PDFReader({route, navigation}) {
  const [isHeaderShown, setIsHeaderShown] = useState(true);
  const toggleHeader = () => {
    setIsHeaderShown(isHeaderShown => !isHeaderShown);
  };

  useEffect(() => {
    navigation.setOptions({headerShown: isHeaderShown});
  }, [isHeaderShown]);

  const uri = route.params.uri;
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
