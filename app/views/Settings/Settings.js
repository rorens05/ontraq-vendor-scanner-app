import { NavigationContext } from '@react-navigation/native';
import React, {useContext} from 'react'
import { View, Text } from 'react-native'


export default function Settings() {
  const navigation = useContext(NavigationContext);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
      <Text>{'Under Development.'}</Text>
    </View>
  )
}
