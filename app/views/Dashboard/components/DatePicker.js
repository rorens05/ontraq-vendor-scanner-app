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
      animationType='fade'
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
        <View style={{ backgroundColor: 'white', borderRadius: 15, width: width * 0.9, paddingVertical: 15 }}>
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
            maximumDate={new Date()}
            onDateChange={value => {
              setTime(value),
              setDate(value)
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => closeModalDate(moment(date).format('MM/DD/YYYY'))}
          style={{ height: 40, marginTop: 10, backgroundColor: '#103E78', width: 350, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', letterSpacing: 2 }}>{'SELECT'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => closeModalDate('Filter')}
          style={{ height: 40, marginTop: 10, backgroundColor: '#A3D063', width: 350, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', letterSpacing: 2 }}>{'SEE ALL'}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal >
  )
}