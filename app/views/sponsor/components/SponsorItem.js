import React, {useContext} from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { NavigationContext } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');
import tfiLogo from '../../../assets/ceap-tfi-logo.png'
import mailIcon from '../../../assets/ceap-mail.png'
import telephoneIcon from '../../../assets/ceap-telephone.png'
export default function SponsorItem({ item, label }) {
  const navigation = useContext(NavigationContext);
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
        onPress={() => navigation.navigate('SponsorProfile', {item, label})}
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
          <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>{item?.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: item?.visited ? '#29CA4D' : '#CA2929' }} />
            <Text style={{ textAlignVertical: 'center', marginLeft: 5, fontSize: 12, color: '#000000' }}>{item?.visited ? 'Visited' : 'Not Visited'}</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 3 }}>
              <Image source={telephoneIcon} resizeMode='contain' style={{ width: 16, height: 16, borderRadius: 8 }} />
              <Text style={{ textAlignVertical: 'center', marginLeft: 5, fontSize: 12, color: '#000000', fontWeight: '600' }}>{item?.contactNumber}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={mailIcon} resizeMode='contain' style={{ width: 16, height: 16, borderRadius: 8 }} />
              <Text style={{ textAlignVertical: 'center', marginLeft: 5, fontSize: 12, color: '#000000' }}>{item?.email}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}