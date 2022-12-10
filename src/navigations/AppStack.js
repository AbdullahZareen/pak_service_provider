import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenConst} from '../constants';
import BottomTabFlow from './BottomTabBarStack';
import SplashScreen from '../screens/SplashScreen';
import ChatDetailScreen from '../screens/Customer/ChatDetailScreen/ChatDetailScreenIndex';
import MapsLocationScreen from '../screens/Customer/MapsLocationScreen/MapsLocationScreenIndex';
import RatingScreen from '../screens/Customer/RatingScreen/RatingScreenIndex';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={'Splash'}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenConst.BOTTOM_TAB_FLOW}
        component={BottomTabFlow}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenConst.CHAT_DETAIL_SCREEN}
        component={ChatDetailScreen}
        options={({route}) => ({
          headerTitle:
            route?.params?.chat?.MechanicInfo[0]?.name.charAt(0).toUpperCase() +
            route?.params?.chat?.MechanicInfo[0]?.name.slice(1),
        })}
      />
      <Stack.Screen
        name={ScreenConst.MAPS_SCREEN}
        component={MapsLocationScreen}
        options={{headerTitle: 'Maps'}}
      />
      <Stack.Screen
        name={ScreenConst.RATING_SCREEN}
        component={RatingScreen}
        options={{
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
