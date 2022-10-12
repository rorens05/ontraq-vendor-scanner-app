import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../app/views/splashscreen/SplashScreen';
import CodeScreen from '../app/views/Code/CodeScreen';
import Transaction from '../app/views/Transaction/Transaction';
import QrScanner from '../app/views/QrScanner/QrScanner';
import Dashboard from '../app/views/Dashboard/Dashboard';
import Modal from '../app/components/modal/Modal';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Settings from '../app/views/Settings/Settings';

const homeIcon = require('../app/assets/ceap-home.png');
const qrIcon = require('../app/assets/qr_icon.png');
const settingsIcon = require('../app/assets/settings.png');
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'transparent',
        tabBarInactiveTintColor: 'transparent',
        tabBarStyle: [styles.bottom_navigation, styles.py_1, {backgroundColor: '#DAE2FF',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,}],
      })}>
      <Tab.Screen
        name={'Home'}
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <View style={[styles.variant_50_50, styles.flex_center, styles.mt_2]}>
                <Image
                  resizeMode="contain"
                  style={[styles.variant_30_30, { tintColor: focused ? '#002E8A' : 'gray' }]}
                  source={homeIcon}
                />
                <Text 
                  style={{
                    color: focused ? '#002E8A' : 'gray',
                    fontSize: 10, 
                  }}>
                  {'Home'}
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={' '}
        component={QrScanner}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? '#FFF' : '#26387E',
                  height: 70,
                  width: 70,
                  borderRadius: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                  // marginTop: 7,
                  borderColor: '#00000029',
                  borderWidth: StyleSheet.hairlineWidth,
                  marginBottom: 60
                }}>
                <Image
                  resizeMode="contain"
                  style={[styles.variant_30_30, { tintColor: focused ? '#26387E' : '#fff' }]}
                  source={qrIcon}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={'Settings'}
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <View style={[styles.variant_50_50, styles.flex_center, styles.mt_2]}>
                <Image
                  resizeMode="contain"
                  style={[styles.variant_30_30, { tintColor: focused ? '#002E8A' : 'gray' }]}
                  source={settingsIcon}
                />
                <Text 
                  style={{
                    color: focused ? '#002E8A' : 'gray',
                    fontSize: 10, 
                  }}>
                  {'Settings'}
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

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
          component={MyTabs}
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
          name="Modal"
          component={Modal}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
