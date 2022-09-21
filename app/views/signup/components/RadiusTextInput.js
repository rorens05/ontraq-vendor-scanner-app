import React, {useState} from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function RadiusTextInput({
  value,
  onChange,
  placeholder,
  editable,
  withIcon,
  secureTextEntry
}) {
  const [showPassword, setShowPassword] = useState(false);
  const eye_open = require('../../../assets/eye-open.png');
  const eye_close = require('../../../assets/eye-closed.png');

  const onToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={{ paddingHorizontal: 10, flex: 1, height: 40, flexDirection: 'row', borderWidth: 1, borderColor: '#F5F5F5', borderRadius: 8, alignItems: 'center', marginBottom: 20, backgroundColor: '#EEEEEE' }}>
      <TextInput
        editable={editable}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        style={{ fontSize: 10 }}
        secureTextEntry={!secureTextEntry || showPassword ? false : true}
      />
       {withIcon && <Image
        source={withIcon}
        resizeMode='contain'
        style={{ height: 20, width: 20, position: 'absolute', right: 10, tintColor: '#9A9A9A' }}
      />}
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
  )
}
