import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {getParams} from '../../../utils/navigation_helper';
import Button from './Button';
import {ScrollView} from 'react-native-gesture-handler';
const backArrow = require('../../../assets/left-arrow.png');
const tfiBg = require('../../../assets/ceap-tfi-bg.png');
const {width, height} = Dimensions.get('screen');
export default function EventProfile() {
  const navigation = useContext(NavigationContext);
  const params = getParams(navigation);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <ImageBackground
          source={tfiBg}
          resizeMode="cover"
          style={{width: '100%', height: 250}}>
          <View style={{}}>
            <View style={{position: 'absolute', zIndex: 1}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={backArrow}
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25,
                    marginHorizontal: 25,
                    marginVertical: 20,
                    tintColor: '#fff',
                  }}
                />
              </TouchableOpacity>
            </View>
            <Image
              source={params?.image}
              resizeMode="cover"
              style={{
                height: '100%',
                width: '100%',
              }}
            />
          </View>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            padding: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            marginTop: -20,
            backgroundColor: '#fff',
          }}>
          <Text style={{color: '#000000', fontSize: 32, fontWeight: 'bold'}}>
            {'CEAP Conference and Expo'}
          </Text>
          <Text
            style={{
              color: '#D82E2E',
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            {'5 August, 2022 10:00 AM - 5:30 PM'}
          </Text>
          <View style={{marginVertical: 10}}>
            <Button
              label={'Join Event'}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
          <Text
            style={{
              color: '#000000',
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Overview:
          </Text>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '300'}}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure'
            }
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
