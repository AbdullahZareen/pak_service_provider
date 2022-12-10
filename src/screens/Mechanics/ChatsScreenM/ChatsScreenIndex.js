import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ChatsScreen from './ChatsScreen';
import {getSockets, socket} from '../../../sockets/socketConstant';
import {StringConst} from '../../../constants';
import {useSelector} from 'react-redux';
export default function ChatsScreenIndex() {
  const {id} = useSelector(state => state.user);
  const [mechanicChat, setMechanicChat] = useState([]);
  console.log('chat  exist', mechanicChat);
  useEffect(() => {
    getSockets();
    getMechanicChatListener(id);
  }, []);
  useEffect(() => {
    socket.emit(StringConst.MechanicId, id);
  }, []);
  useEffect(() => {
    socket.on('mechanic' + id, chat => {
      console.log('chat++++++++', chat[1][0]);
      setMechanicChat([...mechanicChat, chat[1][0]]);
    });
  }, [mechanicChat]);

  const getMechanicChatListener = () => {
    socket.on(StringConst.getMechanicChat, chat => {
      setMechanicChat(chat.response);
    });
  };
  console.log(mechanicChat);
  return <ChatsScreen chat={mechanicChat} />;
}
