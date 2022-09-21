import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Button({label, onPress}) {
  return (
      <TouchableOpacity onPress={onPress}>
        <View style={{backgroundColor: '#002E8A', width: 150, paddingVertical: 10, alignItems: 'center', borderRadius: 10}}>
            <Text style={{color: '#fff', fontWeight: '500'}}>{label}</Text>
        </View>
      </TouchableOpacity>
  )
}
