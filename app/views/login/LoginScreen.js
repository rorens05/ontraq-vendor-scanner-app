import React, {useState, useContext} from 'react'
import {View, Text, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContext } from '@react-navigation/native';
import logo from '../../assets/ceap-logo.png'
import Button from './components/Button'
import InputText from './components/InputText'
import {isEmpty} from 'lodash'
const backArrow = require('../../assets/left-arrow.png')

export default function LoginScreen() {
    const navigation = useContext(NavigationContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validateUsername, setValidateUsername] = useState(true);
    const [validatePassword, setValidatePassword] = useState(true);

    const ValidateCredentials = () => {
        if (!isEmpty(email) && !isEmpty(password)) {
          alert('Under Development');

        } else {
          alert('Please enter your email or password!');
          if(email == '')setValidateUsername(false);
          if(password == '')setValidatePassword(false);
        }
      };
  return (
    <>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor: '#fff'}}>
          <Image
            source={backArrow}
            resizeMode='contain'
            style={{ height: 25, width: 25, marginHorizontal: 25, marginVertical: 20, tintColor: '#002E8A' }}
          />
      </TouchableOpacity>
      <View style={{flex: 1, justifyContent: 'space-evenly', backgroundColor: '#fff'}}>
        <View style={{alignSelf: 'center'}}>
          <Image source={logo} style={{width: 200, height: 200}} />
        </View>
        <View style={{ paddingHorizontal: 30}}>
          <Text style={{color: '#002E8A', fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>Welcome back!</Text>
          <Text style={{color: '#9A9A9A', fontSize: 16, marginBottom: 30, fontWeight:'600'}}>Please sign in to your account</Text>
          <View>
            <InputText
              value={email}
              placeholder={'E-mail address'}
              placeholderTextColor={'#9A9A9A'}
              onChangeText={text => {setEmail(text),setValidateUsername(true)}}
              style={{borderWidth: 1, borderColor: validateUsername == true ? '#fff' : 'red'}}
            />
            <InputText
              value={password}
              placeholder={'Password'}
              placeholderTextColor={'#9A9A9A'}
              onChangeText={text => {setPassword(text), setValidatePassword(true)}}
              secureTextEntry={true}
              style={{borderWidth: 1, borderColor: validatePassword == true ? '#fff' : 'red'}}
              
            />
            <TouchableOpacity onPress={() => alert('Under Development')}>
              <Text style={{textAlign: 'right',color: '#002E8A', fontSize: 16, fontWeight: '200', marginBottom: 20}}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
              <Button label={'Sign in'} onPress={() => ValidateCredentials()} />
          </View>
        </View>
      </View>
    </>
  )
}
