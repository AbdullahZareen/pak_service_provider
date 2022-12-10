import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import ChatDetailScreen from './ChatDetailScreen';
import {socket, getSockets} from '../../../sockets/socketConstant';
import {useSelector} from 'react-redux';
import {StringConst} from '../../../constants';

export default function ChatDetailScreenIndex({route}) {
  const {chat} = route.params;
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);
  console.log(data);
  const {id} = useSelector(state => state.user);
  useEffect(() => {
    let isMounted = true;
    getSockets();

    socket.emit(StringConst.ChatId1, chat?._id);
    socket.on(StringConst.getChatDetail, chat => {
      if (isMounted) {
        setData(chat);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);
  useEffect(() => {
    socket.on(StringConst.getChatDetail + chat?._id, message => {
      // console.log('emitted chat on ....', message);
      // console.log('idmech', StringConst.getChatDetail + chat?._id);
      setData([...data, message]);
    });
  }, [data]);
  function onPressButton(params) {
    if (message === '') {
      return;
    }
    socket.emit(StringConst.ChatId, {
      id: chat?._id,
      message: message,
      sender: 'mechanic',
    });
    setMessage('');
  }

  return (
    <ChatDetailScreen
      onPressButton={onPressButton}
      setMessage={setMessage}
      message={message}
      data={data}
      // onSend={onSend}
    />
  );
}
