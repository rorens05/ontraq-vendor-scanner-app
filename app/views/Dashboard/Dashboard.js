import { NavigationContext } from '@react-navigation/native';
import React, {useContext} from 'react'
import { View } from 'react-native'
import Button from '../../components/Button'


export default function Dashboard() {
  const navigation = useContext(NavigationContext);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
      <Button label={'Scan Code'} onPress={() => navigation.navigate('QrScanner')} />
    </View>
  )
}
