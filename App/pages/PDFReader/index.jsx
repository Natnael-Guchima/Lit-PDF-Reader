import React from 'react';
import {View, StyleSheet} from 'react-native';

import Pdf from 'react-native-pdf';

function PDFReader({route}) {
  const uri = route.params.uri;
  const source = {uri: uri, cache: true};

  return (
    <View>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) =>
          console.log(filePath, numberOfPages, 'from pdf reader file')
        }
        onError={error => console.log(error)}
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
