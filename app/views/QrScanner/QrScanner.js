import React, { useContext, useState } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { NavigationContext } from '@react-navigation/native';
import styles from '../../styles';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default function QrScanner() {
  const navigation = useContext(NavigationContext);
  const [qrData, setQrData] = useState('');

  const handleScan = async e => {
    if (e) {
      setQrData(e?.data);
      // setShowModal(!showModal);
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
