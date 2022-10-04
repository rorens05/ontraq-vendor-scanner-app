import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import styles from '../../../styles';

export default function EventItem({image}) {
  const navigation = useContext(NavigationContext);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('EventProfile', {image})}
      style={[styles.event_container, styles.mb_3]}>
      <Image source={image} style={styles.event_image} />
      <View style={styles.mt_5}>
        <Text style={[styles.h1, styles.mb_2]}>
          {'CEAP Conference and Expo'}
        </Text>
        <Text style={[styles.h6, styles.text_danger]}>{'August 5, 2022'}</Text>
        <Text style={styles.h6}>{'Quezon City, Manila Philippines'}</Text>
      </View>
    </TouchableOpacity>
  );
}
