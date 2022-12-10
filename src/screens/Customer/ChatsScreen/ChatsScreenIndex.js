import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ChatsScreen from './ChatsScreen';
import {getSockets, socket} from '../../../sockets/socketConstant';
import {StringConst} from '../../../constants';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

export default function ChatsScreenIndex() {
  const {id} = useSelector(state => state.user);
  const [customerChats, setCustomerChats] = useState([]);
  const [lastMessage, setLastMessage] = useState(null);
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getSockets();
      getCustomerChatListener(id);
    });
    return unsubscribe;
  }, []);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      socket.emit(StringConst.CustomerId, id);
    });
    return unsubscribe;
  }, []);

  const getCustomerChatListener = () => {
    socket.on(StringConst.getCustomerChats, chat => {
      setCustomerChats(chat.response);
    });
  };

  return <ChatsScreen chat={customerChats} lastMessage={lastMessage} />;
}
