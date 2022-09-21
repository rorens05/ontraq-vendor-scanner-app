import React from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
import tfiLogo from '../../../assets/ceap-tfi-logo.png'
import mailIcon from '../../../assets/ceap-mail.png'
import telephoneIcon from '../../../assets/ceap-telephone.png'
export default function SponsorItem({ visited }) {
  return (
    <View
      style={{
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
      }}
    >
      <TouchableOpacity
        onPress={() => alert('Under Development')}
        style={{
          width: width / 2.4,
          height: width / 2.0,
          backgroundColor: '#fff',
          elevation: 5,
          overflow: 'hidden',
          borderRadius: 8,
          justifyContent: 'space-evenly'
        }}>
        <Image source={tfiLogo} style={{ width: 70, height: 70, borderRadius: 35, alignSelf: 'center' }} resizeMode='contain' />
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>TechFactors, Inc.</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: visited ? '#29CA4D' : '#CA2929' }} />
            <Text style={{ textAlignVertical: 'center', marginLeft: 5, fontSize: 12, color: '#000000' }}>{visited ? 'Visited' : 'Not Visited'}</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 3 }}>
              <Image source={telephoneIcon} resizeMode='contain' style={{ width: 16, height: 16, borderRadius: 8 }} />
              <Text style={{ textAlignVertical: 'center', marginLeft: 5, fontSize: 12, color: '#000000', fontWeight: '600' }}>09123123123</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={mailIcon} resizeMode='contain' style={{ width: 16, height: 16, borderRadius: 8 }} />
              <Text style={{ textAlignVertical: 'center', marginLeft: 5, fontSize: 12, color: '#000000' }}>TFI@gmail.com</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}