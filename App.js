import React from 'react';
import { SafeAreaView } from 'react-native';
import Routes from './config/Routes';
// import UserContextProvider from './app/context/UserContext';
// import Routes from './config/Routes';
// import TabNavigationContextProvider from './app/context/TabNavigationContext';

const App = () => {
  return (
    // <UserContextProvider>
      // <TabNavigationContextProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Routes />
        </SafeAreaView>
      // </TabNavigationContextProvider>
    // </UserContextProvider>
  );
};

export default App;
