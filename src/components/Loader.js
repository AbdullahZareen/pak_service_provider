import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {ColorConst, ImageConst} from '../constants';
import {SizeClass} from '../utils/AppTheme';

export default function Loader(props) {
  const {isLoading = true, style} = props;
  return (
    <View style={[styles.loaderStyle, style]}>
      <LottieView
        source={ImageConst.dotsLoading}
        autoPlay={true}
        loop
        style={styles.loader}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  loaderStyle: {
    backgroundColor: ColorConst.white,
    alignItems: 'center',
    justifyContent: 'center',
    width: SizeClass.SCREEN_WIDTH,
    height: SizeClass.SCREEN_HEIGHT,
  },
  loader: {
    width: SizeClass.getScreenWidthFromPercentage(70),
    height: SizeClass.getScreenWidthFromPercentage(70),
  },
});
