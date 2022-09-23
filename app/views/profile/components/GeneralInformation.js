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

  const ValidateCredentials = () => {
    if (!isEmpty(firstName) && !isEmpty(lastName) && !isEmpty(address) && !isEmpty(birthday)) {
      handleEdit()
    } else {
      alert('Please fill up the fields');
      if (firstName == '') setValidateFirstName(false);
      if (lastName == '') setValidateLastName(false);
      if (address == '') setValidateAddress(false);
      if (birthday == '') setValidateBirthday(false);
    }
  };

  const handleEdit = async () => {
    setLoader(true)
    let data = {
      firstName,
      lastName,
      address,
      birthday,
    }
    // let response = await new ContactAPI().addContact(schoolId, data)
    if (true) {
      // console.log({ response })
      alert('Under Development')
      setLoader(false)
    } else {
      alert('Under Development')
      setLoader(false)
    }
  }

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
            <RoundTextInput
              value={firstName}
              placeholder={'First Name'}
              placeholderTextColor={'#C5C5C5'}
              onChangeText={text => { setFirstName(text), setValidateFirstName(true) }}
              style={{ borderWidth: 1, borderColor: validateFirstName == true ? '#fff' : 'red' }}
            />
            <RoundTextInput
              value={lastName}
              placeholder={'Last Name'}
              placeholderTextColor={'#C5C5C5'}
              onChangeText={text => { setLastName(text), setValidateLastName(true) }}
              style={{ borderWidth: 1, borderColor: validateLastName == true ? '#fff' : 'red' }}
            />
            <RoundTextInput
              value={address}
              placeholder={'Address'}
              placeholderTextColor={'#C5C5C5'}
              onChangeText={text => { setAddress(text), setValidateAddress(true) }}
              style={{ borderWidth: 1, borderColor: validateAddress == true ? '#fff' : 'red' }}
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
                onPress={() => ValidateCredentials()}
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
