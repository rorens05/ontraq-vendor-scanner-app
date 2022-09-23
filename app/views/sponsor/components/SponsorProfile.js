import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import { NavigationContext } from '@react-navigation/native';
import { getParams } from '../../../utils/navigation_helper';
import ContactItem from './ContactItem';
const backArrow = require('../../../assets/left-arrow.png')
const tfiBg = require('../../../assets/ceap-tfi-bg.png')
const telephoneIcon = require('../../../assets/ceap-telephone.png')
const mailIcon = require('../../../assets/ceap-mail.png')
const fbIcon = require('../../../assets/ceap-fb.png')
const instaIcon = require('../../../assets/ceap-insta.png')
const twitterIcon = require('../../../assets/ceap-twitter.png')
const websiteIcon = require('../../../assets/ceap-website.png')
const { width, height } = Dimensions.get('screen');
export default function SponsorProfile() {
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
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{ color: '#000000', fontSize: 32, fontWeight: 'bold' }}>{params?.item?.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}> 
            <View style={{height: 14, width: 14, margin: 3, borderRadius: 7, backgroundColor: params?.item?.visited ? '#29CA4D' : '#CA2929'}} />
            <Text style={{color: '#000000', fontSize: 16, fontWeight: '400', marginLeft: 5}}>{params?.item?.visited ? 'Visited' : 'Not Visited'}</Text>
          </View>
        </View>
        <Text style={{ color: '#D82E2E', fontSize: 16, fontWeight: '400' }}>{params?.label}</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginVertical: 10,
          }}>
          {params?.item?.fb && <ContactItem icon={fbIcon} label={params?.item?.fb} />}
          {params?.item?.instagram && <ContactItem icon={instaIcon} label={params?.item?.instagram} />}
          {params?.item?.twitter && <ContactItem icon={twitterIcon} label={params?.item?.twitter} />}
          {params?.item?.contactNumber && <ContactItem icon={telephoneIcon} label={params?.item?.contactNumber} />}
          {params?.item?.email && <ContactItem icon={mailIcon} label={params?.item?.email} />}
          {params?.item?.website && <ContactItem icon={websiteIcon} label={params?.item?.website} />}
        </View>
        {params?.item?.description &&
          <>
            <Text style={{ color: '#000000', fontSize: 24, fontWeight: 'bold' }}>Description</Text>
            <Text style={{ color: '#000000', fontSize: 16, fontWeight: '300' }}>{params?.item?.description}</Text>
          </>
        }
      </View>
    </View>
  )
}
