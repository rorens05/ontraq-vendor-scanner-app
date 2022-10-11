import React, { useContext } from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../../styles'
import Button from './component/Button'
import iconSuccess from '../../assets/icon-success.png'
import { NavigationContext } from '@react-navigation/native'

export default function ModalSuccess() {
  const navigation = useContext(NavigationContext);
  return (
    <View style={[styles.modal_size_success,styles.flex_center, styles.upcoming_event_profile_image_container, styles.bg_white]}>
      <Image source={iconSuccess} styles={styles.variant_25_25}  />
      <Text style={[styles.my_5, styles.h2]}>Payment Accepted</Text>
      <Button label={'Continue'} onPress={() => navigation.navigate('QrScanner')} />
    </View>
  )
}
