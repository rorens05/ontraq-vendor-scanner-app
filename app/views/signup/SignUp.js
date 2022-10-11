import React, { useContext, useState } from 'react';
import { NavigationContext } from '@react-navigation/native';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import RadiusTextInput from './components/RadiusTextInput';
import Button from './components/Button';
import DatePickerMonth from './components/DatePicker';
import moment from 'moment';
import Loader from '../../components/FullscreenActivityIndicator';
import logo from '../../assets/ceap-logo.png'
import { useForm } from 'react-hook-form';
import Input from '../../components/form/Input';
import PasswordInput from '../../components/form/PasswordInput';
import { EMAIL_REGEX, PHONE_REGEX } from '../../../constants/regex';
import MainContainer from '../../components/layout/MainContainer';
import BackButton from '../../components/BackButton';
import styles from '../../styles';

const birthdayIcon = require('../../assets/calendarIcon.png')

export default function SignUp() {
  const navigation = useContext(NavigationContext);
  const [dateModal, setDateModal] = useState(false);
  const [birthday, setBirthday] = useState('');
  const [loader, setLoader] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    alert(JSON.stringify(data))
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
      <View style={[styles.flex_1, styles.justify_content_space_evenly]}>
        <View style={styles.flex_center}>
          <Image source={logo} style={styles.variant_144_144} />
        </View>
        <View style={styles.p_5}>
          <Text style={[styles.h1, styles.mb_2, styles.text_blue]}>Hi!</Text>
          <Text style={[styles.mb_5, styles.h4, styles.text_gray]}>Create new Account</Text>
          <ScrollView>
            <View>
              <View style={styles.flex_row}>
                <View style={[styles.flex_1, styles.mr_2]}>
                  <Input
                    name="first_name"
                    placeholder='Enter first name here'
                    control={control}
                    errors={errors}
                    rules={{ required: true, maxLength: 20 }}
                  />
                </View>
                <View style={[styles.flex_1, styles.ml_2]}>
                  <Input
                    name="last_name"
                    placeholder='Enter last name here'
                    control={control}
                    errors={errors}
                    rules={{ required: true, maxLength: 20 }}
                  />
                </View>
              </View>
              <TouchableOpacity
                onPress={() => setDateModal(true)}
              >
                <RadiusTextInput
                  value={birthday}
                  placeholder={'Birthday'}
                  onChange={text => setBirthday(text)}
                  withIcon={birthdayIcon}
                />
              </TouchableOpacity>
              <Input
                name="address"
                placeholder='Address'
                control={control}
                errors={errors}
                rules={{ required: true, maxLength: 20 }}
              />
              <Input
                name="email"
                placeholder='Email'
                control={control}
                errors={errors}
                rules={{
                  required: true,
                  pattern: {value: EMAIL_REGEX, message: 'Invalid email'},
                }}
              />
              <Input
                name="mobile_number"
                placeholder='Mobile Number'
                control={control}
                errors={errors}
                rules={{
                  required: true,
                  pattern: {
                    value: PHONE_REGEX,
                    message: 'Invalid phone number e.g.(09123456789)',
                  },
                }}
              />
              <PasswordInput
                name="password"
                placeholder='Password'
                control={control}
                errors={errors}
                rules={{
                  required: true,
                  maxLength: 20,
                  validate: {
                    value: async value => {
                      if (value === watch('confirm_password')) {
                        if (errors['confirm_password'] != null) {
                          errors['confirm_password'] = null;
                        }
                        return true;
                      } else {
                        return 'Password mismatch';
                      }
                    },
                  },
                }}
              />
              <PasswordInput
                name="confirm_password"
                placeholder='Re-Password'
                control={control}
                errors={errors}
                rules={{
                  required: true,
                  maxLength: 20,
                  validate: {
                    value: async value => {
                      if (value === watch('password')) {
                        if (errors['password'] != null) {
                          errors['password'] = null;
                        }
                        return true;
                      } else {
                        return 'Password mismatch';
                      }
                    },
                  },
                }}
              />
            </View>
            <View style={[styles.pb_5, styles.flex_center, styles.flex_1]}>
              <Button
                label={'Sign up'}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </ScrollView>
          <DatePickerMonth
            mode='date'
            openModal={dateModal}
            onCloseModal={() => setDateModal(!dateModal)}
            closeModalDate={value => {
              setBirthday(moment(value).format('MMMM DD, YYYY'));
              setDateModal(false);
            }}
          />
        </View>
        {loader && <Loader />}
      </View>
    </MainContainer>
  )
}
