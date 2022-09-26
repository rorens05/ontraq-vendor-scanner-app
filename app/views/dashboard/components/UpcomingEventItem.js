import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function UpcomingEventItem({image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground source={image} resizeMode='stretch' style={{ width: 160, height: 200, borderRadius: 15, marginHorizontal: 10 }}>
        {/* <View style={{ backgroundColor: '#000000ae', width: 160, height: 180, borderRadius: 15 }}> */}
          <View style={{ position: 'absolute', bottom: 0 }}>
            <View style={{ padding: 10 }}>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>August 23</Text>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: '300' }}>Collaborative Art Clinic</Text>
            </View>
          </View>
        {/* </View> */}
      </ImageBackground>
    </TouchableOpacity>
  )
}
