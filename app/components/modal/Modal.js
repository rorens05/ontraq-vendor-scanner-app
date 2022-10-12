import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import styles from '../../styles'
import Button from './component/Button'
import iconSuccess from '../../assets/icon-success.png'
import iconFail from '../../assets/icon-material-error.png'
import { NavigationContext } from '@react-navigation/native'

export default function Modal({status}) {
  const navigation = useContext(NavigationContext);
  return (
    <View style={{position: 'absolute', width: '100%', backgroundColor: '#000000ae', height: '100%', justifyContent: 'center'}}>
      <View style={[styles.modal_size_success, styles.flex_center, { borderWidth: StyleSheet.hairlineWidth, backgroundColor: '#fff', alignSelf: 'center'}]}>
        <Image source={status ? iconSuccess : iconFail} styles={styles.variant_25_25}  />
        {!status &&  <Text style={[styles.mt_1, styles.h4]}>Not enough balance.</Text>}
          <Text style={[status ? styles.my_5 : styles.mb_5, styles.h3]}>{status ? 'Payment Accepted' : 'Please top up and try again'}</Text>
        <Button label={status ? 'Continue' : 'Try Again'} onPress={() => navigation.navigate('Dashboard')} />
      </View>
    </View>
  )
}
