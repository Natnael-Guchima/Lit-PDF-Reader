import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet} from 'react-native';

import {useSelector} from 'react-redux';

import Pdf from 'react-native-pdf';
import {getPageNumber} from '../../services/slices/pdfSlice';
import colors from '../../config/colors';

function PDFReader({route, navigation}) {
  const [isHeaderShown, setIsHeaderShown] = useState(true);
  const pdfRef = useRef(null);
  const pageNumber = useSelector(getPageNumber);

  const toggleHeader = () => {
    setIsHeaderShown(isHeaderShown => !isHeaderShown);
  };

  useEffect(() => {
    pdfRef.current.setPage(Number(pageNumber) + 1);
  }, [pageNumber]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: isHeaderShown,
    });
  }, [isHeaderShown]);

  const uri = route.params
    ? route.params.uri
    : 'https://cdn.ttgtmedia.com/rms/pdf/pragmatic_programmer_ch4.pdf';
  const source = {uri: uri, cache: true};

  return (
    <View>
      <Pdf
        ref={pdfRef}
        source={source}
        onLoadComplete={(numberOfPages, filePath, style, tableOfContents) => {
          // console.log(tableOfContents);
        }}
        onError={error => console.log(error)}
        onPageSingleTap={toggleHeader}
        style={styles.pdf}
      />
      {isHeaderShown && (
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: colors.primary,
            position: 'absolute',
            bottom: 0,
            zIndex: 5,
          }}
        />
      )}
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
