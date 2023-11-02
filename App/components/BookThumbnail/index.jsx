import React from 'react';
import {StyleSheet, View} from 'react-native';

import Pdf from 'react-native-pdf';
import colors from '../../config/colors';

const mockURI =
  'https://cdn.ttgtmedia.com/rms/pdf/pragmatic_programmer_ch4.pdf';

function BookThumbnail({uri}) {
  const source = {uri: uri ? uri : mockURI, cache: true};
  return (
    <View style={styles.container}>
      <Pdf
        onLoadComplete={(numberOfPages, path, size, tableOfConentes) =>
          console.log(numberOfPages, path, size, tableOfConentes, 'info')
        }
        source={source}
        style={styles.pdf}
        trustAllCerts={false}
        singlePage={true}
        onError={error => {
          console.log(error);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pdf: {
    width: '100%',
    height: 300,
    backgroundColor: colors.white,
  },
  container: {width: '50%', borderRadius: 10, overflow: 'hidden'},
});
export default BookThumbnail;
