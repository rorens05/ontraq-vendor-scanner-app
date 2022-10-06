import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../styles';

export default function Attendees({ attend, max }) {
  return (
    <View
      style={styles.attendess_container}>
      <View
        style={[styles.flex_center, styles.py_1, styles.attendess_progrees,{
          width: `${Math.round(
            (attend / max) * 100,
          )}%`,
        }]}>
        <Text> </Text>
      </View>
      <Text
        style={styles.attendess_label}>
        {`${attend} Attendees`}
      </Text>
    </View>
  )
}
