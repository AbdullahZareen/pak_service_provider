import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeScreenM from './HomeScreenM';
import {useSelector} from 'react-redux';
import {
  getAverageRatingById,
  getServicesById,
} from '../../../services/APIs/MechanicAPI';
import {useNavigation} from '@react-navigation/native';
import {Loader} from '../../../components';
export default function HomeScreenMIndex() {
  const [services, setServices] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const {id} = useSelector(state => state.user);
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getAllServicesApiById(id);
      // getAverageRatingByIdAPI(id);
    });
    return unsubscribe;
  }, []);
  const getAllServicesApiById = id => {
    setIsLoading(true);
    getServicesById(id)
      .then(res => {
        console.log('service api get', res?.data?.data?.service);
        setServices(res?.data?.data?.service);
        setRating(res?.data?.data?.avgRating);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };

  // const getAverageRatingByIdAPI = id => {
  //   getAverageRatingById(id)
  //     .then(res => {
  //       console.log('Rating api get', res?.data?.avgRating);
  //       setRating(res?.data?.avgRating);
  //       setIsLoading(false);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       setIsLoading(false);
  //     });
  // };
  if (isLoading) {
    return <Loader />;
  }
  return <HomeScreenM rating={rating} services={services} />;
}
