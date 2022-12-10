import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {SizeClass} from '../utils/AppTheme';
import {Text} from './';

import RNPickerSelect from 'react-native-picker-select';
import FastImage from 'react-native-fast-image';
import {ImageConst, ColorConst} from '../constants';

const DropDownPicker = props => {
  const {
    label,
    items,
    placeholder,
    onChange,
    value,
    errorStyle,
    pickerRef,
    setInputRef,
  } = props;
  const openPicker = () => {
    if (Platform.OS === 'android') {
      pickerRef?.current?.focus();
    } else {
      pickerRef?.current?.togglePicker(true);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.container}>
        <View style={[styles.sectionStyle, errorStyle]}>
          <Text
            style={styles.label}
            //fontFamily={FONT_FAMILY.REGULAR}
            // font={APP_FONTS.UBUNTU}
          >
            {label}
          </Text>
          <View
            style={{
              flex: 1,
              color: ColorConst.black,
              position: 'absolute',
              left: '28%',
              flexDirection: 'row',
            }}>
            <RNPickerSelect
              style={pickerSelectStyles}
              onValueChange={onChange}
              items={items}
              value={value}
              fixAndroidTouchableBug={true}
              useNativeAndroidPickerStyle={false}
              placeholder={{label: placeholder, value: 0}}
              Icon={() => (
                <FastImage
                  style={styles.icon}
                  source={ImageConst.downIcon}
                  resizeMode="contain"
                />
              )}
              ref={Platform.OS === 'ios' ? pickerRef : null}
              pickerProps={{
                ref: Platform.OS === 'android' ? pickerRef : null,
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: SizeClass.SMALL_MARGIN,
  },
  sectionStyle: {
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorConst.bgColor,
    borderColor: '#F6F6F6',
    height: SizeClass.getScreenHeightFromPercentage(6),
    width: SizeClass.getScreenWidthFromPercentage(80),
    borderRadius: SizeClass.getScreenWidthFromPercentage(3),
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 8,
  },

  label: {
    fontSize: SizeClass.scaleFont(11.5),
    color: ColorConst.black,
    marginStart: SizeClass.SCREEN_WIDTH * 0.04,
  },
  icon: {
    height: SizeClass.getScreenWidthFromPercentage(4),
    width: SizeClass.getScreenWidthFromPercentage(4),
    top:
      Platform.OS === 'android'
        ? SizeClass.getScreenWidthFromPercentage(5.5)
        : SizeClass.getScreenWidthFromPercentage(0.5),
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    // flexDirection: 'column',
    color: 'black',
    fontSize: SizeClass.scaleFont(13),
    alignItems: 'center',

    width: SizeClass.getScreenWidthFromPercentage(55),
  },
  inputAndroid: {
    color: ColorConst.black,
    fontSize: SizeClass.scaleFont(13),
    alignItems: 'center',

    width: SizeClass.getScreenWidthFromPercentage(55),
  },
  placeholder: {
    color: 'black',
    fontSize: SizeClass.scaleFont(12),
  },
});

export default DropDownPicker;
