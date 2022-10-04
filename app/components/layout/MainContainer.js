import React from 'react';
import {View} from 'react-native';
import styles from '../../styles';
import {WHITE} from '../../styles/colors';

export default function MainContainer({children}) {
  return (
    <View style={[styles.bg_white, styles.flex_1, styles.px_5]}>
      {children}
    </View>
  );
}
