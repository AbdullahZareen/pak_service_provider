import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from '.';
import {SizeClass} from '../utils/AppTheme';
import {ColorConst} from '../constants';
export default function Button(props) {
  const {title, isLoading, style, textStyle, onPress} = props;
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {!isLoading ? (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      ) : (
        <ActivityIndicator />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: SizeClass.getScreenHeightFromPercentage(6),
    borderRadius: SizeClass.LARGE_MARGIN,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: ColorConst.white,
    width: SizeClass.getScreenWidthFromPercentage(40),
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
    alignSelf: 'center',
    color: ColorConst.black,
    fontWeight: '600',
  },
});
