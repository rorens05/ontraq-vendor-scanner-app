import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import InputPhoto from './InputPhoto';

export default function ProfileHeader({ image, setImage, name, position }) {
  return (
    <View style={{ flexDirection: 'row', padding: 30 }}>
      <InputPhoto value={image} setValue={setImage} />
      <View style={{ justifyContent: 'center', marginLeft: 20 }}>
        <Text style={{ color: '#17254A', fontSize: 24, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ color: '#707070', fontSize: 16, fontWeight: '400' }}>{position}</Text>
      </View>
    </View>
  )
}
