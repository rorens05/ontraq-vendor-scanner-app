import React, {useContext} from 'react'
import {View, Text, Image} from 'react-native'
import logo from '../../assets/ceap-logo.png'
import Button from './components/Button'
import { NavigationContext } from '@react-navigation/native';

export default function Login() {
  const navigation = useContext(NavigationContext);

  return (
    <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#fff'}}>
      <View>
        <Image source={logo} style={{width: 200, height: 200}} />
      </View>
      <View style={{alignItems: 'center', paddingHorizontal: 40}}>
        <Text style={{color: '#002E8A', fontSize: 24, fontWeight: 'bold'}}>Hello!</Text>
        <Text style={{color: '#9A9A9A', fontSize: 16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Button label={'Sign in'} onPress={() => navigation.navigate('LoginScreen')} />
        <View style={{alignItems: 'center', flexDirection: 'row', paddingVertical: 10}}>
          <View style={{height: 2, width: 100, backgroundColor: '#002E8A'}} />
          <Text style={{color: '#9A9A9A', fontSize: 16, paddingHorizontal: 5}}>OR</Text>
          <View style={{height: 2, width: 100, backgroundColor: '#002E8A'}} />
        </View>
        <Button label={'Sign up'} onPress={() => alert('Under Development')} />
      </View>
    </View>
  )
}
