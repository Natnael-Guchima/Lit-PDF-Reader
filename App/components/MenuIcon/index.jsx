import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function MenuIon({onPress, ...otherProps}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <MaterialCommunityIcons {...otherProps} />
    </TouchableWithoutFeedback>
  );
}

export default MenuIon;
