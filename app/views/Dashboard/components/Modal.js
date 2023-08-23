import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import styles from '../../../styles'
import Button from '../../../components/Button'
import { NavigationContext } from '@react-navigation/native'

export default function Modal({setType, setTypeModal}) {
  const navigation = useContext(NavigationContext);

  const handleModal = (data) => {
    setType(data)
    setTypeModal(false)
  }
  
  return (
    <View style={{position: 'absolute', width: '100%', backgroundColor: '#000000ae', height: '100%', justifyContent: 'center'}}>
      <View style={[styles.modal_size_success, styles.flex_center, { borderWidth: StyleSheet.hairlineWidth, backgroundColor: '#fff', alignSelf: 'center'}]}>
        <Image source={{}} styles={styles.variant_25_25}  />
          <TouchableOpacity onPress={() =>handleModal('All')}>
            <Text style={[styles.my_2, styles.h4]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>handleModal('Food')}>
            <Text style={[styles.my_2, styles.h4]}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>handleModal('Drinks')}>
            <Text style={[styles.my_2, styles.h4]}>Drinks</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}
