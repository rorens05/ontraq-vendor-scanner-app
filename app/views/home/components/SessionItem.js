import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SessionItem({image }) {
  return (
    <View style={{height: 120, flexDirection: 'row', borderRadius: 24, marginBottom: 10, borderWidth: StyleSheet.hairlineWidth, borderBottomColor: '#00000ae'}}>
      <Image source={image} style={{width: 118, height: 118, borderRadius: 24}} />
      <View style={{marginLeft: 20, justifyContent: 'center'}}>
        <Text style={{color: '#000000', fontSize: 16, fontWeight: 'bold'}}>Session 1</Text>
        <Text style={{color: '#D82E2E', fontSize: 12, fontWeight: '300'}}>Sat, Aug 7 | 10:30 AM - 2:30 PM</Text>
        <Text style={{color: '##000000', fontSize: 12, fontWeight: '300'}}>Function Room 1</Text>
        <Text style={{color: '#000000', fontSize: 12, fontWeight: 'bold'}}>Speakers:</Text>
        <View style={{flexDirection: 'row'}}>
          <Image source={image} style={{width: 20, height: 20, borderRadius: 10}} />
          <Image source={image} style={{width: 20, height: 20, borderRadius: 10, marginLeft: -10}} />
          <Image source={image} style={{width: 20, height: 20, borderRadius: 10, marginLeft: -10}} />
        </View>
      </View>
    </View>
  )
}
