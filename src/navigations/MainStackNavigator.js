import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {user} from '../redux/User/UserSlice';
import {ScreenConst} from '../constants';
import AppStack from './AppStack';
import MechanicAppStack from '../mechanicnavigation/AppStack';
import AuthStack from './AuthStack';
import {navigationRef, NavigationService} from './navigationServices';

function MainStackNavigator() {
  const loggedInUser = useSelector(state => state.user);

  return (
    <NavigationContainer ref={navigationRef}>
      {/* handling navigation of stack, based on redux state that will re render when the state changes... */}
      {loggedInUser.isLoggedIn
        ? loggedInUser.type === 'mechanic'
          ? MechanicAppStack()
          : AppStack()
        : AuthStack()}
    </NavigationContainer>
  );
}

export default MainStackNavigator;
