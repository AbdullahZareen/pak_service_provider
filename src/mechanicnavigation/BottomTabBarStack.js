import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenConst, ImageConst} from '../constants';
import BottomTabBar from './BottomTabBar';
import {
  HomeStackNavigator,
  OrderStackNavigator,
  MoreStackNavigator,
} from './BottomTabNavigationStack';

const Tab = createBottomTabNavigator();

export default function BottomTabBarStack() {
  const tabs = [
    {
      id: 0,
      label: 'Home',
      //   activeIcon: ImageConst.home,
      //   inactiveIcon: ImageConst.homeInactive,
      nameIcon: 'home',
      name: ScreenConst.HOME_STACK,
      component: HomeStackNavigator,
    },
    {
      id: 1,
      label: '',
      nameIcon: 'chat',
      name: ScreenConst.ORDER_STACK,
      component: OrderStackNavigator,
    },
    {
      id: 2,
      label: 'Profile',
      //   activeIcon: ImageConst.more,
      //   inactiveIcon: ImageConst.moreInactive,
      nameIcon: 'face-man-profile',
      name: ScreenConst.PROFILE_STACK,
      component: MoreStackNavigator,
    },
  ];

  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      name={ScreenConst.TAB_FLOW}
      screenOptions={{
        headerShown: false,
      }}>
      {tabs.map((item, index) => (
        <Tab.Screen
          key={index}
          initialParams={{
            nameIcon: item.nameIcon,
          }}
          name={item.name}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
}
