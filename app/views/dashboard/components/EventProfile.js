import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {getParams} from '../../../utils/navigation_helper';
import Button from './Button';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../../../styles';
const backArrow = require('../../../assets/left-arrow.png');
const tfiBg = require('../../../assets/ceap-tfi-bg.png');
export default function EventProfile() {
  const navigation = useContext(NavigationContext);
  const params = getParams(navigation);
  return (
    <View style={[styles.flex_1, styles.bg_white]}>
      <ScrollView>
        <ImageBackground
          source={tfiBg}
          resizeMode="cover"
          style={styles.variant_width_250}>
          <View style={{}}>
            <View style={styles.profile_container}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={backArrow}
                  resizeMode="contain"
                   style={[styles.variant_25_25, styles.mx_5, styles.my_4, styles.arrow_color]}
                />
              </TouchableOpacity>
            </View>
            <Image
              source={params?.image}
              resizeMode="cover"
              style={styles.variant_width_height_by_percent}
            />
          </View>
        </ImageBackground>
        <View
          style={[styles.flex_1, styles.p_5, styles.upcoming_event_profile_info_container]}>
          <Text style={styles.profile_title}>{'CEAP Conference and Expo'}</Text>
          <Text
            style={[styles.mt_2, styles.profile_date]}>{'5 August, 2022 10:00 AM - 5:30 PM'}</Text>
          <View style={styles.my_3}>
            <Button
              label={'Join Event'}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
          <Text
            style={[styles.h1, styles.mt_2]}>Overview:</Text>
          <Text style={[styles.profile_description, styles.text_black]}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure'}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
