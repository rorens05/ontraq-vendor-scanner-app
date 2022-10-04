import { NavigationContext } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, TouchableOpacity, ScrollView, Image } from 'react-native';
import DatePicker from '../../signup/components/DatePicker';
import RoundTextInput from './RoundTextInput';
import moment from 'moment';
import Button from './Button';
import Loader from '../../../components/FullscreenActivityIndicator';
import { isEmpty } from 'lodash'
import ProfileHeader from './ProfileHeader';
import { useForm } from 'react-hook-form';
import Input from '../../../components/form/Input';
const backArrow = require('../../../assets/left-arrow.png');
export default function GeneralInformation() {
  const navigation = useContext(NavigationContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('');
  const [validateAddress, setValidateAddress] = useState(true);
  const [validateFirstName, setValidateFirstName] = useState(true);
  const [validateLastName, setValidateLastName] = useState(true);
  const [validateBirthday, setValidateBirthday] = useState(true);
  const [dateModal, setDateModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [image, setImage] = useState(null);

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
              name='first_name'
              label='First Name'
              placeholder='Enter first name here'
              control={control}
              errors={errors}
              rules={{ required: true, maxLength: 20 }}
            />
            <Input
              name="last_name"
              label='Last Name'
              placeholder='Enter last name here'
              control={control}
              errors={errors}
              rules={{ required: true, maxLength: 20 }}
            />
            <Input
              name='address'
              label='Address'
              placeholder='Address'
              control={control}
              errors={errors}
              rules={{ required: true, maxLength: 20 }}
            />

            <TouchableOpacity
              onPress={() => setDateModal(true)}
              style={{ zIndex: 99 }}
            >
              <RoundTextInput
                value={birthday}
                placeholder={'Birthday'}
                placeholderTextColor={'#C5C5C5'}
                onChangeText={text => { setBirthday(text), setValidateBirthday(true) }}
                style={{ borderWidth: 1, borderColor: validateBirthday == true ? '#fff' : 'red' }}
                editable={false}
              />
            </TouchableOpacity>
            <View style={{ paddingVertical: 30, alignSelf: 'center' }}>
              <Button
                label={'Edit profile'}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </View>
          <DatePicker
            mode='date'
            openModal={dateModal}
            onCloseModal={() => setDateModal(!dateModal)}
            closeModalDate={value => {
              setBirthday(moment(value).format('MM/DD/YYYY'));
              setValidateBirthday(true);
              setDateModal(false);
            }}
          />
        </ScrollView>
        {loader && <Loader />}
      </View>
    </>
  );
}
