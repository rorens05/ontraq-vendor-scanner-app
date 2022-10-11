import React, {useContext,useState} from 'react'
import {View, Text, Image, Dimensions} from 'react-native'
import logo from '../../assets/ceap-logo.png'
import Button from './components/Button'
import { NavigationContext } from '@react-navigation/native';
import styles from '../../styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
const { width, height } = Dimensions.get('screen');

export default function Login() {
  const navigation = useContext(NavigationContext);
  const [qrData, setQrData] = useState('');

  const hanldeReload = async e => {
    if(true){
      navigation.navigate('QrScanner')
    }else{
      alert('Under Development')
    }
  };
  return (
    <View style={[styles.flex_1, styles.bg_white, styles.align_center_justify_space_evenly]}>
      <View style={[styles.px_5, styles.align_items_center]}>
        <Text style={[styles.h5, styles.text_gray]}>Please enter this code to your device</Text>
        <Text style={[styles.text_gray, {fontSize: 50, fontWeight: 'bold'}]}>QWE123</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Button label={'Reload'} onPress={() => hanldeReload()} />
      </View>
    </View>
  )
}
