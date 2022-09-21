import { NavigationContext } from '@react-navigation/native';
import React from 'react'
import {View, Text} from 'react-native'

export default function Home() {
  return (
    <View style = {{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is Home screen</Text>
    </View>
  )
}
