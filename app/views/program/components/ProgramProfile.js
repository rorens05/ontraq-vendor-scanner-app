import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import { NavigationContext } from '@react-navigation/native';
import { getParams } from '../../../utils/navigation_helper';
import SpeakerItem from '../../speaker/components/SpeakerItem';
const backArrow = require('../../../assets/left-arrow.png')
const tfiBg = require('../../../assets/ceap-tfi-bg.png')
const telephoneIcon = require('../../../assets/ceap-telephone.png')
const mailIcon = require('../../../assets/ceap-mail.png')
const fbIcon = require('../../../assets/ceap-fb.png')
const instaIcon = require('../../../assets/ceap-insta.png')
const twitterIcon = require('../../../assets/ceap-twitter.png')
const { width, height } = Dimensions.get('screen');
export default function ProgramProfile() {
  const navigation = useContext(NavigationContext);
  const params = getParams(navigation);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ position: 'absolute', zIndex: 1 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={backArrow}
            resizeMode='contain'
            style={{ height: 25, width: 25, marginHorizontal: 25, marginVertical: 20, tintColor: '#002E8A' }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ position: 'absolute', zIndex: 1, alignSelf: 'center' }}>
        <Image
          source={params?.item?.image}
          resizeMode='contain'
          style={{ height: 200, width: 200, marginHorizontal: 25, marginVertical: 20 }}
        />
      </View>
      <Image source={tfiBg} resizeMode='cover' style={{ width, height: 250 }} />
      <View style={{ flex: 1, padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: -20, backgroundColor: '#fff' }}>
        <Text style={{ color: '#000000', fontSize: 32, fontWeight: 'bold' }}>{params?.item?.title}</Text>
        <Text style={{ color: '#000000', fontSize: 16, fontWeight: '300', marginTop: 10 }}>{params?.item?.venue}</Text>
        <Text style={{ color: '#D82E2E', fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>{params?.item?.date}</Text>
        {params?.item?.description &&
          <>
            <Text style={{ color: '#000000', fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>Overview:</Text>
            <Text style={{ color: '#000000', fontSize: 16, fontWeight: '300' }}>{params?.item?.description}</Text>
          </>
        }
        {params?.item?.speakers.length != 0 &&
          <>
            <Text style={{ color: '#000000', fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>Speakers:</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              {params?.item?.speakers.map((item, key) => {
                return (
                  <SpeakerItem key={key} item={item} />
                );
              })}
            </View>
          </>
        }
      </View>
    </View>
  )
}
