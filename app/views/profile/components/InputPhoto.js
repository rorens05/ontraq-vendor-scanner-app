import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FullscreenActivityIndicator from '../../../components/FullscreenActivityIndicator';
const camIcon = require('../../../assets/ceap-cam.png');

const imageConfig = {
  includeBase64: true,
  mediaType: 'photo',
  maxHeight: 500,
  maxWidth: 500,
};

export default function InputPhoto({style = {}, value, setValue = () => {}}) {
  const [loading, setLoading] = React.useState(false);
  const toBase64 = value => {
    return `data:image/jpeg;base64,${value}`;
  };

  const onSelectPhoto = response => {
    console.log(response);
    if (response.assets?.length > 0) {
      const base64Image = toBase64(response.assets[0].base64);
      setValue(base64Image);
      console.log({base64Image});
    }
    setLoading(false);
  };

  return (
    <View
      style={[
        {height: 100, alignItems: 'center', marginTop: 28, marginBottom: 20},
        style,
      ]}>
      {loading && <FullscreenActivityIndicator />}
      <TouchableOpacity
        onPress={() => {
          setLoading(true);
          launchImageLibrary(imageConfig, onSelectPhoto);
        }}>
        <View
          style={{
            // borderRadius: 75,
            overflow: 'hidden',
            width: 90,
            height: 90,
          }}>
          <Image
              source={
                value
                  ? {uri: value}
                  : require('../../../assets/profile_icon.png')
              }
              style={{
                height: 90,
                width: 90,
              }}
              resizeMode="contain"
            />
            <Image
              source={camIcon}
              style={{
                height: 30,
                width: 30,
                alignSelf: 'flex-end',
                marginTop: -30,
                marginRight: 0
              }}
              resizeMode="contain"
            />
        </View>
      </TouchableOpacity>
    </View>
  );
}
