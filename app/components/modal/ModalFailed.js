import React, { useContext } from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../../styles'
import Button from './component/Button'
import iconFail from '../../assets/icon-material-error.png'
import { NavigationContext } from '@react-navigation/native'

export default function ModalFailed() {
  const navigation = useContext(NavigationContext);
  return (
    <View style={[styles.modal_size_failed, styles.flex_center, styles.upcoming_event_profile_image_container, styles.bg_white]}>
      <Image source={iconFail} styles={styles.variant_25_25} />
      <Text style={[styles.my_2, styles.h4]}>Not enough balance.</Text>
      <Text style={[styles.my_2, styles.h4, styles.mb_5]}>Please top up and try again</Text>
      <Button label={'Try again'} onPress={() => navigation.navigate('QrScanner')}/>
    </View>
  )
}

