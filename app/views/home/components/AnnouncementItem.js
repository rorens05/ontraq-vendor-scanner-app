import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from '../../../styles';

export default function AnnouncementItem({image }) {
  return (
    <ImageBackground source={image} resizeMode='stretch' style={[styles.mx_2, styles.announcement_image_item]}>
      <View style={styles.announcement_item}>
        <View style={styles.bottom}>
          <View style={styles.p_3}>
            <Text style={[styles.h3, styles.text_white]}>VOTELOVE</Text>
            <Text style={[styles.h6, styles.text_white]}>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}
