import React, {useContext, useState} from 'react'
import {View, Text, Image, ScrollView} from 'react-native'
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from '../../components/modal/Modal';

export default function Transaction() {
    const navigation = useContext(NavigationContext);
    const params = getParams(navigation);
    const data = params?.data;
    const [showModal, setShowModal] = useState(false)
    const [success, setSuccess] = useState(null)

    const {
      control,
      handleSubmit,
      watch,
      formState: {errors},
    } = useForm();
  
    const onSubmit = async forDemo => {
    // alert(JSON.stringify(forDemo))
    let code = await AsyncStorage.getItem('code');
    const temp = {
        "amount": forDemo?.amount,
        "description": forDemo?.items,
        "qr_code": data?.qr_token,
        "scanner_code": code,
      }
      const response = await new Scanner().createTransaction(temp);
      if (response?.ok) {
        setShowModal(true)
        setSuccess(response?.ok)
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
              <Text style={[styles.h6, styles.text_gray, styles.pb_3]}>Name</Text>
              <Text style={[styles.h1, styles.text_black]}>{data?.user?.address || "Not available"}</Text>
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
        </ScrollView>
      </View>
    </MainContainer>
      { showModal && <Modal status={success} /> }
    </>
  )
}
