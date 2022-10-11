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
  editable,
  ifMultiLine
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
      <View style={[styles.inputContainer, {borderColor: error != null ? 'red' : '#9A9A9A'}]}>
        <TextInput
          editable={editable}
          placeholder={placeholder}
          value={field.value}
          onChangeText={field.onChange}
          style={styles.textInput}
          multiline={true}
          numberOfLines={ifMultiLine ? 5 : 1}
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
    borderWidth: 1,
    minHeight: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 12,
    color: '#000',
    paddingHorizontal: 5,
  },
  textInput: {
    // flex: 1, 
    fontSize: 12, 
    padding: 12,
  },
  error: {
    color: 'red', 
    fontSize: 12,
  },
});
