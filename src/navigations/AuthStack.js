import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen/LoginScreenIndex';

import SplashScreen from '../screens/SplashScreen';
import {ScreenConst} from '../constants';
import SignUpScreen from '../screens/Customer/SignUpScreen/SignUpScreenIndex';
import SignUpScreenMec from '../screens/Mechanics/SignUpScreen/SignUpScreenIndex';
import ConfirmationScreen from '../screens/ConfirmationScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenConst.SIGNIN_SCREEN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenConst.SIGNUP_SCREEN}
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenConst.SIGNUP_MECHANIC_SCREEN}
        component={SignUpScreenMec}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenConst.CONFIRMATION_SCREEN}
        component={ConfirmationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
