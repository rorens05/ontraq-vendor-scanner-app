import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import logo from '../../assets/ceap-logo.png';
import {NavigationContext} from '@react-navigation/native';
import Button from '../login/components/Button';
import Input from '../../components/form/Input';
import {EMAIL_REGEX} from '../../../constants/regex';
import {useForm} from 'react-hook-form';
import MainContainer from '../../components/layout/MainContainer';
import BackButton from '../../components/BackButton';
import styles from '../../styles';
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
      <BackButton onPress={() => navigation.goBack()} />
      <View style={styles.flex_1}>
        <View style={[styles.py_5, styles.flex_center]}>
          <Image
            source={logo}
            style={styles.mainLogo}
          />
        </View>
        <View style={styles.px_5}>
          <Text
            style={[styles.mb_2, styles.h1, styles.text_blue]}>
            Forgot password?
          </Text>
          <Text style={[styles.mb_2, styles.h5, styles.text_gray]}>
            Please enter your email address below
          </Text>
          <View style={styles.mb_2}>
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
        <View style={styles.flex_center}>
          <Button label={'SEND ACCESS CODE'} onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </MainContainer>
  );
}
