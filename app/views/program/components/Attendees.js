import React from 'react';
import { View, Text, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');


export default function Attendees({ attend, max }) {
  return (
    <View
      style={{
        width: width * 0.8,
        backgroundColor: '#002E8A24',
        borderRadius: 10,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#002E8A',
          paddingVertical: 5,
          width: `${Math.round(
            (attend / max) * 100,
          )}%`,
          borderRadius: 10,
        }}>
        <Text> </Text>
      </View>
      <Text
        style={{
          position: 'absolute',
          alignSelf: 'flex-start',
          textAlign: 'center',
          top: '15%',
          fontWeight: '500',
          color: '#fff',
          left: 10
        }}>
        {`10 Attendees`}
      </Text>
    </View>
  )
}