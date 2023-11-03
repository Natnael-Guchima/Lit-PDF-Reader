import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import BookThumbnail from '../../components/BookThumbnail';

const books = [
  {uri: 'https://cdn.ttgtmedia.com/rms/pdf/pragmatic_programmer_ch4.pdf'},
  {
    uri: 'https://kolegite.com/EE_library/books_and_lectures/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8%D1%80%D0%B0%D0%BD%D0%B5/Clean%20Code%20-%20%20A%20Handbook%20of%20Agile%20Software%20Craftsmanship.pdf',
  },
  {uri: 'https://cdn.ttgtmedia.com/rms/pdf/pragmatic_programmer_ch4.pdf'},
  {
    uri: 'https://kolegite.com/EE_library/books_and_lectures/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8%D1%80%D0%B0%D0%BD%D0%B5/Clean%20Code%20-%20%20A%20Handbook%20of%20Agile%20Software%20Craftsmanship.pdf',
  },
  {uri: 'https://cdn.ttgtmedia.com/rms/pdf/pragmatic_programmer_ch4.pdf'},
  {
    uri: 'https://kolegite.com/EE_library/books_and_lectures/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8%D1%80%D0%B0%D0%BD%D0%B5/Clean%20Code%20-%20%20A%20Handbook%20of%20Agile%20Software%20Craftsmanship.pdf',
  },
];
function BookGrid(props) {
  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => (
          <View style={{height: 10, backgroundColor: 'transparent'}} />
        )}
        data={books}
        renderItem={({item}) => <BookThumbnail uri={item.uri} />}
        numColumns={2}
        horizontal={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingLeft: 10,
    paddingTop: 20,
  },
});

export default BookGrid;
