import React, {useState, useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import logo from '../../assets/ceap-logo.png';
import {NavigationContext} from '@react-navigation/native';
import InputText from '../login/components/InputText';
import {isEmpty} from 'lodash';
import Button from '../login/components/Button';
import Input from '../../components/form/Input';
import {EMAIL_REGEX} from '../../../constants/regex';
import {useForm} from 'react-hook-form';
import MainContainer from '../../components/layout/MainContainer';
const backArrow = require('../../assets/left-arrow.png');
export default function ForgotPassword() {
  const navigation = useContext(NavigationContext);
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = async data => {
    alert(JSON.stringify(data));
    // const response = await new Auth().register({user: data});
    // setLoader(true);
    // if (response.ok) {
    //   await AsyncStorage.setItem('token', response.data.token);
    //   await refreshUser();
    //   await refreshStudent();
    //   await navigation.replace('Dashboard');
    // } else {
    //   alert(response?.data?.errors?.join('\n'));
    // }
    // setLoader(false);
  };

  return (
    <MainContainer>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{backgroundColor: '#fff'}}>
        <Image
          source={backArrow}
          resizeMode="contain"
          style={{
            height: 25,
            width: 25,
            marginVertical: 20,
            tintColor: '#002E8A',
          }}
        />
      </TouchableOpacity>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{paddingVertical: 50}}>
          <Image
            source={logo}
            style={{width: 200, height: 200, alignSelf: 'center'}}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text
            style={{
              color: '#002E8A',
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Forgot password?
          </Text>
          <Text style={{color: '#9A9A9A', fontSize: 16, marginBottom: 10}}>
            Please enter your email address below
          </Text>
          <View style={{marginBottom: 10}}>
            <Input
              name="email"
              placeholder="E-mail address"
              control={control}
              errors={errors}
              rules={{
                required: true,
                pattern: {value: EMAIL_REGEX, message: 'Invalid email'},
              }}
            />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Button label={'SEND ACCESS CODE'} onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </MainContainer>
  );
}
