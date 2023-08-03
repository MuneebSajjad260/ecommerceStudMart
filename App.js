import React from "react";
import {Provider} from "react-redux";
import {SafeAreaProvider} from "react-native-safe-area-context";
import FlashMessage from "react-native-flash-message";
import {PersistGate} from 'redux-persist/integration/react';
import { persistor } from "./src/store/store";
import { store } from "./src/store/store";
import StackNavigator from "./src/navigation/StackNavigator";
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from "react";

const App = () => {

  // useEffect(()=>{
  //   // SplashScreen.hide();

  //   const ac = new AbortController();

  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 3000);

  //   return function cleanup() {
  //     ac.abort();
  //   };
  // })

  return (
    <SafeAreaProvider>
      <Provider store={store}>
      <PersistGate persistor={persistor}>

        <StackNavigator />
        <FlashMessage position="top" />
        </PersistGate>

      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
