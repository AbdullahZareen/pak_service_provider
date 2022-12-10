import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Text} from '../components';
import {SizeClass} from '../utils/AppTheme';
// import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {ColorConst, ImageConst, ScreenConst} from '../constants';
import FastImage from 'react-native-fast-image';

export default function SplashScreen() {
  const navigation = useNavigation();
  const {isLoggedIn} = useSelector(state => state.user);
  useEffect(() => {
    navigateToGroupChat();
  }, [isLoggedIn]);
  const navigateToGroupChat = () => {
    setTimeout(() => {
      if (!isLoggedIn) {
        navigation.navigate(ScreenConst.SIGNIN_SCREEN);
      } else if (isLoggedIn) {
        navigation.navigate(ScreenConst.BOTTOM_TAB_FLOW);
      }
    }, 2000);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
      }}>
      {/* <LinearGradient
        // start={{x: 0, y: 0}}
        // end={{x: 1, y: 1}}
        colors={['#A409F1', '#A409F1', '#E1306C', '#FD1D1D']}
        style={styles.linearGradient}> */}
      {/* <Text style={{fontSize: SizeClass.scaleFont(20)}}>CHAT APP</Text> */}
      <FastImage
        source={ImageConst.splash}
        style={{
          width: SizeClass.getScreenWidthFromPercentage(72),
          height: SizeClass.getScreenHeightFromPercentage(50),
        }}
      />
      {/* </LinearGradient> */}
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    height: SizeClass.SCREEN_HEIGHT,
    width: SizeClass.SCREEN_WIDTH,
    flex: 1,

    justifyContent: 'center',
  },
});
