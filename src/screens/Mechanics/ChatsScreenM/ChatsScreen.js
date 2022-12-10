import {
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SizeClass} from '../../../utils/AppTheme';
import {ColorConst, ImageConst, ScreenConst} from '../../../constants';
import LottieView from 'lottie-react-native';
import {Avatar} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {getTime} from '../../../utils/Utility';
export default function ChatsScreen({chat}) {
  const navigation = useNavigation();

  const renderEmptyOrderAnimation = () => {
    return (
      <>
        <View
          style={{
            height: SizeClass.SCREEN_HEIGHT / 1.25,
            width: SizeClass.SCREEN_WIDTH,
          }}>
          <View style={[styles.loaderStyle]}>
            <LottieView source={ImageConst.emptyOrder} autoPlay={true} loop />
            <Text
              style={{
                fontSize: SizeClass.scaleFont(30),
                fontWeight: '800',
                color: ColorConst.button,
                position: 'absolute',
                bottom: SizeClass.getScreenWidthFromPercentage(40),
              }}>
              No Chat Yet
            </Text>
          </View>
        </View>
      </>
    );
  };
  const renderAllChats = () => {
    return (
      <>
        <View>
          <FlatList
            data={chat}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderChatItem}
            ListEmptyComponent={renderEmptyOrderAnimation}
          />
        </View>
      </>
    );
  };
  const renderChatItem = ({item, index}) => {
    let lastMessage, time;
    if (item?.messages?.length >= 0) {
      const len = item?.messages?.length;
      lastMessage = item?.messages[len - 1]?.text;
      time = item?.messages[len - 1]?.timeStamp;
    }
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(ScreenConst.CHAT_DETAIL_SCREEN, {
              chat: chat[index],
            });
          }}>
          <View style={styles.card}>
            <Avatar
              name={item?.CustomerInfo[0]?.name}
              style={styles.avatar}
              textStyle={{fontSize: SizeClass.scaleFont(20), fontWeight: '700'}}
            />
            <View
              style={{
                // justifyContent: 'space-around',
                padding: SizeClass.SMALL_MARGIN,
                marginLeft: SizeClass.DEFAULT_MARGIN,
              }}>
              <Text
                style={{fontSize: SizeClass.scaleFont(17), fontWeight: '600'}}>
                {item?.CustomerInfo[0]?.name.charAt(0).toUpperCase() +
                  item?.CustomerInfo[0]?.name.slice(1)}
              </Text>
              <Text
                style={{width: SizeClass.getScreenWidthFromPercentage(50)}}
                numberOfLines={1}>
                {lastMessage ? lastMessage : 'No Message'}
              </Text>
            </View>
            <MaterialCommunityIcons
              name={'chevron-right-circle'}
              size={24}
              style={{
                color: ColorConst.button,
                position: 'absolute',
                bottom: SizeClass.SMALL_MARGIN,
                right: SizeClass.DEFAULT_MARGIN,
              }}
            />
            <Text style={styles.time}>{time ? getTime(time) : ''}</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };
  return <View style={styles.container}>{renderAllChats()}</View>;
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: ColorConst.white},
  loaderStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: SizeClass.SCREEN_WIDTH,
    padding: SizeClass.DEFAULT_MARGIN,

    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: ColorConst.gray,
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 12,
    width: SizeClass.getScreenWidthFromPercentage(90),
    height: SizeClass.getScreenHeightFromPercentage(10),
    borderRadius: SizeClass.DEFAULT_MARGIN,
    alignSelf: 'center',
    margin: SizeClass.DEFAULT_MARGIN / 2,
  },
  avatar: {
    width: SizeClass.getScreenHeightFromPercentage(7),
    height: SizeClass.getScreenHeightFromPercentage(7),
  },
  time: {
    position: 'absolute',
    alignSelf: 'flex-start',
    right: SizeClass.DEFAULT_MARGIN,
    marginTop: SizeClass.LARGE_MARGIN * 1.2,
  },
});
