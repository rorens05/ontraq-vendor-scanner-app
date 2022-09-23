import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

export default function AnnouncementItem({image }) {
  return (
    <ImageBackground source={image} resizeMode='stretch' style={{ width: 230, height: 173, borderRadius: 15, marginHorizontal: 10 }}>
      <View style={{ backgroundColor: '#000000ae', width: 230, height: 173, borderRadius: 15 }}>
        <View style={{ position: 'absolute', bottom: 0 }}>
          <View style={{ padding: 10 }}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>VOTELOVE</Text>
            <Text style={{ color: '#fff', fontSize: 12, fontWeight: '300' }}>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}
