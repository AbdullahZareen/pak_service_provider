import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SizeClass} from '../../../utils/AppTheme';
import {Button} from '../../../components';
import {ColorConst, ScreenConst} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {getTruncatedString} from '../../../utils/Utility';
export default function HomeScreenM({rating, services}) {
  const navigation = useNavigation();

  const renderHomeServices = () => {
    const item = [
      {
        serviceName: 'Ac Services',
        category: 'Ac Installation',
        price: '1000',
        discount: '200',
        unit: 'Fixed Price',
      },
      {
        serviceName: 'Ac Services',
        category: 'Ac Repair',
        price: '1500',
        discount: '300',
        unit: 'Visit',
      },
      {
        serviceName: 'Ac Services',
        category: 'Ac Dismounting',
        price: '300',
        discount: '50',
        unit: 'Fixed Price',
      },
    ];
    return (
      <View style={{margin: SizeClass.DEFAULT_MARGIN}}>
        <View
          style={{flexDirection: 'row', marginStart: SizeClass.DEFAULT_MARGIN}}>
          <Button
            style={{
              width: SizeClass.getScreenWidthFromPercentage(30),
              height: SizeClass.getScreenHeightFromPercentage(15),
              backgroundColor: ColorConst.button,
              borderRadius: 10,
            }}
            textStyle={{color: ColorConst.white}}
            title="Add your Services"
            onPress={() => {
              navigation.navigate(ScreenConst.ADD_SERVICES);
            }}
          />
          {renderRating()}
        </View>
        <Text
          style={{
            fontSize: SizeClass.scaleFont(16),
            fontWeight: '600',
            marginTop: SizeClass.DEFAULT_MARGIN,
            padding: SizeClass.SMALL_MARGIN,
          }}>
          Yours Services
        </Text>
        <View style={{flexDirection: 'row'}}>
          <FlatList
            numColumns={1}
            data={services}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            style={{marginBottom: SizeClass.LARGE_MARGIN * 11}}
          />
        </View>
      </View>
    );
  };
  const renderRating = () => {
    return (
      <View
        style={{
          width: SizeClass.getScreenWidthFromPercentage(30),
          height: SizeClass.getScreenHeightFromPercentage(15),
          backgroundColor: ColorConst.white,
          borderRadius: 10,
          shadowColor: ColorConst.black,
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 24,
          shadowOffset: {
            width: -2,
            height: 1,
          },
          marginStart: SizeClass.DEFAULT_MARGIN,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <MaterialCommunityIcons
          name={'star'}
          size={30}
          color={ColorConst.button}
        />
        <Text
          style={{
            color: ColorConst.button,
            fontSize: SizeClass.scaleFont(20),
            fontWeight: '800',
          }}>{`${parseFloat(rating).toFixed(1)}/5`}</Text>
        <Text>Avg Rating</Text>
      </View>
    );
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <Text style={{fontSize: SizeClass.scaleFont(15), fontWeight: '600'}}>
          <Text
            style={{
              fontSize: SizeClass.scaleFont(16),
            }}>
            Service Name:
          </Text>
          {getTruncatedString(item?.serviceName, 18)}
        </Text>
        <Text style={{fontSize: SizeClass.scaleFont(16), fontWeight: '600'}}>
          <Text
            style={{
              fontSize: SizeClass.scaleFont(16),
            }}>
            Category:
          </Text>
          {item?.category}
        </Text>
        <Text style={{fontSize: SizeClass.scaleFont(16), fontWeight: '600'}}>
          <Text
            style={{
              fontSize: SizeClass.scaleFont(16),
            }}>
            Charges:
          </Text>
          {item?.price - item?.discount}
        </Text>

        <Text style={{fontSize: SizeClass.scaleFont(16), fontWeight: '600'}}>
          <Text
            style={{
              fontSize: SizeClass.scaleFont(16),
            }}>
            Unit:
          </Text>
          {item?.unit}
        </Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {renderHomeServices()}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: SizeClass.getScreenWidthFromPercentage(80),
    height: SizeClass.getScreenHeightFromPercentage(15),
    borderWidth: 1,
    margin: SizeClass.DEFAULT_MARGIN,
    backgroundColor: ColorConst.textbackGround,
    borderRadius: SizeClass.DEFAULT_MARGIN,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: SizeClass.DEFAULT_MARGIN,
  },
});
