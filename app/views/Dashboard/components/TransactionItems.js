import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../styles';

export default function TransactionItem({item}) {
  return (
    <View style={[styles.py_3, styles.px_2]}>
    <View style={[styles.flex_row, styles.justify_content_space_between]}>
      <Text style={[styles.text_gray]}>{'Received money from'}</Text>
      <Text style={[styles.text_gray]}>{'2 Oct. 2022'}</Text>
    </View>
    <View style={[styles.flex_row, styles.justify_content_space_between]}>
      <Text style={[styles.h2, styles.text_blue]}>{'Juan Dela Cruz'}</Text>
      <Text style={[styles.h2, styles.text_green]}>{'+450.00'}</Text>
    </View>
  </View>
  )
}
