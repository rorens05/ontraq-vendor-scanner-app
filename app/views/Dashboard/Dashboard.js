import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { NavigationContext } from '@react-navigation/native';
import styles from '../../styles';
import Filter from './components/Filter';
import TransactionItem from './components/TransactionItems';
import Store from '../../api/Store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { currencyFormat } from '../../utils/MoneyConverter';
export default function Dashboard() {
  const [totalSales, setTotalSales] = useState(0);
  const [store, setStore] = useState();
  const navigation = useContext(NavigationContext);

  const getStoreInfo = async () => {
    let code = await AsyncStorage.getItem('code');

    let response = await new Store().getStore(code);
    if(response?.ok){
      setStore(response?.data)
    let sales = 0;
    {
      response?.data
        .map(item => {
          sales = sales + parseFloat(item?.amount);
        });
    }
    setTotalSales(sales);
    alert(JSON.stringify(totalSales))
  } else {
    alert(JSON.stringify(response))
    }
  };
  
  useEffect(() => {
    getStoreInfo()
  }, [])

  return (
    <View style={[styles.flex_1, styles.bg_white]}>
      <View style={[styles.variant_width_250, styles.bg_blue, styles.justify_content_center]}>
        <Text style={[styles.text_white, styles.today_date]}>{'October 12, 2022'}</Text>
        <Text style={[styles.text_white, styles.px_5, styles.pt_5]}>{'TOTAL SALES'}</Text>
        <Text style={[styles.total_sale, styles.px_5]}>{`${currencyFormat(totalSales)}`}</Text>
      </View>
      <View style={[styles.flex_1, styles.p_5, styles.upcoming_event_profile_info_container]}>
        <View style={[styles.flex_row, styles.justify_content_space_between]}>
          <Text style={[styles.h2, styles.text_blue]}>{'Today'}</Text>
          <Filter label={'Filter'} />
        </View>
        <ScrollView style={[styles.transaction]} showsVerticalScrollIndicator={false}>
        {store?.map((item, key) => {
          return (
          <TransactionItem item={item} key={key} />
          )
        })}
        </ScrollView>
      </View>
    </View>
  )
}
