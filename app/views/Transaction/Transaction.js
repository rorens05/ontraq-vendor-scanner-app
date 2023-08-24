import React, {useContext, useState} from 'react'
import {View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Alert} from 'react-native'
import { NavigationContext } from '@react-navigation/native';
import defaultProfile from '../../assets/profile_icon.png'
import Button from '../../components/Button'
import {useForm} from 'react-hook-form';
import Input from '../../components/form/Input';
import MainContainer from '../../components/layout/MainContainer';
import styles from '../../styles';
import BackButton from '../../components/BackButton';
import {getParams} from '../../utils/navigation_helper'
import Scanner from '../../api/Scanner';
import AsyncStorage from '@react-native-community/async-storage';
import Modal from '../../components/modal/Modal';
import TypeModal from './components/Modal';

export default function Transaction() {
    const navigation = useContext(NavigationContext);
    const params = getParams(navigation);
    const data = params?.data;
    const [showModal, setShowModal] = useState(false)
    const [success, setSuccess] = useState(null)
    const [type, setType] = useState('');
    const [typeModal, setTypeModal] = useState(false);

    const showAlert = (forDemo) => {
      Alert.alert(
        'Transaction',
        `Do you want to proceed this transaction? \n
        Price: ${forDemo?.amount} \n
        Type: ${type}
        `,
        [
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'Confirm',
            onPress: async () => {
              let code = await AsyncStorage.getItem('code');
                const temp = {
                    "amount": forDemo?.amount,
                    "description": type,
                    "qr_code": data?.qr_token,
                    "scanner_code": code,
                }
                const response = await new Scanner().createTransaction(temp);
                if (response?.ok) {
                  setShowModal(true)
                  setSuccess(response?.ok)
                }
            },
          },
        ],
        'secure-text',
      );
    }

    const {
      control,
      handleSubmit,
      watch,
      formState: {errors},
    } = useForm();
  
    const onSubmit = async forDemo => {
    // alert(JSON.stringify(forDemo))
    if(type == ''){
      alert('Please select type.')
      }else{
        showAlert(forDemo)
      }
    };

    // alert(JSON.stringify(data))
  return (
    <>
    <MainContainer>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={[styles.flex_1, styles.justify_content_space_evenly]}>
        <ScrollView>
          <View style={[styles.border_gray, styles.p_5, styles.border_10]}>
            <View style={[styles.flex_center]}>
              <Image source={data?.user?.image ? {uri: data?.user?.image} : defaultProfile} style={[styles.variant_70_70, styles.mb_5]} />
            </View>
            <View>
              <Text style={[styles.h1, styles.text_black]}>{data?.user?.name}</Text>
              {/* <Text style={[styles.h6, styles.text_gray, styles.pb_3]}>Name</Text>
              <Text style={[styles.h1, styles.text_black]}>{data?.user?.address || "Not available"}</Text> */}
              <Text style={[styles.h6, styles.text_gray, styles.pb_3]}>Address</Text>
              <Text style={[styles.h1, styles.text_black]}>{data?.student_no}</Text>
              <Text style={[styles.mb_5, styles.h6, styles.text_gray]}>Student Number</Text>
            </View>
          </View>
          <View>
            <Input
                name="amount"
                placeholder='Enter amount here'
                control={control}
                errors={errors}
                ifMultiLine={false}
                keyboardType={'phone-pad'}
                rules={{
                  required: true,
                }}
              />
              <TouchableOpacity onPress={() => setTypeModal(!typeModal) }>
                <Text style={{
                  borderWidth: StyleSheet.hairlineWidth,
                  minHeight: 40,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  marginBottom: 12,
                  color: '#000',
                  paddingHorizontal: 20,
                  textAlignVertical: 'center'
                  }}>
                    {type == '' ? 'Select type' : type}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
                <Button label={'SUBMIT'} onPress={handleSubmit(onSubmit)} />
            </View>
        </ScrollView>
      </View>
    </MainContainer>
      { showModal && <Modal status={success} /> }
      {typeModal && <TypeModal setType={setType} setTypeModal={setTypeModal} />}
    </>
  )
}
