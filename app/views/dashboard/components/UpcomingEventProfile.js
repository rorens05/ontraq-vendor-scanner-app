import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { NavigationContext } from '@react-navigation/native';
import { getParams } from '../../../utils/navigation_helper';
import Button from './Button';
import Attendees from './Attendees';
import styles from '../../../styles';
const backArrow = require('../../../assets/left-arrow.png')
const tfiBg = require('../../../assets/ceap-tfi-bg.png')
export default function UpcomingEventProfile() {
  const navigation = useContext(NavigationContext);
  const params = getParams(navigation);
  return (
    <View style={[styles.flex_1, styles.bg_white]}>
      <View style={styles.upcoming_event_profile_container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={backArrow}
            resizeMode='contain'
            style={[styles.variant_25_25, styles.mx_5, styles.my_4, styles.arrow_color]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.upcoming_event_profile_image_container}>
        <Image
          source={params?.image}
          resizeMode='contain'
          style={[styles.variant_200_200, styles.mx_5, styles.my_4]}
        />
      </View>
      <Image source={tfiBg} resizeMode='cover' style={styles.variant_width_250} />
      <View style={[styles.flex_1, styles.p_5, styles.upcoming_event_profile_info_container]}>
        <Text style={styles.upcoming_event_profile_title}>{'Collaborative Art Clinic'}</Text>
        <Text style={[styles.mt_2, styles.upcoming_event_profile_date]}>{'5 August, 2022 10:00 AM - 5:30 PM'}</Text>
        <View style={styles.my_3}>
          <Button label={'Attend'} onPress={() => navigation.navigate('Login')} />
        </View>
        <Attendees attend={15} max={20} />
        <Text style={[styles.h1, styles.mt_2]}>Overview:</Text>
        <Text style={[styles.upcoming_event_label, styles.text_black]}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure'}</Text>
      </View>
    </View>
  )
}
