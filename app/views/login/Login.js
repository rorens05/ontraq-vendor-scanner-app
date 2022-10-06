import React, {useContext} from 'react'
import {View, Text, Image} from 'react-native'
import logo from '../../assets/ceap-logo.png'
import Button from './components/Button'
import { NavigationContext } from '@react-navigation/native';
import styles from '../../styles';

export default function Login() {
  const navigation = useContext(NavigationContext);

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
        <Button label={'Sign up'} onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  )
}
