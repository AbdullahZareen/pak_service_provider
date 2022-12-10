import io from 'socket.io-client';
import {StringConst} from '../constants';

export const SOCKET_URL = `http://${StringConst.IP_ADDRESS}:8000`;
export const socket = io(SOCKET_URL);

export const getSockets = () => {
  // console.log(socket.id);
  try {
    socket.on('connect', () => {
      console.log('connected++++++++++++======================');
    });
    socket.on('disconnect', () => {
      console.log('disconnected');
    });
    socket.on('error', () => {
      console.log('error');
    });
  } catch (error) {
    console.log('error catched on socket', error);
  }
};
