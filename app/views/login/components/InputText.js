import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Image } from 'react-native';

export default function InputText({ placeholder, onChangeText, secureTextEntry, value, style, keyboardType, placeholderTextColor }) {
  const [showPassword, setShowPassword] = useState(false);
  const eye_open = require('../../../assets/eye-open.png');
  const eye_close = require('../../../assets/eye-closed.png');

  const onToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <TextInput
        style={[
          {
            height: 40,
            borderRadius: 10,
            backgroundColor: '#EEEEEE',
            marginBottom: 10,
            color: '#000',
            paddingHorizontal: 15
          },
          style,
        ]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        autoCapitalize = 'none'
        secureTextEntry={!secureTextEntry || showPassword ? false : true}
        value={value}
        keyboardType={keyboardType}
      />
      {secureTextEntry && (
        <View
          style={{
            top: 10,
            right: '5%',
            position: 'absolute',
            width: 30,
          }}>
          <TouchableOpacity
            onPress={() => onToggleShowPassword()}
            style={{ width: 40, alignItems: 'center', justifyContent: 'center' }}
          >
            <Image
              source={showPassword ? eye_open : eye_close}
              style={{ width: 20, height: 20, tintColor: '#9A9A9A' }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

