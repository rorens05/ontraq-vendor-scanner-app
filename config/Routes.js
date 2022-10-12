import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../app/views/splashscreen/SplashScreen';
import CodeScreen from '../app/views/Code/CodeScreen';
import Transaction from '../app/views/Transaction/Transaction';
import QrScanner from '../app/views/QrScanner/QrScanner';
import Dashboard from '../app/views/Dashboard/Dashboard';
import ModalSuccess from '../app/components/modal/ModalSuccess';
import ModalFailed from '../app/components/modal/ModalFailed';

const Stack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          // header: Header,
          headerMode: 'screen',
          // mode: 'card', // 'modal'
        }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="CodeScreen"
          component={CodeScreen}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="QrScanner"
          component={QrScanner}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="ModalSuccess"
          component={ModalSuccess}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="ModalFailed"
          component={ModalFailed}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
