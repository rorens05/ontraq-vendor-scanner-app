import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContext } from '@react-navigation/native';
import React from 'react'
import {View, Text} from 'react-native'
import Scanner from '../../api/Scanner';

export default function SplashScreen() {
const navigation = React.useContext(NavigationContext)

  const getDeviceInfo = async() => {
    let code = await AsyncStorage.getItem('code')

    if (code == null || code == ''){
      return navigation.navigate('CodeScreen')
    }

    let response = await new Scanner().deviceInfo(code)
    if(response.data == null){
      return navigation.navigate('CodeScreen')
    }

    await AsyncStorage.setItem('code', code)
    return navigation.navigate('Dashboard')

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
    <View style = {{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is SplashScreen screen</Text>
    </View>
  )
}
