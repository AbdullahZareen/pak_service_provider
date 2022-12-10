import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {SizeClass} from '../utils/AppTheme';
import {ColorConst} from '../constants';

export default function TextInput1(props) {
  const {
    onChange,
    defaultValue,
    placeHolder,
    style,
    secureTextEntry,
    multiline,
    numberOfLines,
    onPress,
    ref,
  } = props;
  const focussss = () => {
    setTimeout(() => {
      onPress;
    }, 2000);
  };
  return (
    <TextInput
      onChangeText={onChange}
      defaultValue={defaultValue}
      placeholder={placeHolder || 'MY TEXT INPUT'}
      style={[styles.input, style]}
      secureTextEntry={secureTextEntry}
      multiline={multiline || false}
      numberOfLines={numberOfLines || 1}
      onFocus={onPress}
      ref={ref}
      //  onContentSizeChange={onPress}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: SizeClass.SMALL_MARGIN,
    width: SizeClass.getScreenWidthFromPercentage(80),
    backgroundColor: '#E8F9FD',

    padding: SizeClass.SMALL_MARGIN,
    // borderBottomColor: 'white',
    color: ColorConst.black,
    fontSize: SizeClass.scaleFont(14),
    fontWeight: '500',
  },
});
