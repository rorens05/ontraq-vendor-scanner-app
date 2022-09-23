import React, {useState, useContext} from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import { UserContext } from '../app/context/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from '../app/views/splashscreen/SplashScreen';
import Login from '../app/views/login/Login';
import LoginScreen from '../app/views/login/LoginScreen';
import Home from '../app/views/home/Home';
import Program from '../app/views/program/Program';
import Speaker from '../app/views/speaker/Speaker';
import Sponsor from '../app/views/sponsor/Sponsor';
import ForgotPassword from '../app/views/forgotPassword/ForgotPassword';
import SignUp from '../app/views/signup/SignUp';
import SpeakerProfile from '../app/views/speaker/components/SpeakerProfile';
import Profile from '../app/views/profile/Profile';

const {width} = Dimensions.get('screen');
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const sponsorsName = 'Sponsors';
const homeName = 'Home';
const programName = 'Program';
const speakerName = 'Speaker';
const micIcon = require('../app/assets/ceap-mic.png');
const homeIcon = require('../app/assets/ceap-home.png');
const programIcon = require('../app/assets/ceap-program.png');
const officeIcon = require('../app/assets/ceap-office.png');

const MyTabs = () => {
  // const userContext = useContext(UserContext);
  // const {showModal, modalVisible} = userContext.data
  return (
    <Tab.Navigator
      // initialRouteName={Home}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'transparent',
        tabBarInactiveTintColor: 'transparent',
        tabBarStyle: {
          paddingVertical: 5,
          // borderTopLeftRadius: 15,
          // borderTopRightRadius: 15,
          backgroundColor: '#fff',
          position: 'absolute',
          height: 70,
        },
        // tabBarLabelStyle: {paddingBottom: 3},
      })}>
      <Tab.Screen
        name={homeName}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <View style={{
                height: 55,
                width: 55,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 7
              }}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: width / 13,
                    height: width / 13,
                    tintColor: focused ? '#002E8A' : '#EBEBEB'
                  }}
                  source={homeIcon}
                />
                {/* <Text 
                  style={{
                    color: focused ? '#002E8A' : '#EBEBEB',
                    fontSize: 10, 
                  }}>
                  {homeName}
                </Text> */}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={sponsorsName}
        component={Sponsor}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <View style={{
                height: 55,
                width: 55,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 7
              }}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: width / 13,
                    height: width / 13,
                    tintColor: focused ? '#002E8A' : '#EBEBEB'
                  }}
                  source={officeIcon}
                />
                {/* <Text 
                  style={{
                    color: focused ? '#002E8A' : '#EBEBEB',
                    fontSize: 10, 
                  }}>
                  {'DCPAR'}
                </Text> */}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={programName}
        component={Program}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <View style={{
                height: 55,
                width: 55,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 7
              }}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: width / 13,
                    height: width / 13,
                    tintColor: focused ? '#002E8A' : '#EBEBEB'
                  }}
                  source={programIcon}
                />
                {/* <Text 
                  style={{
                    color: focused ? '#002E8A' : '#EBEBEB',
                    fontSize: 10, 
                  }}>
                  {'School'}
                </Text> */}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={speakerName}
        component={Speaker}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <View style={{
                height: 55,
                width: 55,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 7
              }}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: width / 13,
                    height: width / 13,
                    tintColor: focused ? '#002E8A' : '#EBEBEB'
                  }}
                  source={micIcon}
                />
                {/* <Text 
                  style={{
                    color: focused ? '#002E8A' : '#EBEBEB',
                    fontSize: 10, 
                  }}>
                  {'Reports'}
                </Text> */}
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
          name="Login"
          component={Login}
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
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="SpeakerProfile"
          component={SpeakerProfile}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
