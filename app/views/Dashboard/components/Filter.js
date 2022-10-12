import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../../../styles';

const filterIcon = (require('../../../assets/filter_icon.png'))

export default function Filter({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.py_2, styles.filter, styles.flex_row, styles.flex_center]}>
        <Image source={filterIcon} resizeMode={'contain'} style={[styles.variant_20_20, styles.icon_tint, styles.mr_1]} />
        <Text style={[styles.h4, styles.text_white]}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}
