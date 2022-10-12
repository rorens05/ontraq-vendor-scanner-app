import React, {useContext,useState,useEffect} from 'react'
import {View, Text} from 'react-native'
import Button from './components/Button'
import { NavigationContext } from '@react-navigation/native';
import styles from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Scanner from '../../api/Scanner';

export default function CodeScreen() {
  const navigation = useContext(NavigationContext);
  const [code, setCode] = useState('');

  const generateCode = async() => {
    let localCode = await AsyncStorage.getItem('code');
    if(localCode == '' || localCode == null){
      const generatedCode = Math.random().toString(36).slice(2, 8).toUpperCase();
      setCode(generatedCode);
      await AsyncStorage.setItem("code", generatedCode);
      return 
    } 
    setCode(localCode)
  }
  
  useEffect(() => {
    generateCode()
  }, [])
  

  const hanldeReload = async () => {
    let code = await AsyncStorage.getItem('code');

    let response = await new Scanner().deviceInfo(code);
    // alert(JSON.stringify(code))
    if(response?.ok){
      navigation.navigate('QrScanner')
    } else {
      alert('Please register the device.')
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
