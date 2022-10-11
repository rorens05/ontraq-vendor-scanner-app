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

  const handleScan = async e => {
    if (e) {
      setQrData(e?.data);
      // setShowModal(!showModal);
    }
  };
  return (
    <View style={[styles.flex_1, styles.bg_white, styles.align_center_justify_space_evenly]}>
      <View>
        <Image source={logo} style={styles.variant_200_200} />
      </View>
      <View style={[styles.px_5, styles.align_items_center]}>
        <Text style={[styles.h1, styles.text_blue]}>Hello!</Text>
        <Text style={{color: '#9A9A9A', fontSize: 16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Button label={'Sign in'} onPress={() => navigation.navigate('LoginScreen')} />
        <View style={{alignItems: 'center', flexDirection: 'row', paddingVertical: 10}}>
          <View style={styles.hr_line} />
          <Text style={[styles.text_gray, styles.px_1]}>OR</Text>
          <View style={styles.hr_line} />
        </View>
        <View
        style={{
          flex: 1,
          backgroundColor: '#EE9337',
          marginVertical: 50,
          marginHorizontal: 20,
        }}>
        <QRCodeScanner
          cameraStyle={{width: '100%', height: '100%'}}
          cameraContainerStyle={{
            overflow: 'hidden',
            backgroundColor: 'transparent',
          }}
          cameraType="back"
          onRead={handleScan}
          // flashMode={RNCamera.Constants.FlashMode.torch}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999,
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>
            Please put the QR Code within the box
          </Text>
          <Image
            source={require('../../assets/qrscanner.png')}
            style={{width: width / 1.5, height: width / 1.5, tintColor: '#fff'}}
            resizeMode="contain"
          />
        </View>
      </View>
      </View>
    </View>
  )
}
