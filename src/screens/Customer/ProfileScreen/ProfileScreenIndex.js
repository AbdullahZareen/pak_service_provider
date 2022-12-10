import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileScreen from './ProfileScreen';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {userLoggedOut} from '../../../redux/User/UserSlice';

export default function ProfileScreenIndex() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onPressLogout = () => {
    dispatch(userLoggedOut());
  };
  return <ProfileScreen onPressLogout={onPressLogout} />;
}

const styles = StyleSheet.create({});
