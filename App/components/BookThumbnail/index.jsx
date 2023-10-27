import React from 'react';
import {StyleSheet} from 'react-native';

import Pdf from 'react-native-pdf';

const mockURI =
  'https://cdn.ttgtmedia.com/rms/pdf/pragmatic_programmer_ch4.pdf';
const source = {uri: mockURI, cache: true};
function BookThumbnail(props) {
  return (
    <Pdf
      onLoadComplete={(numberOfPages, path, size, tableOfConentes) =>
        console.log(numberOfPages, [path, size, tableOfConentes])
      }
      source={source}
      style={styles.pdf}
      trustAllCerts={false}
      singlePage={true}
      onError={error => {
        console.log(error);
      }}
    />
  );
}

const styles = StyleSheet.create({
  pdf: {
    width: 300,
    height: 300,
  },
});
export default BookThumbnail;
