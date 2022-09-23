import { NavigationContext } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, TouchableOpacity, ScrollView, Image } from 'react-native';
import RoundTextInput from './RoundTextInput';
import Button from './Button';
import Loader from '../../../components/FullscreenActivityIndicator';
import { isEmpty } from 'lodash'
import ProfileHeader from './ProfileHeader';
const backArrow = require('../../../assets/left-arrow.png');
export default function AccountSettings() {
  const navigation = useContext(NavigationContext);

  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validatePassword, setValidatePassword] = useState(true);
  const [validateMobileNumber, setValidateMobileNumber] = useState(true);
  const [validateEmail, setValidateEmail] = useState(true);
  const [loader, setLoader] = useState(false);
  const [image, setImage] = useState(null);

  const ValidateCredentials = () => {
    if (!isEmpty(mobileNumber) && !isEmpty(email) && !isEmpty(password)) {
      handleUpdateAccount()
    } else {
      alert('Please fill up the fields');
      if (mobileNumber == '') setValidateMobileNumber(false);
      if (email == '') setValidateEmail(false);
      if (password == '') setValidatePassword(false);
    }
  };

  const handleUpdateAccount = async () => {
    setLoader(true)
    let data = {
      mobileNumber,
      email,
      password,
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
              value={mobileNumber}
              placeholder={'Mobile Number'}
              placeholderTextColor={'#C5C5C5'}
              onChangeText={text => { setMobileNumber(text), setValidateMobileNumber(true) }}
              style={{ borderWidth: 1, borderColor: validateMobileNumber == true ? '#fff' : 'red' }}
              keyboardType='number-pad'
            />
            <RoundTextInput
              value={email}
              placeholder={'Email Address'}
              placeholderTextColor={'#C5C5C5'}
              onChangeText={text => { setEmail(text), setValidateEmail(true) }}
              style={{ borderWidth: 1, borderColor: validateEmail == true ? '#fff' : 'red' }}
              keyboardType='email-address'
            />
            <RoundTextInput
              value={password}
              placeholder={'Password'}
              placeholderTextColor={'#C5C5C5'}
              onChangeText={text => { setPassword(text), setValidatePassword(true) }}
              style={{ borderWidth: 1, borderColor: validatePassword == true ? '#fff' : 'red' }}
              secureTextEntry={true}
            />
            <View style={{ paddingVertical: 30, alignSelf: 'center' }}>
              <Button
                label={'Update Account'}
                onPress={() => ValidateCredentials()}
              />
            </View>
          </View>
        </ScrollView>
        {loader && <Loader />}
      </View>
    </>
  );
}
