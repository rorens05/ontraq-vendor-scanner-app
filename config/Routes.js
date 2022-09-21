import React, {useState, useContext} from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import { UserContext } from '../app/context/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from '../app/views/splashscreen/SplashScreen';
import Login from '../app/views/login/Login';
const {width} = Dimensions.get('screen');

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const calendarName = 'Calendar';
const contactName = 'Contacts';
const homeName = 'Home';
const schoolName = 'School';
const profileName = 'Profile';
const plus = require('../app/assets/Image/plus.png');
const close = require('../app/assets/Image/close.png');
const calendarIcon = require('../app/assets/Image/calendar.png');
const barIcon = require('../app/assets/Image/dcpar-tab.png');
const homeIcon = require('../app/assets/Image/home-tab.png');
const schoolIcon = require('../app/assets/Image/school-tab.png');
const pieIcon = require('../app/assets/Image/report-tab.png');

// const MyTabs = () => {
//   const userContext = useContext(UserContext);
//   const {showModal, modalVisible} = userContext.data
//   return (
//     <Tab.Navigator
//       // initialRouteName={Home}
//       screenOptions={({route}) => ({
//         tabBarActiveTintColor: 'transparent',
//         tabBarInactiveTintColor: 'transparent',
//         tabBarStyle: {
//           paddingVertical: 5,
//           // borderTopLeftRadius: 15,
//           // borderTopRightRadius: 15,
//           backgroundColor: '#fff',
//           position: 'absolute',
//           height: 70,
//         },
//         // tabBarLabelStyle: {paddingBottom: 3},
//       })}>
//       <Tab.Screen
//         // name={homeName}
//         // component={Home}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({size, focused, color}) => {
//             return (
//               <View style={{
//                 height: 55,
//                 width: 55,
//                 borderRadius: 30,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 marginTop: 7
//               }}>
//                 <Image
//                   resizeMode="contain"
//                   style={{
//                     width: width / 13,
//                     height: width / 13,
//                     tintColor: focused ? '#F79E24' : '#EBEBEB'
//                   }}
//                   source={homeIcon}
//                 />
//                 <Text 
//                   style={{
//                     color: focused ? '#F79E24' : '#EBEBEB',
//                     fontSize: 10, 
//                   }}>
//                   {homeName}
//                 </Text>
//               </View>
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         // name={contactName}
//         // component={Dcpar}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({size, focused, color}) => {
//             return (
//               <View style={{
//                 height: 55,
//                 width: 55,
//                 borderRadius: 30,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 marginTop: 7
//               }}>
//                 <Image
//                   resizeMode="contain"
//                   style={{
//                     width: width / 13,
//                     height: width / 13,
//                     tintColor: focused ? '#F79E24' : '#EBEBEB'
//                   }}
//                   source={barIcon}
//                 />
//                 <Text 
//                   style={{
//                     color: focused ? '#F79E24' : '#EBEBEB',
//                     fontSize: 10, 
//                   }}>
//                   {'DCPAR'}
//                 </Text>
//               </View>
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name={' '}
//         // component={Home}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({size, focused, color}) => {
//             return (
//               <TouchableOpacity
//                 style={{
//                 backgroundColor: 'white',
//                 height: 70,
//                 width: 70,
//                 borderRadius: 35,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 // marginTop: 7,
//                 borderColor: '#00000029',
//                 borderWidth: StyleSheet.hairlineWidth,
//                 marginBottom: 60
//               }}>
//                 { 
//                 modalVisible 
//                   ? <Image
//                       resizeMode="contain"
//                       style={{ tintColor: '#F79E24', transform: [{rotate: '45deg'}] }}
//                       source={plus}
//                      /> 
//                   : <Image
//                       resizeMode="contain"
//                       style={{ tintColor: '#F79E24' }}
//                       source={plus}
//                    /> 
//                   }
//               </TouchableOpacity>
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         // name={schoolName}
//         // component={School}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({size, focused, color}) => {
//             return (
//               <View style={{
//                 height: 55,
//                 width: 55,
//                 borderRadius: 30,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 marginTop: 7
//               }}>
//                 <Image
//                   resizeMode="contain"
//                   style={{
//                     width: width / 13,
//                     height: width / 13,
//                     tintColor: focused ? '#F79E24' : '#EBEBEB'
//                   }}
//                   source={schoolIcon}
//                 />
//                 <Text 
//                   style={{
//                     color: focused ? '#F79E24' : '#EBEBEB',
//                     fontSize: 10, 
//                   }}>
//                   {'School'}
//                 </Text>
//               </View>
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name={profileName}
//         component={Report}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({size, focused, color}) => {
//             return (
//               <View style={{
//                 height: 55,
//                 width: 55,
//                 borderRadius: 30,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 marginTop: 7
//               }}>
//                 <Image
//                   resizeMode="contain"
//                   style={{
//                     width: width / 13,
//                     height: width / 13,
//                     tintColor: focused ? '#F79E24' : '#EBEBEB'
//                   }}
//                   source={pieIcon}
//                 />
//                 <Text 
//                   style={{
//                     color: focused ? '#F79E24' : '#EBEBEB',
//                     fontSize: 10, 
//                   }}>
//                   {'Reports'}
//                 </Text>
//               </View>
//             );
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

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
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
