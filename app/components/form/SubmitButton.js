import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function SubmitButton({onPress, label}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#2E3192',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 25, 
    fontWeight: '600', 
    color: '#2E3192',
  },
});