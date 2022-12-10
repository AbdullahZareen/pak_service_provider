import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Maps, Loader} from '../../../components';
import {SizeClass} from '../../../utils/AppTheme';

export default function MapsLocationScreen({
  latitude,
  longitude,
  setCurrentLongitude,
  setCurrentLatitude,
  isLoading,
}) {
  const renderLoader = () => {
    return (
      <View>
        <ActivityIndicator size={'large'} />
      </View>
    );
  };
  return (
    <View style={{height: SizeClass.getScreenHeightFromPercentage(80)}}>
      {isLoading ? (
        renderLoader()
      ) : (
        <>
          <Maps
            latitude={latitude}
            longitude={longitude}
            setCurrentLatitude={setCurrentLatitude}
            setCurrentLongitude={setCurrentLongitude}
          />
          <Text>{`lattitue:${latitude} longitude: ${longitude}`}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
