import { NavigationContext } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, TouchableOpacity, ScrollView, Image } from 'react-native';
import RoundTextInput from './RoundTextInput';
import Button from './Button';
import Loader from '../../../components/FullscreenActivityIndicator';
import { isEmpty } from 'lodash'
import ProfileHeader from './ProfileHeader';
import { useForm } from 'react-hook-form';
import Input from '../../../components/form/Input';
import PasswordInput from '../../../components/form/PasswordInput';
import { EMAIL_REGEX, PHONE_REGEX } from '../../../../constants/regex';
const backArrow = require('../../../assets/left-arrow.png');
export default function AccountSettings() {
  const navigation = useContext(NavigationContext);
  const [loader, setLoader] = useState(false);
  const [image, setImage] = useState(null);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleUpdateAccount = async data => {
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
    <>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#fff' }}>
        <Image
          source={backArrow}
          resizeMode='contain'
          style={{ height: 25, width: 25, marginHorizontal: 25, marginVertical: 20, tintColor: '#002E8A' }}
        />
      </TouchableOpacity>
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <ScrollView>
          <ProfileHeader name={'Joan Dela Cruz'} position={'Attendees'} image={image} setImage={setImage} />
          <View style={{ marginHorizontal: 20 }}>
            <Input
              name="mobile_number"
              label='Mobile Number'
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
            <Input
              name="email"
              label='Email'
              placeholder='Email'
              control={control}
              errors={errors}
              rules={{
                required: true,
                pattern: {value: EMAIL_REGEX, message: 'Invalid email'},
              }}
            />
            <PasswordInput
              name="password"
              label='Current Password'
              placeholder='Current password'
              control={control}
              errors={errors}
              rules={{
                required: true,
                maxLength: 20,
              }}
            />
            <PasswordInput
              name="confirm_password"
              label='New Password'
              placeholder='New Password'
              control={control}
              errors={errors}
              rules={{
                required: true,
                maxLength: 20,
              }}
            />
            <View style={{ paddingVertical: 30, alignSelf: 'center' }}>
              <Button
                label={'Update Account'}
                onPress={handleSubmit(handleUpdateAccount)}
              />
            </View>
          </View>
        </ScrollView>
        {loader && <Loader />}
      </View>
    </>
  );
}
