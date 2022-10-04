import React from 'react';
import {useController} from 'react-hook-form';
import { Text, View, TextInput, StyleSheet} from 'react-native';
import formatErrorMessage from '../../utils/formatErrorMessage';

export default function Input({
  label,
  name,
  control,
  defaultValue = '',
  placeholder = '',
  rules = {},
  errors = {},
  editable
}) {
  const {field} = useController({
    control,
    defaultValue,
    name,
    rules,
  });

  const error = errors[name];

  return (
    <View style={styles.container}>
      {label &&
        <Text
          style={styles.label}>
          {label}
        </Text>
      }
      <View style={[styles.inputContainer, {borderColor: error != null ? 'red' : 'transparent'}]}>
        <TextInput
          editable={editable}
          placeholder={placeholder}
          value={field.value}
          onChangeText={field.onChange}
          style={styles.textInput}
        />
      </View>
      {error != null && (
        <Text style={styles.error}>
          {formatErrorMessage(error)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#17254A',
    marginVertical: 8,
  },
  inputContainer: {
    borderWidth: 0.5,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
    marginBottom: 12,
    color: '#000',
    paddingHorizontal: 8,
  },
  textInput: {
    flex: 1, 
    fontSize: 12, 
    padding: 12,
  },
  error: {
    color: 'red', 
    fontSize: 12,
  },
});
