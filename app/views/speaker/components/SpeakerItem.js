import React from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
export default function SpeakerItem({ image , name, position}) {
  return (
    <View
      style={{
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
      }}
    >
      <TouchableOpacity
        onPress={() => alert('Under Development')}
        style={{
          width: width * 0.3,
          height: width * 0.4,
          overflow: 'hidden',
          borderRadius: 8,
          justifyContent: 'space-evenly'
        }}>
        <Image source={image} style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center' }} resizeMode='contain' />
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: '#000000', fontSize: 12, fontWeight: 'bold' }}>{name}</Text>
          <Text style={{ textAlignVertical: 'center', marginLeft: 5, fontSize: 8, color: '#000000' }}>{position}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}