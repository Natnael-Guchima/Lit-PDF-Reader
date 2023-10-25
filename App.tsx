import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>App</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
