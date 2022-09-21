import { NavigationContext } from '@react-navigation/native';
import React from 'react'
import {View, Text} from 'react-native'

export default function Program() {
  return (
    <View style = {{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is Program screen</Text>
    </View>
  )
}
