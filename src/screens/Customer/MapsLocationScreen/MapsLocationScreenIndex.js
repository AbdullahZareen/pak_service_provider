import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapsLocationScreen from './MapsLocationScreen';
import Geolocation from '@react-native-community/geolocation';
export default function MapsLocationScreenIndex() {
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUserCurrentLocation();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  const getUserCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      info => {
        const {coords} = info;

        setCurrentLatitude(coords?.latitude);
        setCurrentLongitude(coords?.longitude);
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 2000,
      },
    );
  };

  console.log('my location', currentLatitude, currentLongitude, locationStatus);
  return (
    <MapsLocationScreen
      latitude={currentLatitude}
      longitude={currentLongitude}
      isLoading={isLoading}
      setCurrentLatitude={setCurrentLatitude}
      setCurrentLongitude={setCurrentLongitude}
    />
  );
}

const styles = StyleSheet.create({});
