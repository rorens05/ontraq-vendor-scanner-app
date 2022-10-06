import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../../styles';

export default function UpcomingEventItem({image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground source={image} resizeMode='stretch' style={[styles.upcoming_event_image, styles.mx_2]}>
        <View style={styles.upcoming_event_container}>
          <View style={styles.p_3}>
            <Text style={[styles.h4, styles.text_white]}>August 23</Text>
            <Text style={styles.profile_description}>Collaborative Art Clinic</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}
