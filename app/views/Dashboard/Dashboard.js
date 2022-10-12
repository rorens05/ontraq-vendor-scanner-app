import React, { useContext } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { NavigationContext } from '@react-navigation/native';
import styles from '../../styles';
import Filter from './components/Filter';
import TransactionItem from './components/TransactionItems';
export default function Dashboard() {
  const navigation = useContext(NavigationContext);
  return (
    <View style={[styles.flex_1, styles.bg_white]}>
      <View style={[styles.variant_width_250, styles.bg_blue, styles.justify_content_center]}>
        <Text style={[styles.text_white, styles.today_date]}>{'October 12, 2022'}</Text>
        <Text style={[styles.text_white, styles.px_5, styles.pt_5]}>{'TOTAL SALES'}</Text>
        <Text style={[styles.total_sale, styles.px_5]}>{'PHP 20,000.00'}</Text>
      </View>
      <View style={[styles.flex_1, styles.p_5, styles.upcoming_event_profile_info_container]}>
        <View style={[styles.flex_row, styles.justify_content_space_between]}>
          <Text style={[styles.h2, styles.text_blue]}>{'Today'}</Text>
          <Filter label={'Filter'} />
        </View>
        <ScrollView style={[styles.transaction]} showsVerticalScrollIndicator={false}>
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
        </ScrollView>
      </View>
    </View>
  )
}
