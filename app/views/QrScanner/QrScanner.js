import React, { useContext, useState } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { NavigationContext } from '@react-navigation/native';
import styles from '../../styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Scanner from '../../api/Scanner';
import Button from '../../components/Button';

export default function QrScanner() {
  const navigation = useContext(NavigationContext);
  const [qrData, setQrData] = useState('');

  const handleScan = async e => {
    if (e) {
      setQrData(e?.data);
      verifyQRCode(e?.data);
  }
  };

  const verifyQRCode = async qr_code => {
    let code = await AsyncStorage.getItem('code');
    let data = {
      "qr_code": qr_code,
      "scanner_code": code
    }
    let response = await new Scanner().verifyToken(data);
    // alert(JSON.stringify(data))
    if(response?.ok){
      return navigation.navigate('Transaction', {data: response?.data})
    } else {
      alert('Invalid QR Code')
    }
  };

  return (
      <View style={styles.flex_1}>
        <QRCodeScanner
          cameraStyle={styles.variant_width_height_by_percent}
          cameraContainerStyle={{
            overflow: 'hidden',
            backgroundColor: 'transparent',
          }}
          cameraType="back"
          onRead={handleScan}
          reactivate={true}
          reactivateTimeout={3000}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        />
        <View
          style={styles.qr_container}>
          <Text style={[styles.h5, styles.text_white]}>
            Please put the QR Code within the box
          </Text>
          <Image
            source={require('../../assets/qrscanner.png')}
            style={[styles.icon_tint, styles.variant_300_300, ]}
            resizeMode="contain"
          />
        </View>
    </View>
  )
}
