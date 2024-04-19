import React, {useState} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

import Pdf from 'react-native-pdf';
import colors from '../../config/colors';

const mockURI =
  'https://cdn.ttgtmedia.com/rms/pdf/pragmatic_programmer_ch4.pdf';

function BookThumbnail({uri, navigation}) {
  const source = {uri: uri ? uri : mockURI, cache: true};
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('PdfReader', {uri})}>
      <View style={styles.container}>
        <Pdf
          source={source}
          style={styles.pdf}
          trustAllCerts={false}
          singlePage={true}
          onError={error => {
            console.log(error);
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  pdf: {
    width: '100%',
    height: 300,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.white,
    marginRight: 10,
  },
});
export default BookThumbnail;
