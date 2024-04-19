import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet} from 'react-native';

import {useSelector} from 'react-redux';
import Slider from 'react-native-slider';
import Toast from 'react-native-simple-toast';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import Pdf from 'react-native-pdf';
import {getPageNumber} from '../../services/slices/pdfSlice';
import colors from '../../config/colors';
import {CONST} from '../../config/CONST';
import {addToOpenedBooksList} from '../../services/slices/recentlyOpenedBooks';
import {updateTableOfContent} from '../../services/slices/pdfSlice';

const dislayUnableToOpenPDFMessage = () => {
  Toast.show('Unable to open file!', Toast.SHORT);
};

function PDFReader({route, navigation}) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
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
          console.log(filePath, 'from opening pdf');
          dispatch(addToOpenedBooksList(filePath));
          dispatch(updateTableOfContent(tableOfContents));
          setNumberOfPages(numberOfPages);
        }}
        onError={() => {
          dislayUnableToOpenPDFMessage();
          navigation.navigate(CONST.ROUTES.HOME_PAGE);
        }}
        onPageSingleTap={toggleHeader}
        style={styles.pdf}
        onPageChanged={page => setPage(page)}
        trustAllCerts={false}
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
          }}>
          <Slider
            value={page}
            onValueChange={value => pdfRef.current.setPage(Math.floor(value))}
            maximumValue={numberOfPages}
            thumbTintColor={colors.white}
            minimumTrackTintColor={colors.white}
          />
        </View>
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
