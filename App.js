import {StyleSheet, Text, View, LogBox} from 'react-native';
import React, {useEffect} from 'react';
import MainStackNavigator from './src/navigations/MainStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/redux/store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider, useSelector} from 'react-redux';
import AuthStack from './src/navigations/AuthStack';
import AppStack from './src/navigations/AppStack';
import {enableLatestRenderer} from 'react-native-maps';

export default function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  let presistor = persistStore(store);
  // useEffect(() => {
  //   enableLatestRenderer();
  // }, []);

  // const user = useSelector(state => state.user);
  return (
    <Provider store={store}>
      <PersistGate persistor={presistor}>
        <MainStackNavigator></MainStackNavigator>
      </PersistGate>
    </Provider>
    // <View>
    //   <Text>Hello</Text>
    // </View>
  );
}

const styles = StyleSheet.create({});
