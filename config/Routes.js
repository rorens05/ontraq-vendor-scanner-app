import React from 'react';
import {View, Image, Dimensions} from 'react-native';
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
import GeneralInformation from '../app/views/profile/components/GeneralInformation';
import AccountSettings from '../app/views/profile/components/AccountSettings';
import ProgramProfile from '../app/views/program/components/ProgramProfile';
import SponsorProfile from '../app/views/sponsor/components/SponsorProfile';
import Dashboard from '../app/views/dashboard/Dashboard';
import EventProfile from '../app/views/dashboard/components/EventProfile';
import UpcomingEventProfile from '../app/views/dashboard/components/UpcomingEventProfile';
import styles from '../app/styles';

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
  return (
    <Tab.Navigator
      initialRouteName={Home}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'transparent',
        tabBarInactiveTintColor: 'transparent',
        tabBarStyle: [styles.bottom_navigation, styles.bg_white, styles.py_1],
      })}>
      <Tab.Screen
        name={homeName}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <View style={[styles.variant_50_50, styles.flex_center, styles.mt_2]}>
                <Image
                  resizeMode="contain"
                  style={[styles.variant_30_30, {tintColor: focused ? '#002E8A' : '#EBEBEB'}]}
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
              <View style={[styles.variant_50_50, styles.flex_center, styles.mt_2]}>
                <Image
                  resizeMode="contain"
                  style={[styles.variant_30_30, {tintColor: focused ? '#002E8A' : '#EBEBEB'}]}
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
              <View style={[styles.variant_50_50, styles.flex_center, styles.mt_2]}>
                <Image
                  resizeMode="contain"
                  style={[styles.variant_30_30, {tintColor: focused ? '#002E8A' : '#EBEBEB'}]}
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
              <View style={[styles.variant_50_50, styles.flex_center, styles.mt_2]}>
                <Image
                  resizeMode="contain"
                  style={[styles.variant_30_30, {tintColor: focused ? '#002E8A' : '#EBEBEB'}]}
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
          name="Home"
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
        <Stack.Screen
          name="GeneralInformation"
          component={GeneralInformation}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="AccountSettings"
          component={AccountSettings}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="ProgramProfile"
          component={ProgramProfile}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="SponsorProfile"
          component={SponsorProfile}
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
          name="EventProfile"
          component={EventProfile}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="UpcomingEventProfile"
          component={UpcomingEventProfile}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
