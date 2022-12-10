import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProfileScreen from '../screens/Customer/ProfileScreen/ProfileScreenIndex';
import {ScreenConst, StringConst} from '../constants';
import HomeScreen from '../screens/Customer/HomeScreen/HomeScreenIndex';
import ServicesDetailScreen from '../screens/Customer/ServicesDetailScreen/ServicesDetailScreenIndex';
import ChatsScreen from '../screens/Mechanics/ChatsScreenM/ChatsScreenIndex';
import HomeScreenM from '../screens/Mechanics/HomeScreenM/HomeScreenMIndex';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={ScreenConst.HOME_SCREEN}
        component={HomeScreenM}
        options={{headerTitle: 'HOME'}}
      />
    </Stack.Navigator>
  );
};

const OrderStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name={ScreenConst.ORDER_SCREEN}
        component={ChatsScreen}
        options={{headerTitle: 'Mechanic Chats', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

const MoreStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name={ScreenConst.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{headerTitle: 'Profile'}}
      />
    </Stack.Navigator>
  );
};

export {HomeStackNavigator, OrderStackNavigator, MoreStackNavigator};
