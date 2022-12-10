import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import ChatDetailScreen from './ChatDetailScreen';
import {socket, getSockets} from '../../../sockets/socketConstant';
import {useSelector} from 'react-redux';
import {StringConst} from '../../../constants';
import {useNavigation} from '@react-navigation/native';

export default function ChatDetailScreenIndex({route}) {
  const {chat} = route?.params;
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);
  const {id} = useSelector(state => state.user);
  const navigation = useNavigation();
  ///////getting data when screen render
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getSockets();
      socket.emit(StringConst.ChatId1, chat?._id);
      socket.on(StringConst.getChatDetail, chat => {
        setData(chat);
      });
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    socket.on(StringConst.getChatDetail + chat?._id, message => {
      // console.log('emitted chat on customer....', message);
      // console.log('idcustomer', StringConst.getChatDetail + chat?._id);
      setData([...data, message]);
    });
  }, [data]);
  function onPressButton(params) {
    // socket.emit('send message', {message: message, sender: 'customer'});
    if (message === '') {
      return;
    }
    socket.emit(StringConst.ChatId, {
      id: chat?._id,
      message: message,
      sender: 'customer',
    });
    setMessage('');
  }

  return (
    <ChatDetailScreen
      // chatsHistory={chatsHistory}
      onPressButton={onPressButton}
      setMessage={setMessage}
      message={message}
      data={data}
    />
  );
}
