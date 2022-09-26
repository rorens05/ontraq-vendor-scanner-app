import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContext } from '@react-navigation/native';

export default function EventItem({ image }) {
  const navigation = useContext(NavigationContext);
  return (
    <TouchableOpacity onPress={() => navigation.navigate('EventProfile', {image})} style={{ height: 284, width: 348, borderRadius: 24, marginBottom: 10, borderWidth: StyleSheet.hairlineWidth, borderBottomColor: '#00000ae', alignItems: 'center' }}>
      <Image source={image} style={{ width: 348, height: 174, borderTopRightRadius: 24, borderTopLeftRadius: 24 }} />
      <View style={{ marginTop: 20}}>
        <Text style={{ color: '#000000', fontSize: 24, fontWeight: 'bold' }}>{'CEAP Conference and Expo'}</Text>
        <Text style={{ color: '#D82E2E', fontSize: 12, fontWeight: 'bold' }}>{'August 5, 2022'}</Text>
        <Text style={{ color: '#000000', fontSize: 12, fontWeight: 'bold' }}>{'Quezon City, Manila Philippines'}</Text>
      </View>
    </TouchableOpacity>
  )
}
