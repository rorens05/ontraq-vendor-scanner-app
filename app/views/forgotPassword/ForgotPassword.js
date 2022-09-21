import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import logo from '../../assets/ceap-logo.png'
import { NavigationContext } from '@react-navigation/native';
import InputText from '../login/components/InputText';
import { isEmpty } from 'lodash'
import Button from '../login/components/Button';
const backArrow = require('../../assets/left-arrow.png')
export default function ForgotPassword() {
  const navigation = useContext(NavigationContext);
  const [email, setEmail] = useState('');
  const [validateUsername, setValidateUsername] = useState(true);

  const ValidateCredentials = () => {
    if (!isEmpty(email)) {
      alert('Under Development');

    } else {
      alert('Please enter your email');
      if (email == '') setValidateUsername(false);
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
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ paddingVertical: 50 }}>
          <Image source={logo} style={{ width: 200, height: 200, alignSelf: 'center' }} />
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ color: '#002E8A', fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Forgot password?</Text>
          <Text style={{ color: '#9A9A9A', fontSize: 16, marginBottom: 10 }}>Please enter your email address below</Text>
          <View style={{ marginBottom: 10 }}>
            <InputText
              value={email}
              placeholder={'E-mail address'}
              placeholderTextColor={'#9A9A9A'}
              onChangeText={text => { setEmail(text), setValidateUsername(true) }}
              style={{ borderWidth: 1, borderColor: validateUsername == true ? '#fff' : 'red' }}
            />
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Button label={'SEND ACCESS CODE'} onPress={() => ValidateCredentials()} />
        </View>
      </View>
    </>
  )
}
