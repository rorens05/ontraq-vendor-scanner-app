import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Image, Text } from 'react-native';

export default function RoundTextInput({ placeholder, onChangeText, secureTextEntry, value, style, keyboardType, placeholderTextColor, editable }) {
  const [showPassword, setShowPassword] = useState(false);
  const eye_open = require('../../../assets/eye-open.png');
  const eye_close = require('../../../assets/eye-closed.png');

  const onToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <Text style={{color: '#17254A', fontSize: 16, fontWeight: '600', paddingVertical: 10}}>{placeholder}</Text>
      <View style={{
        borderColor: '#D5D5D5', 
        borderWidth: 1, justifyContent:'center', marginBottom: 10, borderRadius: 10}}>
        <TextInput
          style={[
            {
              height: 40,
              borderRadius: 10,
              backgroundColor: '#FFFFFF',
              paddingHorizontal: 15,
              color: '#000'
            },
            style,
          ]}
          editable={editable}
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
    </View>
  );
}

