import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {SizeClass} from '../utils/AppTheme';
export default function Maps({latitude, longitude}) {
  console.log('on the maps ------', latitude, longitude);
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        // showsMyLocationButton={true}
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}>
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          // title={'title'}
          // description={'description'}
          onPress={e => e.nativeEvent}
          draggable={true}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: SizeClass.SCREEN_WIDTH,
    height: SizeClass.getScreenHeightFromPercentage(80),
  },
});
