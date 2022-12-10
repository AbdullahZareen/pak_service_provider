import React from 'react';
import {useSelector} from 'react-redux';
import HomeScreen from './HomeScreen';
import moment from 'moment';

export default function HomeScreenIndex() {
  const user = useSelector(state => state.user);
  // console.log('++++++++++++++++', user);
  return <HomeScreen />;
}
