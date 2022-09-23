import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is Home screen</Text>
      </View>
    </>
  )
}
