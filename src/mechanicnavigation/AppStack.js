import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenConst} from '../constants';
import BottomTabFlow from './BottomTabBarStack';
import SplashScreen from '../screens/SplashScreen';
import ChatDetailScreen from '../screens/Mechanics/ChatDetailScreenM/ChatDetailScreenIndex';
import AddServices from '../screens/Mechanics/AddServices/AddServicesIndex';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenConst.BOTTOM_TAB_FLOW}
        component={BottomTabFlow}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenConst.ADD_SERVICES}
        component={AddServices}
        options={{headerTitle: 'ADD YOUR SERVICES'}}
      />
      <Stack.Screen
        name={ScreenConst.CHAT_DETAIL_SCREEN}
        component={ChatDetailScreen}
        options={({route}) => ({
          headerTitle: route.params.chat.CustomerInfo[0].name,
        })}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
