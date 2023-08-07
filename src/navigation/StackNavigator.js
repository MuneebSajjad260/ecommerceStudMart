import React, {useEffect} from "react";
import { useColorScheme} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {screens} from "../screens";
import {names} from "../constants";
import getThemedColors from "../utils/themeMode";
import SplashScreen from "react-native-splash-screen";

const Stack = createStackNavigator();

import TabNavigator from "./TabNavigator";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import Login from "../screens/auth/Login";
import Product from "../screens/shop/Product";

const StackNavigator = () => {

  const loginData = useSelector(selectUser)
  console.log("--loginData--", loginData)
	const colors = getThemedColors(useColorScheme())


  useEffect(()=>{
    SplashScreen.hide();

    // const ac = new AbortController();

    // setTimeout(() => {
    //   SplashScreen.hide();
    // }, 1000);

    // return function cleanup() {
    //   ac.abort();
    // };
  })

  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={loginData == null && loginData?.token ==""? names.GetStarted : names.TabNavigator}
        initialRouteName={ names.GetStarted }
        screenOptions={{
          gestureEnabled: false,
          cardStyle: {backgroundColor: colors.white},
        }}
      >
        <Stack.Screen
          name={names.TabNavigator}
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.GetStarted}
          component={screens.GetStarted}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.Onboarding}
          component={screens.Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.Login}
          // component={screens.Login}
          options={{headerShown: false}}
        >
          {props => <Login {...props} apColors={colors}/>}
        </Stack.Screen>
        <Stack.Screen
          name={names.Register}
          component={screens.Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.Phone}
          component={screens.Phone}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.NewPass}
          component={screens.NewPass}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.ResetPass}
          component={screens.ResetPass}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.Created}
          component={screens.Created}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.Code}
          component={screens.Code}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.Track}
          component={screens.Track}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.ForgotPass}
          component={screens.ForgotPass}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.Product}
          // component={screens.Product}
          options={{headerShown: false}}
          >
          {props => <Product {...props} apColors={colors}/>}
        </Stack.Screen>
        <Stack.Screen
          name={names.Discount}
          component={screens.Discount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.History}
          component={screens.History}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.Address}
          component={screens.Address}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.NewAddress}
          component={screens.NewAddress}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.Checkout}
          component={screens.Checkout}
          options={{headerShown: false}}
        />
            <Stack.Screen
          name={names.OrderSummary}
          component={screens.OrderSummary}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.Successful}
          component={screens.Successful}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.Shop}
          component={screens.Shop}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.Filter}
          component={screens.Filter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.Reviews}
          component={screens.Reviews}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.Quality}
          component={screens.Quality}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.Failed}
          component={screens.Failed}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name={names.Shipping}
          component={screens.Shipping}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name={names.EditProfile}
          component={screens.EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.Method}
          component={screens.Method}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.NewCard}
          component={screens.NewCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.Payment}
          component={screens.PaymentScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={names.Category}
          component={screens.Category}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name={names.UniversityScreen}
          component={screens.UniversityScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
