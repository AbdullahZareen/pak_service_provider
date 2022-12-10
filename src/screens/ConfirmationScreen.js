import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {SizeClass} from '../utils/AppTheme';
import {useNavigation} from '@react-navigation/native';
import {ImageConst} from '../constants';

export default function ConfirmationScreen(props) {
  const {screenName, title} = props.route.params;
  const navigation = useNavigation();
  console.log(screenName, title);
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        // width: SizeClass.SCREEN_WIDTH,
        // height: SizeClass.SCREEN_HEIGHT,
        flex: 1,
      }}>
      <LottieView
        source={ImageConst.confimation}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigation.navigate(screenName)}
      />
      {/* <Text>{title}</Text> */}
    </View>
  );
}
