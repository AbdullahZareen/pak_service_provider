import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  Dimensions,
  Platform,
  PixelRatio,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {ColorConst} from '../constants';
export const SizeClass = (function Size() {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;
  const WINDOW_HEIGHT = Dimensions.get('window').height;
  const statusBarHeight = StatusBar.currentHeight || 24;
  const NAVBAR_HEIGHT =
    Platform.OS === 'android' ? WINDOW_HEIGHT * 0.14 : WINDOW_HEIGHT * 0.14;
  const DEFAULT_MARGIN = SCREEN_WIDTH * 0.04;
  const SMALL_MARGIN = SCREEN_WIDTH * 0.02;
  const LARGE_MARGIN = SCREEN_WIDTH * 0.06;
  const getScreenWidthFromPercentage = percentageValue => {
    return (percentageValue / 100) * SCREEN_WIDTH;
  };
  const getScreenHeightFromPercentage = percentageValue => {
    return (percentageValue / 100) * SCREEN_HEIGHT;
  };
  const scaleFont = size => RFValue(size);
  return {
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    WINDOW_HEIGHT,
    NAVBAR_HEIGHT,
    DEFAULT_MARGIN,
    SMALL_MARGIN,
    LARGE_MARGIN,
    getScreenHeightFromPercentage,
    getScreenWidthFromPercentage,
    scaleFont,
    statusBarHeight,
  };
})();
