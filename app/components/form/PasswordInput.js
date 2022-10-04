import React, {useState} from 'react';
import {useController} from 'react-hook-form';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';
const {width, height} = Dimensions.get('screen');

export default function PasswordInput({
  label,
  name,
  control,
  defaultValue = '',
  placeholder = '',
  rules = {},
  errors = {},
}) {
  const {field} = useController({
    control,
    defaultValue,
    name,
    rules,
  });
  const [showPassword, setShowPassword] = useState(true);

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
          value={field.value}
          placeholder={placeholder}
          secureTextEntry={showPassword}
          style={styles.textInput}
          onChangeText={field.onChange}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image
            source={
              showPassword
                ? require('../../assets/eye-open.png')
                : require('../../assets/eye-closed.png')
            }
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
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
    marginTop: 6,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#17254A',
    marginVertical: 6,
  },
  inputContainer: {
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
    marginBottom: 12,
    color: '#000',
    paddingHorizontal: 6
  },
  textInput: {
    flex: 1, 
    fontSize: 12, 
    padding: 12,
  },
  image: {
    width: 25, 
    height: 25, 
    tintColor: '#9A9A9A',
  },
  error: {
    color: 'red', 
    fontSize: 12,
  },
});