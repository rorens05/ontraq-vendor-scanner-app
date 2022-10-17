import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../styles';
import moment from 'moment';
import { currencyFormat } from '../../../utils/MoneyConverter';

export default function TransactionItem({item, key}) {
  
  return (
    <View key={key} style={[styles.py_3, styles.px_2]}>
    <View style={[styles.flex_row, styles.justify_content_space_between]}>
      <Text style={[styles.text_gray]}>{'Received money from'}</Text>
      <Text style={[styles.text_gray]}>{moment(item?.transaction_datetime).format('DD/MM/YYYY')}</Text>
    </View>
    <View style={[styles.flex_row, styles.justify_content_space_between]}>
      <Text style={[styles.h2, styles.text_blue]}>{'Juan Dela Cruz'}</Text>
      <Text style={[styles.h2, styles.text_green]}>{`+ ${currencyFormat(parseFloat(item?.amount))}`}</Text>
    </View>
  </View>
  )
}
