import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

export default function ProfileTab({ arrow, onPress, label, icon }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#707070', marginHorizontal: 30 }}>
      {label == 'Logout' ?
        <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={icon}
            style={{
              height: 30,
              width: 30,
              marginRight: 20,
              tintColor: '#0A5BC1'
            }}
            resizeMode='contain'
          />
          <Text style={{ fontSize: 18, color: '#17254A', fontWeight: 'bold' }}>{label}</Text>
        </TouchableOpacity>
        :
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={icon}
            style={{
              height: 30,
              width: 30,
              marginRight: 20
            }}
            resizeMode='contain'
          />
          <Text style={{ fontSize: 18, color: '#17254A', fontWeight: 'bold' }}>{label}</Text>
        </View>
      }
      {arrow &&
        <TouchableOpacity
          onPress={onPress}
          style={{ padding: 5 }}>
          <Image
            source={arrow}
            style={{
              height: 20,
              width: 20,
              tintColor: '#17254A',
              transform: [{ rotate: '270deg' }],
            }}
            resizeMethod="resize"
          />
        </TouchableOpacity>
      }
    </View>
  );
}

