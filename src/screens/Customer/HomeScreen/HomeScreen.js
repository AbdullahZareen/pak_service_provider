import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SizeClass} from '../../../utils/AppTheme';
import {Button, FastImage, Maps, SearchBar} from '../../../components';
import {
  ColorConst,
  ImageConst,
  ScreenConst,
  StringConst,
} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
export default function HomeScreen() {
  const navigation = useNavigation();
  const Services = [
    {
      id: 0,
      name: 'AC Service',
      image: ImageConst.AC,
    },
    {
      id: 1,
      name: 'Cleaning',
      image: ImageConst.clean,
    },
    {
      id: 2,
      name: 'Electrician',
      image: ImageConst.electrician,
    },
    {
      id: 3,
      name: 'Geyser',
      image: ImageConst.geyser,
    },
    {
      id: 4,
      name: 'Home Appliances',
      image: ImageConst.home,
    },
    {
      id: 5,
      name: 'Plumber',
      image: ImageConst.plumber,
    },
  ];
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ScreenConst.SERVICES_DETAIL, {
            Service_name:
              item.name === 'AC Service'
                ? 'AC Services'
                : item.name + ' Services',
          });
          // navigation.navigate(ScreenConst.RATING_SCREEN);
        }}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.card}>
            <FastImage
              source={item.image}
              style={{
                width: SizeClass.getScreenWidthFromPercentage(18),
                height: SizeClass.getScreenWidthFromPercentage(18),
              }}
            />
          </View>
          <Text
            style={{
              width: SizeClass.getScreenWidthFromPercentage(20),
              textAlign: 'center',
            }}>
            {item?.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderAllServices = () => {
    return (
      <View>
        <Button
          title="PickUp location"
          onPress={() => navigation.navigate(ScreenConst.MAPS_SCREEN)}
          style={{
            width: SizeClass.getScreenWidthFromPercentage(30),
            height: SizeClass.getScreenHeightFromPercentage(4),
            borderRadius: 10,
            backgroundColor: 'grey',
            margin: SizeClass.DEFAULT_MARGIN,
          }}
        />
        <SearchBar />
        <Text style={styles.serviceText}>ALL Services</Text>

        <FlatList
          data={Services}
          numColumns={3}
          keyExtractor={item => item?.id}
          renderItem={renderItem}
          style={{
            marginTop: -SizeClass.LARGE_MARGIN * 1.5,
            paddingLeft: SizeClass.LARGE_MARGIN * 2,
            marginLeft: -SizeClass.SMALL_MARGIN,
          }}
        />
      </View>
    );
  };
  return <View style={styles.container}>{renderAllServices()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  serviceText: {
    fontSize: SizeClass.scaleFont(14),
    fontWeight: '600',
    margin: SizeClass.LARGE_MARGIN * 2,
  },
  card: {
    width: SizeClass.getScreenWidthFromPercentage(20),
    height: SizeClass.getScreenWidthFromPercentage(20),
    backgroundColor: ColorConst.white,
    borderRadius: 10,
    shadowColor: ColorConst.grey,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 12,
    shadowOffset: {
      width: -2,
      height: 1,
    },
    margin: SizeClass.SMALL_MARGIN * 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
