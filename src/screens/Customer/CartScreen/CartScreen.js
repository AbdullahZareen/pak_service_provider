import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SizeClass} from '../../../utils/AppTheme';
import {Button, FastImage, SearchBar, Text} from '../../../components';
import {ColorConst, ImageConst} from '../../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {cartDelete} from '../../../redux/User/CartSlice';

export default function CartScreen({cart}) {
  const dispatch = useDispatch();
  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: SizeClass.getScreenWidthFromPercentage(24),
            height: SizeClass.getScreenWidthFromPercentage(20),
            borderRadius: 10,
          }}>
          <FastImage
            source={ImageConst.plumber}
            style={{
              width: SizeClass.getScreenWidthFromPercentage(24),
              height: SizeClass.getScreenWidthFromPercentage(20),
              borderRadius: 10,
            }}
          />
        </View>
        <View
          style={{
            marginStart: SizeClass.SMALL_MARGIN,
            justifyContent: 'space-around',
          }}>
          <Text style={{fontWeight: '600', fontSize: SizeClass.scaleFont(14)}}>
            {item?.name}
          </Text>
          <Text>{item.detail}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: SizeClass.scaleFont(11),
                textDecorationLine: 'line-through',
              }}>{`Rs ${item.orginal} `}</Text>
            <Text
              style={{
                fontSize: SizeClass.scaleFont(11),
              }}>{`Rs ${item.discount}`}</Text>
          </View>
          <Text
            style={{
              fontSize: SizeClass.scaleFont(11),
            }}>
            {item.rating}
          </Text>
        </View>
        {/* <Button
          title="Add"
          style={{
            width: SizeClass.getScreenWidthFromPercentage(18),
            height: SizeClass.getScreenHeightFromPercentage(4),
            borderRadius: 10,
            backgroundColor: 'grey',
            alignSelf: 'flex-end',
            marginLeft: SizeClass.LARGE_MARGIN * 2,
          }}
          // onPress={onAddButtonPress}
        /> */}
        <MaterialCommunityIcons
          name={'delete'}
          size={30}
          color={'red'}
          style={{
            position: 'absolute',
            right: SizeClass.DEFAULT_MARGIN,
            marginTop: SizeClass.SMALL_MARGIN,
          }}
          onPress={() => {
            dispatch(cartDelete(item));
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            alignSelf: 'flex-end',
            right: SizeClass.DEFAULT_MARGIN,
            bottom: SizeClass.DEFAULT_MARGIN,
          }}>
          <Button
            title="-"
            style={{
              width: SizeClass.getScreenWidthFromPercentage(7),
              height: SizeClass.getScreenHeightFromPercentage(3),
              borderRadius: 10,
              backgroundColor: 'grey',
            }}
            // onPress={onAddButtonPress}
          />
          <Text
            style={{
              marginStart: SizeClass.SMALL_MARGIN,
              marginEnd: SizeClass.SMALL_MARGIN,
            }}>
            4
          </Text>
          <Button
            title="+"
            style={{
              width: SizeClass.getScreenWidthFromPercentage(7),
              height: SizeClass.getScreenHeightFromPercentage(3),
              borderRadius: 10,
              backgroundColor: 'grey',
              alignSelf: 'flex-end',
            }}
            // onPress={onAddButtonPress}
          />
        </View>
      </View>
    );
  };
  const renderServicesDetail = () => {
    return (
      <View>
        <Text
          style={{
            fontSize: SizeClass.scaleFont(13),
            marginStart: SizeClass.LARGE_MARGIN,
            marginBottom: SizeClass.DEFAULT_MARGIN,
            fontWeight: '500',
          }}>
          List of Item
        </Text>
        {/* {renderItem(Detail[0])}
        {renderItem(Detail[0])} */}
        <FlatList
          data={cart}
          keyExtractor={(item, index) => {
            index.toString();
          }}
          renderItem={renderItem}
        />
      </View>
    );
  };
  return <View>{renderServicesDetail()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    alignSelf: 'center',
    width: SizeClass.getScreenWidthFromPercentage(90),
    height: SizeClass.getScreenHeightFromPercentage(13),
    borderWidth: 1,
    borderRadius: SizeClass.DEFAULT_MARGIN,
    margin: SizeClass.SMALL_MARGIN,
    padding: SizeClass.DEFAULT_MARGIN,
    flexDirection: 'row',
  },
});
