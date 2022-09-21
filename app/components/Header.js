import React, { useContext } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContext, CommonActions } from '@react-navigation/native';
const bellIcon = require('../assets/ceap-bell.png');
const userImage = require('../assets/ceap-avatar.png');
const { width, height } = Dimensions.get('window');


export default function Header({ }) {

  const navigation = useContext(NavigationContext);

  return (
    <View style={{ padding: 10, backgroundColor: '#fff' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
          <TouchableOpacity 
          onPress={() => alert('Under Development')}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 30
          }}>
            <Image source={userImage} resizeMode='contain' style={{ width: 50, height: 50, borderRadius: 10 }} />
          </TouchableOpacity>
          <View>
            <Text style={{ color: '#000000', fontSize: 24, fontWeight: 'bold' }}>{`Hi, Joan Dela Cruz`}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => alert('Under Development')}>
          <Image source={bellIcon} resizeMode='contain' style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
      </View>

    </View>
  )
}
