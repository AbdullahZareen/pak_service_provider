import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SizeClass} from '../../../utils/AppTheme';
import {Button, FastImage, SearchBar, Text} from '../../../components';
import {
  ColorConst,
  ImageConst,
  ScreenConst,
  StringConst,
} from '../../../constants';
import {useNavigation} from '@react-navigation/native';

export default function ServicesDetailScreen({data, onPressChatButton}) {
  const navigation = useNavigation();
  const renderItem = ({item, index}) => {
    console.log(`index no +++++++====${index}`, item);
    return (
      <>
        {item?.servies.map((element, i) => {
          return (
            <View style={styles.card} key={i}>
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
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: SizeClass.scaleFont(14),
                  }}>
                  {element?.category}
                </Text>
                <Text>{element?.unit}</Text>
                <View style={{flexDirection: 'row'}}>
                  {element.discount != 0 && (
                    <Text
                      style={{
                        fontSize: SizeClass.scaleFont(11),
                        textDecorationLine: 'line-through',
                      }}>{`Rs ${element.price} `}</Text>
                  )}

                  <Text
                    style={{
                      fontSize: SizeClass.scaleFont(11),
                    }}>{`Rs ${element.price - element.discount}`}</Text>
                </View>
                <Text
                  style={{
                    fontSize: SizeClass.scaleFont(11),
                  }}>
                  {item?.rating}
                </Text>
              </View>
              <Button
                title="Rating"
                style={{
                  width: SizeClass.getScreenWidthFromPercentage(18),
                  height: SizeClass.getScreenHeightFromPercentage(4),
                  borderRadius: 10,
                  backgroundColor: ColorConst.button,
                  alignSelf: 'flex-end',
                  right: SizeClass.DEFAULT_MARGIN,
                  top: SizeClass.SMALL_MARGIN,
                  position: 'absolute',
                }}
                textStyle={{color: ColorConst.white}}
                onPress={() =>
                  navigation.navigate(ScreenConst.RATING_SCREEN, {
                    mechanic_id: item?.mechanic_id,
                  })
                }
              />
              <Button
                title="Chat"
                style={{
                  width: SizeClass.getScreenWidthFromPercentage(18),
                  height: SizeClass.getScreenHeightFromPercentage(4),
                  borderRadius: 10,
                  backgroundColor: ColorConst.button,
                  alignSelf: 'flex-end',
                  right: SizeClass.DEFAULT_MARGIN,
                  bottom: SizeClass.SMALL_MARGIN,
                  position: 'absolute',
                }}
                textStyle={{color: ColorConst.white}}
                onPress={() => onPressChatButton(item?.mechanic_id)}
              />
            </View>
          );
        })}
      </>
    );
  };
  // const renderCartButton = () => {
  //   return (
  //     <>
  //       <View
  //         style={{
  //           width: SizeClass.getScreenWidthFromPercentage(90),
  //           height: SizeClass.getScreenHeightFromPercentage(6),
  //           backgroundColor: ColorConst.button,
  //           alignSelf: 'center',
  //           borderRadius: SizeClass.DEFAULT_MARGIN,
  //           padding: SizeClass.DEFAULT_MARGIN,
  //           position: 'absolute',
  //           top: SizeClass.getScreenHeightFromPercentage(65),
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //         }}>
  //         <Text>{cart.length}</Text>
  //         <Text> Rs . 5000</Text>
  //         <Button
  //           title={'Continue  --->'}
  //           style={{
  //             backgroundColor: 'transparent ',
  //             borderWidth: 0,
  //             position: 'absolute',
  //             right: SizeClass.SMALL_MARGIN,
  //           }}
  //           onPress={() => navigation.navigate(ScreenConst.CART_SCREEN)}
  //         />
  //       </View>
  //     </>
  //   );
  // };
  const renderServicesDetail = () => {
    return (
      <View>
        <SearchBar />
        <Text
          style={{
            fontSize: SizeClass.scaleFont(13),
            marginStart: SizeClass.LARGE_MARGIN,
            marginBottom: SizeClass.DEFAULT_MARGIN,
            fontWeight: '500',
          }}>
          Pick from Below
        </Text>
        {/* {renderItem(Detail[0])}
        {renderItem(Detail[0])} */}

        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          nestedScrollEnabled={true}
          style={{marginBottom: SizeClass.LARGE_MARGIN * 11}}
        />
        {/* {data.map((item, index) => {
          return;
          <View>{renderItem(item, index)}</View>;
        })} */}
      </View>
    );
  };
  return (
    <View>
      {/* {cart.length > 0 && renderCartButton()} */}
      {renderServicesDetail()}
    </View>
  );
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
