import React from 'react'
import { View, Text, Image } from 'react-native'
export default function ContactItem({icon , label}) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 5 }}>
      <Image source={icon} resizeMode='contain' style={{ width: 24, height: 24, borderRadius: 12 }} />
      <Text style={{ textAlignVertical: 'center', marginLeft: 5, fontSize: 16, color: '#000000' }}>{label}</Text>
    </View>
  )
}
