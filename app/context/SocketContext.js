// import AsyncStorage from '@react-native-community/async-storage';
// import React, {useState, useEffect, useRef, useContext} from 'react'
// import{View, Text} from 'react-native'
// import { UserContext } from './UserContext';
// import * as signalR from '@microsoft/signalr';
// import PushNotification from "react-native-push-notification";

// export const SocketContext = React.createContext();

// export function SocketContextProvider({children}) {
//   const [connectionStatus, setConnectionStatus] = useState('disconnected')
//   const userContext = useContext(UserContext)
//   const connection = useRef(null)
//   const {user} = userContext.data

//   const connect = async () => {
//     console.log('Initializing socket connection')
//     let token = await AsyncStorage.getItem('token');
//     if (token) {
//       connection.current = new signalR.HubConnectionBuilder()
//         .withUrl(
//           `https://rtc-dev-v3.tekteachlms.com/tekteach?access_token=${token}`,
//         )
//         .configureLogging(signalR.LogLevel.Debug)
//         .build();

//       connection.current.on('Notification', handleNotification);

//       connection.current
//         .start()
//         .then(onStart)
//         .catch(onError);
      
      
//     }
//   };

//   const handleNotification = async (user, message) => {
//     console.log('Notification received:');
//     console.log({message});
//     PushNotification.localNotification(
//       {
//         channelId: 'test-channel',
//         title: 'Announcement',
//         message: message.message
//       }
//     )
//   }

//   const onStart = async (data) => {
//     console.log('Connected', data)
//   }

//   const onError = async err => {
//     {
//       console.log({err});
//     }
//   }

//   useEffect(() => {
//     console.log('SocketContextProvider: useEffect', user)
//     if(user != null){
//       connect()
//     }
//   }, [user])
  
//   return (
//     <SocketContext.Provider
//       value = {{
//        connectionStatus,
//        setConnectionStatus
//       }}
//     >
//       {children}
//     </SocketContext.Provider>
//   )
// }

// export default SocketContextProvider;