import React, {useContext} from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContext } from '@react-navigation/native';
import styles from '../styles';
const bellIcon = require('../assets/ceap-bell.png');
const userImage = require('../assets/ceap-avatar.png');

export default function Header({ }) {
  const navigation = useContext(NavigationContext);
  return (
    <View style={[styles.p_2, styles.bg_white]}>
      <View style={[styles.flex_row, styles.align_items_center, styles.justify_content_space_between]}>
        <View style={[styles.flex_row, styles.flex_center]}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Profile')}
            style={[styles.mr_3, styles.variant_70_70, styles.flex_center]}>
            <Image source={userImage} resizeMode='contain' style={styles.variant_50_50} />
          </TouchableOpacity>
          <View>
            <Text style={styles.h1}>{`Hi, Joan Dela Cruz`}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => alert('Under Development')}>
          <Image source={bellIcon} resizeMode='contain' style={styles.variant_30_30} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
