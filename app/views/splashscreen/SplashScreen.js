import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContext } from '@react-navigation/native';
import React from 'react'
import {View, Text} from 'react-native'
import Scanner from '../../api/Scanner';
import styles from '../../styles';

export default function SplashScreen() {
const navigation = React.useContext(NavigationContext)

  const getDeviceInfo = async() => {
    let code = await AsyncStorage.getItem('code')

    if (code == null || code == ''){
      return navigation.replace('CodeScreen')
    }

    let response = await new Scanner().deviceInfo(code)
    if(response.data == null){
      return navigation.replace('CodeScreen')
    }

    await AsyncStorage.setItem('code', code)
    return navigation.replace('Dashboard')

  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      getDeviceInfo();
    }, 3000);
    return () => {
      clearTimeout(timer)
    }
  }, [])
  
  return (
    <View style = {{ flex: 1, backgroundColor: '#26387E', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={[styles.total_sale, styles.px_5, styles.text_white]}>{`OntraQ Wallet`}</Text>
    </View>
  )
}
