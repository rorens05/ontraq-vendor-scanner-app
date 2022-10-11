import React, {useContext,useState,useEffect} from 'react'
import {View, Text, Dimensions} from 'react-native'
import Button from './components/Button'
import { NavigationContext } from '@react-navigation/native';
import styles from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const navigation = useContext(NavigationContext);
  const [code, setCode] = useState('');

  const generateCode = async() => {
    const generatedCode = Math.random().toString(36).slice(2, 8).toUpperCase();
    setCode(generatedCode);
    await AsyncStorage.setItem("code", generatedCode);
  }
  
  useEffect(() => {
    generateCode()
  }, [])
  

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
        <Text style={[styles.text_gray, {fontSize: 50, fontWeight: 'bold'}]}>{code}</Text>
      </View>
      <View style={styles.flex_center}>
        <Button label={'Reload'} onPress={() => hanldeReload()} />
      </View>
    </View>
  )
}
