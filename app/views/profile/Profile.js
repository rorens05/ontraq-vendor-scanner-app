import { CommonActions, NavigationContext } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import ProfileTab from './components/ProfileTab';
const arrow = require('../../assets/arrow.png');
const avatar = require('../../assets/ceap-avatar.png');
const backArrow = require('../../assets/left-arrow.png');
const genInfo = require('../../assets/ceap-gen-info.png');
const accSet = require('../../assets/ceap-acc-set.png');
const logoutIcon = require('../../assets/ceap-logout.png');
export default function Profile() {
  const navigation = useContext(NavigationContext);

  const showAlert = () => {
    Alert.alert(
      'Wait a minute!',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => { },
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            confirmLogOut();
          },
        },
      ],
      'secure-text',
    );
  };

  const confirmLogOut = async () => {
    try {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'SplashScreen' }],
        }),
      );
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#fff' }}>
        <Image
          source={backArrow}
          resizeMode='contain'
          style={{ height: 25, width: 25, marginHorizontal: 25, marginVertical: 20, tintColor: '#002E8A' }}
        />
      </TouchableOpacity>
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <View style={{ flexDirection: 'row', padding: 30 }}>
          <Image
            source={avatar}
            style={{
              height: 90,
              width: 90,
            }}
            resizeMode="contain"
          />
          <View style={{ justifyContent: 'center', marginLeft: 20 }}>
            <Text style={{ color: '#17254A', fontSize: 24, fontWeight: 'bold' }}>Joan Dela Cruz</Text>
            <Text style={{ color: '#707070', fontSize: 16, fontWeight: '400' }}>Attendees</Text>
          </View>
        </View>
        <ProfileTab icon={genInfo} label={'General Information'} onPress={() => alert('Under Development')} arrow={arrow} />
        <ProfileTab icon={accSet} label={'Account Settings'} onPress={() => alert('Under Development')} arrow={arrow} />
        <ProfileTab icon={logoutIcon} label={'Logout'} onPress={() => showAlert()} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center' }}>
        </View>
      </View>
    </>
  );
}
