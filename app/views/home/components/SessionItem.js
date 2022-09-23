import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContext } from '@react-navigation/native';

export default function SessionItem({ item }) {
  const navigation = useContext(NavigationContext);
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProgramProfile', { item })} style={{ height: 120, flexDirection: 'row', borderRadius: 24, marginBottom: 10, borderWidth: StyleSheet.hairlineWidth, borderBottomColor: '#00000ae', alignItems: 'center' }}>
      <Image source={item?.image} style={{ width: 118, height: 118, borderRadius: 24 }} />
      <View style={{ marginLeft: 20, justifyContent: 'center' }}>
        <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>{item?.title}</Text>
        <Text style={{ color: '#D82E2E', fontSize: 12, fontWeight: '300' }}>{item?.date}</Text>
        <Text style={{ color: '#000000', fontSize: 12, fontWeight: '300' }}>{item?.venue}</Text>
        {item?.speakers.length != 0 &&
          <>
            <Text style={{ color: '#000000', fontSize: 12, fontWeight: 'bold' }}>Speakers:</Text>
            <View style={{ flexDirection: 'row' }}>
              {item?.speakers.map((item, key) => {
                return (
                  <Image key={key} source={item?.image} style={{ width: 20, height: 20, borderRadius: 10, marginLeft: key == 0 ? 0 : -10 }} />
                );
              })}
            </View>
          </>
        }
      </View>
    </TouchableOpacity>
  )
}
