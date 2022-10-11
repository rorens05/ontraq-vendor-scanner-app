import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from '../styles';
const backArrow = require('../assets/left-arrow.png');

export default function BackButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={backArrow}
        resizeMode='contain'
        style={[styles.variant_25_25, styles.my_5, styles.back_icon_tint]}
      />
    </TouchableOpacity>
  )
}
