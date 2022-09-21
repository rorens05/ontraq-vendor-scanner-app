import { NavigationContext } from '@react-navigation/native';
import React from 'react'
import {View, Text} from 'react-native'

export default function SplashScreen() {
const navigation = React.useContext(NavigationContext)

  React.useEffect(() => {
    setInterval(() => {
      navigation.navigate('Login')
    }, 3000);
  }, [])
  
  return (
    <View style = {{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is SplashScreen screen</Text>
    </View>
  )
}
