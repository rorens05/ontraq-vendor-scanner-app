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
import MainContainer from '../../components/layout/MainContainer';
import styles from '../../styles';
import BackButton from '../../components/BackButton';

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
    <MainContainer>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={[styles.flex_1, styles.justify_content_space_evenly]}>
        <View style={styles.flex_center}>
          <Image source={logo} style={styles.mainLogo} />
        </View>
        <View style={{ }}>
          <Text style={[styles.h1, styles.mb_2, styles.text_blue]}>Welcome back!</Text>
          <Text style={[styles.mb_5, styles.h4, styles.text_gray]}>Please sign in to your account</Text>
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
              <Text style={[styles.text_blue, styles.mb_5, styles.forgot_password]}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
              <Button label={'Sign in'} onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </View>
    </MainContainer>
  )
}
