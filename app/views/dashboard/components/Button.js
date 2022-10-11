import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../../styles';

export default function Button({label, onPress}) {
  return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.py_1, styles.button]}>
            <Text style={styles.button_label}>{label}</Text>
        </View>
      </TouchableOpacity>
  )
}
