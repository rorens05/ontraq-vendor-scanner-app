import React, {useContext} from 'react'
import {View, Text, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContext } from '@react-navigation/native';
import logo from '../../assets/ceap-logo.png'
import Button from './components/Button'
import {useForm} from 'react-hook-form';
import Input from '../../components/form/Input';
import PasswordInput from '../../components/form/PasswordInput';
import { EMAIL_REGEX } from '../../../constants/regex';
const backArrow = require('../../assets/left-arrow.png')

export default function LoginScreen() {
    const navigation = useContext(NavigationContext);
    const {
      control,
      handleSubmit,
      watch,
      formState: {errors},
    } = useForm();
  
    const onSubmit = async data => {
      alert(JSON.stringify(data))
      // const response = await new Auth().register({user: data});
      // setLoader(true);
      // if (response.ok) {
      //   await AsyncStorage.setItem('token', response.data.token);
      //   await refreshUser();
      //   await refreshStudent();
        await navigation.replace('Home');
      // } else {
      //   alert(response?.data?.errors?.join('\n'));
      // }
      // setLoader(false);
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
            <Input
              name="email"
              placeholder='Enter email here'
              control={control}
              errors={errors}
              rules={{
                required: true,
                pattern: {value: EMAIL_REGEX, message: 'Invalid email'},
              }}
            />
            <PasswordInput
              name="password"
              placeholder='Enter password here'
              control={control}
              errors={errors}
              rules={{
                required: true,
                maxLength: 20,
              }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={{textAlign: 'right',color: '#002E8A', fontSize: 16, fontWeight: '200', marginBottom: 20}}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
              <Button label={'Sign in'} onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </View>
    </>
  )
}
