import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ServicesDetailScreen from './ServicesDetailScreen';
import {useDispatch, useSelector} from 'react-redux';

import {
  getMechanicById,
  getServicesByCity,
} from '../../../services/APIs/CustomerAPI';
import {getAverageRatingById} from '../../../services/APIs/MechanicAPI';
import {Loader} from '../../../components';
import {getSockets, socket} from '../../../sockets/socketConstant';
import {ScreenConst, StringConst} from '../../../constants';
import {useNavigation} from '@react-navigation/native';

export default function ServicesDetailScreenIndex() {
  const [services, setServices] = useState(null);
  const [Mechanic, setMechanic] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [data, setData] = useState(null);
  const navigation = useNavigation();
  const {city, id} = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    getServicesByCityAPI(city);
  }, []);
  /////for the socket io
  useEffect(() => {
    getSockets();
  }, []);
  const onPressChatButton = mechanic_id => {
    socket.emit(StringConst.createChat, {mechanic_id, customer_id: id});
  };
  useEffect(() => {
    socket.on('response' + id, chat => {
      console.log('chat response on created', chat);
      // if (chat[0] === 'chat saved') {
      // navigation.navigate(ScreenConst.CHAT_DETAIL_SCREEN, {chat: chat[1]});
      // } else if (chat[0] === 'chat already exist') {
      navigation.navigate(ScreenConst.ORDER_STACK);
      // }
    });
  }, []);

  const getServicesByCityAPI = city => {
    getServicesByCity(city)
      .then(res => {
        console.log('servicers by city', res?.data);
        setData(res?.data?.data);
        setServices(res?.data.data[0].servies);
        getMechanicByIdAPI(res?.data?.data[0]?.mechanic_id);
        // getAverageRatingByIdAPI(res?.data?.data[0]?.mechanic_id);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };
  const getMechanicByIdAPI = id => {
    getMechanicById(id)
      .then(res => {
        console.log('mechanics', res?.data);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };
  console.log(data);
  const getAverageRatingByIdAPI = id => {
    getAverageRatingById(id)
      .then(res => {
        console.log('Rating api get', res?.data?.avgRating);
        setRating(res?.data?.avgRating);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };

  if (isLoading === true) {
    return <Loader />;
  }

  return (
    <ServicesDetailScreen
      services={services}
      data={data}
      onPressChatButton={onPressChatButton}
    />
  );
}

const styles = StyleSheet.create({});
