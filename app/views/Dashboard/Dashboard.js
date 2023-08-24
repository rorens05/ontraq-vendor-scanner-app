import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, RefreshControl } from 'react-native'
import { NavigationContext } from '@react-navigation/native';
import styles from '../../styles';
import Filter from './components/Filter';
import TransactionItem from './components/TransactionItems';
import Store from '../../api/Store';
import AsyncStorage from '@react-native-community/async-storage';
import { currencyFormat } from '../../utils/MoneyConverter';
import moment from 'moment';
import Loader from '../../components/FullscreenActivityIndicator';
import DatePicker from './components/DatePicker';
import Scanner from '../../api/Scanner';
import { dateConverter } from '../../utils/DateConverter';
import Modal from './components/Modal';

const { width, height } = Dimensions.get('screen');
const dropDownIcon = require('../../assets/dropDown.png');
const calendarIcon = require('../../assets/calendarIcon.png');

export default function Dashboard() {
  const [totalSales, setTotalSales] = useState(0);
  const [store, setStore] = useState();
  const [transaction, setTransaction] = useState(store);
  const [storeInfo, setStoreInfo] = useState();
  const [date, setDate] = useState((moment(storeInfo?.created_at).format('ll')));
  const [secondDate, setSecondDate] = useState();
  const [dateModal, setDateModal] = useState(false);
  const [typeModal, setTypeModal] = useState(false);
  const [type, setType] = useState('All');
  const [secondDateModal, setsecondDateModal] = useState(false);
  const [loader, setLoader] = useState(null);
  const navigation = useContext(NavigationContext);

  const getTransactions = async () => {
    setLoader(true)
    let code = await AsyncStorage.getItem('code');

    let response = await new Store().getStore(code);
    console.log({response})
    if(response?.ok){
      let data = response?.data;
      setStore(data)
    } else {
    alert(response?.statusMessage)
    }
    setLoader(false)
  };

  const getStoreInfo = async () => {
    setLoader(true)
    let code = await AsyncStorage.getItem('code');
    let response = await new Scanner().deviceInfo(code);
    console.log({response})
    if(response?.ok){
      setStoreInfo(response?.data)
      setDate(moment(response?.data?.created_at).format('ll'))
    } else {
      alert(response?.statusMessage)
    }
    setLoader(false)
  };

  const handleFilter = async () => {
    setLoader(true);
      let first = date;
      let last = secondDate == null || secondDate == undefined  ? new Date() : (moment(new Date()).format('MMMM DD, YYYY') == moment(dateConverter(secondDate).format('MMMM DD, YYYY'))) ? new Date() : secondDate;
      // console.warn( new Date(dateConverter(secondDate).format('MMMM DD, YYYY')).getTime()+86399999, moment(new Date(1684943999999)).format('MMMM DD, YYYY hh:mm a'))
      const result = type == 'All' ? store?.filter(item => new Date(item.transaction_datetime).getTime() >= new Date(first).getTime() && new Date(item.transaction_datetime).getTime() <= new Date(last).getTime()+86399999)
          : store?.filter(item => new Date(item.transaction_datetime).getTime() >= new Date(first).getTime() && new Date(item.transaction_datetime).getTime() <= new Date(last).getTime()+86399999).filter(item => item?.description == type);
      setTransaction(result)
      let sales = 0;
      {
        result?.map(item => {
            sales = sales + parseFloat(item?.amount);
          });
      }
      setTotalSales(sales);
    setLoader(false);
  };
  useEffect(() => {
    getTransactions()
  }, [])

  useEffect(() => {
    getStoreInfo()
  }, [])


  return (
    <View style={[styles.flex_1, styles.bg_white]}>
      <View style={[styles.variant_width_250, styles.bg_blue, styles.justify_content_center]}>
        <Text style={[styles.text_white, styles.today_date]}>{moment(new Date()).format('MMMM DD, YYYY')}</Text>
        <Text style={[styles.total_sale]}>{storeInfo?.store_name}</Text>
        <Text style={[styles.text_white, styles.px_5, styles.pt_5]}>{'TOTAL SALES'}</Text>
        <Text style={[styles.total_sale, styles.px_5]}>{`${currencyFormat(totalSales)}`}</Text>
      </View>
      <View style={[styles.flex_1, styles.p_5, styles.upcoming_event_profile_info_container]}>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text>From</Text>
              <View
                style={{
                  width: width*0.35,
                  borderWidth: 1,
                  borderColor: '#26387E',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <TouchableOpacity
                  onPress={() => setDateModal(!dateModal)}
                  style={{
                  width: width*0.35,
                    borderRadius: 10,
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={calendarIcon}
                    resizeMode="contain"
                    style={{width: 15, height: 15, marginRight: 3, tintColor: '#26387E'}}
                  />
                  {date == '' ? (
                    <Text style={{color: '#000'}}>Date</Text>
                  ) : (
                    <Text style={{color: '#000', fontSize: 12}}>
                      {dateConverter(date).format('ll')}
                    </Text>
                  )}
                  <Image
                    source={dropDownIcon}
                    resizeMode="contain"
                    style={{width: 15, height: 15, marginLeft: 3, tintColor: '#26387E'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text>To</Text>
              <View
                style={{
                  width: width*0.35,
                  borderWidth: 1,
                  borderColor: '#26387E',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <TouchableOpacity
                  onPress={() => setsecondDateModal(!secondDateModal)}
                  style={{
                    width: width*0.35,
                    borderRadius: 10,
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={calendarIcon}
                    resizeMode="contain"
                    style={{width: 15, height: 15, marginRight: 3, tintColor: '#26387E'}}
                  />
                  {secondDate == '' ? (
                    <Text style={{color: '#000'}}>Date</Text>
                  ) : (
                    <Text style={{color: '#000', fontSize: 12}}>
                      {dateConverter(secondDate).format('ll')}
                    </Text>
                  )}
                  <Image
                    source={dropDownIcon}
                    resizeMode="contain"
                    style={{width: 15, height: 15, marginLeft: 3, tintColor: '#26387E'}}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <DatePicker
              mode="date"
              dcpar={true}
              openModal={dateModal}
              onCloseModal={() => setDateModal(!dateModal)}
              closeModalDate={date => {
                setDate(date);
                setDateModal(false);
              }}
            />
            <DatePicker
              mode="date"
              dcpar={true}
              openModal={secondDateModal}
              onCloseModal={() => setsecondDateModal(!secondDateModal)}
              closeModalDate={date => {
                setSecondDate(date);
                setsecondDateModal(false);
              }}
            />
            <View style={{justifyContent: 'center'}}>
              <TouchableOpacity onPress={() => handleFilter()}>
                <Text style={{marginTop: 15, color: '#26387E', fontSize: 12, paddingRight: 10}}>
                  Filter
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{marginTop: 10}}>
              <Text>Type</Text>
              <View
                style={{
                  width: width*0.35,
                  borderWidth: 1,
                  borderColor: '#26387E',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  marginTop: 5
                }}>
                <TouchableOpacity
                  onPress={() => setTypeModal(!typeModal)}
                  style={{
                    width: width*0.35,
                    borderRadius: 10,
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <Text style={{color: '#000'}}>{type}</Text>
                  <Image
                    source={dropDownIcon}
                    resizeMode="contain"
                    style={{width: 15, height: 15, marginLeft: 3, tintColor: '#26387E'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          

        {/* <View style={[styles.flex_row, styles.justify_content_space_between]}>
          <Text style={[styles.h2, styles.text_blue]}>{'Today'}</Text>
        </View> */}
        <ScrollView style={[styles.transaction]} showsVerticalScrollIndicator={false} 
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={async () => {
              await getTransactions()
              await getStoreInfo()
            }}
          />
        }
        >
        {transaction?.sort((a, b) => Date.parse(b.transaction_datetime) - Date.parse(a.transaction_datetime)).map((item, key) => {
          console.log({item})
          return (
          <TransactionItem item={item} key={key} />
          )
        })}
        </ScrollView>
      </View>
      {/* <DatePicker
          mode='date'
          openModal={dateModal}
          onCloseModal={() => setDateModal(!dateModal)}
          closeModalDate={date => {
            setDate(date);
            setDateModal(false);
          }}
        /> */}
      {typeModal && <Modal setType={setType} setTypeModal={setTypeModal} />}
      {loader && <Loader />}
    </View>
  )
}
