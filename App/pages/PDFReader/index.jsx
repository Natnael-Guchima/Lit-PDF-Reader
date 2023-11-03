import React from 'react';
import {View, StyleSheet} from 'react-native';

import Pdf from 'react-native-pdf';

function PDFReader({route}) {
  const uri = route.params.uri;
  console.log(uri, 'from params', route.params);
  const source = {uri: uri, cache: true};

  return (
    <View>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) =>
          console.log(filePath, numberOfPages, 'from pdf reader file')
        }
        onError={error => console.log(error)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
  },
});

export default PDFReader;
