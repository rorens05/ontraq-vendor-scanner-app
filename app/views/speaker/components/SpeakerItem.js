import React, {useContext} from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { NavigationContext } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');
export default function SpeakerItem({ item }) {
  const navigation = useContext(NavigationContext);
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
        onPress={() => navigation.navigate('SpeakerProfile', {item})}
        style={{
          width: width * 0.3,
          height: width * 0.4,
          overflow: 'hidden',
          borderRadius: 8,
          justifyContent: 'space-evenly'
        }}>
        <Image source={item?.image} style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center' }} resizeMode='contain' />
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: '#000000', fontSize: 12, fontWeight: 'bold' }}>{item?.name}</Text>
          <Text style={{ textAlignVertical: 'center', marginLeft: 5, fontSize: 8, color: '#000000' }}>{item?.position}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}