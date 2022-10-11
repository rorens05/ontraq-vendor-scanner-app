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
        <View style={[styles.border_gray, styles.p_5, {padding: 20, borderRadius: 10}]}>
          <View style={[styles.flex_center]}>
            <Image source={logo} style={[styles.variant_70_70, styles.mb_5]} />
          </View>
          <View>
            <Text style={[styles.h1, styles.text_black]}>Juan Dela Cruz</Text>
            <Text style={[styles.h6, styles.text_black]}>Name</Text>
            <Text style={[styles.h1, styles.text_black]}>Quezon City, Philippines</Text>
            <Text style={[styles.h6, styles.text_black]}>Address</Text>
            <Text style={[styles.h1, styles.text_black]}>000-0000-000</Text>
            <Text style={[styles.mb_5, styles.h6, styles.text_black]}>Student Number</Text>
          </View>
        </View>
        <View>
          <Input
              name="amount"
              placeholder='Enter amount here'
              control={control}
              errors={errors}
              ifMultiLine={false}
              rules={{
                required: true,
              }}
            />
            <Input
              name="items"
              placeholder='Enter items here'
              control={control}
              errors={errors}
              ifMultiLine
              rules={{
                required: true,
              }}
            />
          </View>
          <View style={{alignItems: 'center'}}>
              <Button label={'SUBMIT'} onPress={handleSubmit(onSubmit)} />
          </View>
      </View>
    </MainContainer>
  )
}
