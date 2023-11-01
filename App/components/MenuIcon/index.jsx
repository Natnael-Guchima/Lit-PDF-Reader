import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function MenuIon({...otherProps}) {
  return (
    <TouchableWithoutFeedback>
      <MaterialCommunityIcons {...otherProps} />
    </TouchableWithoutFeedback>
  );
}

export default MenuIon;
