import React, { useContext, useState } from 'react';
import { NavigationContext } from '@react-navigation/native';
import { View, Image, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import RadiusTextInput from './components/RadiusTextInput';
import Button from './components/Button';
import DatePickerMonth from './components/DatePicker';
import moment from 'moment';
import Loader from '../../components/FullscreenActivityIndicator';
import logo from '../../assets/ceap-logo.png'

const backArrow = require('../../assets/left-arrow.png')
const birthdayIcon = require('../../assets/calendarIcon.png')

export default function SignUp() {
  const navigation = useContext(NavigationContext);
  const [dateModal, setDateModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSignUp = async () => {
    setLoader(true)
    if(password === confirmPassword){
      let data = {
        firstname: firstName,
        lastname: lastName,
        address: address,
        emailAddress: email,
        birthDate: birthday,
        phoneNumber: number,
        password: password,
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
    } else {
      alert('Password does not match!')
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
      <View style={{ flex: 1, justifyContent: 'space-evenly', backgroundColor: '#fff' }}>
        <View style={{ alignSelf: 'center' }}>
          <Image source={logo} style={{ width: 144, height: 144 }} />
        </View>
        <View style={{ padding: 30 }}>
          <Text style={{ color: '#002E8A', fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Hi!</Text>
          <Text style={{ color: '#9A9A9A', fontSize: 16, marginBottom: 30, fontWeight: '600' }}>Create new Account</Text>
          <ScrollView>
            <View style={{}}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, marginRight: 10 }}>
                  <RadiusTextInput
                    value={firstName}
                    placeholder={'First Name'}
                    onChange={text => setFirstName(text)}
                  />
                </View>
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <RadiusTextInput
                    value={lastName}
                    placeholder={'Last Name'}
                    onChange={text => setLastName(text)}
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
              <RadiusTextInput
                value={address}
                placeholder={'Address'}
                onChange={text => setAddress(text)}
              />
              <RadiusTextInput
                value={email}
                placeholder={'Email'}
                onChange={text => setEmail(text)}
              />
              <RadiusTextInput
                value={number}
                placeholder={'Mobile Number'}
                onChange={text => setNumber(text)}
              />
              <RadiusTextInput
                value={password}
                placeholder={'Password'}
                onChange={text => setPassword(text)}
                secureTextEntry={true}
              />
              <RadiusTextInput
                value={confirmPassword}
                placeholder={'Re-password'}
                onChange={text => setConfirmPassword(text)}
                secureTextEntry={true}
              />
            </View>
            <View style={{ flex: 1, paddingBottom: 30, alignSelf: 'center'}}>
              <Button
                label={'Sign up'}
                onPress={() => handleSignUp()}
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
    </>
  )
}
