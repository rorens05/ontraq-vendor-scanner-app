import React, { useState } from 'react';
import {
  Modal,
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';

export default function DatePickerAndroid({ openModal, closeModalDate, mode, onCloseModal }) {
  const { width } = Dimensions.get('window');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  let maxDate = moment(new Date()).subtract(18, 'years').format('YYYY/MM/DD');
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={openModal}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.6)',
          paddingVertical: 5,
        }}>
        <View style={{ backgroundColor: 'white', borderTopLeftRadius: 15, borderTopRightRadius: 15, width: 350, paddingVertical: 15 }}>
          <DatePicker
            date={date} //initial date from state
            style={{
              width: width - 50,
              zIndex: -1
            }}
            mode={mode} //The enum of date, datetime and time
            placeholder="Birthday"
            format="MM/DD/YYYY"
            // minimumDate={new Date('1900/01/01')}
            // maximumDate={new Date(maxDate)}
            onDateChange={value => {
              setTime(value),
                setDate(value)
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            closeModalDate(
              mode == 'date'
                ? moment(new Date(date)).format('MM/DD/YYYY')
                : moment(date).format()
            )
          }
          style={{ height: 40, marginTop: 10, backgroundColor: '#002E8A', width: 350, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', letterSpacing: 2 }}>{'SELECT'}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal >
  )
}